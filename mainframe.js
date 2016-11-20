const MainFrame = {
	getUserId: (jwtToken) => {
		return jwtToken
	},

	completePuzzle: (jwtToken, puzzleNumber) => {
		console.log(`${jwtToken} completed ${puzzleNumber}`)
	},

	getCompletedPuzzles: (jwtToken) => {
		return [1, 2, 3, 4, 5]
	}
}

module.exports = MainFrame
