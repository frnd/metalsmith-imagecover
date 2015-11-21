'use strict';

var _ = require('lodash'),
  path = require('path'),
  cheerio = require('cheerio');

/**
 * default options
 * @type {Object}
 */
var defaultOptions = {
  property: "cover",
  attributes: ['src', 'alt', 'title']
};


/**
 * plugin expose function
 *
 * @param  {Object} options custom options
 * @return {Function}       plugin function
 */
module.exports = function(options) {
  options = _.merge({}, defaultOptions, options);
  return function(files, metalsmith, done) {
    setImmediate(done);
    _.forEach(files, function(file, filename) {
      if (!isHtml(filename)) {
        return done(new Error('This plugin only works with html files. Change the order of plugin execution so this plugin is executed after html creation'));
      }
      var image = getByFirstImage(file, options.attributes);
      file[options.property] = image;
    });
  };
};


/**
 * retrieve cover from file object by extracting the first image
 *
 * @param  {Object} file file object
 * @return {Object}       cover
 */
function getByFirstImage(file, attributes) {
  var $ = cheerio.load(file.contents.toString()),
    img = $('img').first(),
    obj = {};
  if (img.length) {
    _.forEach(attributes, function(attribute) {
      obj[attribute] = img.attr(attribute);
    });
    return obj;
  } else {
    return undefined;
  }
}


/**
 * Check if a filename has an html extension
 *
 * @param  {String}  filename path to check
 * @return {Boolean}          test result
 */
function isHtml(filename) {
  return /\.html?/.test(path.extname(filename)) ? true : false;
}
