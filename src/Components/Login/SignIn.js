import React, { useState } from 'react'
import { UserOutlined, LockOutlined, CommentOutlined, WeiboOutlined, QqOutlined, SafetyCertificateOutlined, PhoneOutlined } from '@ant-design/icons';
// import { Form, Input, Button, Checkbox } from 'antd';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import MyInput from './MyInput'
import Checkbox from './Checkbox'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function SignIn () {
  const history = useHistory()
  const [user, setUser] = useState({
    username: "Jacob",
    email: "jake@jake.jake",
    password: "jakejake"
  })
  const handleSubmit = async values => {
    const { data } = await axios.post('/sign', { user: values })
    if (data.code === 200) {
      localStorage.setItem('user', values.username)
      history.push('/')
    }
  }

  const schema = Yup.object({
    username: Yup.string()
      .max(15, '用户名的长度不能大于15')
      .required('请输入用户名'),
    password: Yup.string()
      .max(20, '密码的长度不能大于20')
      .min(6, '密码的长度不能小于6')
  })
  return (
    <Formik
      initialValues={user}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <div className="username-wrap">
          <UserOutlined className="site-form-item-icon" />
          <Field name="username" className="username" />
        </div>
        <ErrorMessage name="username" />
        <div className="email-wrap">
          <PhoneOutlined className="site-form-item-icon" />
          <Field name="email" className="email" />
        </div>
        <ErrorMessage name="email" />
        <MyInput
          id="myPath"
          className="password"
          name="password"
          type="password"
          placeholder="请输入密码"
        />

        <button type="submit" className="signin-form-button">注册</button>
        <p className="sign-up-msg">
          点击 “注册” 即表示您同意并愿意遵守简书<br />
          <a target="_blank" href="http://www.jianshu.com/p/c44d171298ce">用户协议</a>
          和 <a target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a>
          。
        </p>
        <div className="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li id="weibo-link-wrap" className="">
              <a className="weibo" id="weibo-link">
                <WeiboOutlined />
              </a>
            </li>
            <li><a id="weixin" className="weixin" target="_blank" href="#"><CommentOutlined /></a></li>
            <li><a id="qq" className="qq" target="_blank" href="#"><QqOutlined /></a></li>
          </ul>

          <div className="weibo-geetest-captcha"></div>
        </div>
      </Form>
    </Formik>
  )
}

export default SignIn