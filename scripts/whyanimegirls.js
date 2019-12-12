//change background color code
let icon = document.getElementById('icon')

icon.addEventListener('click', () => {

    switch (document.body.style.backgroundColor) {
        case 'white':
            changeBackgroundColor("black");
            changeTitle('white');
            changeNavLinks('white');
            changeLogo('white');
            break;
    
        default:
            changeBackgroundColor("white");
            changeTitle('#585772');
            changeNavLinks('#585772');
            changeLogo('black');
            break;
    }
    console.log(colorChanged);
});

let changeBackgroundColor = (color) => {
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

let changeTitle = (color) => {
    document.getElementById('first-title').style.color = document.body.style.backgroundColor === 'white' ? 'black' : '#ff78bb';
    document.getElementById('second-title').style.color = document.body.style.backgroundColor === 'white' ? 'black' : '#ff78bb';
    document.getElementById('third-title').style.color = document.body.style.backgroundColor === 'white' ? 'black' : '#ff78bb';
    document.getElementById('first-description').style.color = color;
    document.getElementById('second-description').style.color = color;
    document.getElementById('third-description').style.color = color;
    document.getElementById('no').style.color = color
}

document.body.style.backgroundColor = "white"
