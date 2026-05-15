import React from 'react';
import Layout from '../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const OsPage = () => (
	<Layout>
		<h1>Beyond Hamburgers</h1>
		<p>
			Thank you for attending my talk! Here is a list of resources about the Navigation Overlay template part, how you can use it and how you can contribute to it.
		</p>

		<h3>Using the Navigation Overlay template part</h3>
		<ul>
			<li>
				<OutboundLink
					href=""
					target="_blank"
				>
					Talk slides
				</OutboundLink>
				: slides from my Beyond Hamburgers talk
			</li>
			<li>
				<OutboundLink
					href="https://make.wordpress.org/core/2026/03/04/customisable-navigation-overlays-in-wordpress-7-0/"
					target="_blank"
				>
					Dev note
				</OutboundLink>
				: Customisable navigation overlays in WordPress 7.0
			</li>
		</ul>
		<h3>Contributing to the Navigation Overlay template part</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://github.com/open-sauced/open-sauced"
					target="_blank"
				>
					Open Sauced
				</OutboundLink>
				: structured onboarding for new contributors
			</li>
			<li>
				<OutboundLink
					href="https://opensource.guide/how-to-contribute/"
					target="_blank"
				>
					opensource.guide
				</OutboundLink>
				: learn more about how to contribute to open source
			</li>
			<li>
				<OutboundLink
					href="https://kentcdodds.com/blog/introducing-how-to-contribute-to-open-source"
					target="_blank"
				>
					Kent C. Dodds on open source
				</OutboundLink>
			</li>
		</ul>

		<a href="/">← back to sekai.co.uk</a>
	</Layout>
);

export default OsPage;
