Meteor.startup(function() {
});

Meteor.publish('images', function() {
  return Images.find();
});
