const container = document.querySelector('#container');

function createGrid(size){
    for(i = 0; i < size**2; i++){
        let div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
    };

    const divs = document.querySelector('.div');

    container.style.gridTemplateColumns = "repeat(" + size + " , 1fr)";
    container.styleGridTemplateRows = "repeat(" + size + " , 1fr)";

    divs.style.height = "30px";
    divs.style.width = "30px"; 
}

function addEventListeners(gridItem){
    gridItem.addEventListener('mouseenter', function(){
        gridItem.classList.add('fillIn');
    });
};

createGrid(32);

const gridItems = document.querySelectorAll('.div');  
gridItems.forEach(addEventListeners);
