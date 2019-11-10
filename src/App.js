import React from 'react';
import logo from './logo.svg';
import './App.css';

import QRCode from './components/qrcode';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<QRCode 
					id="test"
					width="100"
					height="100"
					data="https://google.com"
					encoding="UTF-8"
					correction="L"
				></QRCode>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
