import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
    constructor() {
        document.querySelectorAll('.link').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-link .text-red-500').classList.remove('text-red-500');
                link.classList.add('text-red-500');
                const category = link.dataset.category;
                this.getGames(category);
            })
        })
        this.loadingScreen = document.getElementById('loading-screen')
        this.getGames('mmorpg');
        
        this.ui = new Ui();

        this.details = document.querySelector('#details');
        this.games = document.querySelector('#games');

    }

    async getGames(category)  {
        this.loadingScreen.style.display = 'flex';

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bf855c3447msh89773a5863603e4p121e54jsnca2e72403956',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const api = await fetch(url, options);
        const response = await api.json();

        this.ui.displayGames(response);

        document.querySelectorAll('.game').forEach(element => {
            element.addEventListener('click', () => {
                this.details.classList.remove('hidden');
                this.games.classList.add('hidden');
                console.log(element.dataset.id);
                new Details(element.dataset.id);
            })
        })   



        this.loadingScreen.style.display = 'none';
    }





}