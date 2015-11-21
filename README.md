# metalsmith-imagecover
 A [Metalsmith](http://metalsmith.io) plugin to assign each page with an image cover.


## Installation

TODO: This plugin is not published in npm, install using git url.

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
var excerpts = require('metalsmith-excerpts');

metalsmith.use(excerpts());
```

## Options

```json
{
  "property": 'cover',
  "attributes": ['src', 'alt', 'title']
}
```

## How to use in your template

Place in your template something like:

```
{% if post.cover %}
<img src="{{post.cover.src}}" alt="{{post.cover.alt}}" title="{{post.cover.src}}"/>
{% endif %}
```

## License

  MIT
