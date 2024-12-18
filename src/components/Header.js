import { OutboundLink } from 'gatsby-plugin-google-gtag';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faWordpress,
	faLinkedin,
	faBluesky,
} from '@fortawesome/free-brands-svg-icons';

const trackSectionView = (sectionName) => {
	if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined')
		window.gtag('event', 'click', {
			event_category: 'Main Navigation',
			event_label: sectionName ? sectionName : 'Unknown',
		});
};

const Header = (props) => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<span className="icon fa-heart"></span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>sekai.co.uk</h1>
				<p>
					Personal site of Sarah Norris; Software Engineer &amp;
					wannabe hippy.
				</p>

				<div>
					<ul className="icons" style={{ marginBottom: 0 }}>
						<li>
							<OutboundLink
								href="https://github.com/mikachan"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</OutboundLink>
						</li>
						<li>
							<OutboundLink
								href="https://profiles.wordpress.org/mikachan/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faWordpress} />
							</OutboundLink>
						</li>
						<li>
							<OutboundLink
								href="https://bsky.app/profile/sekai.co.uk"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faBluesky} />
							</OutboundLink>
						</li>
						<li>
							<OutboundLink
								href="https://www.linkedin.com/in/sarahnorris88"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</OutboundLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('about');
							trackSectionView('About');
						}}
					>
						About
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('contact');
							trackSectionView('Contact');
						}}
					>
						Socials
					</button>
				</li>
				<li>
					<button>
						<OutboundLink
							href="https://blog.sekai.co.uk/"
							target="_blank"
						>
							Blog
						</OutboundLink>
					</button>
				</li>
				<li>
					<button>
						<OutboundLink
							href="https://you.sekai.co.uk/"
							target="_blank"
						>
							Forget-me-not
						</OutboundLink>
					</button>
				</li>
			</ul>
		</nav>
		<nav>
			<ul>
				<li>
					<button>
						<a href="/os">Embracing Open Source</a>
					</button>
				</li>
				<li>
					<button>
						<a href="/gutenberg">Help Shape Gutenberg</a>
					</button>
				</li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	onOpenArticle: PropTypes.func,
	timeout: PropTypes.bool,
};

export default Header;
