import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function() {
    this.route('user', { path: '/:user_id' });
    this.route('new');
    this.route('me');
  });

  this.route('login');

  this.route('types', function() {
  });
  this.route('questions');

});

export default Router;
