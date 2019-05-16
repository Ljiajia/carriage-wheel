import React, { Component } from 'react';
import { Picker } from 'antd-mobile';
import { connect } from 'dva';
const CustomChildren = props => (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff'}}
    >
      <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
        <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
        <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
      </div>
    </div>
  );
class City extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  componentDidMount(){
    this.props.fetchCity()
}
  render() {
    return (
      <Picker
      title="选择地区"
      extra={this.props.title}
      data={this.props.lists||this.props.example[0]}
      value={this.state.pickerValue}
      cols={2}
      onChange={(e)=>this.props.changes(e,this.props.title,this.props.lists)}
      onOk={v => this.setState({ pickerValue: v })}
      >
        <CustomChildren>
        </CustomChildren>
    </Picker>
    );
  }
}
const mapStateToProps=state=>state
const mapDispatchToprops=dispatch=>({
  fetchCity:()=>{ //获取所有的城市
    dispatch({
        type:'example/citys'
    })
  },
  changes:(e,tit,list)=>{//判断点击的是补发地
    if(tit==='请选择补发地'){
     let obj= list.find(item=>item.value===e[0])
      dispatch({
        type:'example/setmoney',
        moneys:obj.children[0].cost
      })
    }else{
      dispatch({
        type:'example/filterCitys',
        province_id:e[0],
        city_id:e[1]
      })
    }
    
  }
})
export default connect(mapStateToProps,mapDispatchToprops)(City);