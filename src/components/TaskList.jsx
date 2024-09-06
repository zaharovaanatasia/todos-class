import { Component } from 'react'
import Task from './Task'
import PropTypes from 'prop-types'

class TaskList extends Component {
	static defaultProps = {
		tasks: [],
		deleteTask: () => {},
		toggleTaskCompletion: () => {},
		editTask: () => {},
	}

	static propTypes = {
		tasks: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				completed: PropTypes.bool.isRequired,
			})
		).isRequired,
		deleteTask: PropTypes.func.isRequired,
		toggleTaskCompletion: PropTypes.func.isRequired,
		editTask: PropTypes.func.isRequired,
	}

	render() {
		const { tasks, deleteTask, toggleTaskCompletion, editTask } = this.props
		return (
			<ul className='todo-list'>
				{tasks.map(task => (
					<li key={task.id}>
						<Task
							id={task.id}
							title={task.title}
							completed={task.completed}
							createdAt={new Date(task.createdAt)}
							toggleTaskCompletion={toggleTaskCompletion}
							deleteTask={() => deleteTask(task.id)}
							editTask={editTask}
						/>
					</li>
				))}
			</ul>
		)
	}
}

export default TaskList
