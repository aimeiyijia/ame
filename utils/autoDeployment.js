const fs = require('fs'),
  path = require('path'),
  process = require('process'),
  { NodeSSH } = require('node-ssh'),
  chalk = require('chalk')
const ssh = new NodeSSH()
const rootPath = path.join(__dirname, '..')
const storageDirectoryInLocal = path.join(rootPath, '/docs/.vuepress/dist')
const storageDirectoryInRemote = '/home/ame'

ssh
  .connect({
    host: '121.196.41.45',
    username: 'root',
    // password: "Liuxiaofan199445",
    port: 22, //SSH连接默认在22端口
    privateKey: rootPath + '/utils/modules/id_rsa',
  })
  .then(function(e) {
    // Local, Remote
    ssh
      .putDirectory(storageDirectoryInLocal, storageDirectoryInRemote)
      .then(
        function(Contents) {
          console.log('文件夹内容传输成功！')
        },
        function(error) {
          console.log(error, '文件夹内容传输失败！')
        }
      )
      .finally(() => {
        process.exit()
      })
  })
  .catch(err => {
    console.log(err)
  })
