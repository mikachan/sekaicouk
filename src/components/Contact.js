import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faWordpress,
	faLinkedin,
	faBluesky,
	faTwitter,
	faUnsplash,
	faLastfm,
	faInstagram,
	faTumblr,
} from '@fortawesome/free-brands-svg-icons';

function Contact(props) {
	return (
		<article
			id="contact"
			className={`${props.article === 'contact' ? 'active' : ''} ${
				props.articleTimeout ? 'timeout' : ''
			}`}
			style={{ display: 'none' }}
		>
			<h2 className="major">Social Media</h2>
			<ul className="icons">
				<li>
					<OutboundLink
						href="https://github.com/mikachan"
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
					>
						<FontAwesomeIcon icon={faGithub} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://profiles.wordpress.org/mikachan/"
						target="_blank"
						rel="noreferrer"
						aria-label="WordPress.org profile"
					>
						<FontAwesomeIcon icon={faWordpress} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://www.linkedin.com/in/sarahnorris88"
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://bsky.app/profile/sekai.co.uk"
						target="_blank"
						rel="noreferrer"
						aria-label="Bluesky"
					>
						<FontAwesomeIcon icon={faBluesky} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://www.twitter.com/mikachan_"
						target="_blank"
						rel="noreferrer"
						aria-label="Twitter"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://unsplash.com/@mikachan_"
						target="_blank"
						rel="noreferrer"
						aria-label="Unsplash"
					>
						<FontAwesomeIcon icon={faUnsplash} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://last.fm/user/mikachan_"
						target="_blank"
						rel="noreferrer"
						aria-label="Last.fm"
					>
						<FontAwesomeIcon icon={faLastfm} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://www.instagram.com/mikachan_/"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</OutboundLink>
				</li>
				<li>
					<OutboundLink
						href="https://www.tumblr.com/blog/mikachan88-blog"
						target="_blank"
						rel="noreferrer"
						aria-label="Tumblr"
					>
						<FontAwesomeIcon icon={faTumblr} />
					</OutboundLink>
				</li>
			</ul>
			{props.close}
		</article>
	);
}

Contact.propTypes = {
	article: PropTypes.string.isRequired,
	articleTimeout: PropTypes.bool.isRequired,
	close: PropTypes.node.isRequired,
};

export default Contact;
