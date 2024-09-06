import './App.css';
import { Component } from 'react';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = {
    tasks: [],
    filter: 'All',
  };

  static propTypes = {
    tasks: PropTypes.array,
    filter: PropTypes.string,
  };

  constructor() {
    super();
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.toggleTaskCompletion = this.toggleTaskCompletion.bind(this);
    this.activeTasksCount = this.activeTasksCount.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.clearCompletedTasks = this.clearCompletedTasks.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  state = {
    tasks: [],
    filter: 'All',
  };

  toggleTaskCompletion(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
    }));
  }

  deleteTask(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  addTask(newTitle) {
    const newTask = {
      id: Date.now(),
      title: newTitle,
      completed: false,
      createdAt: new Date(),
    };
    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks],
    }));
  }

  activeTasksCount() {
    return this.state.tasks.filter((task) => !task.completed).length;
  }

  filterTasks(newFilter) {
    this.setState({ filter: newFilter });
  }
  clearCompletedTasks() {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => !task.completed),
    }));
  }

  editTask(taskId, newTitle) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => (task.id === taskId ? { ...task, title: newTitle } : task)),
    }));
  }
  render() {
    const { tasks, filter } = this.state;
    const filteredTask = tasks.filter((task) => {
      if (filter === 'Active') return !task.completed;
      if (filter === 'Completed') return task.completed;
      return true; // 'All'
    });

    return (
      <section className="todoapp">
        <div className="app">
          <header className="header">
            <h1>Todos</h1>
            <NewTaskForm addTask={this.addTask} />
          </header>
          <section className="main">
            <TaskList
              tasks={filteredTask}
              toggleTaskCompletion={this.toggleTaskCompletion}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
            />
            <Footer
              tasks={this.state.tasks}
              activeTasksCount={this.activeTasksCount()}
              filterTasks={this.filterTasks}
              filter={filter}
              clearCompletedTasks={this.clearCompletedTasks}
            />
          </section>
        </div>
      </section>
    );
  }
}

export default App;
