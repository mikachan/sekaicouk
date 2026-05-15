import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SiteHead from '../components/SiteHead';
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
					rel="noreferrer"
				>
					Beginnger's Guide on Contributing to Open Source
				</OutboundLink>
				: FreeCodeCamp
			</li>
			<li>
				<OutboundLink
					href="https://github.com/open-sauced/open-sauced"
					target="_blank"
					rel="noreferrer"
				>
					Open Sauced
				</OutboundLink>
				: structured onboarding for new contributors
			</li>
			<li>
				<OutboundLink
					href="https://opensource.guide/how-to-contribute/"
					target="_blank"
					rel="noreferrer"
				>
					opensource.guide
				</OutboundLink>
				: learn more about how to contribute to open source
			</li>
			<li>
				<OutboundLink
					href="https://kentcdodds.com/blog/introducing-how-to-contribute-to-open-source"
					target="_blank"
					rel="noreferrer"
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
					rel="noreferrer"
				>
					First Timers Only
				</OutboundLink>
				: great all-round resource
			</li>
			<li>
				<OutboundLink
					href="https://www.codetriage.com/"
					target="_blank"
					rel="noreferrer"
				>
					codetriage.com
				</OutboundLink>
				: find open source projects to contribute to
			</li>
			<li>
				<OutboundLink
					href="https://github.com/MunGell/awesome-for-beginners"
					target="_blank"
					rel="noreferrer"
				>
					Awesome for Beginners
				</OutboundLink>
				: a curated list of first-time projects for beginners, listed by
				language
			</li>
			<li>
				<OutboundLink
					href="https://up-for-grabs.net/"
					target="_blank"
					rel="noreferrer"
				>
					Up for Grabs
				</OutboundLink>
				: another list!
			</li>
			<li>
				<OutboundLink
					href="https://github.com/firstcontributions/first-contributions"
					target="_blank"
					rel="noreferrer"
				>
					first contributions
				</OutboundLink>
				: guides beginners into making their first contribution
			</li>
			<li>
				<OutboundLink
					href="https://contributor.ninja/"
					target="_blank"
					rel="noreferrer"
				>
					contributor.ninja
				</OutboundLink>
				: a list of issues categorised by language
			</li>
			<li>
				<OutboundLink
					href="https://opensourcefriday.com/"
					target="_blank"
					rel="noreferrer"
				>
					opensourcefriday.com
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://hacktoberfest.com/"
					target="_blank"
					rel="noreferrer"
				>
					hacktoberfest.com
				</OutboundLink>
			</li>
		</ul>
		<h3>Recommended reading/learning</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://opensource.com/"
					target="_blank"
					rel="noreferrer"
				>
					opensource.com
				</OutboundLink>
			</li>
			<li>
				Richard Stallman's{' '}
				<OutboundLink
					href="https://www.oreilly.com/openbook/freedom/ch00.html"
					target="_blank"
					rel="noreferrer"
				>
					Crusade for Free Software
				</OutboundLink>
			</li>
			<li>
				Eric Steven Raymond's{' '}
				<OutboundLink
					href="http://www.catb.org/esr/writings/homesteading/cathedral-bazaar/index.html"
					target="_blank"
					rel="noreferrer"
				>
					The Cathedral and the Bazaar
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://hughlashbrooke.com/2019/03/15/becoming-a-good-open-source-citizen/"
					target="_blank"
					rel="noreferrer"
				>
					Becoming a good open-source citizen
				</OutboundLink>{' '}
				by Hugh Lashbrooke
			</li>
			<li>
				<OutboundLink
					href="https://www.ted.com/playlists/13/open_source_open_world"
					target="_blank"
					rel="noreferrer"
				>
					TED Talks on Open Source
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.youtube.com/watch?v=sK3YH3-5nDo&ab_channel=TEDxTalks"
					target="_blank"
					rel="noreferrer"
				>
					Video: Steve Fisher - What Can We Learn From Open Source
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://training.linuxfoundation.org/training/fundamentals-of-professional-open-source-management-lfc110/"
					target="_blank"
					rel="noreferrer"
				>
					Course: Fundamentals of Professional Open Source Management
				</OutboundLink>
				: a free course from the Linux Foundation
			</li>
			<li>
				<OutboundLink
					href="https://www.openlogic.com/resources/2023-state-open-source-report"
					target="_blank"
					rel="noreferrer"
				>
					2023 State of Open Source Report
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.blog/2020-04-09-github-protips-tips-tricks-hacks-and-secrets-from-lee-reilly/"
					target="_blank"
					rel="noreferrer"
				>
					GitHub Tips & Tricks
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.dreamsongs.com/IHE/IHE-31.html"
					target="_blank"
					rel="noreferrer"
				>
					The Secret of Why Open Source Works
				</OutboundLink>
			</li>
		</ul>
		<h3>Projects I Recommend</h3>
		<ul>
			<li>
				<OutboundLink
					href="https://github.com/sveltejs/svelte"
					target="_blank"
					rel="noreferrer"
				>
					Svelte
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/sveltejs/kit"
					target="_blank"
					rel="noreferrer"
				>
					SvelteKit
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/facebook/react"
					target="_blank"
					rel="noreferrer"
				>
					React
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/gatsbyjs/gatsby"
					target="_blank"
					rel="noreferrer"
				>
					Gatsby
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/cypress-io/cypress"
					target="_blank"
					rel="noreferrer"
				>
					Cypress
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/microsoft/playwright"
					target="_blank"
					rel="noreferrer"
				>
					Playwright
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/"
					target="_blank"
					rel="noreferrer"
				>
					WordPress
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://git.drupalcode.org/project/drupal"
					target="_blank"
					rel="noreferrer"
				>
					Drupal
				</OutboundLink>
			</li>
		</ul>
		<h3>Links to projects I'm working on</h3>
		<p>
			I'm{' '}
			<OutboundLink
				href="https://github.com/mikachan"
				target="_blank"
				rel="noreferrer"
			>
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
					rel="noreferrer"
				>
					good first issues
				</OutboundLink>{' '}
				&{' '}
				<OutboundLink
					href="https://github.com/WordPress/gutenberg/labels/Needs%20Testing"
					target="_blank"
					rel="noreferrer"
				>
					needs testing
				</OutboundLink>{' '}
				(WordPress block editor: JavaScript, PHP, React, CSS)
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/create-block-theme"
					target="_blank"
					rel="noreferrer"
				>
					Create Block Theme
				</OutboundLink>{' '}
				(WordPress plugin: JavaScript, PHP, React, CSS)
			</li>
			<li>
				<OutboundLink
					href="https://github.com/WordPress/wordpress-playground"
					target="_blank"
					rel="noreferrer"
				>
					WordPress Playground
				</OutboundLink>{' '}
				(WordPress WASM: JavaScript, CSS, TypeScript)
			</li>
		</ul>
		<Link to="/">← back to sekai.co.uk</Link>
	</Layout>
);

export default OsPage;

export const Head = () => (
	<SiteHead
		title="Embracing Open Source"
		description="Resources for getting started with open source contribution."
	/>
);
