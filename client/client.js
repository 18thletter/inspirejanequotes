Template.main.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('images');
  });
});

Template.main.helpers({
  randomImage: function() {
    var singleImage = _.flatten(_.sample(Images.find().fetch(), 1))[0];
    if (singleImage) {
      return Images.find({_id: singleImage._id});
    }
  },
});

Template.login.events({
  'submit #login-form': function(event) {
    event.preventDefault();
    var pass = document.getElementById('password').value;
    Meteor.loginWithPassword('nessa', pass, function(error) {
      if (error) {
        Meteor.logout(function(error) {
          FlowRouter.go('/');
        });
      } else {
        FlowRouter.go('/admin');
      }
    });
  }
});

Template.nessa.events({
  'change #upload-button': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function(error, fileObject) {
        if (error) {
          toastr.error('Please tell Ray', 'Uh oh, error...');
        } else {
          toastr.success('Dunzo. I love you, Ness', 'Oh hell yea!');
        }
      })
    })
  }
});
