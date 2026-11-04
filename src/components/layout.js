import React from 'react';
import PropTypes from 'prop-types';

import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/300-italic.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/600-italic.css';
import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
	let content;

	if (location && location.pathname === '/') {
		content = <div>{children}</div>;
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		);
	}

	return <>{content}</>;
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	location: PropTypes.shape({
		pathname: PropTypes.string,
	}),
};

export default Layout;
