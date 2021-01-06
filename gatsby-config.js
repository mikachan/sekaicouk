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
				name: 'sekai.co.uk',
				short_name: 'sekai.co.uk',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/charizard.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ['G-YNK25WY0X1'],
				gtagConfig: {
					send_page_view: true,
				},
			},
		},
	],
};
