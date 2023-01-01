import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => (
	<footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
		<p className="copyright">&copy; 2003-2023.</p>
	</footer>
);

Footer.propTypes = {
	timeout: PropTypes.bool,
};

export default Footer;
