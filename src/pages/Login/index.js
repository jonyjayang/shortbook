import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {
        const {loginstate}=this.props
     
        if (!loginstate) {
                return (
                    <LoginWrapper>
                        <LoginBox>
                            <Input placeholder='账号' innerRef={(input) => {this.account = input.value}}/>
                            <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input.value}}/>
                            <Button onClick={() => this.props.login(this.account, this.password)}>登陆</Button>
                        </LoginBox>
                    </LoginWrapper>
                )
		}else {
			return <Redirect to='/'/>
		}
        
    }
    componentDidMount(){
       
    }
}
const mapState=(state)=>({
    loginstate: state.getIn(['login', 'login'])

})
const mapDispatch=(dispatch)=>({
   login(account,password){
       dispatch(actionCreators.checklogin(account, password))
   }
})
export default connect(mapState, mapDispatch)(Login);
