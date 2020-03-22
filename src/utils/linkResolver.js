// In src/prismic-configuration.js
export const linkResolver = (doc) => {
	if (doc.type === 'post') {
		return `/post/${doc.uid}`;
	}

	return '/';
};
