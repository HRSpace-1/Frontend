import { ModuleOptions } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/types'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[hash][ext][query]',
    },
  }

  const scssLoader = {
    test: /\.module\.s?css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: isDev
              ? '[name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },
      'postcss-loader',
      'sass-loader',
    ],
  }

  const cssLoader = {
    test: /\.s?css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      'postcss-loader',
      'sass-loader',
    ],
    exclude: /\.module\.s?css$/i,
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: true,
        },
      },
    ],
    exclude: /node_modules/,
  }

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[hash][ext][query]',
    },
  }

  return [
    scssLoader,
    cssLoader,
    assetsLoader,
    tsLoader,
    fontsLoader,
    svgLoader,
  ]
}
