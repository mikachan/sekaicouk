import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React from 'react';

function About(props) {
	return (
		<article
			id="about"
			className={`${props.article === 'about' ? 'active' : ''} ${
				props.articleTimeout ? 'timeout' : ''
			}`}
			style={{ display: 'none' }}
		>
			<h2 className="major">About</h2>

			<p>
				Hello! I'm Sarah and I'm based in the UK, usually in{' '}
				<OutboundLink
					href="https://www.visitlancashire.com/"
					target="_blank"
					rel="noreferrer"
				>
					Lancashire
				</OutboundLink>
				.
			</p>

			<p>
				I'm a self-taught software engineer with a passion for
				open-source, data, and analytics. I've been building websites
				since 2000 and I've been paid for doing it since 2008. I'm also
				a{' '}
				<OutboundLink
					href="https://make.wordpress.org/core/handbook/about/organization/#committers"
					target="_blank"
					rel="noreferrer"
				>
					WordPress Core Committer
				</OutboundLink>{' '}
				and Core contributor. Come say hi on{' '}
				<OutboundLink
					href="https://github.com/mikachan"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</OutboundLink>
				!
			</p>

			<p>
				Some of my favourite things are peanut butter, dragons, cowboys,
				animals, Supes, rollercoasters, and pretty much anything
				Japanese, especially{' '}
				<OutboundLink
					href="https://you.sekai.co.uk"
					target="_blank"
					rel="noreferrer"
				>
					this guitarist
				</OutboundLink>
				.
			</p>

			<p>
				In my spare time I enjoy{' '}
				<OutboundLink
					href="https://wordpress.org/photos/author/mikachan/"
					target="_blank"
					rel="noreferrer"
				>
					photography
				</OutboundLink>
				, walking, travelling, theme parks, swimming, watching films,
				reading weird lit and comics, occasional bass guitar, listening to alt
				music, and playing video games.
			</p>

			{props.close}
		</article>
	);
}

About.propTypes = {
	article: PropTypes.string.isRequired,
	articleTimeout: PropTypes.bool.isRequired,
	close: PropTypes.node.isRequired,
};

export default About;
