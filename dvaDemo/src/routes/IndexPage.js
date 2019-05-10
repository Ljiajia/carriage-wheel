import React from 'react';
import { connect } from 'dva';
import { Steps, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import styles from './IndexPage.css';
const Step = Steps.Step;
function IndexPage() {
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
            <WingBlank mode={20} className={styles.stepsExample}>
            <Steps direction="horizontal">
              <Step title="订单提交"/>
              <Step title="填写收货地址"/>
              <Step title="正在办理"/>
              <Step title="办理完成"/>
            </Steps>
            </WingBlank>
          </div>
          <img src={require("../assets/bg.gif")}  alt=""/>
          <div className={styles.uploadPictures}>
              <ul className={styles.ullist}>
                <li>
                  <p>
                    <img src={require('../assets/加号.png')} alt=""/>
                  </p>
                  <span>身份证正面</span>
                </li>
               <li>
                  <p>
                    <img src={require('../assets/加号.png')} alt=""/>
                  </p>
                  <span>身份证反面</span>

                </li><li>
                  <p>
                    <img src={require('../assets/加号.png')} alt=""/>
                  </p>
                  <span>驾驶证正页</span>

                </li><li>
                  <p>
                    <img src={require('../assets/加号.png')} alt=""/>
                  </p>
                  <span>驾驶证副页</span>

                </li>
                <li>
                  <p>
                    <img src={require('../assets/加号.png')} alt=""/>
                  </p>
                  <span>白底半身照</span>

                </li>
              </ul>
          </div>
          <div className={styles.line}></div>
          <div className={styles.contentbox}>
              <ol className={styles.ollist}>
                <li>
                  <span>服务类型</span>
                  <span>换驾照》</span>
                </li>
                <li>
                  <span>当前驾照签发城市</span>
                  <input type="text" placeholder='请选择签发地'/>

                </li>
                <li>
                <span>可换补的签发城市</span>
                  <input type="text" placeholder='请选择补发地'/>
                </li>
                <li>
                <span>服务费</span>
                  <input type="text" placeholder='请选择补发地'/>
             
                </li>
              </ol>
          </div>
        </section>
        <footer>
          尾部
        </footer>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
