//change background color code

let icon = document.getElementById('icon');

icon.addEventListener('click', () => {

    switch (document.body.style.backgroundColor) {
        case 'white':
            changeBackgroundColor("black");
            changeParagraphColors('white');
            changeNavLinks('white');
            changeLogoColor('white');
            break;
    
        default:
            changeBackgroundColor("white");
            changeParagraphColors('#585772');
            changeNavLinks('#585772');
            changeLogoColor('black');
            break;
    }
    console.log(colorChanged);
});



let changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;   
}

let changeParagraphColors = (color) => {
    document.getElementById('paragraph').style.color = color
}

let changeNavLinks = (color) => {
    let links = ['a-color', 'b-color', 'c-color', 'd-color']

    for (let i = 0;  i < links.length; i++) {
        document.getElementById(links[i]).style.color = color
    }
}

let changeLogoColor = (color) => {
    document.getElementById('title').style.color = color
}
//

//Buttons
let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById('button-two');

buttonOne.addEventListener('click', () => {
    alert("this doesn't do anything");
})

buttonTwo.addEventListener('click', () => {
    alert("this doesn't do anything");
})

document.body.style.backgroundColor = 'white';