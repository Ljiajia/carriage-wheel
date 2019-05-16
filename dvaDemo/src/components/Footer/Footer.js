import React, { Component } from 'react';
import { connect } from 'dva';
import { pay } from "@/services/example"

let obj = {
    orderFrom: '补换驾照_更多icon',
    order_type: 1,
    idcard_front_photo: '//static.clfile.com/g2/img/2019/05/14/3737afa1b96b1394_5_5.jpeg',
    idcard_back_photo: '//static.clfile.com/g2/img/2019/05/14/2a50cd5929be0b39_5_5.jpeg',
    license_photo: './img/demo.png',
    license_back_photo: './img/demo.png',
    inch_photo: '//static.clfile.com/g2/img/2019/05/14/758233e9c092528d_5_5.jpeg',
    pay_money: 379.9, //金额
    coupon_id: '',
    ac_token: 'u55524603_394088477_l6sUmrKWWwbbPkaR',
    pay_platform: 'app',
    provinceid_from: '110', //签发省份
    cityid_from: '110100000000', //签发城市
    provinceid_to: '110', //补发省份
    cityid_to: '110100000000', //补发城市
    platform: 'app',
}
let business_data = JSON.stringify({...obj })
let newobj = {...obj, business_data: business_data }
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    pay(e, channels) {//支付功能
        pay(channels, res => {
            console.log(res, 'res.....')
        })
    }
    render() {
        return ( 
        <footer >
            <div id='people'>
            <img src = { require('../../assets/che_03.png') } alt=""/>
            </div> <div>
            <p>
            <span> 实付：</span><b>￥{this.props.example.moneys}</b>
            </p><button onClick = {() => this.props.createOrder(newobj) } > 立即支付 </button></div> 
        </footer>
        )
    }
}
const mapState = state => state;
const mapDispatch = dispatch => ({
    createOrder: (newobj) => {
        dispatch({
            type: 'example/getOrder',
            payload: {
                ...newobj
            }
        })
    }
})
export default connect(mapState, mapDispatch)(Footer);