module.exports = {
	siteMetadata: {
		title: 'sekai.co.uk',
		author: 'Sarah Norris',
		description: 'sekai.co.uk',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/charizard.png',
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-7281616-1',
				head: false,
			},
		},
		{
			resolve: 'gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'sekaicouk',
				path: '/preview',
				previews: true,
				pages: [
					{
						type: 'Post',
						match: '/post/:uid',
						path: '/post',
						component: require.resolve('./src/templates/post.js'),
					},
				],
			},
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-offline',
	],
};
