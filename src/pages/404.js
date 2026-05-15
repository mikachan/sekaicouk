import React from 'react';
import Layout from '../components/layout';
import SiteHead from '../components/SiteHead';

const NotFoundPage = () => (
	<Layout>
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
);

export default NotFoundPage;

export const Head = () => (
	<SiteHead
		title="Page not found"
		description="The requested page could not be found."
	/>
);
