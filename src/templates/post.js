import Layout from '../components/layout';
import React from 'react';
import { RichText } from 'prismic-reactjs';
import { graphql } from 'gatsby';

export const query = graphql`
	query PageQuery($uid: String) {
		prismic {
			allPosts(uid: $uid) {
				edges {
					node {
						title
						content
					}
				}
			}
		}
	}
`;

const Post = (props) => {
	const doc = props.data.prismic.allPosts.edges.slice(0, 1).pop();
	if (!doc) return null;

	return (
		<Layout>
			<div>
				{RichText.render(doc.node.title)}
				<div>{RichText.render(doc.node.content)}</div>
			</div>
		</Layout>
	);
};

export default Post;
