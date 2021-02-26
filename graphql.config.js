module.exports = {
  projects: {
    app: {
      schema: ['src/schema.graphql', 'directives.graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}', 'my/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://straw-berry-py.herokuapp.com/graphql',
            //headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
          },
        },
      },
    },
  },
};
