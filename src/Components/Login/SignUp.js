import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'
import { UserOutlined, LockOutlined, CommentOutlined, WeiboOutlined, QqOutlined } from '@ant-design/icons';
import MyInput from './MyInput'
import Checkbox from './Checkbox'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


function SignUp () {
  const history = useHistory()

  const [user, setUser] = useState({
    username: "jake@jake.jake",
    password: "jakejake",
    remembers: []
  })


  const handleSubmit = async values => {
    const { data } = await axios.post('/login', { user: values })
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
        <MyInput
          id="myPath"
          className="password"
          name="password"
          type="password"
          placeholder="请输入密码"
        />

        <div className="remember-wrap">
          <Checkbox label="记住我" name="remembers" />
          <a className="login-form-forgot" href="">
            登录遇到问题？
         </a>
        </div>

        <button type="submit" className="login-form-button">提交</button>
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


export default SignUp