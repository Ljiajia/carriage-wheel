import React, { Component } from 'react';
import { Picker } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
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
  render() {
    return (
      <Picker
      title="选择地区"
      extra={this.props.title}
      data={district}
      value={this.state.pickerValue}
      cols={2}
      onChange={v => this.setState({ pickerValue: v })}
      onOk={v => this.setState({ pickerValue: v })}
      >
        <CustomChildren></CustomChildren>
    </Picker>
    );
  }
}

export default City;