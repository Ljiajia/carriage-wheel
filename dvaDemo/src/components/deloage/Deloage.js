import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Deloage.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/es/button/style/index.css'
import {uploadFile} from "../../services/example"

class Deloage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        this.upload=this.upload.bind(this)
    }
    upload(type,ck){
        ck=function(res){
            console.log(res,'res....')
        }
        uploadFile(type,ck)
    }
    render() {
        let {Cancle} = this.props
        return (
            <div className={styles.deloage}>
                <div>
                <img src={this.props.dialogs.img} alt="" className={styles.uploadFilee}/>

                </div>
                <div className={styles.bottom}>
                    <ul className={styles.list}>
                        <li onClick={()=>this.uploadFile(1)}>拍照</li>
                        <li onClick={()=>this.uploadFile(2)}>相册</li>
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