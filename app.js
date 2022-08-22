const container = document.getElementById('container')
container.style.setProperty('width','960');

let rowBox; let coloumnBox;
for(let i=1; i<=16;i++){
    rowBox = document.createElement('div')
    rowBox.classList.add("rowBox")
    container.append(rowBox);
    for(let j=1;j<=16;j++){
        coloumnBox = document.createElement('div');
        coloumnBox.classList.add("coloumnBox");
        rowBox.append(coloumnBox);
        
        coloumnBox.addEventListener('dragover', (e)=>{
            e.target.classList.add("playing");
            
        })

    }
}
