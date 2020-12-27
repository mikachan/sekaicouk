import PropTypes from 'prop-types';
import React from 'react';

const Header = props => (
	<header id="header" style={props.timeout ? { display: 'none' } : {}}>
		<div className="logo">
			<span className="icon fa-heart"></span>
		</div>
		<div className="content">
			<div className="inner">
				<h1>sekai.co.uk</h1>
				<p>
					Personal site of Sarah Norris; web developer &amp; wannabe
					hippy.
				</p>
			</div>
		</div>
		<nav>
			<ul>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('about');
						}}
					>
						About
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							props.onOpenArticle('contact');
						}}
					>
						Contact
					</button>
				</li>
				<li>
					<button>
						<a href="https://you.sekai.co.uk/" target="_blank">
							Forget-me-not
						</a>
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
