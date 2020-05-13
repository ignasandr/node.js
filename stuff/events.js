var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var iggyTheBadBoy = new Person('iggyTheBadBoy');

var people = [james, mary, iggyTheBadBoy];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey dudes');
mary.emit('speak', 'whatsup duderino?');
iggyTheBadBoy.emit('speak', 'who`s the sexy brat?');
mary.emit('speak', 'you, babes');
