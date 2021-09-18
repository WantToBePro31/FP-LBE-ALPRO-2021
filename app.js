const docStyle = document.body.style;

document.querySelector('#cursor1').addEventListener('click', () => {
    if(!docStyle.cursor) docStyle.cursor = 'auto';
    else docStyle.cursor = null;
});
document.querySelector('#cursor2').addEventListener('click', () => {
    if(!docStyle.cursor) docStyle.cursor = 'pointer';
    else docStyle.cursor = null;
});

function scrollingHome(){
    window.scrollTo({
     top: 120,
     behavior: "smooth"
    });
}

function scrollingAbout(){
    window.scrollTo({
     top: 1080,
     behavior: "smooth"
    });
}

function scrollingSkill(){
    window.scrollTo({
     top: 1835,
     behavior: "smooth"
    });
}

function scrollingContact(){
    window.scrollTo({
     top: 2500,
     behavior: "smooth"
    });
}