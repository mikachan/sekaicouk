import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">
			Built with:{' '}
			<a href="https://www.gatsbyjs.org/" target="_blank">
				Gatsby.js
			</a>
		</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool,
};

export default Footer;
