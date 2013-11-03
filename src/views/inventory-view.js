(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
      console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
    }
  });

})();
