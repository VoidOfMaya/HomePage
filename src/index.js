import "./styles.css";
import { addCard } from "./createCards";
import battleship from './photos/battleship/battleship800x600.png';
import weatherApp from'./photos/weather app/weather-app800x600.png';
import todoApp from './photos/todo app/todoApp800x600.png';
import dashboard from './photos/dashboard/dashboard800x600.png';

import { githubIcon, linkedinIcon } from "./icons/icons";


addCard('Battleship',
        'https://github.com/VoidOfMaya/BattleShip',
        'https://voidofmaya.github.io/BattleShip/',
         battleship,

         "Welcome to the Battleship game project! This is an implementation of the classic strategic game Battleship, where players aim to sink their opponent's fleet of ships by guessing their locations."
);
addCard('Weather App',
        'https://github.com/VoidOfMaya/Weather-Api',
        ' https://voidofmaya.github.io/Weather-Api/',
         weatherApp,

         "welcome to weather app!, weather app  a simplified mini-project form the odin project intended for the purpose of practicing the handling of API requests and asynchronous code "
);
addCard('Simply-Todo',
        'https://github.com/VoidOfMaya/Simply-Todo/tree/main',
        'https://voidofmaya.github.io/Simply-Todo/',
        todoApp,

        "The Todo app is a staple project and a milestone for growing developers as it combines the complixity of  handelling DOM events and element management, as well as handelling CRUD operations!"
);
addCard('Admin Dashboard',
        'https://github.com/VoidOfMaya/Admin-Dashboard',
        'https://voidofmaya.github.io/Admin-Dashboard/',
        dashboard,
 
        "DashnBoard is a simplistic strictly html+css project intended for the practice of front end UI and styling skills"
);
const aboutMe = document.querySelector('.about-me-card');

const iconContainer = document.createElement('div');
//iconContainer.style.display= 'grid';
//iconContainer.style.gridTemplateColumns = "1fr 1fr";
//iconContainer.style.gridTemplateRows = "1fr";
iconContainer.style.gridTemplateAreas =`"git linked"`;
iconContainer.style.justifySelf="end";
iconContainer.style.alignItems="center";
//iconContainer.style.gap="10px";
iconContainer.classList.add('top-icon-container');
iconContainer.style.gridArea="icons";



const gitTopClone =githubIcon.cloneNode(true);
gitTopClone.style.gridArea = "git";
gitTopClone.style.width= '30px';
gitTopClone.style.height = "30px";
gitTopClone.style.margin= "0px";
gitTopClone.style.marginRight= "10px";




const linkedTopClone = linkedinIcon.cloneNode(true);
linkedTopClone.classList.add('link-icon')
linkedTopClone.style.gridArea = "linked";
linkedTopClone.style.width= '30px';
linkedTopClone.style.height = "30px";
linkedTopClone.style.marginRight= "10px";

gitTopClone.addEventListener('click',()=>{
        window.open("https://github.com/VoidOfMaya");
})
linkedTopClone.addEventListener('click',()=>{
        window.open("https://www.linkedin.com/in/maya-mzarib-57173039a/");
})

iconContainer.appendChild(gitTopClone);
iconContainer.appendChild(linkedTopClone);
aboutMe.appendChild(iconContainer);



const footerSocials = document.querySelector('.footer-links');
const gitFtClone =githubIcon.cloneNode(true);
gitFtClone.classList.add('icon-white')
gitFtClone.style.width= '30px';
gitFtClone.style.height = "30px";

const linkedFtClone = linkedinIcon.cloneNode(true);
linkedFtClone.classList.add('link-icon');
linkedFtClone.classList.add('icon-white');
linkedFtClone.style.width= '30px';
linkedFtClone.style.height = "30px";
linkedFtClone.style.transform="translateY(-15px)";

gitFtClone.addEventListener('click',()=>{
        window.open("https://github.com/VoidOfMaya");
})
linkedFtClone.addEventListener('click',()=>{
        window.open("https://www.linkedin.com/in/maya-mzarib-57173039a/");
})


footerSocials.appendChild(gitFtClone);
footerSocials.appendChild(linkedFtClone);


