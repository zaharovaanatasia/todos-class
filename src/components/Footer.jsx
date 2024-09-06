import TasksFilter from './TasksFilter'
import React, { Component } from 'react'

class Footer extends Component {
	render() {
		const { activeTasksCount, filterTasks, filter, clearCompletedTasks } =
			this.props
		const itemLabel = activeTasksCount === 1 ? 'item' : 'items'
		return (
			<footer className='footer'>
				<span className='todo-count'>
					{' '}
					{activeTasksCount} {itemLabel} left
				</span>
				<TasksFilter filter={filter} filterTasks={filterTasks} />
				<button className='clear-completed' onClick={clearCompletedTasks}>
					Clear completed
				</button>
			</footer>
		)
	}
}

export default Footer
