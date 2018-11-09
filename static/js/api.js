//  验证用户名密码，测试用户名admin,密码123456
//  请求方式POST,传入用户名与密码
export const loginURL = 'http://140.143.100.57:3008/user/login'

//  webSocket
export const wsURL = 'ws://140.143.100.57:3008/'

//  日志接口,GET
//  传入用户名以及操作内容
//  http://140.143.100.57:3008/addlog?username=a&content=b
export const addlogURL = 'http://140.143.100.57:3008/addlog'
// 获取全部日志，get方法
export const getlogURL = 'http://140.143.100.57:3008/getlog'
// 日志分页接口，get方法，传入pagenum和num
export const getlogPageURL = 'http://140.143.100.57:3008/getlog/page'
// 获取全部总条数，get方法
export const getlogNumURL = 'http://140.143.100.57:3008/getlognum'
//  session登陆验证接口,POST
export const addSession = 'http://140.143.100.57:3008/session/add'
// 验证时间戳 post,传入guid，返回000为正常
export const checkSession = 'http://140.143.100.57:3008/session'
//  // // // // //权限接口// // // // // // //
// 传入username
export const getUserRights = 'http://140.143.100.57:3008/access'

//  // // // // //用户接口// // // // // // //
//  获取全部用户信息接口，GET方法
//  返回一个json数组
export const allUserURL = 'http://140.143.100.57:3008/user/all'
//  按用户名获取用户信息，GET方法
// 须传入username
export const getUserByName = 'http://140.143.100.57:3008/user'
// 添加一个用户，POST，传入参数如下
//   username:{type:String},
//   userpass:{type:String},
//   userdesc:{type:String},
//   usergroup:{type:String},
// createdate:{type:String}
export const SaveUser = 'http://140.143.100.57:3008/user/save'
// 删除一个用户，Get，传入参数sid
export const DelUser = 'http://140.143.100.57:3008/user/del'
// 修改一个用户，post，传入参数data=原用户全部信息
export const updateUser = 'http://140.143.100.57:3008/user/update'

//  // // // // // 知识接口// // // // // // //
//  保存文件接口，POST方法
/** 须发送的数据结构
 *     title: '测试测试',
       username: 'admin',
       content:'12312312'
 */
export const fileSaveURL = 'http://140.143.100.57:3008/file/save'
//  获取全部文件接口，GET方法
//  返回一个json数组
export const allFileURL = 'http://140.143.100.57:3008/file/all'
//  文件分页接口，GET方法
//  须传入pagenum,页码，num每页的文章数
// 返回一个json数组
// http://140.143.100.57:3008/file/page?pagenum=1&num=2
export const filePageURL = 'http://140.143.100.57:3008/file/page'
// 按照sid获取相应文件，GET方法
// http://140.143.100.57:3008/file?sid=1
export const getFileByID = 'http://140.143.100.57:3008/file'
// 按照sid删除相应文件，GET方法
// http://140.143.100.57:3008/file/del?sid=1
export const delfileByID = 'http://140.143.100.57:3008/file/del'

// // // // // // 流程接口// // // // // // //
// 提交接口，POST方法
// 须发送的数据结构
//   title:'123',
//   username:'admin',
//   content:{// 流程具体信息
//     a:1,
//     b:2
//   },
//   type:'请假条'

export const flowSaveURL = 'http://140.143.100.57:3008/flow/save'
// 获取全部流程接口，GET方法
// 返回一个json数组
export const allFlowURL = 'http://140.143.100.57:3008/flow/all'
// 分页接口，GET方法
// 须传入pagenum：页码，num每页的文章数
// 返回一个json数组
// http://140.143.100.57:3008/flow/page?pagenum=1&num=2
export const flowPageURL = 'http://140.143.100.57:3008/flow/page'
// 按照sid获取相应文件，GET方法
// http://140.143.100.57:3008/flow?sid=1
export const getFlowByID = 'http://140.143.100.57:3008/flow'
// 按照sid删除相应文件，GET方法
// http://140.143.100.57:3008/flow/del?sid=1
export const delflowByID = 'http://140.143.100.57:3008/flow/del'

// // // // // // 协作接口// // // // // // //
// 提交接口，POST方法
/** 须发送的数据结构
  title:'123',
  username:'admin',
  content:"123"
 */
export const teamSaveURL = 'http://140.143.100.57:3008/team/save'
// 获取全部流程接口，GET方法
// 返回一个json数组
export const allteamURL = 'http://140.143.100.57:3008/team/all'
// 分页接口，GET方法
// 须传入pagenum：页码，num每页的文章数
// 返回一个json数组
// http://140.143.100.57:3008/team/page?pagenum=1&num=2
export const teamPageURL = 'http://140.143.100.57:3008/team/page'
// 按照sid获取相应文件，GET方法
// http://140.143.100.57:3008/team?sid=1
export const getteamByID = 'http://140.143.100.57:3008/team'
// 按照sid删除相应文件，GET方法
// http://140.143.100.57:3008/team/del?sid=1
export const delteamByID = 'http://140.143.100.57:3008/team/del'

// // // // // // 日历接口// // // // // // //
// 提交接口，POST方法
/** 须发送的数据结构
  title:'123',
  username:'admin',
  startdate:"2018-11-3",
  enddate:"2018-11-3"
 */
export const riliSaveURL = 'http://140.143.100.57:3008/rili/save'
// 获取全部流程接口，GET方法
// 返回一个json数组
export const allriliURL = 'http://140.143.100.57:3008/rili/all'
// 获取全部流程接口，GET方法,传入sid
export const delriliURL = 'http://140.143.100.57:3008/rili/del'
