var git = require('../git'),
assert = require('assert'),
util = require('util');

git.clone({ url: 'https://github.com/cianclarke/met.git', branch: 'master' }, function(err, res){
  console.log(util.inspect(res));
  git.pull(res, function(err, res){

  });
})

