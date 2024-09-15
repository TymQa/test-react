import React from 'react'

function App() {
	const handleGetPing = async () => {
		try {
			console.log('Sending GET request to /ping')
			const response = await fetch('https://bazario-backend.onrender.com/ping')
			const data = await response.text()
			console.log('GET /ping response:', data)
		} catch (error) {
			console.error('Error with GET /ping:', error)
		}
	}

	const handlePostPing = async () => {
		try {
			console.log('Sending POST request to /ping')
			const response = await fetch(
				'https://bazario-backend.onrender.com/ping',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ message: 'ping' }),
				}
			)
			const data = await response.text()
			console.log('POST /ping response:', data)
		} catch (error) {
			console.error('Error with POST /ping:', error)
		}
	}

	return (
		<div style={{ padding: '20px', textAlign: 'center' }}>
			<h1>Hello, World!</h1>
			<button onClick={handleGetPing} style={{ marginRight: '10px' }}>
				Send GET Ping
			</button>
			<button onClick={handlePostPing}>Send POST Ping</button>
		</div>
	)
}

export default App
