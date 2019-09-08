const withSass = require('@zeit/next-sass')
const withOffline = require('next-offline')

module.exports = withOffline(
    withSass({
        cssModules: true,
        exportPathMap: () => {
            return {
                '/': { page: '/' },
            }
        },
    }),
)
