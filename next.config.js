/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
// const SSRPlugin = require('next/dist/build/webpack/plugins/nextjs-ssr-import').default;
const {dirname, relative, resolve, join} = require('path');

module.exports = {
  webpack(config) {
    // console.log(config);

    config.experiments = 
      { syncWebAssembly: true, };

    // config.module.rules.push({
    //     test: /\.wasm$/,
    //     type: 'webassembly/sync',
    //   });
    
    config.plugins.push(
      new WasmPackPlugin({
        crateDirectory: resolve('./rust'),
        args: '--log-level warn',
      })
    )

    return config
  }
}
