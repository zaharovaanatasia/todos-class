import { Component } from 'react'
import Task from './Task'

class TaskList extends Component {
	render() {
		const { tasks, deleteTask, toggleTaskCompletion } = this.props
		return (
			<ul className='todo-list'>
				{tasks.map(task => (
					<li key={task.id}>
						<Task
							id={task.id}
							title={task.title}
							completed={task.completed}
							toggleTaskCompletion={toggleTaskCompletion}
							deleteTask={() => deleteTask(task.id)}
						/>
					</li>
				))}
			</ul>
		)
	}
}

export default TaskList
