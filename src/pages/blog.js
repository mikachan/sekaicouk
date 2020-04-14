import { Date, RichText } from 'prismic-reactjs';

import Layout from '../components/layout';
import { Link } from 'gatsby';
import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
	{
		prismic {
			allPosts(sortBy: meta_firstPublicationDate_DESC) {
				edges {
					node {
						_meta {
							id
							uid
							type
						}
						title
						main_image
						_meta {
							firstPublicationDate
						}
					}
				}
			}
		}
	}
`;

const Blog = (props) => {
	const posts = props.data.prismic.allPosts.edges;

	if (posts.length < 1) return null;

	return (
		<Layout>
			<div id="blog">
				<Link to="/">← Go back to the homepage</Link>

				<h1>Blog</h1>

				{posts.map((post, i) => {
					const date = Date(post.node._meta.firstPublicationDate);
					const formattedDate = Intl.DateTimeFormat('en-US', {
						year: 'numeric',
						month: 'short',
						day: '2-digit',
					}).format(date);

					return (
						<div key={`post-${i}`}>
							<h2>{RichText.asText(post.node.title)}</h2>
							<span>{formattedDate}</span>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Blog;
