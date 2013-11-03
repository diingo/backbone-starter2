(function () {

  var shirtOne = new Shirt({ color: 'blue', large: 5, small: 8 });
  var shirtTwo = new Shirt({ color: 'green', large: 2, medium: 11 });

  var shirts = [shirtOne, shirtTwo];

  // Create a view for every shirt and add that view's element to the page
  _.each(shirts, function (shirt) {
    var view = new ShirtView({ model: shirt });
    view.render();
    $('#shirts').append(view.el);
  });

  // Create an inventory view to listen for stock increases.
  var inventory = new InventoryView({
    el: '.inventory',
    shirts: shirts
  });

})();
