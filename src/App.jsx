import './App.css'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import TaskList from './components/TaskList'

const App = () => {
	const tasks = [
		{ title: 'Drink Coffee' },
		{ title: 'Learn React' },
		{ title: 'Play Games' },
	]
	return (
		<section className='todoapp'>
			<div className='app'>
				<header className='header'>
					<h1>Todos</h1>
					<NewTaskForm />
				</header>
				<section className='main'>
					<TaskList tasks={tasks} />
					<Footer />
				</section>
			</div>
		</section>
	)
}

export default App
