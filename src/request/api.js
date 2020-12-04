import axios from "axios";
import { Toast } from "vant";
axios.defaults.timeout = 5000;
//prod
const BaseUrl = "https://www.shzhyun.com/xinzuo";
//dev
// const BaseUrl = "http://127.0.0.1:8080";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Toast("接口异常");
    return Promise.reject(error);
  }
);

const getData = function(url, data, callback) {
  axios({
    method: "GET",
    url: BaseUrl + url,
    params: data,
    headers: {
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};

const postData = function(url, data, callback) {
  axios({
    method: "POST",
    url: BaseUrl + url,
    data: data,
    headers: {
    },
  })
    .then(function(res) {
      callback(res);
    })
    .catch(function(err) {
      console.log(err);
    });
};


export const getXZjson = (data, callback) => {
  getData("/static/resources/a.json", data, callback);
};

export const register = (data, callback) => {
  postData("/user/register", data, callback);
};
