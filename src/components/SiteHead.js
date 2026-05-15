import PropTypes from 'prop-types';
import React from 'react';

const SiteHead = ({
	title = 'sekai.co.uk',
	description = 'Personal site',
	keywords = 'web developer, gatsby, react, php',
}) => {
	const siteTitle = 'sekai.co.uk';
	const pageTitle =
		title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

	return (
		<>
			<html lang="en" />
			<title>{pageTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteTitle} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={description} />
		</>
	);
};

SiteHead.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
};

export default SiteHead;
