import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';

function Contact(props) {
	return (
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
			{props.close}
		</article>
	);
}

export default Contact;
