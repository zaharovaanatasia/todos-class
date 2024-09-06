import './App.css'
import { Component } from 'react'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

class App extends Component {
	constructor() {
		super()

		this.deleteTask = this.deleteTask.bind(this)
		this.addTask = this.addTask.bind(this)
		this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this)
	}

	state = {
		tasks: [
			{ id: Date.now() + 1, title: 'Drink Coffee', completed: false },
			{ id: Date.now() + 2, title: 'Learn React', completed: false },
			{ id: Date.now() + 3, title: 'Play Games', completed: false },
		],
	}

	toggleTaskCompletion(taskId) {
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			),
		}))
	}

	deleteTask(taskId) {
		this.setState(prevState => ({
			tasks: prevState.tasks.filter(task => task.id !== taskId),
		}))
	}

	addTask(newTitle) {
		const newTask = {
			id: Date.now(),
			title: newTitle,
			completed: false,
		}
		this.setState(prevState => ({
			tasks: [newTask, ...prevState.tasks],
		}))
	}

	render() {
		return (
			<section className='todoapp'>
				<div className='app'>
					<header className='header'>
						<h1>Todos</h1>
						<NewTaskForm addTask={this.addTask} />
					</header>
					<section className='main'>
						<TaskList
							tasks={this.state.tasks}
							toggleTaskCompletion={this.toggleTaskCompletion}
							deleteTask={this.deleteTask}
						/>
						<Footer />
					</section>
				</div>
			</section>
		)
	}
}

export default App
