import { Component } from 'react'

class NewTaskForm extends Component {
	constructor() {
		super()
		this.state = { title: '' }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = event => {
		this.setState({ title: event.target.value })
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.addTask(this.state.title)
		this.setState({ title: '' })
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					className='new-todo'
					placeholder='What needs to be done?'
					autoFocus
					required
					value={this.state.title}
					onChange={this.handleChange}
				/>
			</form>
		)
	}
}

export default NewTaskForm
