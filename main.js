'use strict'
var React = require('react');
var TodoList = require('./components/TodoList');
var TodoStoreActions = require('./actions/TodoStoreActions');
var TodoStore = require('./stores/TodoStore')
// Method to retrieve application state from store
function getAppState() {
    return {
	   todos: TodoStoreActions.getTodos()
	};
}
var TodoApp = React.createClass({
	getInitialState: function(){
		return getAppState();
	},
	componentDidMount: function(){
		TodoStore.addChangeListener(this._onChange);
	},
	// Unbind change listener
	componentWillUnmount: function() {
	  TodoStore.removeChangeListener(this._onChange);
	},
	addTodo: function(){

	},
	render: function(){
		return (
			<div>
				<input type="text" ref="todo" />
				<button onClick={this.addTodo}>Add</button>
				<h2>Todos:</h2>
				<TodoList items={this.state.todos} />
			</div>
		)
	},
	_onChange: function() {
	  this.setState(getAppState());
	}
});

React.render(<TodoApp />, document.getElementById('example'));