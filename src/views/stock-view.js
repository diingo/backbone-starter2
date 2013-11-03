(function () {

  var stockTemplateHtml = $('#templates .stock').html();
  var stockTemplate = _.template(stockTemplateHtml);

  window.StockView = Backbone.View.extend({
    className: 'stock',
    // TODO
    initialize: function (){
      this.listenTo(this.model, 'change', this.render);
      console.log(this, this.model)
    },
    render: function () {
      var newStockHtml = stockTemplate( this.model.toJSON() );

      $(this.el).html(newStockHtml);

      var currentPrice = this.model.get("price");
      var prevPrice = this.model.previous("price")
      if ( currentPrice > prevPrice ) {
        $(this.el).find('.price').addClass("up");
      } else {
        $(this.el).find(".price").addClass("down");
      }
    }

  });

})();
