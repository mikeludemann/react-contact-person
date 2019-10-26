import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Person, PersonWithHeadline, PersonWithHeadlineAndMail } from './components/contact-person';

const data = [
	{
		firstName: 'John',
		lastName: 'Doe',
		secondName: 'James',
		mail: 'jd@test.org'
	}
];

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<Person 
					containerClass="main--element"
					elementClass="main--element--contact"
					persons={data}
				></Person>
				<PersonWithHeadline 
					containerClass="main--element"
					elementClass="main--element--contact"
					headlineClass="main--element--headline"
					headline="My headline"
					persons={data}
				></PersonWithHeadline>
				<PersonWithHeadlineAndMail 
					containerClass="main--element"
					elementClass="main--element--contact"
					headlineClass="main--element--headline"
					headline="My headline"
					persons={data}
				></PersonWithHeadlineAndMail>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
