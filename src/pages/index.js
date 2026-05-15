import React, { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/layout';
import Main from '../components/Main';
import SiteHead from '../components/SiteHead';

function IndexPage(props) {
	const [isArticleVisible, setIsArticleVisible] = useState(false);
	const [timeout, setStateTimeout] = useState(false);
	const [article, setArticle] = useState('');
	const [articleTimeout, setArticleTimeout] = useState(false);
	const [loading, setLoading] = useState('is-loading');
	const animationTimeoutsRef = useRef([]);
	const wrapperRef = useRef(null);

	const clearAnimationTimeouts = useCallback(() => {
		animationTimeoutsRef.current.forEach(clearTimeout);
		animationTimeoutsRef.current = [];
	}, []);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLoading('');
		}, 100);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	useEffect(() => clearAnimationTimeouts, [clearAnimationTimeouts]);

	const setWrapperRef = useCallback((node) => {
		wrapperRef.current = node;
	}, []);

	const handleOpenArticle = useCallback(
		(nextArticle) => {
			clearAnimationTimeouts();
			setIsArticleVisible(true);
			setArticle(nextArticle);

			const stateTimeoutId = setTimeout(() => {
				setStateTimeout(true);
			}, 325);

			const articleTimeoutId = setTimeout(() => {
				setArticleTimeout(true);
			}, 350);

			animationTimeoutsRef.current = [stateTimeoutId, articleTimeoutId];
		},
		[clearAnimationTimeouts]
	);

	const handleCloseArticle = useCallback(() => {
		clearAnimationTimeouts();
		setArticleTimeout(false);

		const stateTimeoutId = setTimeout(() => {
			setStateTimeout(false);
		}, 325);

		const articleTimeoutId = setTimeout(() => {
			setIsArticleVisible(false);
			setArticle('');
		}, 350);

		animationTimeoutsRef.current = [stateTimeoutId, articleTimeoutId];
	}, [clearAnimationTimeouts]);

	useEffect(() => {
		if (!isArticleVisible) {
			return undefined;
		}

		const handleClickOutside = (event) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target)
			) {
				handleCloseArticle();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleCloseArticle, isArticleVisible]);

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

export const Head = () => <SiteHead />;
