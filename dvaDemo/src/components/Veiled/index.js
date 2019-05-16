import React, { Component } from 'react';
import { connect } from 'dva';
import style from "./index.scss";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {Cancle} = this.props
        return (
            <div className={style.box}>
                <ul>
                    <li>请先选择签发城市</li>
                    <p onClick={e=>Cancle(e)}>好</p>
                </ul>
            </div>
        );
    }
}
const mapState = state=>state

const mapDispatch = dispatch=>{
  return {
      Cancle:(e)=>{
        e.stopPropagation()
        dispatch({
          type:'example/caloff',
        })
      }
  }
}
export default connect(mapState,mapDispatch)(index);