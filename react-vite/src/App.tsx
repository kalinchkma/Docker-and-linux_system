/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>React with docker</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					Click counter {count}
				</button>
			</div>
			<p className='read-the-docs'>Live change</p>
			<div>hello world</div>
		</>
	);
}

export default App;
