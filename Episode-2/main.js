window.onload = function () {
    const canvas = document.querySelector('#canvas'),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        context.translate(0, height / 2)
        context.scale(1, -1)
        // context.fillRect(0, 0, width, height);
        for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
            let x = angle * 200,
                y = (Math.sin(angle) * 200);

                context.fillRect(x, y, 5, 5)
        }
}