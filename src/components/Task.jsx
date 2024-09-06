import { Component } from 'react'

class Task extends Component {
	render() {
		const { id, title, completed, toggleTaskCompletion, deleteTask } =
			this.props

		return (
			<span className={`${completed ? 'completed' : ''}`}>
				<div className='view'>
					<input
						className='toggle'
						type='checkbox'
						checked={completed}
						onChange={() => toggleTaskCompletion(id)}
					/>
					<label onClick={() => toggleTaskCompletion(id)}>
						<span className='description'>{title}</span>
						<span className='created'>created </span>
					</label>
					<button className='icon icon-edit' />
					<button className='icon icon-destroy' onClick={deleteTask} />
				</div>
			</span>
		)
	}
}

export default Task
