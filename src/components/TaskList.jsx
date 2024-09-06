import Task from './Task'

const TaskList = ({ tasks }) => {
	return (
		<ul className='todo-list'>
			{tasks.map(task => (
				<li key={task.id}>
					<Task id={task.id} title={task.title} />
				</li>
			))}
		</ul>
	)
}

export default TaskList
