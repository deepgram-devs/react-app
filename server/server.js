require('dotenv').config()

// Add Deepgram so we can get the transcription
const { Deepgram } = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)

// Add WebSocket 
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3002 })

// Open WebSocket Connection and initiate live transcription
wss.on('connection', (ws) => {
	const deepgramLive = deepgram.transcription.live({
		interim_results: true,
		punctuate: true,
		endpointing: true,
		vad_turnoff: 500,
	})

	deepgramLive.addListener('open', () => console.log('dg onopen'))

	deepgramLive.addListener('error', (error) => console.log({ error }))

	ws.onmessage = (event) => deepgramLive.send(event.data)

	ws.onclose = () => deepgramLive.finish()

	deepgramLive.addListener('transcriptReceived', (data) => ws.send(data))
})
