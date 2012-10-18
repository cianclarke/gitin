var path = require("path"),
temp = require("temp"),
fs = require('fs'),
exec = require('child_process').exec,
child;


module.exports = {
  clone: function(project, callback){
    var repo = project.url.trim(),
    repoPath = temp.mkdirSync(),
    branch = project.branch || 'master'
    console.log("Cloning " + repo + " into " + repoPath),
    cmd = 'git clone --branch ' + branch + " " + repo + " .";


    //TODO: Important!!! CHROOT this directory somehow...
    exec(cmd, {
      cwd: repoPath
    },  function (error, stdout, stderr) {
      if (error !== null) {
        return callback(error);
      }
      var repo = {
        path: repoPath,
        stdout: stdout,
        stderr: stderr
      };

      return callback(null, repo);
    });
  },
  pull : function(){

  }
};


