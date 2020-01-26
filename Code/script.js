const container = document.querySelector('#container');

function createGrid(size){
    for(i = 0; i < size**2; i++){
        let div = document.createElement('div');
        div.classList.add('div');
        container.appendChild(div);
    };
    container.style.gridTemplateColumns = "repeat(" + size + " , 1fr)";
    container.styleGridTemplateRows = "repeat(" + size + " , 1fr)";

}
function clearGrid(gridItem){
    gridItem.remove();
};


function addEventListeners(gridItem){
    gridItem.addEventListener('mouseenter', function(){
        gridItem.classList.add('fillIn');
    });
};

createGrid(16);
selectGrid();

//const divs = document.querySelectorAll('.div');
function selectGrid(){
    const gridItems = document.querySelectorAll('.div');  
    gridItems.forEach(addEventListeners);

    const clearButton = document.querySelector("#clearButton");
    clearButton.addEventListener("click", function(){
    
    gridItems.forEach(clearGrid);
    const sizeOfGrid = prompt("How large do you want the grid?");
    createGrid(sizeOfGrid);
    selectGrid();
    
});
};







