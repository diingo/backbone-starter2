
//Week 5 Backbone Review
//3 
var DrinkView = Backbone.View.extend({
  initialize: function(options){
    this.name = options.name
  },
  render: function() {
    console.log('You should drink', this.name);
  }
});
var sprite = new DrinkView({
  name: 'Sprite'
});
sprite.render();

var water = new DrinkView({
  name: 'Water'
});
water.render();


//4
var ButtonView = Backbone.View.extend({

    render: function(){ 
      $(this.el).html('<button>I don\'t do anything :(</button>')
    }
});
var view = new ButtonView({ el: $('.button')});
view.render();

//5 
var ButtonView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<button>a big button</button>')
  }
});
var view = new ButtonView({
  el: $('.big-button')
});
view.render();

//6
var stockTemplate = _.template('<b>{{name}}:</b> {{price}}');

var StockView = Backbone.View.extend({
  initialize: function(options){
    this.name = options.name;
    this.price = options.price;
  },
  render: function(){
    var newStockHtml = stockTemplate(this);
    $(this.el).append(newStockHtml);
    console.log
    }
});
var aapl = new StockView({
  name: 'AAPL',
  price: 380,
  el: $('.stock-price:eq(0)')
});

var goog = new StockView({
  name: 'GOOG',
  price: 800,
  el: $('.stock-price:eq(1)')
});

aapl.render();
goog.render();

//7 
//REVIEW
// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({
  //WHAT IS THIS className
  // className: 'dress',
  // initialize: function(options) {
  //   this.color = options.color;
  //   this.price = options.price;
  // },
  //What is 'this' - how is it getting to div.dress
//   render: function() {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price })
//     $(this.el).html(newDressHtml);
//     console.log(this.el)
//   }
// });

// var dressOne = new DressView({
//   color: 'green',
//   price: 14.99
// });
// var dressTwo = new DressView({
//   color: 'red',
//   price: 18.99
// });
// dressOne.render();
// dressTwo.render();
// $('body').append(dressOne.el);
// $('body').append(dressTwo.el);
// console.log(dressOne.el);

// //8 
var buttonTemplateHtml = $('#templates .button').html();
var buttonTemplate = _.template(buttonTemplateHtml);
var ButtonView = Backbone.View.extend({
  render: function(){
    var newButtonHtml = buttonTemplate({ buttonText: 'backbone iz coo' });
    $(this.el).html(newButtonHtml);
  }
});
var buttonOne = new ButtonView({
  el: $('.button_one')
});
buttonOne.render();

//9 
var profileTemplate = _.template('{{name}} Age: {{age}}');
var ProfileView = Backbone.View.extend({
  initialize: function(options){
    this.name = options.name,
    this.age = options.age
  },
  render: function(){
    var newProfileHtml = profileTemplate(this);
    $(this.el).append(newProfileHtml);
  }
});
var profileView = new ProfileView({
  name: 'Bob',
  age: 45,
  el: $('.profile')
});
profileView.render();

//10
//REVIEW - what this event does
var dressTemplateHtml = $('#templates .dress').html();
var dressTemplate = _.template(dressTemplateHtml);
var DressView = Backbone.View.extend({
  events: {
    'click button.buy': 'purchase'
  },
  initialize: function(options) {
    this.color = options.color;
    this.price = options.price;
  },
  render: function() {
    var newDressHtml = dressTemplate({ color: this.color, price: this.price });
    $(this.el).html(newDressHtml)
  }
});

var dressOnSaleYo = new DressView({
  color: 'burnt orange',
  price: 59.99
});

dressOnSaleYo.render();
$('body').append(dressOnSaleYo.el);

//11
var pingServer = _.extend({}, Backbone.Events);

var StudentView = Backbone.View.extend({
  initialize: function(options) {
  },
  ping: function() {
    pingServer.trigger('ping', this.name);
  }
});

var InstructorView = Backbone.View.extend({
  totalPings: 0,
  initialize: function(options) {
    this.listenTo(pingServer, 'ping', this.recordPop)
  },
  recordPop: function(name) {
    this.totalPings += 1;
  }
});

var alice = new StudentView({ name: 'Alice' });
var bob = new StudentView({ name: 'Bob' });
var instructor = new InstructorView({ name: 'Dr. Professor' });

alice.ping();
alice.ping();
console.log('Instructor should have 2 pings:', instructor.totalPings);
bob.ping();
bob.ping();
bob.ping();
bob.ping();
bob.ping();
console.log('Instructor should have 7 pings:', instructor.totalPings);




