import webpack from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/types'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options

  const isDev = mode === 'development'

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    resolve: buildResolvers(),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options).filter(Boolean),
    module: {
      rules: buildLoaders(options),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}
