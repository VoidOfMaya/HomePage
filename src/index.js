import "./styles.css";
import { addCard } from "./createCards";
import battleship from './photos/battleship.png';
import weatherApp from'./photos/weather-app.png';
import todoApp from './photos/todoApp.png';
import dashboard from './photos/dashboard.png'

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
        "The Todo app is a staple project and a milestone for growing developers as it combines the complixity of  handelling DOM events and element management, as well as handelling CRUD operations and presentation of the correct data to the user!"

)
addCard('Admin Dashboard',
        'https://github.com/VoidOfMaya/Admin-Dashboard',
        'https://voidofmaya.github.io/Admin-Dashboard/',
        dashboard,
        "DashnBoard is a simplistic strictly html+css project intended for the practice of front end UI and styling skills"

)