Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('speakers', {
    path: '/speakers/:name?',
    template: 'speakers',
    after: function() {
      var params = this.params;
      if (params.name) {
        Session.set('name', params.name);
      }
    }
  });

  this.route('schedule', {
    path: '/schedule',
    template: 'schedule'
  });
});
