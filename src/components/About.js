import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
// import pic01 from '../images/pic01.jpg';
import thora from '../images/thora.jpg';

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
				Hello! I'm Sarah and I live in{' '}
				<OutboundLink
					href="https://www.visitlancashire.com/"
					target="_blank"
					rel="noreferrer"
				>
					Lancashire
				</OutboundLink>{' '}
				with my dog, Thora.
			</p>

			<p>
				I'm a self-taught Software Engineer with a background in
				marketing and analytics. I've been building websites since
				around 2000 and I've been paid for doing it since 2008. I
				specialise in front end web development, and I'm currently a
				sponsored open-source contributor for WordPress. Come say hi on{' '}
				<OutboundLink
					href="https://github.com/mikachan"
					target="_blank"
				>
					GitHub
				</OutboundLink>
				!
			</p>

			<p>
				Some of my favourite things are peanut butter, dragons, cowboys,
				animals and pretty much anything Japanese, especially{' '}
				<OutboundLink href="https://you.sekai.co.uk" target="_blank">
					this guitarist
				</OutboundLink>
				.
			</p>

			<p>
				In my spare time I enjoy walking, photography, traveling,
				swimming, watching films, occasional bass guitar and video
				games. I also volunteer at{' '}
				<OutboundLink
					href="https://www.parbolddouglasmusic.org/"
					target="_blank"
					rel="noreferrer"
				>
					Parbold Douglas Music
				</OutboundLink>{' '}
				and{' '}
				<OutboundLink
					href="https://www.wigansteam.co.uk/"
					target="_blank"
					rel="noreferrer"
				>
					Wigan STEAM code club
				</OutboundLink>
				.
			</p>

			<span className="image main">
				<img src={thora} alt="Thora" />
			</span>

			{props.close}
		</article>
	);
}

export default About;
