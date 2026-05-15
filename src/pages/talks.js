import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SiteHead from '../components/SiteHead';

const TalksPage = () => (
	<Layout>
		<h1>Talks</h1>
		<p>Resources and links from talks I've given.</p>

		<ul>
			<li>
				<Link to="/os">Embracing Open Source</Link>: resources for
				getting started with open source contribution.
			</li>
			<li>
				<Link to="/gutenberg">Help Shape Gutenberg</Link>: resources
				for getting started with Gutenberg contribution.
			</li>
		</ul>

		<Link to="/">← back to sekai.co.uk</Link>
	</Layout>
);

export default TalksPage;

export const Head = () => (
	<SiteHead
		title="Talks"
		description="Resources and links from talks by Sarah Norris."
	/>
);
