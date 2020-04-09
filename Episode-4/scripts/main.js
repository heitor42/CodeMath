
window.onload = function () {
    const canvas = document.querySelector('#canvas'),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        centerX = width / 2,
        centerY = height / 2;

    const radius = 200;
    let angle = 0,
    numObjects = 20,
    slice = Math.PI * 2 / numObjects,
    x, y;

    for (let i = 0; i < numObjects; i++) {
        angle = i * slice;
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;

        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
    }
/*
    //Circle
    const radius = 200,
        speed = 0.01;

    //ellipses
    const xRadius = 200,
        yRadius = 400,
        speed = .01;

    //Lissajous Curves
    let xAngle = 0,
        yAngle = 0,
        xSpeed = .1,
        ySpeed = .131,
        x, y;

     let angle = 0;

    render();

    function render() {
        context.clearRect(0, 0, width, height);
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;

        context.beginPath();
        context.arc(x, y, 10, Math.PI * 2, false);
        context.fill();

        angle += speed;
        // xAngle += xSpeed;
        // yAngle += ySpeed;

        requestAnimationFrame(render);
    }
*/
      
        
}

