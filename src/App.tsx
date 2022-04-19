import React from 'react'
import data from './assets/data.json'
import { Tree } from './components'

const App: React.FC = () => {
	return (
		<main className={`absolute inset-0 flex justify-center pt-10`}>
			<Tree data={data as IDir[]} />
		</main>
	)
}

export default App
