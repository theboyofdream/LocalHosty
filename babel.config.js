module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // For adding Path alias
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          screens: './src/screens',
          theme: './src/theme',
        },
      },
    ],
  ],
};
