import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createHashHistory } from 'history';
import { Button, Form, Grid, Segment, Header } from 'semantic-ui-react';

import loginAction from '../../store/login/loginAction';

const history = createHashHistory();

class Login extends Component {
    logIn = () => {
        // this.props.changeStatus('islogining', true);
        sessionStorage.setItem('token', 11);
        history.push('/default/dashboard');
        // this.props.logIn();
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Log-in to your account
                </Header>
                <Form size='large' loading={ this.props.islogining }>
                    <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='username' error={ this.props.usernameIllegal } />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        error={ this.props.passwordIllegal }
                    />
                    <Button color='teal' fluid size='large' onClick={ this.logIn }>
                        Login
                    </Button>
                    </Segment>
                </Form>
                {/* <Message>
                    New to us? <a href='#'>Sign Up</a>
                </Message> */}
                </Grid.Column>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userInfo.username,                  // 用户名
        usernameIllegal: state.userInfo.usernameIllegal,    // 用户名错误
        passwordIllegal: state.userInfo.passwordIllegal,    // 密码错误
        islogining: state.userInfo.islogining,              // 是否登录
        isLogged: state.userInfo.isLogged,                  // 是否登录
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // 登录
        logIn: (...args) => dispatch(loginAction.logIn(...args)),
        changeStatus: (...args) => dispatch(loginAction.changeStatus(...args)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);