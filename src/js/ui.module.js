export class Ui {

    constructor() {
        
    }

    displayGames(data) {

        let games = ``;
        for (const game of data) {
            games += `
                <div class="w-full md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 game" data-id="${game.id}">
                    <div class="inner p-4 border">
                        <img src="${game.thumbnail}" alt="" class="w-full rounded-t">
                        <div class="flex justify-between items-center my-2 text-white">
                            <h3>${game.title}</h3>
                            <span class="bg-blue-500 px-2 py-1 rounded">free</span>
                        </div>
                        <p class="text-center">
                            ${game.short_description.slice(0, 20)}
                        </p>
                    </div>
                    <div class="border-t-0 border-r border-l border-b border-white text-white flex justify-between items-center px-2 py-1">
                        <span class="bg-gray-800 rounded text-xs p-2">${game.genre}</span>
                        <span class="bg-gray-800 rounded text-xs p-2">${game.platform}</span>
                    </div>
                </div>
            `;    
        }
        document.querySelector('.games').innerHTML = games;
    }

    displayGameDetails(data){
        const details = `

            <div id="content" class="flex justify-between container mx-auto gap-6">
            <figure class="w-1/3">
                <img src="${data.thumbnail}" class="w-full" alt="">
            </figure>
            <div class="w-2/3">
                <h2 class="py-2">Title : <span>${data.title}</span></h2>
                <h3 class="py-2">Category : <span>${data.genre}</span></h3>
                <h3 class="py-2">Platform : <span>${data.platform}</span></h3>
                <h3 class="py-2">Status : <span>${data.status}</span></h3>
                <p class="my-5">
                    ${data.description}
                </p>
                <a href="${data.game_url}" target="_blank" class="text-white border-2 rounded bg-transparent border-b-yellow-700 px-4 py-2 hover:bg-yellow-300">
                    Show game
                </a>
            </div>
        </div>
        
        `;

        document.querySelector("#content").innerHTML = details;
    }
}

