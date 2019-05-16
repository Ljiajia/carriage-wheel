import React,{Component} from 'react';
import { connect } from 'dva';
import Footer from "@/components/Footer/Footer"
import "antd-mobile/lib/button/style/index.css"
import Deloage from "@/components/deloage/Deloage";
import City from "@/components/City/city"
import Veiled from "@/components/Veiled/index"
import styles from './page.scss';
import {isLogin} from "@/utils/index.js";
import DrivingLicense from "@/components/DrivingLicense/drivingLicense"
import {doLogins,share} from "@/services/example"
import BScroll from 'better-scroll'
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin:isLogin()
        };
    }
    doLogin(){//登录接口
        doLogins(res=>{
            window.location.reload()
        })
    }
    timeline(){//分享到朋友圈
        window['CHELUN_SHARE_DATA_WXTIMELINE']={
            imgurl:'https://avatars2.githubusercontent.com/u/23257329?v=4',//分享图标
            title:'标题',
            link:'https://ueditor.baidu.com/website/onlinedemo.html',
            type:'photo'
        }
        share('wxTimeline')
    }
    friens(){//分享给好友
        window['CHELUN_SHARE_DATA_WXMESSAGE']={
            imgurl:'https://avatars2.githubusercontent.com/u/23257329?v=4',//分享图标
            type:'photo'
        }
    }    
    componentDidMount(){//better-scroll
        new BScroll(this.refs.wrapper,{
            click:true,
            probeType:2
        })
    }
    render() {
        let imglist=this.props.example.order_type==='2'?this.props.example.imgnewlist:this.props.example.imglist
        return (
            <div className={styles.box}>
            <header>
              <span>
                <img src={require('../assets/向左1.png')} alt=""/>
              </span>
              <span>补换驾照</span>
              <span>•••</span>
            </header>
            <section ref='wrapper'>
                <div>
                    <div className={styles.progress}>
                    <img src={require("../assets/1_02.png")} alt=""/>
                    </div>
                    <img src={require("../assets/bg.gif")}  alt=""/>
                    {/* 上传身份证驾驶证数据 */}
                    <div className={this.props.example.order_type!=='2'?styles.uploadPictures:styles.uploadPictures22}>
                        <ul className={styles.ullist}>
                            {imglist.map((item,index)=>
                                <li key={item.id} onClick={(e)=>this.props.upload(item.img,item.title,index,imglist.length)}>
                                    <p>
                                    <img src={item.src?item.src:require('../assets/加号.png')} alt=""/>
                                    </p>
                                    <span>{item.title}</span>
                                </li>
                                )}
                        </ul>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.contentbox}>
                        <ol className={styles.ollist}>
                            <li>
                                <span>服务类型</span>
                                <DrivingLicense></DrivingLicense>
                            </li>
                            <li className={styles.lineOne}>
                            <span>当前驾照签发城市</span>
                                <City title={'请选择签发地'}></City>
                            </li>
                            <li className={styles.lineTwo}>
                            <span>当前驾照补发城市</span>
                                {/* 如果选择了签发城市，默认调用city组件，否则调用弹框 */}
                                <div onClick={()=>this.checkcity()}>
                                {this.props.example.caloffflag?<Veiled></Veiled>:<City title={'请选择补发地'} lists={this.props.example.cityNew?this.props.example.cityNew:[]}></City>
                                }
                                </div>
                            </li>
                            <li>
                                <span>服务费</span>
                                <span className={styles.money}>￥{this.props.example.moneys}</span>
                            </li>
                        </ol>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.youhui}>
                            <span>优惠</span>
                            <div>
                                <span onClick={()=>this.doLogin()} className={styles.login}>{this.state.isLogin?'无优惠可用':'登录后查看优惠券'}</span>
                                <img src={require('../assets/right.png')} alt=""/>
                            </div>
                    </div>
                        <div className={styles.questy}>
                            <a href="./quest.html">常见问题</a>
                            <span onClick={()=>this.timeline()}>分享到微信朋友圈</span>
                            <span onClick={()=>this.friens()}>分享给微信好友</span>

                        </div>
                    </div>
                </section>
            <Footer></Footer>
            {/* 上传照片的弹框 */}
            {this.props.example.flag?<Deloage></Deloage>:''}
        </div>
        );
    }
    checkcity=()=>{
        //判断选择了签发地
        if(this.props.example.city_id!==undefined &&this.props.example.province_id!==undefined){
            let obj={
                order_type:this.props.example.order_type?this.props.example.order_type:1,
                province_id:this.props.example.province_id,
                city_id:this.props.example.city_id
            }
            this.props.putlist(obj)
        }else{
            this.props.setstatus()
        }
    }
}
const mapStateToProps=state=>state
const mapDispatchToprops=dispatch=>({
    upload:(img,title,index,lengths)=>{//加载上传照片的弹框
        dispatch({
            type:'example/upload',
            img,
            title,
            index,
            lengths
        })
    },
    putlist:(params)=>{//传参获取补发城市的数据
        dispatch({
            type:'example/citylist',
            payload:{
                ...params
            }
        })
    },
    setstatus:()=>{//没有选择签发城市，让弹框显示
        dispatch({
            type:'example/showtype',
            value:true
        })
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(Page);