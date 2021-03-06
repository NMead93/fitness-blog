import Ember from 'ember';

export default Ember.Component.extend({
  showCategoryForm: false,
  actions: {
    categoryFormShow() {
      this.set('showCategoryForm', true)
    },
    saveCategory() {
      var params = {
        name: this.get('name'),
        post: this.get('post')
      }
      this.set('showCategoryForm', false);
      this.sendAction('saveCategory', params);
    }
  }
});
