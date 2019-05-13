import React, { Component } from 'react';
import { Picker, List } from 'antd-mobile';
import "./drivingLicense.css"
const datas = [
    {
      label:
      (<div>
        <span/>
        <span>补驾照</span>
      </div>),
      value: '1',
    },
    {
      label:
      (<div>
        <span/>
        <span>换驾照</span>
      </div>),
      value: '2',
    }
  ];
class DrivingLicense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: ['2'],
        };
    }
    render() {
        return (
            <Picker
            data={datas}
            value={this.state.colorValue}
            cols={1}
            onChange={this.onChangeColor}
            >
            <List.Item arrow="horizontal"></List.Item>
            </Picker>
        );
    }
    onChangeColor = (color) => {
      window.localStorage.setItem('order_type',color.join('[]'))
        this.setState({
          colorValue: color,
        });
    };
}

export default DrivingLicense;