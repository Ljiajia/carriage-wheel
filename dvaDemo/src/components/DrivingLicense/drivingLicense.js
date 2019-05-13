import React, { Component } from 'react';
import { Picker, List } from 'antd-mobile';
import "./drivingLicense.css"
const colors = [
    {
      label:
      (<div>
        <span/>
        <span>补驾照</span>
      </div>),
      value: '#FF0000',
    },
    {
      label:
      (<div>
        <span/>
        <span>换驾照</span>
      </div>),
      value: '#00FF00',
    }
  ];
class DrivingLicense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: ['#00FF00'],
        };
    }
    render() {
        return (
            <Picker
            data={colors}
            value={this.state.colorValue}
            cols={1}
            onChange={this.onChangeColor}
            >
            <List.Item arrow="horizontal"></List.Item>
            </Picker>
        );
    }
    onChangeColor = (color) => {
        this.setState({
          colorValue: color,
        });
    };
}

export default DrivingLicense;