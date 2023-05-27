import loadHomePage from './homePageLoader.js';
import loadContactPage from './contactPageLoader.js';
import loadMenu from './menuLoader.js';
import './style.css';

function clearPage () {
    const content = document.querySelector('main');
    while (content.firstChild) {
    content.removeChild(content.firstChild);
    }
}

// add event listener to <header> to bubble down to header items
function addHeaderEventListeners () {
    
    function loadNewDom () {
        // return clicked element as newDom to be appended to the page by the outer function
        let newDom;

        if (event.target.matches('.home')) {
            newDom = loadHomePage();
        }
        else if (event.target.matches('.contact')) {
            newDom = loadContactPage();
        }
        else if (event.target.matches('.menu')) {
            newDom = loadMenu();
        }
        else return;

        clearPage();
        main.appendChild(newDom);
    }

    const header = document.querySelector('header');
    header.addEventListener('click', loadNewDom);
}

let main = document.querySelector('main');
main.appendChild(loadHomePage());
addHeaderEventListeners();






