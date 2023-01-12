const config = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    'declaration-empty-line-before': null,
  },
};

module.exports = config;
