
import Ember from 'ember';
export default Ember.Route.extend({
   model(){
     return [
       {p_type: "A", personality: "Adventurous", Description: "I am adventurous"},
       {p_type: "B", personality: "Homebody", Description: "I am romantic"},
       {p_type: "C", personality: "Predictable", Description: "Easygoing and I suck"},
       {p_type: "D", personality: "Cynical and Jaded", Description: "Screw this I'm going to buy a cat"}
     ];
   }
  });
