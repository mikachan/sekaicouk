import React, { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/layout';
import Main from '../components/Main';

function IndexPage(props) {
	const [isArticleVisible, setIsArticleVisible] = useState(false);
	const [timeout, setStateTimeout] = useState(false);
	const [article, setArticle] = useState('');
	const [articleTimeout, setArticleTimeout] = useState(false);
	const [loading, setLoading] = useState('is-loading');

	let wrapperRef;

	useEffect(() => {
		let timeoutId;

		timeoutId = setTimeout(() => {
			setLoading('');
		}, 100);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
			document.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const setWrapperRef = node => {
		wrapperRef = node;
	};

	const handleOpenArticle = article => {
		setIsArticleVisible(!isArticleVisible);
		setArticle(article);

		setTimeout(() => {
			setStateTimeout(!timeout);
		}, 325);

		setTimeout(() => {
			setArticleTimeout(!articleTimeout);
		}, 350);
	};

	const handleCloseArticle = () => {
		setArticleTimeout(!articleTimeout);

		setTimeout(() => {
			setStateTimeout(!timeout);
		}, 325);

		setTimeout(() => {
			setIsArticleVisible(!isArticleVisible);
			setArticle('');
		}, 350);
	};

	const handleClickOutside = event => {
		if (wrapperRef && !wrapperRef.contains(event.target)) {
			if (isArticleVisible) {
				handleCloseArticle();
			}
		}
	};

	return (
		<Layout location={props.location}>
			<div
				className={`body ${loading} ${
					isArticleVisible ? 'is-article-visible' : ''
				}`}
			>
				<div id="wrapper">
					<Header
						onOpenArticle={handleOpenArticle}
						timeout={timeout}
					/>
					<Main
						isArticleVisible={isArticleVisible}
						timeout={timeout}
						articleTimeout={articleTimeout}
						article={article}
						onCloseArticle={handleCloseArticle}
						setWrapperRef={setWrapperRef}
					/>
					<Footer timeout={timeout} />
				</div>
				<div id="bg"></div>
			</div>
		</Layout>
	);
}

export default IndexPage;
