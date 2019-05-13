import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Deloage.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/es/button/style/index.css'
class Deloage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {Cancle} = this.props
        return (
            <div className={styles.deloage}>
                <img src={require('../../assets/yay.jpg') } alt="" className={styles.uploade}/>
                <div className={styles.bottom}>
                    <ul className={styles.list}>
                        <li>拍照</li>
                        <li>相册</li>
                    </ul>
                    <Button onClick={Cancle} >取消</Button>
                </div>
            </div>
        );
    }
}
const mapState = state=>state

const mapDispatch = dispatch=>{
  return {
      Cancle:()=>{
        dispatch({
          type:'dialogs/cancel'
        })
      }
  }
}
export default connect(mapState,mapDispatch)(Deloage);