

const NewTaskForm = () => {

	return (
		<form>
			<input
				type='text'
				className='new-todo'
				placeholder='What needs to be done?'
				autoFocus
				required
			/>
		</form>
	)

}

export default NewTaskForm;