const circle = document.querySelector('.circle');
// const shape = document.querySelector('.shape');
const changeColorBtn = document.getElementById('chColor');
const changeShapeBtn = document.getElementById('chShape');

const colors = ['red', 'blue', 'yellow', 'purple', 'orange'];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
}

function changeShape() {
    let shape = document.getElementById('shape');
    let currentRadius = parseFloat(shape.style.borderRadius);
    if (currentRadius === 0) {
        shape.style.borderRadius = '50%'; 
        shape.style.backgroundColor = "red";
    }else {
        shape.style.borderRadius = '0'; 
        shape.style.backgroundColor = "white";
        
    }
}

changeColorBtn.addEventListener('click', changeColor);
changeShapeBtn.addEventListener('click', changeShape);
