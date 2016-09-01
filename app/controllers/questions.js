import Ember from 'ember';


export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  model(){
      let newMatch = this.store.createRecord('match');
      return newMatch;
  },
  save(){
      let match = this.modelFor(this.routeName);
        match.save().then(() => {
               this.transitionTo("users.user", match);
              });
        },
        actions: {
          submitSurvey(){
            var token = this.get("session.data.authenticated.token");
            var email = this.get("session.data.authenticated.email");
            var answers = [this.get('choice'), this.get('choice2'), this.get('choice3'), this.get('choice4'), this.get('choice5'), this.get('choice6')];
            // var match = this.store.createRecord('match', {})
            return Ember.$.ajax({
              url: "http://localhost:3000/api/v1/matches/create",
              headers: {"Authorization": "Token token=" + token + ", email=" + email},
              type: "POST",
              data: {answers: answers},
              dataType: "JSON"
            }).then((match)=>{
              let user = this.store.findRecord('user', match.match.match_id)
              this.transitionToRoute('users.user', user);
              alert("Are you ready to meet your match????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????!!");
            });
          }
        }
      });

//
//         return Ember.$.ajax({
//   url: "/api/v1/ballots/" + (this.model.get('id')) + "/swap/" + (li1.get('id')) + "/" + (li2.get('id')),
//   type: 'put'
// }).done(function() {}).fail(function() {
//   li1.rollback();
//   return li2.rollback();
// });
        // ,
        // actions: {
        //   submitSurvey(){
        //     var answers = 'this.get('choice')'+ 'this.get('choice2')'+ 'this.get('choice3')';
        //         });
        //       };

  //
