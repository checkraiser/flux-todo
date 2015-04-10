'use strict'
var React = require('react');
var TodoItem = React.createClass({
	getInitialState: function(){
		return {edit: false, content: this.props.item.content}
	},
	render: function(){
		if (this.state.edit === false){
			return (
				<li>
					{this.props.item.content}&nbsp;<button onClick={() => this.setState({edit: true})}>Edit</button>
				</li>
			)
		} else{
			return (
				<li>
					<input type="text" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
				</li>
			)
		}
		
	}
});

module.exports = TodoItem;