/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = 'https://123456.qcloud.la';

// var config = require('./networkEnvConfig.js')

//网络环境列表
var BXG_NETWORK_ENV_DEVELOPMENT = "http://app-d.boxuegu.com/"            // 研发 App服务
var BXG_NETWORK_ENV_DEVELOPMENT_USER_CENTER = "http://online-dev.boxuegu.com/"               // 研发 User服务
var BXG_NETWORK_ENV_DEVELOPMENT_QALIB_CENTER = "http://qalib-center-d.boxuegu.com/"           // 研发 问答精灵服务
var BXG_NETWORK_ENV_DEVELOPMENT_QALIB_API = "http://qalib-api-d.boxuegu.com/"              // 研发 问答库服务
var BXG_NETWORK_ENV_DEVELOPMENT_CONSULT = "http://consult-d.boxuegu.com/"                // 研发 咨询服务(内网)
var BXG_NETWORK_ENV_TEST_API_01 = "http://211.103.142.26:5881"                  // 测试 App服务(外网 Test1)
var BXG_NETWORK_ENV_TEST_API_02 = "http://proxy.boxuegu.com/portal-api-test1/"   // 测试 App服务(外网 Test2)
var BXG_NETWORK_ENV_TEST_API_LOCAL_02 = "http://localhost" //http://portal-api-t1.boxuegu.com"            // 测试 h5服务(内网 Test2)
// var BXG_NETWORK_ENV_TEST_API_LOCAL_02 = "http://portal-api-t1.boxuegu.com"       // 测试 h5服务(内网 Test2)
var BXG_NETWORK_ENV_TEST_LOCAL_01 = "http://online-test.boxuegu.com/"              //  App服务(内网 Test1)
var BXG_NETWORK_ENV_TEST_LOCAL_02 = "http://online-test2.boxuegu.com/"             // 测试 App服务(内网 Test2)
var BXG_NETWORK_ENV_TEST_CONSULT = "http://consult-t.boxuegu.com/"                // 测试 咨询服务(内网)
var BXG_NETWORK_ENV_TEST_QALIB_CENTER = "http://qalib-center-t.boxuegu.com/"           // 测试 问答精灵服务(内网)
var BXG_NETWORK_ENV_TEST_QALIB_API = "http://qalib-api-t.boxuegu.com/"              // 测试 问答库服务(内网)
var BXG_NETWORK_ENV_PRE_PRODUCT = "http://api-ysc.bxg.boxuegu.com/"              // 预生产 App服务
var BXG_NETWORK_ENV_PRE_PREDUCT_QALIB_CENTER = "http://ask-center-ysc.bxg.boxuegu.com"        // 预生产 问答精灵服务
var BXG_NETWORK_ENV_PRE_PREDUCT_QALIB_API = "http://ask-api-ysc.bxg.boxuegu.com"           // 预生产 问答库服务
var BXG_NETWORK_ENV_RELEASE = "https://app.boxuegu.com/"                     // 正式 App服务
var BXG_NETWORK_ENV_RELEASE_CONSULT = "https://app.boxuegu.com/consult/"             // 正式 咨询服务
var BXG_NETWORK_ENV_RELEASE_QALIB_CENTER = "https://ask-center.boxuegu.com"               // 正式 问答精灵服务
var BXG_NETWORK_ENV_RELEASE_QALIB_API = "https://qa.boxuegu.com/api"                   // 正式 问答库服务

var BXG_NETWORK_ENV_DEVELOPMENT_QALIB_CENTER_DEPRECATED = "http://portal-api-d1.boxuegu.com/ask-d/"      // 研发 问答精灵服务(过期)
var BXG_NETWORK_ENV_DEVELOPMENT_QALIB_API_DEPRECATED = "http://portal-api-d1.boxuegu.com/ask-api-d/"  // 研发 问答库服务(过期)
var BXG_NETWORK_ENV_TEST_QALIB_CENTER_DEPRECATED = "http://portal-api-d1.boxuegu.com/ask-t/"      // 测试 问答精灵服务(过期)
var BXG_NETWORK_ENV_TEST_QALIB_API_DEPRECATED = "http://portal-api-d1.boxuegu.com/ask-api-t/"  // 测试 问答库服务(过期)

//测试环境配置对应的网络环境
var BXG_NETWORK_URL_APP = BXG_NETWORK_ENV_TEST_API_01;
var BXG_NETWORK_URL_BBS = BXG_NETWORK_ENV_TEST_API_01;
var BXG_NETWORK_URL_CONSULT = BXG_NETWORK_ENV_TEST_CONSULT;
var BXG_NETWORK_URL_QALIB_CENTER = BXG_NETWORK_ENV_TEST_QALIB_CENTER;
var BXG_NETWORK_URL_QALIB_API = BXG_NETWORK_ENV_TEST_QALIB_API;
// var BXG_NETWORK_URL_NOTE = BXG_NETWORK_ENV_TEST_API_LOCAL_01;
// var BXG_NETWORK_URL_USER = BXG_NETWORK_ENV_TEST_LOCAL_01;
// var BXG_NETWORK_URL_H5 = BXG_NETWORK_ENV_TEST_API_LOCAL_01;

var config = {
  homePageCourseInfoUrl: `${BXG_NETWORK_URL_APP}/bxg/index/course`,
  // homePageCourseInfoUrl: `${BXG_NETWORK_URL_APP}/index.php`,
};

module.exports = config;



// var req = function req(url, data, cb) {
//   console.log('fun is called')
//   wx.request({
//     url: url,
//     data: data,
//     method: 'post',
//     header: { 'Content-Type': 'application/json' },
//     success: function (res) {
//       return typeof cb == "function" && cb(res.data)
//     },
//     fail: function () {
//       return typeof cb == "function" && cb(false)
//     }
//   })
// };

