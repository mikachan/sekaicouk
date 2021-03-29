import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React from 'react';

// import pic01 from '../images/pic01.jpg';

function Main(props) {
	let close = (
		<button
			className="close"
			onClick={() => {
				props.onCloseArticle();
			}}
			aria-label="Close"
		/>
	);

	return (
		<div
			ref={props.setWrapperRef}
			id="main"
			style={props.timeout ? { display: 'flex' } : { display: 'none' }}
		>
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
					marketing and statistics. She's been building websites since
					around 2000 and has been paid for doing it since 2008. She
					currently specialises in front end development, including
					React and Svelte.
				</p>

				<p>
					In her spare time she enjoys walking, photography,
					traveling, occasional bass guitar and video games. She also
					volunteers at{' '}
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
					Some of her favourite things are peanut butter, dragons,
					animals and pretty much anything Japanese, like{' '}
					<OutboundLink
						href="https://you.sekai.co.uk"
						target="_blank"
					>
						this guitarist
					</OutboundLink>
					.
				</p>

				{close}
			</article>

			<article
				id="contact"
				className={`${props.article === 'contact' ? 'active' : ''} ${
					props.articleTimeout ? 'timeout' : ''
				}`}
				style={{ display: 'none' }}
			>
				<h2 className="major">Contact</h2>
				<ul className="icons">
					<li>
						<OutboundLink
							href="https://github.com/mikachan"
							target="_blank"
							rel="noreferrer"
							className="icon fa-github"
						>
							<span className="label">GitHub</span>
						</OutboundLink>
					</li>
					<li>
						<OutboundLink
							href="https://www.linkedin.com/in/sarahnorris88"
							target="_blank"
							rel="noreferrer"
							className="icon fa-linkedin"
						>
							<span className="label">LinkedIn</span>
						</OutboundLink>
					</li>
					<li>
						<OutboundLink
							href="https://www.twitter.com/mikachan_"
							target="_blank"
							rel="noreferrer"
							className="icon fa-twitter"
						>
							<span className="label">Twitter</span>
						</OutboundLink>
					</li>
					<li>
						<OutboundLink
							href="https://unsplash.com/@mikachan_"
							target="_blank"
							rel="noreferrer"
							className="icon fa-camera"
						>
							<span className="label">Unsplash</span>
						</OutboundLink>
					</li>
					<li>
						<OutboundLink
							href="https://last.fm/user/mikachan_"
							target="_blank"
							rel="noreferrer"
							className="icon fa-lastfm"
						>
							<span className="label">Last.fm</span>
						</OutboundLink>
					</li>
					<li>
						<OutboundLink
							href="https://www.instagram.com/mikachan_/"
							target="_blank"
							rel="noreferrer"
							className="icon fa-instagram"
						>
							<span className="label">Instagram</span>
						</OutboundLink>
					</li>
				</ul>
				{close}
			</article>
		</div>
	);
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
};

export default Main;
