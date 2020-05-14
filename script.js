window.onload = function() {
    //handling mouse click and move events
    canvas.addEventListener('mousemove', handleMove); 
    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mouseup', handleUp);
    
    //handling mobile touch events
    canvas.addEventListener("touchstart", handleStart, false);
    canvas.addEventListener("touchend", handleEnd, false);
    canvas.addEventListener("touchcancel", handleCancel, false);
    canvas.addEventListener("touchleave", handleEnd, false);
    canvas.addEventListener("touchmove", handleTouchMove, false);
};
