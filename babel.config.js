/*
 * @Author: zhouxu
 * @Date: 2023-05-18 11:25:36
 * @Last Modified by: zhouxu
 * @Last Modified time:
 */

module.exports = {
  presets: [
    /** 可以在工程的根目录下创建一个babel.config.js文件用于配置与你当前Node版本兼容的Babel： */
    ['@babel/preset-env', { targets: { node: 'current' } }],
    /**Jest可以通过Babel支持TypeScript,添加@babel/preset-typescript的预设到babel.config.js */
    '@babel/preset-typescript',
  ],
};
