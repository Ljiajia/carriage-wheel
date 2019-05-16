import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './Deloage.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/es/button/style/index.css'
import {uploadFile,cardFront,cardReverse,driveFront,drivereverse} from "../../services/example"

class Deloage extends Component {
    constructor(props) {
        super(props);
        this.uploadFile=this.uploadFile.bind(this)
        this.state = {};
    }
    uploadFile(type,ck){//上传照片
        let that=this;
        let index=this.props.example.index
        let lengths=this.props.example.lengths
        ck=function(res){
            if(res.result){
                that.props.setimg(res.data.url,index,lengths)
            }
        }
        uploadFile(type,ck)
    }
    cardFront(type,isFront,ck){//身份证正面
        ck=function(res){
        }
        cardFront(type,isFront,ck)
    }
    cardReverse(ck){//身份证反面
        ck=function(res){
        }
        cardReverse(ck)
    }
    driveFront(ck){//驾驶证正面
        ck=function(res){
        }
        driveFront(ck)
    }
    drivereverse(ck){//驾驶证反面
        ck=function(res){
        }
        drivereverse(ck)
    }
    render() {
        let {Cancle} = this.props
        let {title,img}=this.props.example
        return (
            <div className={styles.deloage}>
                <div>
                <img src={img} alt="" className={styles.uploade}/>
                </div>
                <div className={styles.bottom}>
                    <ul className={styles.list}>
                        <li onClick={
                            title==='身份证正面'?
                            ()=>this.cardFront(2,1):
                            title==='身份证反面'?
                            ()=>this.cardReverse():
                            title==='驾驶证正页'?
                            ()=>this.driveFront():
                            title==='驾驶证副页'?
                            ()=>this.drivereverse():()=>this.uploadFile(1)}>拍照</li>
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
          type:'example/cancel'
        })
      },
      setimg:(url,index,lengths)=>{
          dispatch({
            type:'example/setimg',
            url,index,lengths
          })
      }

  }
}
export default connect(mapState,mapDispatch)(Deloage);