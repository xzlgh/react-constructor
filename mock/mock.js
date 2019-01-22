// import Mock from 'mockjs'

// var data = Mock.mock('/api/user', {
//   'name': '@cname',
//   'intro': '@word(20)',
// })
var Mock = require('mockjs');
var Random = Mock.Random

module.exports = function() {
  var data = {}
  data.user = {
    'name': Random.cname(),
    'intro': Random.word(20)
  }
  return data
}

