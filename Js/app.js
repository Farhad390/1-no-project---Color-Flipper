const allColors = ['#FF0000','#FFD700','green', 'blue'];
const btn = document.querySelector('.btn');
const changeColor = document.querySelector('.color');

btn.addEventListener('click', function(){
    //* Get random color from "allColors" array
    const randomNum = gerNumber();
    document.body.style.backgroundColor = allColors[randomNum];
    changeColor.textContent = allColors[randomNum]

})
//* color index number
function gerNumber(){
    return Math.floor(Math.random()*allColors.length)
}