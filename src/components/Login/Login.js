import React, {Component} from 'react';
import './Login.less';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
    }
    render() {
        const {userName} = this.state;   
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='container'>
                <div id='login'>
                    <h3>皇马</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem className="login-form-FormItem">
                            {getFieldDecorator('userName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                    placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem className="login-form-FormItem">
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                                    type="password"
                                    placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem className="login-form-FormItem">
                            <Button type="primary" 
                                    htmlType="submit" 
                                    className="login-form-button"
                                    onClick={ () => { location.replace("#/index");}}>
                                登录
                            </Button>
                            {/* Or
                            <a href="">register now!</a> */}
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login;