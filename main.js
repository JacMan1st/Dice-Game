let cube = document.getElementById('cube');
let rollButton = document.getElementById('rollButton');
let scoreDisplay = document.getElementById('Score');
let countDisplay = document.getElementById('count');
let winDisplay = document.getElementById('Win');

//  each rotation angle set to a number
const angleMap = {
    '0,0,0': 1,
    '-310,-362,-38': 1,
    '-400,-320,-2': 2,
    '135,-217,-88': 3,
    '-224,-317,5': 4,
    '-47,-219,-81': 5,
    '-133,-360,-53': 6
};

let totalScore = 0;
let totalRolls = 0;
let totalWins = 0;

rollButton.addEventListener('click', (event) => {
    // simulate a dice roll 
    rollDiceWithRotation();
});

const rollDiceWithRotation = () => {
    const rotations = [
        [0, 0, 0],
        [-310, -362, -38],
        [-400, -320, -2],
        [135, -217, -88],
        [-224, -317, 5],
        [-47, -219, -81],
        [-133, -360, -53],
    ];

    const randomIndex = Math.floor(Math.random() * rotations.length);
    const rotation = rotations[randomIndex];

    // rotate the cube manually
    cube.style.transition = 'transform 0.7s linear';
    cube.style.transform = `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)`;

    // simulate a dice roll 
    const angleKey = rotation.join(',');
    const rolledNumber = angleMap[angleKey];

    // logs the rolled number
    scoreDisplay.textContent = rolledNumber;

    // Check if rolled a 1
    if (rolledNumber === 1) {
        totalScore = 0;
        totalRolls = 0;
        scoreDisplay.textContent = totalScore;
        countDisplay.textContent = totalRolls;
        scoreDisplay.textContent = 'You lose'
        return; // end the function to prevent further enteries
    }
    // updates total rolls
    totalRolls++;
    countDisplay.textContent = totalRolls;

    // update total score
    totalScore += rolledNumber;
    scoreDisplay.textContent = totalScore;


    // reset the total score if target is reached 
if (totalScore >= 20) {
    totalWins++;
    winDisplay.textContent = totalWins;
    scoreDisplay.textContent = 'You won!';
    totalScore = 0;
    totalRolls = 0;
    countDisplay.textContent = totalRolls;
}


    // a delay to match the rotation duration
    // setTimeout(() => {
    //     cube.style.transition = ''; // Clear the transition
    // }, 1300);
}




// // // THIS IS THE BOUNCING DICE ANIMATION/VERSION, I COULD NOT INTEGRATE WITH THE SCORING SYSTEM

// let cube = document.getElementById('cube');
// let rollButton = document.getElementById('rollButton');

// angleArray = [[0, 0, 0], [-310, -362, -38], [-400, -320, -2], [135, -217, -88], [-224, -317, 5], [-47, -219, -81], [-133, -360, -53]];

// rollButton.addEventListener('click', function (event) {
//     cube.style.animation = 'animate 1.3s linear';

//     const randomAngle = Math.floor(Math.random() * 6) + 1;
//     // console.log(randomAngle);
//     cube.style.transform = 'rotateX(' + angleArray[randomAngle][0] + 'deg) rotateY(' + angleArray[randomAngle][1] + 'deg) rotateZ(' + angleArray[randomAngle][2] + 'deg)';
//     cube.style.transition = '1s linear';

//     cube.addEventListener('animationend', function (event) {
//         cube.style.animation = '';
//     });
// });
