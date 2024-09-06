import { Component } from 'react'

class TasksfIlter extends Component {
	render() {
		return (
			<ul className='filters'>
				<li>
					<button>All</button>
					<button>Active</button>
					<button>Completed</button>
				</li>
			</ul>
		)
	}
}

export default TasksfIlter
