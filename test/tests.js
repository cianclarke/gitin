var git = require('../git'),
assert = require('assert'),
util = require('util');

git.clone({ url: 'https://github.com/cianclarke/met.git', branch: 'master' }, function(err, project){
  console.log(util.inspect(arguments));
  assert.ok(!err);
  assert.ok(project);
  git.pull(project, function(err, res){
    console.log('pulld ');
    console.log(util.inspect(arguments));
  });
});

