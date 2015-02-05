Template.speakers.rendered = function () {
  if (Foundation) {
    Foundation.global.namespace = '';
    $(document).foundation("reveal");
    //Foundation.set_namespace = function() {};
  }
  $(document).on('closed', '[data-reveal]', function () {
    var modal = $(this);
    if (Session.get('name')) {
      delete Session.keys.name;
      Router.go('/schedule');
    }
  });
  if (Session.get('name')) {
    var name = Session.get('name');
    $('#' + name).foundation('reveal', 'open');
  }
};
