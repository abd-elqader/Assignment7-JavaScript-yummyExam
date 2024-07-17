export class Ui {

    constructor() {
        
    }

    displayCategories(data) {
        console.log(data);
        let games = ``;
        for (const game of data.categories) {
            games +=
            `
                <div class='w-100 md:w-3/12'>
                    <div class="group p-3 cursor-pointer" data-id="${game.idCategory}">
                        <div class="relative overflow-hidden">
                            <img src="${game.strCategoryThumb}" alt="">
                            <div class="absolute h-full w-full flex justify-center items-center bg-black/20 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h1 class="text-3xl text-center game text-white" data-category="${game.strCategory}">${game.strCategory}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            `;    
        }
        document.querySelector('#content').innerHTML = games;
    }

    displayFoods(data) {
        console.log(data.meals);
        let games = ``;
        for (const game of data.meals) {
            games +=
            `
                <div class='w-100 md:w-3/12'>
                    <div class="group p-3 cursor-pointer" data-id="${game.idMeal}">
                        <div class="relative overflow-hidden">
                            <img src="${game.strMealThumb}" alt="">
                            <div class="absolute h-full w-full flex justify-center items-center bg-black/20 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <h1 class="text-3xl text-center text-white">${game.strMeal}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            `;    
        }
        document.querySelector('#content').innerHTML = games;
    }

    displayMealDetails(data){
        console.log(data.meals[0].strMeal);
        const details = `

            <div id="content" class="flex justify-between container mx-auto gap-6">
            <figure class="w-1/3">
                <img src="${data.meals[0].strMealThumb}" class="w-full" alt="">
            </figure>
            <div class="w-2/3">
                <h2 class="py-2">Meal : <span>${data.meals[0].strMeal}</span></h2>
                <h3 class="py-2">Category : <span>${data.meals[0].strCategory}</span></h3>
                <h3 class="py-2">Area : <span>${data.meals[0].strArea}</span></h3>
                <h3 class="py-2">Tags : <span>${data.meals[0].strTags}</span></h3>
                <p class="my-5">
                    ${data.meals[0].strInstructions}
                </p>
                <a href="${data.meals[0].strYoutube}" target="_blank" class="text-white border-2 rounded bg-transparent border-b-yellow-700 px-4 py-2 hover:bg-yellow-300">
                    Youtube
                </a>
            </div>
        </div>
        
        `;

        document.querySelector("#content").innerHTML = details;
    }
}

