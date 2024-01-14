let cube = document.getElementById('cube');
let rollButton = document.getElementById('rollButton');

angleArray = [[0, 0, 0], [-310, -362, -38], [-400, -320, -2], [135, -217, -88], [-224, -317, 5], [-47, -219, -81], [-133, -360, -53]];

rollButton.addEventListener('click', function (event) {
    cube.style.animation = 'animate 1.3s linear';

    const randomAngle = Math.floor(Math.random() * 6) + 1;
    console.log(randomAngle);
    cube.style.transform = 'rotateX(' + angleArray[randomAngle][0] + 'deg) rotateY(' + angleArray[randomAngle][1] + 'deg) rotateZ(' + angleArray[randomAngle][2] + 'deg)';
    cube.style.transition = '1s linear';

    cube.addEventListener('animationend', function (event) {
        cube.style.animation = '';
    });
});
