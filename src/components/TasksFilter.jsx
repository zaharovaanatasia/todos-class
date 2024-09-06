import { Component } from 'react'

class TasksfIlter extends Component {
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
