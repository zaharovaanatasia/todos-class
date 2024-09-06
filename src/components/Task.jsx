import { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

class Task extends Component {
	static defaultProps = {
		title: '',
		completed: false,
		toggleTaskCompletion: () => {},
		deleteTask: () => {},
		editTask: () => {},
	}

	static propTypes = {
		id: PropTypes.number.isRequired,
		title: PropTypes.string,
		completed: PropTypes.bool,
		createdAt: PropTypes.instanceOf(Date).isRequired,
		toggleTaskCompletion: PropTypes.func.isRequired,
		deleteTask: PropTypes.func.isRequired,
		editTask: PropTypes.func.isRequired,
	}

	state = {
		isEditing: false,
		editedTitle: this.props.title,
	}

	handleEdit = () => {
		if (!this.props.completed) {
			this.setState({ isEditing: true })
		}
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
		const {
			id,
			title,
			completed,
			toggleTaskCompletion,
			deleteTask,
			createdAt,
		} = this.props
		const { isEditing, editedTitle } = this.state

		const timeAgo = formatDistanceToNow(new Date(createdAt), {
			addSuffix: true,
			includeSeconds: true,
		})
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
						<span className='created'>created {timeAgo}</span>
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
