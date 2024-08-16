const start = document.querySelector("#start");
const stop = document.querySelector("#stop");


// random color generator
const randomColor = () => {
    let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * hexCode.length)];
    }
    return color;
}

let intervalId;

// start function for event listener
const startColorChange = () => {
    intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomColor();
    }, 1000)
};

// stop function for event listeners
const stopColorChange = () => {
    clearInterval(intervalId);
    intervalId = null ;
}

start.addEventListener('click', startColorChange);
stop.addEventListener('click', stopColorChange);
