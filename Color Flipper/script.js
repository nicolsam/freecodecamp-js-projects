const generatedColor = document.getElementById('generated-color');
const generateBackground = document.getElementById('generate-background');

const generateButton = document.getElementById('generate-button');

const acceptedCharacters = [ 'A' , 'B', 'C', 'D', 'E', 'F' ];

setColor();

generateButton.addEventListener('click', () => {
    setColor();
})

function generateColor() {
    
    let color = ['F', 'F', 'F', 'F', 'F', 'F'];

    color.forEach((element, index, array) => {
        let rand = Math.random() < 0.5;

        if(rand) {
            array[index] = Math.floor(Math.random() * 10);
        } else {
            array[index] = acceptedCharacters[Math.floor(Math.random() * 6)]
        }

    })

    let hex = color.join('');

    return hex;

}

function setColor() {

    let hex = generateColor();

    generateBackground.style.backgroundColor = `#${hex}`;
    generatedColor.innerHTML = hex;

}