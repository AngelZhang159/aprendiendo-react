import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {

	const [enabled, setEnabled] = useState(false)
	const [pos, setPos] = useState({ x: 0, y: 0 })
	useEffect(() => {
		console.log('efecto')

		const handleMove = (event) => {
			const { clientX, clientY } = event
			console.log('handleMove', { clientX, clientY })
			setPos({ x: clientX, y: clientY })
		}

		if (enabled) {
			window.addEventListener('pointermove', handleMove)
		}

		return () => {
			window.removeEventListener('pointermove', handleMove)
		}

	}, [enabled])


	return (
		<>
			<div style={{
				position: 'absolute',
				backgroundColor: '#09f',
				borderRadius: '50%',
				opacity: '.8',
				pointerEvents: 'none',
				left: -25,
				right: -25,
				width: 50,
				height: 50,
				transform: `translate(${pos.x}px, ${pos.y}px)`
			}} />

			<h3>Proyecto 3</h3>

			<button onClick={() => { setEnabled(!enabled) }}>{enabled ? "Desactivar" : "Activar"} seguir puntero</button>
		</>
	)
}

function App() {
	const [mounted, setMounted] = useState(true)

	return (
		<>
			{mounted && <FollowMouse />}
			<button onClick={() => { setMounted(!mounted) }}>
				Toggle mounted FollowMouse component
			</button>
		</>
	)
}

export default App
