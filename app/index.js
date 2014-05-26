'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var HaxiomBaselineGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      console.log(chalk.blue('All Done'));
    });
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('_README.md', 'README.md');
    this.copy('gitignore', '.gitignore');
  }
});

module.exports = HaxiomBaselineGenerator;
