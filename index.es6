export default (ctx, saveTransform = true) => {
    if (saveTransform) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    if (saveTransform) {
      ctx.restore();
    }           
};