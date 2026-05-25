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
					href="https://docs.google.com/presentation/d/112zqtK0_NtXpMd5-1d-Z7sCTbkvWxrf9UdmtjeR7blU/edit?usp=sharing"
					target="_blank"
				>
					Talk slides
				</OutboundLink>
				: slides from my Beyond Hamburgers talk
			</li>
			<li>
				<OutboundLink
					href="https://github.com/mikachan/navigation-overlay-examples"
					target="_blank"
				>
					Example AI prompts and skill
				</OutboundLink>
				: GitHub repo with example AI prompts and skills
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
			<li>
				<OutboundLink
					href="https://developer.wordpress.org/block-editor/"
					target="_blank"
				>
					Block Editor Handbook
				</OutboundLink>
				: official documentation for block development and the Site Editor
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/issues/76037"
					target="_blank"
				>
					Tracking issue #76037
				</OutboundLink>
				: Navigation Sidebar as a discovery and editing surface
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/issues/77069"
					target="_blank"
				>
					Tracking issue #77069
				</OutboundLink>
				: Improve Navigation editing in the extensible Site Editor sidebar
			</li>
		</ul>

		<a href="/">← back to sekai.co.uk</a>
	</Layout>
);

export default OsPage;
