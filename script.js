const target = document.getElementById('target');
let yes = document.getElementById('yes');

yes.addEventListener('click',() => {
alert("THANKS I APPRECIATE, I LOVE YOU BABYGAL CLAIRE");
})
const emoji = "😊"; // Just copy the emoji  
console.log("Hello World " + emoji);

function moveTarget(){
    const maxwidth = 400;
    const maxheight = 400;

    const ranomX = Math.floor(Math.random() * maxwidth);
    const ranomY = Math.floor(Math.random() * maxheight);

    target.style.left = ranomX + 'px';
    target.style.top = ranomY + 'px';
}

target.addEventListener('mouseenter', function(){
    moveTarget();

})
