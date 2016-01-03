FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render('layout', {body: 'main'});
  }
});

FlowRouter.route('/nessa', {
  action: function(params) {
    BlazeLayout.render('layout', {body: 'login'});
  }
});

FlowRouter.route('/admin', {
  triggersEnter: [function(context, redirect) {
    if (Meteor.user() === null) {
      redirect('/');
    }
  }],
  action: function(params) {
    BlazeLayout.render('layout', {body: 'nessa'});
  }
});

FlowRouter.notFound = {
  action: function() {
    FlowRouter.go('/');
  }
};
