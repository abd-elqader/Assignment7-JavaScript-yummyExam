import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Categories {
    constructor() {
        // document.querySelectorAll('.link').forEach(link => {
        //     link.addEventListener('click', () => {
        //         document.querySelector('.nav-link .text-red-500').classList.remove('text-red-500');
        //         link.classList.add('text-red-500');
        //         const category = link.dataset.category;
        //         this.getCategories(category);
        //     })
        // })
        this.loadingScreen = document.getElementById('loading-screen')
        this.getCategories();
        
        this.ui = new Ui();

        this.details = document.querySelector('#details');
        this.games = document.querySelector('#games');

    }

    async getCategories()  {
        this.loadingScreen.style.display = 'flex';
    
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

        const api = await fetch(url);
        const response = await api.json();
        this.ui.displayCategories(response);

        document.querySelectorAll('.game').forEach(element => {
            element.addEventListener('click', () => {
                // this.details.classList.remove('hidden');
                // this.games.classList.add('hidden');
                new Details(element.dataset.category);
            })
        })   
        this.loadingScreen.style.display = 'none';
    }





}