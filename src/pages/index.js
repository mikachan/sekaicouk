import React, { useCallback, useEffect, useRef, useState } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/layout';
import Main from '../components/Main';
import SiteHead from '../components/SiteHead';

const articleByHash = {
	about: 'about',
	contact: 'contact',
	social: 'contact',
	socials: 'contact',
};

const hashByArticle = {
	about: '#about',
	contact: '#socials',
};

const getArticleFromHash = (hash = '') => {
	const hashKey = decodeURIComponent(hash.replace(/^#/, '')).toLowerCase();

	return articleByHash[hashKey] || '';
};

const updateArticleHash = (nextArticle) => {
	if (typeof window === 'undefined') {
		return;
	}

	const nextHash = hashByArticle[nextArticle];

	if (nextHash && window.location.hash !== nextHash) {
		window.history.pushState(null, '', nextHash);
	}
};

const clearArticleHash = () => {
	if (typeof window === 'undefined' || !window.location.hash) {
		return;
	}

	window.history.replaceState(
		null,
		'',
		`${window.location.pathname}${window.location.search}`
	);
};

function IndexPage(props) {
	const [isArticleVisible, setIsArticleVisible] = useState(false);
	const [timeout, setStateTimeout] = useState(false);
	const [article, setArticle] = useState('');
	const [articleTimeout, setArticleTimeout] = useState(false);
	const [loading, setLoading] = useState('is-loading');
	const animationTimeoutsRef = useRef([]);
	const isArticleVisibleRef = useRef(false);
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
		(nextArticle, options = {}) => {
			clearAnimationTimeouts();
			if (options.updateHash !== false) {
				updateArticleHash(nextArticle);
			}
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

	const handleCloseArticle = useCallback(
		(options = {}) => {
			clearAnimationTimeouts();
			if (options.updateHash !== false) {
				clearArticleHash();
			}
			setArticleTimeout(false);

			const stateTimeoutId = setTimeout(() => {
				setStateTimeout(false);
			}, 325);

			const articleTimeoutId = setTimeout(() => {
				setIsArticleVisible(false);
				setArticle('');
			}, 350);

			animationTimeoutsRef.current = [stateTimeoutId, articleTimeoutId];
		},
		[clearAnimationTimeouts]
	);

	useEffect(() => {
		isArticleVisibleRef.current = isArticleVisible;
	}, [isArticleVisible]);

	useEffect(() => {
		const syncArticleWithHash = () => {
			const nextArticle = getArticleFromHash(window.location.hash);

			if (nextArticle) {
				handleOpenArticle(nextArticle, { updateHash: false });
				return;
			}

			if (isArticleVisibleRef.current) {
				handleCloseArticle({ updateHash: false });
			}
		};

		syncArticleWithHash();
		window.addEventListener('hashchange', syncArticleWithHash);

		return () => {
			window.removeEventListener('hashchange', syncArticleWithHash);
		};
	}, [handleCloseArticle, handleOpenArticle]);

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
