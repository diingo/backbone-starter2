//3
var Todo = Backbone.Model.extend({

  uncheck: function() {
    this.set({ complete: false })
  }
});

//4 
var Player = Backbone.Model.extend({
  hurt: function(dmg){
    this.set({ hp: this.get('hp') - dmg});
  }
});

var mario = new Player({ hp: 100 });
console.log('Mario should have 100 hp: ', mario.get('hp'));

mario.hurt(25);
console.log('Mario should have 75 hp:', mario.get('hp'));

//5
var Profile = Backbone.Model.extend({
  species: 'human',
  defaults: {
    mood: 'contemplative'
  }
});

var alice = new Profile({
  name: 'Alice',
  favoriteFood: 'Apples'
});

console.log('Species?', alice.species);
console.log('Favorite food?', alice.get('favoriteFood'));
console.log('Mood?', alice.get('mood'));

//6
var Entity = Backbone.Model.extend({
  defaults: {
    hp: 20,
    strength: 9
  },
  attack: function(target) {
    var enemyHP = target.get('hp');
    var playerStrength = this.get('strength');
    if (enemyHP - playerStrength >=0) {
      result = enemyHP - playerStrength; 
    } else {
      result = 0;
    }

    target.set({ hp: result });

  }
});

var player = new Entity({ hp: 45, strength: 17 });
var enemy = new Entity();

console.log('Player should have 45 hp:', player.get('hp'));
console.log('Enemy should have 20 hp:', enemy.get('hp'));

player.attack(enemy);
enemy.attack(player);
console.log('Player should have 36 hp:', player.get('hp'));
console.log('Enemy should have 3 hp:', enemy.get('hp'));

player.attack(enemy);
console.log('Enemy should have 0 hp:', enemy.get('hp'));

//7
//REVEIW - What is newComplete?? ?? 
var Todo = Backbone.Model.extend({
  uncheck: function(){
    this.set({ complete: false })
  }
});

window.todo = new Todo({ name: 'Learn models' });

//
// Listen for ALL property changes
//
todo.on('change', function(model) {
  console.log("\nSomething changed in model: " + model.get('name'));
});
//
// Listen for ONLY a property change on 'complete'
//
todo.on('change:complete', function(model, newComplete) {
  if (newComplete) {
    alert(model.get('name') + ' is now complete!');
  } else {
    alert("Oops, " + model.get('name') + "isn't done yet.")
  }
});


//8
var KungFuBoard = Backbone.Model.extend({
  initialize: function(attrs){
    this.size = attrs.hp,
    this.on('change:hp', this.break)
  },
  damage: function(amount){
    var hp = this.get('hp');
    var dmg = amount;
    if (hp - amount >= 0) {
      var result = hp - amount;
    } else {
      var result = 0;
    }
    this.set({ hp: result });
  },
  break: function(){
    var hp = this.get('hp');
    var size = this.size;
    if(hp === 0) {
      console.log("A ", size, " board breaks!");
    } else {
      console.log("Still alive (HP: ", hp, ")");
    }
  }
});

var smallBoard = new KungFuBoard({ hp: 5 });
var bigBoard = new KungFuBoard({ hp: 10 });

smallBoard.damage(4);
smallBoard.damage(3);
console.log('Small board hp should be zero:', smallBoard.get('hp'));

bigBoard.damage(4);
bigBoard.damage(4);
bigBoard.damage(4);
console.log('Big board hp should be zero:', bigBoard.get('hp'));








