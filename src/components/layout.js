import '../assets/scss/main.scss';

import { StaticQuery, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = ({ children, location }) => {
	let content;

	if (location && location.pathname === '/') {
		content = <div>{children}</div>;
	} else {
		content = (
			<div id="wrapper" className="page">
				<div>{children}</div>
			</div>
		);
	}

	const metaQuery = graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`;

	return (
		<StaticQuery
			query={`${metaQuery}`}
			render={(data) => (
				<>
					<Helmet
						title={data.site.siteMetadata.title}
						meta={[
							{
								name: 'description',
								content: data.site.siteMetadata.description,
							},
						]}
					>
						<html lang="en" />
					</Helmet>
					{content}
				</>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
