//change background color code

let icon = document.getElementById('icon')

icon.addEventListener('click', () => {

    switch (document.body.style.backgroundColor) {
        case 'white':
            changeBackgroundColor("black");
            changeNavLinks('white');
            changeLogo('white');
            break;
    
        default:
            changeBackgroundColor("white");
            changeNavLinks('#585772');
            changeLogo('black');
            break;
    }
    console.log(document.getElementById('title').style.color)
});

let changeBackgroundColor = (color ) => {
    document.body.style.backgroundColor = color; 
}

let changeNavLinks = (color) => {
    let Links = ['a-color', 'b-color', 'c-color', 'd-color'];

    for (i = 0; i < Links.length; i ++) {
        document.getElementById(Links[i]).style.color = color;
    }
}

let changeLogo = (color) => {
    document.getElementById('title').style.color = color;
} 

document.body.style.backgroundColor = "white"