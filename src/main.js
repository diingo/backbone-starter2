
var bookOne = ???;
var bookTwo = ???;

var books = [bookOne, bookTwo];

// Create a view for each book and add that view's element to the page.
_.each(books, function (book) {
  var view = new BookView({ model: book });
  view.render();
  $('#books').append(view.el);
});
