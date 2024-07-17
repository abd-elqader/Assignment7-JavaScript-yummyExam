import { Meals } from "./meal.module.js";
import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        // document.querySelector("#btnClose").addEventListener("click", () => {
        //     document.querySelector("#details").classList.add("hidden");
        //     document.querySelector("#games").classList.remove("hidden");
        // })

        this.loadingScreen = document.getElementById('loading-screen');
        this.getGameDetails(id);
    }

    async getGameDetails(strCategory) {
        this.loadingScreen.style.display = 'flex';
        
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`;

            const api = await fetch(url);
            const response = await api.json();
            
            console.log(response);
            new Ui().displayFoods(response);
            // new Ui().displayGameDetails(response);
            document.querySelectorAll('.group').forEach(element => {
                element.addEventListener('click', () => {
                    // this.details.classList.remove('hidden');
                    // this.games.classList.add('hidden');
                    console.log(element.dataset.id);
                    new Meals(element.dataset.id);
                })
            })   

            this.loadingScreen.style.display = 'none';

    }

}

