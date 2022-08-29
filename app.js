let click = true;
function populate(size){
    let container = document.querySelector('.container');
    let boxes = container.querySelectorAll('div');
    boxes.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;
    let changeColor = document.getElementById('changeColor');
    let hexValue = document.getElementById('hexValue');
    let buttons = document.querySelector(".buttons");
    let eraser = document.getElementById('eraser');

    let amount = size*size;
    for(let i=0; i< amount ;i++){
        let gridBox = document.createElement('div');
        gridBox.classList.add("gridBox");
        let color; let hex;
            changeColor.addEventListener('input', (e)=>{
                color= e.target.value;
                hexValue.value = color;
            }) 
            eraser.addEventListener('click',()=>{
                color = "white";
            })
            
            gridBox.addEventListener("mouseover",()=>{
                if(click){
                    gridBox.style.backgroundColor = `${color}`;
                }
            });
              
            
        
           
        gridBox.style.backgroundColor = "white";
        container.insertAdjacentElement("beforeend", gridBox);
    }
    
}
populate(16);

function changeSize(input){
   if( input>=2 && input<=100){
    populate(input);
   }
   else{
    document.querySelector(".error").textContent = "Please enter value between 2 and 100"

   }
    
}

function reset(){
    let container = document.querySelector('.container')
    let boxes = container.querySelectorAll('div')
    boxes.forEach((div) => div.style.backgroundColor="white");
}

document.querySelector('body').addEventListener('click',(e)=>{
   if(e.target.tagName != 'BUTTON'){
    click = !click;
    if(click){
        document.querySelector(".mode").textContent = "Mode: Colouring"
    }else{
        document.querySelector(".mode").textContent = "Mode: Not Colouring"
    }
   }
})