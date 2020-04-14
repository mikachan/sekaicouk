import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

const Contact = () => (
	<div>
		<h2 className="major">Contact</h2>

		<ul className="icons">
			<li>
				<OutboundLink
					href="https://www.instagram.com/mikachan_/"
					className="icon fa-instagram"
					target="_blank"
				>
					<span className="label">Instagram</span>
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.twitter.com/mikachan_"
					className="icon fa-twitter"
					target="_blank"
				>
					<span className="label">Twitter</span>
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.linkedin.com/in/sarahnorris88"
					className="icon fa-linkedin"
					target="_blank"
				>
					<span className="label">LinkedIn</span>
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="http://last.fm/user/mikachan_"
					className="icon fa-lastfm"
					target="_blank"
				>
					<span className="label">Last.fm</span>
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://www.facebook.com/sarah.norris88"
					className="icon fa-facebook"
					target="_blank"
				>
					<span className="label">Facebook</span>
				</OutboundLink>
			</li>
			<li>
				<OutboundLink
					href="https://github.com/mikachan"
					className="icon fa-github"
					target="_blank"
				>
					<span className="label">GitHub</span>
				</OutboundLink>
			</li>
		</ul>
	</div>
);

export default Contact;
