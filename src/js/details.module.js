import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        document.querySelector("#btnClose").addEventListener("click", () => {
            document.querySelector("#details").classList.add("hidden");
            document.querySelector("#games").classList.remove("hidden");
        })
        this.getGameDetails(id);
    }

    async getGameDetails(id) {

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bf855c3447msh89773a5863603e4p121e54jsnca2e72403956',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

            const api = await fetch(url, options);
            const response = await api.json();
            
            console.log(response);
            new Ui().displayGameDetails(response);

    }

}

