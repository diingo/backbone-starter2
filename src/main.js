
// Remove this line when you start working
// 3
// var ButtonView = Backbone.View.extend({

//   render: function() { $(this.el).html('<button>I do nothing!</button>');
//   }
// });

// var buttonView = new ButtonView({
//   el: $('.my-button')
// });

// buttonView.render();

//4
// var ProfileView = Backbone.View.extend({
//   initialize: function(options){
//     this.name = options.name;
//     this.age = options.age;
//   },
//   render: function(){
//     $('.profile').append("name:" + this.name + this.age);
//   }
// });

// var profileView = new ProfileView({
//   name: 'Bob',
//   age: 45
// });

// profileView.render();


// 5
var WhinyView = Backbone.View.extend({
  events: {
    'click .my-button': 'whine'
  },
  whine: function(){
    alert('owwwwwwwww');
  },
  render: function(){
    $(this.el).html('<button class="my-button">o_o</button>');
    return this;
  }
});

var view = new WhinyView();
$('body').append( view.render().el );

// 6
var DummyView = Backbone.View.extend({});

var view = new DummyView();

view.on('random-event-name', function (x,y,z) {
  console.log('bluh!', x, y, z);
});

view.trigger('random-event-name', 11, 22, 33);

view.off('random-event-name');
view.trigger('random-event-name', 99, 88, 77); // Nothing happens!

// 7
var DummyView = Backbone.View.extend({});

var ear = new DummyView();
var mouth = new DummyView();

ear.listenTo(mouth, 'shout', function (message) {
  console.log('The ear hears:', message);
});

mouth.trigger('shout', "EAR!! WHERE ARE YOU??");

// Stops listening to all 'shout' events on mouth
ear.stopListening(mouth, 'shout');
// ALTERNATIVE: Stops listening to ALL EVENTS on mouth
// ear.stopListening(mouth);

mouth.trigger('shout', "EAR!! EAR!!!!!"); // Nothing happens!


// 8
// ASK 
// var DummyView = Backbone.View.extend({});
// var dog = new DummyView();
// var thief = new DummyView();
// var alarm = new DummyView();
// var bark = function(){
//   console.log('bark bark');
// }
// dog.listenTo(thief, 'scuffle', 'bark');
// thief.listenTo(dog, 'bark', function bark() {
//   console.log('bark bark');
// });
// thief.listenTo(alarm, 'ring', function(){
//   console.log('panic panic')
// });

// console.log("----\nThe thief makes a scuffle!");
// thief.trigger('scuffle');

// console.log("----\nThe alarm goes off!");
// alarm.trigger('ring');

// 9.1 
// var radioStation = _.extend({}, Backbone.Events);

// var DummyView = Backbone.View.extend({});
// var view = new DummyView();

// view.listenTo(radioStation, 'new_deal', function(deal){
//   console.log("It's a new deal!", deal);
// });

// radioStation.trigger('new_deal', { name: 'Buy 1 Get 1 FREE' });

// 9.2
var radioStation = _.extend({}, Backbone.Events);

var BubbleView = Backbone.View.extend({
  initialize: function (options) {
    this.size = options.size;
  },

  pop: function () {
    // Broadcast the fact that we popped!
    radioStation.trigger('pop', this.size);
  }
});

var BubbleCounterView = Backbone.View.extend({
  total: 0,

  initialize: function (options) {
    this.listenTo(radioStation, 'pop', this.recordPop);
  },

  recordPop: function (bubbleSize) {
    this.total += bubbleSize;
    console.log('Total bubble size popped:', this.total);
  }
});

var smallBubbleView = new BubbleView({ size: 2 });
var largeBubbleView = new BubbleView({ size: 17 });
var bubbleCounterView = new BubbleCounterView();

smallBubbleView.pop();
largeBubbleView.pop();


// 10 
// var chatServer = _.extend({}, Backbone.Events);
// var testChatListener = new (Backbone.View.extend({}));
// var chatCount = 0;
// testChatListener.listenTo(chatServer, 'message', function(name, message){
//   console.log(name, 'says:', message);
//   chatCount += 1;
// });


// var ChatView = Backbone.View.extend({
//     initialize: function(options){
//       this.name = options.name
//     },
//     sendMessage: function(message){
//       chatServer.trigger('message', this.name, message);
//     }
// });
// var aliceChatView = new ChatView({ name: 'Alice' });
// var bobChatView = new ChatView({ name: 'Bob' });

// bobChatView.sendMessage('hi alice');
// aliceChatView.sendMessage('who is this?');
// bobChatView.sendMessage('alice no');

// console.log('chat count should be 3:', chatCount);

// 11
//ASK
// var chatServer = _.extend({}, Backbone.Events);
// var testChatListener = new (Backbone.View.extend({}));
// var chatCount = 0;

// testChatListener.listenTo(chatServer, 'message', function(name, message){
//   console.log(name, 'says:', message);
//   chatCount += 1;
// });

// var ChatView = Backbone.View.extend({
//     initialize: function(options){
//       this.name = options.name,
//       this.listenTo(chatServer, 'message', this.onMessage)
//     },
//     sendMessage: function(message){
//       chatServer.trigger('message', this.name, message);
//     },
//     onMessage: function(name, message){
//       console.log(this.name, " heard ", name, " say: ", message)
//     }
// });
// var aliceChatView = new ChatView({ name: 'Alice' });
// var bobChatView = new ChatView({ name: 'Bob' });

// bobChatView.sendMessage('hi alice');
// aliceChatView.sendMessage('who is this?');
// bobChatView.sendMessage('alice no');

// console.log('chat count should be 3:', chatCount);



