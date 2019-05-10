import React,{Component} from 'react';
import { connect } from 'dva';
// import { Steps, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import styles from './page.scss';
import Footer from "./Footer"
// const Step = Steps.Step;
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                {/* <WingBlank mode={20} className={styles.stepsExample}>
                <Steps direction="horizontal">
                  <Step title="订单提交"/>
                  <Step title="填写收货地址"/>
                  <Step title="正在办理"/>
                  <Step title="办理完成"/>
                </Steps>
                </WingBlank> */}
              </div>
              <img src={require("../assets/bg.gif")}  alt=""/>
              <div className={styles.uploadPictures}>
                  <ul className={styles.ullist}>
                    {this.state.imglist.map(item=>
                        <li key={item.id}>
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
                        <div>
                        <span>换驾照</span>
                        <img src={require('../assets/right.png')} alt=""/>
                        </div>
                    </li>
                    <li>
                        <span>当前驾照签发城市</span>
                        <span className={styles.sign}>请选择签发地</span>
                    </li>
                    <li>
                        <span>可换补的签发城市</span>
                        <span className={styles.reissue}>请选择补发地</span>
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
            </section>
            <Footer></Footer>
        </div>
        );
    }
}

export default connect()(Page);