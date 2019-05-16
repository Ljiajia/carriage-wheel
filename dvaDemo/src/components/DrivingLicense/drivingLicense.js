import React, { Component } from 'react';
import { connect } from 'dva';
import { Picker, List } from 'antd-mobile';
import "./drivingLicense.css"
const datas = [
  {
    label:
    (<div>
      <span/>
      <span>换驾照</span>
    </div>),
    value: '1',
  },
    {
      label:
      (<div>
        <span/>
        <span>补驾照</span>
      </div>),
      value: '2',
    },
    
  ];
class DrivingLicense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ['1'],
        };
    }
    render() {
        return (
            <Picker
            data={datas}
            value={this.state.status}
            cols={1}
            onChange={this.onChangeColor}
            >
            <List.Item arrow="horizontal"></List.Item>
            </Picker>
        );
    }
    onChangeColor = (value) => {
        this.setState({
          status: value,
        });
        this.props.settype(value)
    };
}
const mapStateToProps=state=>state
const mapDispatchToprops=dispatch=>({
    settype:(value)=>{//设置选择的类型
      dispatch({
        type:'example/types',
        order_type:value.join('[]')
      })
    }
})
export default connect(mapStateToProps,mapDispatchToprops)(DrivingLicense);