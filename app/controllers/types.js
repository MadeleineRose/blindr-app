import Ember from 'ember';

 export default Ember.Controller.extend({
   actions: {
     showMore: function(type){
       this.set('currentType', type);
     }
   }
 });
