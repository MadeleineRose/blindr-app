import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      submitSurvey(){
        let model = this.get('model');
        let proportion = this.store.createRecord('proportion');
        model.get('proportions').addObject(proportion);
      }
    }
  });
