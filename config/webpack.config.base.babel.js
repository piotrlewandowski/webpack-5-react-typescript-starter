// Import Node packages
import path from 'path';

// Import webpack plugins
import WebpackNotifierPlugin from 'webpack-notifier';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';

// Import paths
import { paths } from './paths';

// Import package.json
import PKG from '../package.json';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default {
  mode: isDevelopment ? 'development' : 'production',

  target: 'web',

  // The base directory for resolving `entry`
  context: paths.src,

  entry: {
    app: './index.tsx',
  },

  output: {
    // The bundling output directory (must be absolute path)
    path: paths.build,

    // The output filename of the entry chunk, relative to `path`
    // [name] - Will be set per each key name in `entry`
    filename: '[name].[contenthash].js',

    publicPath: '/',
  },

  module: {
    rules: [
      // TypeScript loader
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve('ts-loader'),
          options: {
            getCustomTransformers: () => ({
              before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
            }),
            transpileOnly: isDevelopment,
          },
        },
      },

      // SVG loader
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },

  // Customize the webpack build process
  plugins: [
    new WebpackNotifierPlugin({
      title: PKG.description,
      emoji: true,
      alwaysNotify: true,
    }),

    new HtmlWebpackPlugin({
      title: PKG.description,
      favicon: `${paths.public}/assets/icons/favicon.ico`,
      template: `${paths.public}/index.html`, // template file
      filename: 'index.html', // output file
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        charset: 'UTF-8',
      },
    }),

    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      exclude: ['/node_modules/'],
      formatter: require('eslint-formatter-friendly'),
      cache: isDevelopment,
      overrideConfigFile: path.resolve(paths.root, '.eslintrc.json'),
    }),
  ],
};
