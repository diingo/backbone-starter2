(function () {

  // Create our stocks
  var yhoo = new Stock({ name: 'YHOO' });
  var aapl = new Stock({ name: 'AAPL' });
  var goog = new Stock({ name: 'GOOG' });
  var msft = new Stock({ name: 'MSFT' });

  // Store in a variable for convenience
  var stocks = [yhoo, aapl, goog, msft];

  // Create a view for each stock and render its element to the page
  // Since view start with a blank div, we can do this no problem
  _.each(stocks, function (stock) {
    var view = new StockView({ model: stock });
    $('.stocks').append(view.el);
  });

  // ----
  // Get realtime stock data
  // It's not required that you understand the code.

  window.updateStocks = function (data) {

    _.each(data.query.results.quote, function (quote) {
      var stock = _.find(stocks, function (s) { return s.get('name') == quote.symbol });
      stock.updatePrice(quote.AskRealtime);
    });
    setTimeout(updateLoop, 3000);
  }

  var updateLoop = function () {
    $.ajax({
      url: 'http://mks-cacher.nodejitsu.com/',
      dataType: 'jsonp'
    });
  };
  updateLoop();

})();
