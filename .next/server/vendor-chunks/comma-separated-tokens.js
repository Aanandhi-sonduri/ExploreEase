"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/comma-separated-tokens";
exports.ids = ["vendor-chunks/comma-separated-tokens"];
exports.modules = {

/***/ "(ssr)/./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   stringify: () => (/* binding */ stringify)\n/* harmony export */ });\n/**\n * @typedef Options\n *   Configuration for `stringify`.\n * @property {boolean} [padLeft=true]\n *   Whether to pad a space before a token.\n * @property {boolean} [padRight=false]\n *   Whether to pad a space after a token.\n */\n\n/**\n * @typedef {Options} StringifyOptions\n *   Please use `StringifyOptions` instead.\n */\n\n/**\n * Parse comma-separated tokens to an array.\n *\n * @param {string} value\n *   Comma-separated tokens.\n * @returns {Array<string>}\n *   List of tokens.\n */\nfunction parse(value) {\n  /** @type {Array<string>} */\n  const tokens = []\n  const input = String(value || '')\n  let index = input.indexOf(',')\n  let start = 0\n  /** @type {boolean} */\n  let end = false\n\n  while (!end) {\n    if (index === -1) {\n      index = input.length\n      end = true\n    }\n\n    const token = input.slice(start, index).trim()\n\n    if (token || !end) {\n      tokens.push(token)\n    }\n\n    start = index + 1\n    index = input.indexOf(',', start)\n  }\n\n  return tokens\n}\n\n/**\n * Serialize an array of strings or numbers to comma-separated tokens.\n *\n * @param {Array<string|number>} values\n *   List of tokens.\n * @param {Options} [options]\n *   Configuration for `stringify` (optional).\n * @returns {string}\n *   Comma-separated tokens.\n */\nfunction stringify(values, options) {\n  const settings = options || {}\n\n  // Ensure the last empty entry is seen.\n  const input = values[values.length - 1] === '' ? [...values, ''] : values\n\n  return input\n    .join(\n      (settings.padRight ? ' ' : '') +\n        ',' +\n        (settings.padLeft === false ? '' : ' ')\n    )\n    .trim()\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGFBQWEsZUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBsb3JlX2Vhc2UvLi9ub2RlX21vZHVsZXMvY29tbWEtc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcz8wYjVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uIGZvciBgc3RyaW5naWZ5YC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3BhZExlZnQ9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBwYWQgYSBzcGFjZSBiZWZvcmUgYSB0b2tlbi5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW3BhZFJpZ2h0PWZhbHNlXVxuICogICBXaGV0aGVyIHRvIHBhZCBhIHNwYWNlIGFmdGVyIGEgdG9rZW4uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T3B0aW9uc30gU3RyaW5naWZ5T3B0aW9uc1xuICogICBQbGVhc2UgdXNlIGBTdHJpbmdpZnlPcHRpb25zYCBpbnN0ZWFkLlxuICovXG5cbi8qKlxuICogUGFyc2UgY29tbWEtc2VwYXJhdGVkIHRva2VucyB0byBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqICAgQ29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbiAqIEByZXR1cm5zIHtBcnJheTxzdHJpbmc+fVxuICogICBMaXN0IG9mIHRva2Vucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIC8qKiBAdHlwZSB7QXJyYXk8c3RyaW5nPn0gKi9cbiAgY29uc3QgdG9rZW5zID0gW11cbiAgY29uc3QgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgJycpXG4gIGxldCBpbmRleCA9IGlucHV0LmluZGV4T2YoJywnKVxuICBsZXQgc3RhcnQgPSAwXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgbGV0IGVuZCA9IGZhbHNlXG5cbiAgd2hpbGUgKCFlbmQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGlucHV0Lmxlbmd0aFxuICAgICAgZW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHRva2VuID0gaW5wdXQuc2xpY2Uoc3RhcnQsIGluZGV4KS50cmltKClcblxuICAgIGlmICh0b2tlbiB8fCAhZW5kKSB7XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbilcbiAgICB9XG5cbiAgICBzdGFydCA9IGluZGV4ICsgMVxuICAgIGluZGV4ID0gaW5wdXQuaW5kZXhPZignLCcsIHN0YXJ0KVxuICB9XG5cbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIG51bWJlcnMgdG8gY29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PHN0cmluZ3xudW1iZXI+fSB2YWx1ZXNcbiAqICAgTGlzdCBvZiB0b2tlbnMuXG4gKiBAcGFyYW0ge09wdGlvbnN9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIGZvciBgc3RyaW5naWZ5YCAob3B0aW9uYWwpLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgQ29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgLy8gRW5zdXJlIHRoZSBsYXN0IGVtcHR5IGVudHJ5IGlzIHNlZW4uXG4gIGNvbnN0IGlucHV0ID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXSA9PT0gJycgPyBbLi4udmFsdWVzLCAnJ10gOiB2YWx1ZXNcblxuICByZXR1cm4gaW5wdXRcbiAgICAuam9pbihcbiAgICAgIChzZXR0aW5ncy5wYWRSaWdodCA/ICcgJyA6ICcnKSArXG4gICAgICAgICcsJyArXG4gICAgICAgIChzZXR0aW5ncy5wYWRMZWZ0ID09PSBmYWxzZSA/ICcnIDogJyAnKVxuICAgIClcbiAgICAudHJpbSgpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/comma-separated-tokens/index.js\n");

/***/ })

};
;