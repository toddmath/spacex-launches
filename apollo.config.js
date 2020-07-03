module.exports = {
  client: {
    includes: [
      './graphql/*.ts',
      'components/**/*.ts',
      'components/**/*.tsx',
      'pages/**/*.tsx',
    ],
    service: {
      name: 'spacex_launch_stats',
      localSchemaFile: './schema_spacex.graphql',
    },
  },
}
