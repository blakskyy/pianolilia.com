const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './hugo_stats.json' ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  }
});

const productionPlugins = [
  purgecss,
  require('cssnano')({
    preset: 'default'
  })
]

module.exports = {
  plugins: [
    require("autoprefixer"),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? productionPlugins : [])
  ]
};
