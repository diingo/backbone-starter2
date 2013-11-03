(function () {

  window.Stock = Backbone.Model.extend({
    updatePrice: function (newPrice) {
      newPriceFloat = parseFloat(newPrice);
      console.log('Updating', this.get('name'), 'price to:', newPriceFloat);
      // TODO
      this.set({ price: newPriceFloat });
    }
  });

})();
