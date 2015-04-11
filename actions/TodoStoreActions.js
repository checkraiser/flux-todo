var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoStoreActions = {

  loadTodos: function() {
  	var todos = [
  		{id: 1, content: 'todo 1'},
  		{id: 2, content: 'todo 2'},
  		{id: 3, content: 'todo 3'}
	   ];
    return todos;
  }

};

module.exports = TodoStoreActions;