import React,{Component} from 'react';
import { connect } from 'dva';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        return(
            <footer>
                <div>
                    <img src={require('../../assets/che_03.png')} alt=""/>
                </div>
                <div>
                    <p>
                        <span>实付：</span>
                        <b>￥399</b>
                    </p>
                    <button>立即支付</button>
                </div>
            </footer>
        )
    }
}
export default connect()(Footer);