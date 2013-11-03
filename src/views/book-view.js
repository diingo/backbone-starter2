(function () {

  var bookTemplateHtml = $('#templates .book').html();
  var bookTemplate = _.template(bookTemplateHtml);

  window.BookView = Backbone.View.extend({
    buy: function () {
      // TODO
    },
    render: function () {
      var newBookHtml = bookTemplate( this.model.toJSON() );
      $(this.el).html(newBookHtml);
    }
  });

})();
