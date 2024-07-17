import { Ui } from "./ui.module.js";

export class Meals {
    constructor(id){
        // document.querySelector("#btnClose").addEventListener("click", () => {
        //     document.querySelector("#details").classList.add("hidden");
        //     document.querySelector("#games").classList.remove("hidden");
        // })

        this.loadingScreen = document.getElementById('loading-screen');
        this.getMealDetails(id);
    }

    async getMealDetails(idCategory) {

        this.loadingScreen.style.display = 'flex';

        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idCategory}`;

            const api = await fetch(url);
            const response = await api.json();
            
            new Ui().displayMealDetails(response);

            this.loadingScreen.style.display = 'none';

    }

}

