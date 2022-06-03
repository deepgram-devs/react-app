import { useState } from 'react'


export default function Affirmation() {
    const [affirmation, setAffirmation] = useState('')
	const [finalAffirmation, setFinalAffirmation] = useState(false)

	const handleChange = (e) => {
		setAffirmation(e.target.value)
	}
    const handleSubmit = (e) => {
		e.preventDefault()
	
		setFinalAffirmation(true)
	}
return(
    <div className='App'>
<div>
<header className="header text">Affirmation</header>
</div>
<div className="card ">
     <div className='container'>
  
  
<div className='journal-body'>
{!finalAffirmation ? (
				<>
					<div className='description'>
						What affirmation do you want to give to yourself today?
					</div>
					<form onSubmit={handleSubmit}>
						<textarea
							className='journal-input'
							value={affirmation}
							onChange={handleChange}
						/>
						<br />
						<button
							type='submit'
							className='submit-button'
							disabled={affirmation.length === 0}>
							Submit
						</button>{' '}
					</form>
				</>
			) : (
				<>
					<h2>Today's Entry</h2>
					<div className='description'>{affirmation}</div>
				</>
			)}
         </div> 
         </div>
         </div>
         </div>
)
}