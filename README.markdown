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

```js
clear = require('clear-canvas');

//canvas setup
var canvas  =  document.createElement('canvas');
canvas.width = '500';
canvas.height = '300';
canvas.style.outline = "1px solid black";
document.body.appendChild(canvas);

// Get the context.
var ctx = canvas.getContext('2d');

// Draw a triangle.
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath();
ctx.stroke();

// Clear the canvas after 1000ms.
setTimeout( function() {clear(ctx, true);}.bind(this), 1000);
```

## API

```js
clear(ctx, saveTransform);
```

```ctx``` : 2D canvas context.

```saveTransform```: [Optional] Defaults to `true`, need if you need to preverse the state.




