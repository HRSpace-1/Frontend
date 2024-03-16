import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { Configuration } from 'webpack'
import { BuildOptions } from './types/types'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import path from 'path'

export function buildPlugins({
  mode,
  paths,
}: BuildOptions): Configuration['plugins'] {
  const isDev = mode === 'development'
  const isProd = mode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'logo.svg'),
    }),
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(
      new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
      }),
    )
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    )
    plugins.push(new CompressionPlugin())
  }

  return plugins
}
