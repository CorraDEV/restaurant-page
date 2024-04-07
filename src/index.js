import createHomepage from "./homepage.js";
import createAbout from "./about.js";
import createMenu from "./menu.js";
import './css/style.css';

createHomepage();
const navbar = document.querySelector('#navbar');
navbar.addEventListener('click', function(evt){
    if(evt.target.id == 'home'){
        createHomepage();
    }
    else if(evt.target.id == 'about'){
        createAbout();
    }
    else if(evt.target.id == 'menu'){
        createMenu();
    }
});