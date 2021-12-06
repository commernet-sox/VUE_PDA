import axios from '../utils/axios.js'
import {get,post} from '../utils/axios.js'

export function getUserInfo() {
  return axios.get('/user/info');
}

export function EditUserInfo(params) {
  return axios.put('/user/info', params);
}

export function login(params) {
  return post('/Auth/Get', params);
}

export function testToken(params){
  return get('/value2',params)
}

export function logout() {
  return axios.post('/user/logout')
}

export function register(params) {
  return axios.post('/user/register', params);
}

