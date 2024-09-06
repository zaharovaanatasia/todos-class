import React from 'react'


const Task = ({ title = 'Untitled Task' }) => {
	return (
		<span>
			<div className='view'>
				<input className='toggle' type='checkbox' />
				<label>
					<span className='description'>{title}</span>
					<span className='created'>created </span>
				</label>
				<button className='icon icon-edit' />
				<button className='icon icon-destroy' />

				
			</div>
		</span>
	)
}

export default Task
