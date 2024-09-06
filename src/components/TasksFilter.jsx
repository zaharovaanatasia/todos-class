import { Component } from 'react'
import PropTypes from 'prop-types'

class TasksfIlter extends Component {
	static defaultProps = {
		filter: 'All',
		filterTasks: () => {},
	}

	static propTypes = {
		filter: PropTypes.string,
		filterTasks: PropTypes.func,
	}

	render() {
		const { filter, filterTasks } = this.props
		return (
			<ul className='filters'>
				<li>
					<button
						className={filter === 'All' ? 'selected' : ''}
						onClick={() => filterTasks('All')}
					>
						All
					</button>
					<button
						className={filter === 'Active' ? 'selected' : ''}
						onClick={() => filterTasks('Active')}
					>
						Active
					</button>
					<button
						className={filter === 'Completed' ? 'selected' : ''}
						onClick={() => filterTasks('Completed')}
					>
						Completed
					</button>
				</li>
			</ul>
		)
	}
}

export default TasksfIlter
