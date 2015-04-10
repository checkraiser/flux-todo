var AppDispatcher = require('../dispatcher/AppDispatcher');
var Api = require('../Api');
var TodoStoreActions = {

  loadTodos: function() {
    AppDispatcher.handleViewAction({
      actionType: "LOAD_TODOS",
      data: {todos: Api.todos};
    })
  }

};

module.exports = TodoStoreActions;