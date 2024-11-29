import React from 'react';
import Layout from '../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const OsPage = () => (
	<Layout>
		<h1>Help Shape Gutenberg</h1>
		<p>
			Thank you for attending my talk! Here is a list of resources to help
			you get started with Gutenberg, the WordPress Editor.
			<br />I also have a broader page on{' '}
			<a href="/os">getting started with open source</a>.
		</p>

		<h3>Helpful links for getting started</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://developer.wordpress.org/block-editor/"
					target="_blank"
				>
					Block Editor Handbook
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://developer.wordpress.org/block-editor/contributors/"
					target="_blank"
				>
					Contributor Guide
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg"
					target="_blank"
				>
					Gutenberg GitHub repository
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://wordpress.slack.com/archives/C02QB2JS7"
					target="_blank"
				>
					#core-editor Slack channel
				</OutboundLink>
				: Ask questions, get help, and meet other contributors
			</li>
			<li>
				<OutboundLink
					href="https://developer.wordpress.org/block-editor/getting-started/#keeping-up-with-the-wordpress-project"
					target="_blank"
				>
					Guide for Keeping up with the WordPress project
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://wordpress.org/gutenberg/"
					target="_blank"
				>
					wordpress.org/gutenberg
				</OutboundLink>
				: Try out Gutenberg in the browser
			</li>
		</ul>
		<h3>Finding What to Work On</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/contribute"
					target="_blank"
				>
					Good First Issues
				</OutboundLink>
				: A list of issues that are good for beginners
			</li>
			<li>
				<OutboundLink
					href="https://github.com/orgs/WordPress/projects/210"
					target="_blank"
				>
					GitHub Board: WordPress 6.8 Issues
				</OutboundLink>
				: Issues for WordPress 6.8
			</li>
			<li>
				<OutboundLink
					href="https://github.com/orgs/WordPress/projects/96/views/2"
					target="_blank"
				>
					GitHub Board: Polish
				</OutboundLink>
				: A list of issues to help polish the Editor
			</li>
			<li>
				<OutboundLink
					href="https://github.com/orgs/WordPress/projects/155/views/5"
					target="_blank"
				>
					GitHub Board: Design Priorities
				</OutboundLink>
				: A list of things that may be ready for dev after design
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/labels/Needs%20Testing"
					target="_blank"
				>
					Label: Needs Testing
				</OutboundLink>
				: Help out by testing if issues are still relevant
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/labels/Needs%20Dev"
					target="_blank"
				>
					Label: Needs Dev
				</OutboundLink>
				: Pick up an issue already marked as needing development
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/issues?q=sort%3Aupdated-desc%20is%3Aissue%20is%3Aopen%20label%3A%22%5BType%5D%20Overview%22"
					target="_blank"
				>
					Label: Overview
				</OutboundLink>
				: Find issues that are part of a larger project
			</li>
		</ul>
		<h3>Recommended Tools</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://code.visualstudio.com/"
					target="_blank"
				>
					VS Code
				</OutboundLink>
				: My recommended code editor
			</li>
			<li>
				<OutboundLink
					href="https://www.gitkraken.com/gitlens"
					target="_blank"
				>
					GitLens
				</OutboundLink>
				: My favourite way to use Git Blame
			</li>
			<li>
				<OutboundLink href="https://git-fork.com/" target="_blank">
					Fork
				</OutboundLink>
				: Recommended Git Client
			</li>
			<li>
				<OutboundLink href="https://iterm2.com/" target="_blank">
					iTerm2
				</OutboundLink>
				: Recommended Mac terminal emulator
			</li>
		</ul>
		<a href="/">← back to sekai.co.uk</a>
	</Layout>
);

export default OsPage;
