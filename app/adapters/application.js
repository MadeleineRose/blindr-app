// import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
export default ActiveModelAdapter.extend(DataAdapterMixin,{
  namespace: 'api/v1',
  authorizer: "authorizer:devise",
  host: 'http://localhost:3000'
});

// import ActiveModelAdapter from 'active-model-adapter';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
//
// export default ActiveModelAdapter.extend(DataAdapterMixin,{
//   namespace: "api/v1",
//   authorizer: "authorizer:devise",
//   host: 'http://localhost:3000'
// });
