"use strict";

module.exports = function (ctx) {
  var saveTransform = arguments[1] === undefined ? true : arguments[1];
  if (saveTransform) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  if (saveTransform) {
    ctx.restore();
  }
};