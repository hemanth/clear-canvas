# clear-canvas

[![Build Status](https://travis-ci.org/hemanth/clear-canvas.svg)](https://travis-ci.org/hemanth/clear-canvas) [![npm version](https://badge.fury.io/js/clear-canvas.svg)](http://badge.fury.io/js/clear-canvas)
> Clear canvas.

## Installation

`npm install clear-canvas --save`

## Usage

```js
var clear = require('clear-canvas');

clear(ctx); // ctx is canvas 2D context.
```

## Demo 

Checkout the live [demo](http://requirebin.com/?gist=a16d9e7380ca40a7dd96).

## API

```js
clear(ctx, saveTransform);
```

```ctx``` : 2D canvas context.

```saveTransform```: [Optional] Defaults to `true`, need if you need to preverse the state.




