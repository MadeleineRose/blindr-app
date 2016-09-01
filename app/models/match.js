import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  loveMatch: DS.belongsTo('user')
  // answers: DS.attr("string")= "this.get('choice')+this.get('choice1')"
});
