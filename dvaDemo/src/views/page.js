import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './page.scss';
import Footer from "../components/Footer/Footer"
import "antd-mobile/lib/button/style/index.css"
import Deloage from "../components/deloage/Deloage";
import City from "../components/City/city"
import DrivingLicense from "../components/DrivingLicense/drivingLicense"

class Page extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    constructor(props) {
        super(props);
        this.state = {
            driving:'换驾照',
            imglist:[{
                title:'身份证正面',
                img:require('../assets/加号.png'),
                id:0
            },{
                title:'身份证反面',
                img:require('../assets/加号.png'),
                id:1
            },{
                title:'驾驶证正页',
                img:require('../assets/加号.png'),
                id:2
            },{
                title:'驾驶证副页',
                img:require('../assets/加号.png'),
                id:3
            },{
                title:'白底半身照',
                img:require('../assets/加号.png'),
                id:4
            }]
        };
    }
    render() {
        return (
            <div className={styles.box}>
            <header>
              <span>
                <img src={require('../assets/向左1.png')} alt=""/>
              </span>
              <span>补换驾照</span>
              <span>•••</span>
            </header>
            <section>
              <div className={styles.progress}>
                <img src={require("../assets/1_02.png")} alt=""/>
              </div>
              <img src={require("../assets/bg.gif")}  alt=""/>
              <div className={styles.uploadPictures}>
                  <ul className={styles.ullist}>
                    {this.state.imglist.map(item=>
                        <li key={item.id} onClick={(e)=>this.props.upload(e)}>
                            <p>
                            <img src={item.img} alt=""/>
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
                        <City context={'当前驾照签发城市'} title={'请选择签发地'}></City>
                    </li>
                    <li className={styles.lineTwo}>
                    <span>当前驾照补发城市</span>
                        <City context={'当前驾照补发城市'}  title={'请选择补发地'}></City>
                    </li>
                    <li>
                        <span>服务费</span>
                        <span className={styles.money}>￥399</span>
                    </li>
                  </ol>
              </div>
              <div className={styles.line}></div>
              <div className={styles.youhui}>
                    <span>优惠</span>
                    <div>
                        <span className={styles.login}>登录后查看优惠券</span>
                        <img src={require('../assets/right.png')} alt=""/>
                    </div>
              </div>
                <div className={styles.questy}>
                        <a href="/">常见问题</a>
                </div>
                    {this.props.dialogs.flag?<Deloage></Deloage>:''}
                </section>
            <Footer></Footer>
        </div>
        );
    }
}
const mapStateToProps=state=>state
const mapDispatchToprops=dispatch=>({
    fetchUser:()=>{
        dispatch({
            type:'example/fetch'
        })
    },
    upload:(e)=>{
        dispatch({
            type:'dialogs/upload',
        })
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(Page);