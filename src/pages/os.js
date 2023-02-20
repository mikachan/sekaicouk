import React from 'react';
import Layout from '../components/layout';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const OsPage = () => (
	<Layout>
		<h1>Embracing Open Source</h1>
		<p>
			Thank you for attending my talk! Here is a list of resources to help
			you get started with open source.
		</p>

		<h3>Helpful links for getting started</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/"
					target="_blank"
				>
					Beginnger's Guide on Contributing to Open Sourse
				</OutboundLink>
				: FreeCodeCamp
			</li>
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
		<h3>Finding a Project to Contribute to</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://www.firsttimersonly.com/"
					target="_blank"
				>
					First Timers Only
				</OutboundLink>
				: great all-round resource
			</li>
			<li>
				<OutboundLink
					href="https://www.codetriage.com/"
					target="_blank"
				>
					codetriage.com
				</OutboundLink>
				: find open source projects to contribute to
			</li>
			<li>
				<OutboundLink
					href="https://github.com/MunGell/awesome-for-beginners"
					target="_blank"
				>
					Awesome for Beginners
				</OutboundLink>
				: a curated list of first-time projects for beginners, listed by
				language
			</li>
			<li>
				<OutboundLink href="https://up-for-grabs.net/" target="_blank">
					Up for Grabs
				</OutboundLink>
				: another list!
			</li>
			<li>
				<OutboundLink
					href="https://github.com/firstcontributions/first-contributions"
					target="_blank"
				>
					first contributions
				</OutboundLink>
				: guides beginners into making their first contribution
			</li>
			<li>
				<OutboundLink href="https://contributor.ninja/" target="_blank">
					contributor.ninja
				</OutboundLink>
				: a list of issues categorised by language
			</li>
			<li>
				<OutboundLink
					href="https://opensourcefriday.com/"
					target="_blank"
				>
					opensourcefriday.com
				</OutboundLink>
			</li>
			<li>
				<OutboundLink href="https://hacktoberfest.com/" target="_blank">
					hacktoberfest.com
				</OutboundLink>
			</li>
		</ul>
		<h3>Recommended reading</h3>
		<ul>
			<li>
				<OutboundLink href="https://opensource.com/" target="_blank">
					opensource.com
				</OutboundLink>
			</li>
			<li>
				Richard Stallman's{' '}
				<OutboundLink
					href="https://www.oreilly.com/openbook/freedom/ch00.html"
					target="_blank"
				>
					Crusade for Free Software
				</OutboundLink>
			</li>
			<li>
				Eric Steven Raymond's{' '}
				<OutboundLink
					href="http://www.catb.org/esr/writings/homesteading/cathedral-bazaar/index.html"
					target="_blank"
				>
					The Cathedral and the Bazaar
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://hughlashbrooke.com/2019/03/15/becoming-a-good-open-source-citizen/"
					target="_blank"
				>
					Becoming a good open-source citizen
				</OutboundLink>{' '}
				by Hugh Lashbrooke
			</li>
			<li>
				<OutboundLink
					href="https://www.ted.com/playlists/13/open_source_open_world"
					target="_blank"
				>
					TED Talks on Open Source
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.openlogic.com/resources/2023-state-open-source-report"
					target="_blank"
				>
					2023 State of Open Source Report
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/"
					target="_blank"
				>
					GitHub Tips & Tricks
				</OutboundLink>
			</li>
		</ul>
		<h3>Projects I Recommend</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://github.com/sveltejs/svelte"
					target="_blank"
				>
					Svelte
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/sveltejs/kit"
					target="_blank"
				>
					SvelteKit
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/facebook/react"
					target="_blank"
				>
					React
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/gatsbyjs/gatsby"
					target="_blank"
				>
					Gatsby
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/cypress-io/cypress"
					target="_blank"
				>
					Cypress
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/microsoft/playwright"
					target="_blank"
				>
					Playwright
				</OutboundLink>
			</li>
		</ul>
		<h3>Links to projects I'm working on</h3>
		<p>
			I'm{' '}
			<OutboundLink href="https://github.com/mikachan" target="_blank">
				@mikachan
			</OutboundLink>{' '}
			on GitHub. I'm happy to be pinged to answer questions or review a
			PR.
		</p>
		<ul>
			<li>
				Gutenberg:{' '}
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/labels/Good%20First%20Issue"
					target="_blank"
				>
					good first issues
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/labels/Needs%20Testing"
					target="_blank"
				>
					needs testing
				</OutboundLink>{' '}
				(WordPress block editor: JavaScript, PHP, React, CSS)
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/create-block-theme"
					target="_blank"
				>
					Create Block Theme
				</OutboundLink>{' '}
				(WordPress plugin: JavaScript, PHP, React, CSS)
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/wordpress-playground"
					target="_blank"
				>
					WordPress Playground
				</OutboundLink>{' '}
				(WordPress WASM: JavaScript, CSS, TypeScript)
			</li>
		</ul>
		<a href="/">← back to sekai.co.uk</a>
	</Layout>
);

export default OsPage;
