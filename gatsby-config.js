module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-git`,
            options: {
                name: `description`,
                remote: `https://github.com/Eloi-dev/WEB_Jamstack.git`,
                branch: `master`,
                tree: true,
                patterns: [`*description.*`]
            }
        },
        {
            resolve: `gatsby-source-git`,
            options: {
                name: `item`,
                remote: `https://github.com/Eloi-dev/WEB_Jamstack.git`,
                branch: `master`,
                tree: true,
                patterns: `*item.md`
            }
        },
        {
            resolve: 'gatsby-source-git',
            options: {
                name: `config`,
                remote: `https://github.com/Eloi-dev/WEB_Jamstack.git`,
                branch: `master`,
                tree: true,
                patterns: `config.md`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `pages`,
              path: `${__dirname}/.cache/gatsby-source-git/description/`,
            },
        },
        'gatsby-transformer-remark',
        `gatsby-theme-material-ui`,
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ]
};