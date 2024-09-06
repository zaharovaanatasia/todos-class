import { Component } from 'react'
import Task from './Task'

class TaskList extends Component {
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
