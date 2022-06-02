import { useState } from 'react'


export default function Affirmation() {
    const [gratitude, setGratitude] = useState('')
	const [finalGratitude, setFinalGratitude] = useState(false)

	const handleChange = (e) => {
		setGratitude(e.target.value)
	}
    const handleSubmit = (e) => {
		e.preventDefault()
	
		setFinalGratitude(true)
	}
return(
    <div className='App'>
<div>
<header className="header text">Affirmation</header>
</div>
<div className="card ">
     <div className='container'>
  
  
<div className='journal-body'>
{!finalGratitude ? (
				<>
					<div className='description'>
						What affirmation do you want to give to yourself today?
					</div>
					<form onSubmit={handleSubmit}>
						<textarea
							className='journal-input'
							value={gratitude}
							onChange={handleChange}
						/>
						<br />
						<button
							type='submit'
							className='submit-button'
							disabled={gratitude.length === 0}>
							Submit
						</button>{' '}
					</form>
				</>
			) : (
				<>
					<h2>Today's Entry</h2>
					<div className='description'>{gratitude}</div>
				</>
			)}
         </div> 
         </div>
         </div>
         </div>
)
}