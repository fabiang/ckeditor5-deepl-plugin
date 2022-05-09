# @fabiang/ckeditor5-deepl-plugin

CKEditor plugin that integrates Deepl translation engine.
It will translate the whole editor content including the HTML tags,
but Deepl is able to leave them untouched.

[![npm version](https://badge.fury.io/js/@fabiang%2Fckeditor5-deepl-plugin.svg)](https://badge.fury.io/js/@fabiang%2Fckeditor5-deepl-plugin)

## MUST READ NOTE

**This plugin exposes your API KEY for Deepl!**
I'm fine with that, since I'm using this for internal websites.
Don't use that plugin on public websites! PR welcome to change that!

## INSTALL

With Yarn:

```
yarn add @fabiang/ckeditor5-deepl-plugin
```

With NPM

```
npm install --save-prod @fabiang/ckeditor5-deepl-plugin
```

## USAGE

Pretty simple, add the plugin to the list of your CKEidtor plugins and load it into the toolbar:

```js
import Deepl from '@fabiang/ckeditor5-deepl-plugin/src/deepl';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ ... Deepl ],
        toolbar: [ ... 'deepl' ],
        deepl: {
          free_api: true, // free api version yes/no?
          target_lang: 'en', // the target language to translate to, input language is guesses from the text
          auth_key: process.env.DEEPL_AUTH_KEY // your authentication key
        }
    } );
```

The app.js and test.html in this repository contain an example. For it, build the project with Webpack.

## LICENSE

[BSD 2-Clause License](LICENSE)
