(function () {
//ASK - why price not update like it does on console when printed on index.html
  window.Stock = Backbone.Model.extend({
    defaults: {
      priceset: false,
      initprice: 0,
      recentchange: 0
    },
    updatePrice: function (newPrice) {
      var newPriceFloat = parseFloat(newPrice);
      var initPrice = this.get("initprice"); 
      // console.log('Updating', this.get('name'), 'price to:', newPriceFloat);
      // TODO
      this.set({ price: newPriceFloat });

      if ( this.get('priceset') === false ) {
        this.set({ initprice: newPriceFloat,
          priceset: true
        });
      }
      
      this.set({ recentchange: Math.abs(newPriceFloat - initPrice) });
    
    }
  });

})();
