import assert from 'assert';
import clearCanvas from './';



it('clear-canvas', () => {
    
    //canvas setup
    var canvas  =  document.createElement('canvas');
    canvas.width = '500';
    canvas.height = '300';
    canvas.style.outline = "1px solid black";
    document.body.appendChild(canvas);

    // Get the context.
    var ctx = canvas.getContext('2d');
    
    let expected = canvas.toDataURL('image/png');
    
    // Draw a triangle.
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(200,20);
    ctx.lineTo(120,120);
    ctx.closePath();
    ctx.stroke();
    
    
    clearCanvas(ctx);
    
    let actual = canvas.toDataURL('image/png');
    
    assert.equal(expected,actual,"Canvas wasn't cleared!");

});
