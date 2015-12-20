Package.describe({
  name: 'mgcrea:angular-bootstrap',
  version: '0.14.3',
  summary: 'Native AngularJS (Angular) directives for Bootstrap.',
  git: 'https://github.com/angular-ui/bootstrap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    "./ui-bootstrap-tpls.js"
  ], 'client');
}); 
