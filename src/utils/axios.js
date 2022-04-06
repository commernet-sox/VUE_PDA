
import axios from 'axios'
import { Toast } from 'vant'
import router from '../router/index.js'
import QS from 'qs'
import store from '../store/index'
import { getSessionStorage,setSessionStorage } from "../common/js/utils.js";

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://10.27.101.193:3003/api/' : 'http://10.27.101.164:3003/api/'
// axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:51586/' : 'http://localhost:3003/api/'
//  axios.defaults.withCredentials = true ////允许跨域携带cookie信息
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.timeout = 30000
/**
 * 响应拦截器 
 */
axios.interceptors.response.use(
  res => {
    store.commit('changeLoading',false)
    console.log(res)
    if (typeof res.data !== 'object') {
      Toast.fail('服务端异常！')
      return Promise.reject(res)
    }
    //  if (res.data.resultCode != 200) {
    //    if (res.data.message) Toast.fail(res.data.message)
    //    if (res.data.resultCode == 416) {
    //      router.push({ path: '/' })
    //    }
    //    return Promise.reject(res.data)
    //  }

    return Promise.resolve(res)
  },
  error => {
    store.commit('changeLoading',false)
    if(!error.response)
    {
      Toast.fail("请检查网络连接！");
    }
    console.log(error.response.status)
    if(error.response.status)
    {
      switch(error.response.status)
      {
        case  401:
          router.replace({
            path:'/login',
            query:{
              redirect:router.currentRoute.fullPath
            }
          });
          break;
        default:
          Toast({
            message:error.response.data.message,
            duration:1500,
            forbidClick:true
          });
      }
    }
    return Promise.reject(error.response);
  }
)

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
axios.interceptors.request.use(
  config => {
    store.commit('changeLoading',true)
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
    const token = getSessionStorage("token");
    token && (config.headers.Authorization ="Bearer "+token);
    return config;
  },
  error =>{
    store.commit('changeLoading',false)
    Promise.reject(error)
  })

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      console.log(err)
      reject(err.data)
    })
  });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

export default axios
