import React from 'react'

const App: React.FC = () => {
	return (
		<div className={`absolute inset-0 grid place-items-center bg-slate-900`}>
			<p className={`text-[10vw] font-semibold text-gray-200`}>
				<span>Hello, Alien!</span>
			</p>
		</div>
	)
}

export default App
