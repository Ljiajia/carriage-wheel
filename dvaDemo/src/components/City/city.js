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
      onChange={(e)=>this.changes(e)}
      onOk={v => this.setState({ pickerValue: v })}
      >
        <CustomChildren>
        </CustomChildren>
    </Picker>
    );
  }
  changes=(e)=>{
    window.localStorage.setItem('province_id',e[0])
    window.localStorage.setItem('city_id',e[1])
    this.setState({ pickerValue: e })
  }
}
const mapStateToProps=state=>state
const mapDispatchToprops=dispatch=>({
  fetchCity:()=>{
    dispatch({
        type:'example/citys'
    })
  },
 
})
export default connect(mapStateToProps,mapDispatchToprops)(City);