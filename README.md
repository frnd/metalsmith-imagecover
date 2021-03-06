[![Build Status](https://travis-ci.org/frnd/metalsmith-imagecover.svg?branch=master)](https://travis-ci.org/frnd/metalsmith-imagecover)

# metalsmith-imagecover
 A [Metalsmith](http://metalsmith.io) plugin to assign each page with an image cover.


## Installation

    $ npm install metalsmith-imagecover

## CLI Usage

  Install via npm and then add the `metalsmith-imagecover` key to your `metalsmith.json` plugin, like so:

```json
{
  "plugins": {
    "metalsmith-imagecover": true
  }
}
```

## Javascript Usage

```js
var imagecover = require('metalsmith-imagecover');

metalsmith.use(imagecover());
```

## Options

```json
{
  "property": "cover",
  "attributes": ["src", "alt", "title"]
}
```

property: is the name of the property that this plugin will create in metadata.
attributes: the list of attributes to extract

## How to use in your template

Place in your template something like:

```
{% if post.cover %}
<img src="{{post.cover.src}}" alt="{{post.cover.alt}}" title="{{post.cover.src}}"/>
{% endif %}
```

## License

  MIT
