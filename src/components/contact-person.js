import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
	render() {
		return (
			<div className={this.props.containerClass}>
				{this.props.persons.map((field) => {
					return <div className={this.props.elementClass}>
						<div className="firstName">{field.firstName}</div>
						<div className="secondName">{field.secondName}</div>
						<div className="lastName">{field.lastName}</div>
					</div>
				})}
			</div>
		);
	}
}

Person.propTypes = {
	containerClass: PropTypes.string,
	elementClass: PropTypes.string,
	persons: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string.isRequired,
			secondName: PropTypes.string,
			lastName: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

// -----------------------------------------

class PersonWithHeadline extends Component {
	render() {
		return (
			<div className={this.props.containerClass}>
				<div className={this.props.headlineClass}>
					{this.props.headline}
				</div>
				{this.props.persons.map((field) => {
					return <div className={this.props.elementClass}>
						<div className="firstName">{field.firstName}</div>
						<div className="secondName">{field.secondName}</div>
						<div className="lastName">{field.lastName}</div>
					</div>
				})}
			</div>
		);
	}
}

PersonWithHeadline.propTypes = {
	containerClass: PropTypes.string,
	headlineClass: PropTypes.string,
	elementClass: PropTypes.string,
	headline: PropTypes.string.isRequired,
	persons: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string.isRequired,
			secondName: PropTypes.string,
			lastName: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

// -----------------------------------------

class PersonWithHeadlineAndMail extends Component {
	render() {
		return (
			<div className={this.props.containerClass}>
				<div className={this.props.headlineClass}>
					{this.props.headline}
				</div>
				{this.props.persons.map((field) => {
					return <div className={this.props.elementClass}>
						<div className="firstName">{field.firstName}</div>
						<div className="secondName">{field.secondName}</div>
						<div className="lastName">{field.lastName}</div>
						<div className="mail"><a href={'mailto:' + field.mail}>{field.mail}</a></div>
					</div>
				})}
			</div>
		);
	}
}

PersonWithHeadlineAndMail.propTypes = {
	containerClass: PropTypes.string,
	headlineClass: PropTypes.string,
	elementClass: PropTypes.string,
	headline: PropTypes.string.isRequired,
	persons: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string.isRequired,
			secondName: PropTypes.string,
			lastName: PropTypes.string.isRequired,
			mail: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}

// -----------------------------------------

export {
	Person,
	PersonWithHeadline,
	PersonWithHeadlineAndMail
}
