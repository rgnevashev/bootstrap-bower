Package.describe({
  name: 'rgnevashev:angular-bootstrap',
  version: '1.1.2',
  summary: 'Native AngularJS (Angular) directives for Bootstrap.',
  git: 'https://github.com/angular-ui/bootstrap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  //api.versionsFrom('1.2.1');
  api.addFiles([
    "./ui-bootstrap-tpls.js"
  ], 'client');
});
