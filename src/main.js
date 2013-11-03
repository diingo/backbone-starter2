
var bookOne = new Book({title: "Tomatoes", author: "Jules", price: 107 });
var bookTwo = new Book({ title: "Cobwebs", author: "ShooSha", price: 11 });

var books = [bookOne, bookTwo];

// Create a view for each book and add that view's element to the page.
_.each(books, function (book) {
  var view = new BookView({ model: book });
  view.render();
  $('#books').append(view.el);
});
