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
  pull : function(project, callback){
    var branch = project.branch || 'master',
    cmd = "git pull origin " + branch.trim();

    exec(cmd, {
      cwd: project.path
    },  function (error, stdout, stderr) {
      if (error !== null) {
        return callback(error);
      }
      project.stdout = stdout;
      project.stderr = stderr;

      return callback(null, project);
    });
  }
};


