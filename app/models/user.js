import DS from 'ember-data';

export default DS.Model.extend({
  name:DS.attr("string"),
  email:DS.attr("string"),
  username:DS.attr("string"),
  password:DS.attr("string"),
  password_confirmation:DS.attr("string"),
  age:DS.attr("string"),
  gender:DS.attr("string")

});
