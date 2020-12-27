module.exports = {
	siteMetadata: {
		title: 'sekai.co.uk',
		author: 'Sarah Norris',
		description: 'Personal site',
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
				icon: 'src/images/charizard.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-7281616-1',
				head: false,
			},
		},
	],
};
