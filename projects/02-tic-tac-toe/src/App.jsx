import { useState } from "react"
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameStorage, saveGameToStorage } from "./logic/storage";


function App() {

	const [board, setBoard] = useState(() => {
		const board = window.localStorage.getItem("board")

		if (board) {
			return JSON.parse(board)
		} else {
			return Array(9).fill(null)
		}
	})

	const [turn, setTurn] = useState(() => {
		const turn = window.localStorage.getItem("turn")

		if (turn) {
			return turn
		} else {
			return TURNS.X
		}
	})

	const [winner, setWinner] = useState(null)


	const resetGame = () => {
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
		resetGameStorage()
	}


	const updateBoard = (index) => {
		if (board[index]) { return }

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)

		saveGameToStorage(newBoard, newTurn)

		const newWinner = checkWinner(newBoard)

		if (newWinner) {
			confetti()
			setWinner(newWinner)
		} else if (checkEndGame(newBoard)) {
			setWinner(false)
		}
	}

	return (
		<main className="board">
			<h1>Tic Tac Toe</h1>

			<button onClick={resetGame}>
				Resetear Juego
			</button>

			<section className="game">
				{
					board.map((_, index) => {
						return (
							<Square
								key={index}
								index={index}
								updateBoard={updateBoard}
							>
								{board[index]}
							</Square>
						)
					})
				}
			</section>

			<section className="turn">
				<Square isSelected={turn === TURNS.X}>
					{TURNS.X}
				</Square>
				<Square isSelected={turn === TURNS.O}>
					{TURNS.O}
				</Square>
			</section>

			<WinnerModal resetGame={resetGame} winner={winner} />

		</main>
	)
}

export default App
