import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

function EmbracingOpenSource(props) {
	return (
		<article
			id="os"
			className={`${props.article === 'os' ? 'active' : ''} ${
				props.articleTimeout ? 'timeout' : ''
			}`}
			style={{ display: 'none' }}
		>
			<h2 className="major">Embracing Open Source</h2>

			<h3>Helpful links for getting started</h3>

			<ul>
				<li>
					<OutboundLink
						href="https://www.firsttimersonly.com/"
						target="_blank"
					>
						First Timers Only
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://opensource.guide/how-to-contribute/"
						target="_blank"
					>
						opensource.guide
					</OutboundLink>
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

			<h3>Recommended reading</h3>

			<ul>
				<li>
					<OutboundLink
						href="https://opensource.com/"
						target="_blank"
					>
						opensource.com
					</OutboundLink>
				</li>
				<li>
					Richard Stallman's{' '}
					<OutboundLink
						href="https://www.oreilly.com/openbook/freedom/ch00.html"
						target="_blank"
					>
						Crusade for Free Software ebook
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
			</ul>

			<h3>Projects I Recommend</h3>

			<ul>
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
					(WordPress block editor)
				</li>
				<li>
					<OutboundLink
						href="https://github.com/WordPress/create-block-theme"
						target="_blank"
					>
						Create Block Theme
					</OutboundLink>{' '}
					(WordPress plugin)
				</li>
				<li>
					<OutboundLink
						href="https://github.com/WordPress/wordpress-playground"
						target="_blank"
					>
						WordPress Playground
					</OutboundLink>{' '}
					(WordPress WASM)
				</li>
			</ul>

			{props.close}
		</article>
	);
}

export default EmbracingOpenSource;
