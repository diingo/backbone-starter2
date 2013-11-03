(function () {

  window.InventoryView = Backbone.View.extend({
    events: {
      'click .add-shirts': 'addShirts'
    },

    addShirts: function (e) {
      var type = $(e.currentTarget).data('type');
       console.log('Adding one of every', type, 'shirt for', this.options.shirts);
      // console.log('Adding one of every', type, 'shirt for', this.options.shirts.color, 'now have', this.options.shirts.type, type);
  
      for (element in this.options.shirts) {
        var shirt = this.options.shirts[element]
        if (type === 'small'){
          var smallShirts = shirt.get('small');
          shirt.set({ small: smallShirts + 1})
        } else if ( type === 'medium' ) {
          var mediumShirts = shirt.get('medium');
          shirt.set({ medium: mediumShirts + 1 });
        } else if ( type === 'large') {
          var largeShirts = shirt.get('large')
          shirt.set({ large: largeShirts + 1 });
        }

      }
      // TODO: Write a for loop to iterate through this.options.shirts and
      // add +1 to each of that shirt's `type` inventory.
      // For example, if type === 'small', then add +1 to every small stock
      // in each shirt in this.options.shirts. Use .set(???) for this.
    }
  });

})();
