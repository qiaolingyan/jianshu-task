import Mock from 'mockjs'


const login = {
  url: '/login',
  type: 'post',
  response: config => {
    return {
      success: true,
      code: 200
    }
  }
}

const sign = {
  url: '/sign',
  type: 'post',
  response: config => {
    return {
      success: true,
      code: 200
    }
  }
}

Mock.mock(login.url, login.type, login.response)
Mock.mock(sign.url, sign.type, sign.response)

export default Mock