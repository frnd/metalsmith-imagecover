'use strict';
var assert = require('assert');
var Metalsmith = require('metalsmith');
var imagecover = require('../lib/');
var markdown = require('metalsmith-markdown');

describe('metalsmith-imagecover', function() {
  it('should add first image as a cover', function(done) {
    var metalsmith = Metalsmith('test/fixtures/basic');
    metalsmith
      .use(markdown())
      .use(imagecover())
      .build(function(err, files) {
        if (err) {
          return done(err);
        }
        var cover = files["uno.html"].cover;
        assert.equal(cover.src, "/mountain.png");
        assert.equal(cover.title, "Mountain Title");
        assert.equal(cover.alt, "Mountain Alt");
        done();
      });
  });

  it('should throw error if used without html files', function(done) {
    var metalsmith = Metalsmith('test/fixtures/basic');
    metalsmith
      .use(imagecover())
      .use(markdown())
      .build(function(err, files) {
        if (err) {
          return done();
        }
        assert.fail();
      });
  });

  it('should use the given property', function(done) {
    var metalsmith = Metalsmith('test/fixtures/basic');
    metalsmith
      .use(markdown())
      .use(imagecover({property: 'theImageCover'}))
      .build(function(err, files) {
        if (err) {
          return done(err);
        }
        var cover = files["uno.html"].theImageCover;
        assert.equal(cover.src, "/mountain.png");
        assert.equal(cover.title, "Mountain Title");
        assert.equal(cover.alt, "Mountain Alt");
        done();
      });
  });

  it('should use the given attributes', function(done) {
    var metalsmith = Metalsmith('test/fixtures/basic');
    metalsmith
      .use(markdown())
      .use(imagecover({attributes: ['src', 'alt']}))
      .build(function(err, files) {
        if (err) {
          return done(err);
        }
        var cover = files["uno.html"].cover;
        assert.equal(cover.src, "/mountain.png");
        assert.equal(cover.alt, "Mountain Alt");
        done();
      });
  });
});
