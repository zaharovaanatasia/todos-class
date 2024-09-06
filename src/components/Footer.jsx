import TasksFilter from './TasksFilter'
import { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
	static defaultProps = {
		activeTasksCount: 0,
		filter: 'All',
		clearCompletedTasks: () => {},
	}
	static propTypes = {
		activeTasksCount: PropTypes.number,
		filterTasks: PropTypes.func,
		filter: PropTypes.string,
		clearCompletedTasks: PropTypes.func,
	}

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
