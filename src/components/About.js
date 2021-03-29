import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
// import pic01 from '../images/pic01.jpg';

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
			<span className="image main">
				{/* <img src={pic01} alt="" /> */}
			</span>
			<p>
				Sarah is a relatively geeky girl who lives in{' '}
				<OutboundLink
					href="https://www.visitlancashire.com/"
					target="_blank"
					rel="noreferrer"
				>
					Lancashire, UK
				</OutboundLink>{' '}
				with her dog, Thora.
			</p>

			<p>
				She is a self-taught web developer with a background in
				marketing and analytics. She's been building websites since
				around 2000 and has been paid for doing it since 2008. She
				currently specialises in front end development, including React
				and Svelte.
			</p>

			<p>
				In her spare time she enjoys walking, photography, traveling,
				occasional bass guitar and video games. She also volunteers at{' '}
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

			<p>
				Some of her favourite things are peanut butter, dragons, animals
				and pretty much anything Japanese, like{' '}
				<OutboundLink href="https://you.sekai.co.uk" target="_blank">
					this guitarist
				</OutboundLink>
				.
			</p>

			{props.close}
		</article>
	);
}

export default About;
