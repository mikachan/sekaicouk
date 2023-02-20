import About from './About';
import Contact from './Contact';
import PropTypes from 'prop-types';
import React from 'react';

function Main(props) {
	let close = (
		<button
			className="close"
			onClick={() => {
				props.onCloseArticle();
			}}
			aria-label="Close"
		/>
	);

	return (
		<div
			ref={props.setWrapperRef}
			id="main"
			style={props.timeout ? { display: 'flex' } : { display: 'none' }}
		>
			<About {...props} close={close} />
			<Contact {...props} close={close} />
		</div>
	);
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
