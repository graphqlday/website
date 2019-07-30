module.exports = {
	siteMetadata: {
		title: `GraphQL Day`,
		description: `---`,
		author: `@graphcms`
	},
	plugins: [
		{
			resolve: 'gatsby-source-graphql',
			options: {
				// This type will contain remote schema Query type
				typeName: 'GraphCMS',
				// This is field under which it's accessible
				fieldName: 'gcms',
				// Url to query from
				url:
					// 'https://api-euwest.graphcms.com/v1/cjubekk561n9a01gh4sievp2i/master'
					'https://api-euwest.graphcms.com/v1/cjubekk561n9a01gh4sievp2i/changeDateTime'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/pages/static`
			}
		},
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/pages/static/logo-graphql.svg` // This path is relative to the root of the site.
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
