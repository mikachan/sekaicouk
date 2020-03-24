import Blog from './Blog';
import Contact from './Contact';
import Intro from './Intro';
import PropTypes from 'prop-types';
import React from 'react';

class Main extends React.Component {
	render() {
		let close = (
			<button
				className="close"
				onClick={() => {
					this.props.onCloseArticle();
				}}
			></button>
		);

		return (
			<div
				ref={this.props.setWrapperRef}
				id="main"
				style={
					this.props.timeout
						? { display: 'flex' }
						: { display: 'none' }
				}
			>
				<article
					id="intro"
					className={`${
						this.props.article === 'intro' ? 'active' : ''
					} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}
				>
					<Intro />
					{close}
				</article>

				<article
					id="blog"
					className={`${
						this.props.article === 'blog' ? 'active' : ''
					} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}
				>
					<Blog />
					{close}
				</article>

				<article
					id="contact"
					className={`${
						this.props.article === 'contact' ? 'active' : ''
					} ${this.props.articleTimeout ? 'timeout' : ''}`}
					style={{ display: 'none' }}
				>
					<Contact />
					{close}
				</article>
			</div>
		);
	}
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
