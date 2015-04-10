'use strict'
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// Internal object of todos
var _todos = [];

// Method to load todos from action data
function loadTodos(data) {
  _todos = data.todos;
}

// Merge our store with Node's Event Emitter
var TodoStore = assign({}, EventEmitter.prototype, {

  // Returns all todos
  getTodos: function() {
    return _todos;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;
  // Define what to do for certain actions
  switch(action.actionType) {
    case "LOAD_TODOS":
      // Call internal method based upon dispatched action
      loadTodos(action.data);
      break;

    default:
      return true;
  }
  
  // If action was acted upon, emit change event
  TodoStore.emitChange();

  return true;

});

module.exports = TodoStore;