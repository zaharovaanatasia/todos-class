import { Component } from 'react'

class Task extends Component {
	state = {
		isEditing: false,
		editedTitle: this.props.title,
	}

	handleEdit = () => {
		this.setState({ isEditing: true })
	}

	handleSave = () => {
		const { editedTitle } = this.state
		if (editedTitle.trim()) {
			this.props.editTask(this.props.id, editedTitle)
			this.setState({ isEditing: false })
		}
	}

	handleChange = event => {
		this.setState({ editedTitle: event.target.value })
	}

	handleKeyDown = event => {
		if (event.key === 'Enter') {
			this.handleSave()
		} else if (event.key === 'Escape') {
			this.setState({ isEditing: false, editedTitle: this.props.title })
		}
	}

	render() {
		const { id, title, completed, toggleTaskCompletion, deleteTask } =
			this.props
		const { isEditing, editedTitle } = this.state

		return (
			<span
				className={`task ${completed ? 'completed' : ''} ${
					isEditing ? 'editing' : ''
				}`}
			>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						checked={completed}
						onChange={() => toggleTaskCompletion(id)}
					/>
					<label onClick={() => toggleTaskCompletion(id)}>
						<span className='description'>{title}</span>
						<span className='created'>created</span>
					</label>
					<button className='icon icon-edit' onClick={this.handleEdit} />
					<button
						className='icon icon-destroy'
						onClick={() => deleteTask(id)}
					/>
				</div>
				{isEditing && (
					<form onSubmit={this.handleSave}>
						<input
							type='text'
							className='edit'
							value={editedTitle}
							onChange={this.handleChange}
							onKeyDown={this.handleKeyDown}
							onBlur={this.handleSave}
							autoFocus
						/>
					</form>
				)}
			</span>
		)
	}
}

export default Task
