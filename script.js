const container = document.querySelector('#container');

//const paragraph = document.createElement("p");

//container.appendChild(div);

for(i = 0; i < 16**2; i++){
    let div = document.createElement('div');
    div.classList.add('theDivs');
    div.setAttribute(
        'style',
        'border-width: 1px; border-style: solid; border-color: black;\
        height: 20px; width: 20px;\
        '
    )
    container.appendChild(div);
};

//loop