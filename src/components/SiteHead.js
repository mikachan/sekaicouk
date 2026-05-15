import React from 'react';

const SiteHead = ({
	title = 'sekai.co.uk',
	description = 'Personal site',
	keywords = 'web developer, gatsby, react, php',
}) => (
	<>
		<html lang="en" />
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta name="keywords" content={keywords} />
	</>
);

export default SiteHead;
