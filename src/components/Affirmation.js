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
	const activateMicrophone =  ( )  => {

		console.log('Submit')
		
		//Add microphone access
		navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
			if (!MediaRecorder.isTypeSupported('audio/webm'))
				return alert('Browser not supported')
			const mediaRecorder = new MediaRecorder(stream, {
				mimeType: 'audio/webm',
			})
		})
		//create a websocket connection
		 
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
						</button>

<button
	onClick={activateMicrophone}
	type='button'
	className='submit-button'>
	Voice 💬
</button>

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