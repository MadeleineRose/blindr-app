import DS from 'ember-data';

export default DS.Model.extend({
    prompt:DS.attr("string"),
    answer:DS.attr("string"),

});
