export class Ingredients {
    constructor(){
        document.getElementById('ingredients').addEventListener('click' , ()=> {
            event.preventDefault();
            $('.ingredients').removeClass('d-none'); 
            $('.area').addClass('d-none'); 
            $('.categories').addClass('d-none'); 
            $('.searchSection').addClass('d-none');
            $('.categoryMeals').addClass('d-none');
            $('.contact').addClass('d-none');
            $('.home').addClass('d-none');
            $('.details').addClass('d-none');
            $('.areaMeals').addClass('d-none');
            $('.ingMeals').addClass('d-none');
            $('.sidenav').animate({left: '-260px'}, 500);
            $('#hide').css('display', 'none');
            $('#view').css('display', 'block');
            this.getIng();
        })
    }

    async getIng(){
        $('.loading-screen').fadeIn(500)
        const ingResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        const ingData = await ingResponse.json();
        await this.displayIng(ingData); 
        document.querySelectorAll('.ingredient').forEach(ingredient => {
            ingredient.addEventListener('click', async () => {
                const ingName = ingredient.querySelector('h3').innerText;
                await this.getIngMeals(ingName);
            });
        });
         $('.loading-screen').fadeOut(500)
    }

    

    async displayIng(ingData) {
        let ingCards = ``;
        for (let i = 0; i < Math.min(ingData.meals.length, 20); i++) {
            ingCards += `
            <div class="ingredient">
                <i class="fa-solid fa-drumstick-bite"></i>
                <h3>${ingData.meals[i].strIngredient}</h3>
                <p>${ingData.meals[i].strDescription.slice(0, 150)}</p>
            </div>`;
        }
    
        document.getElementById('ingPage').innerHTML = ingCards;
    }
    
    
    

    async getIngMeals(ingName){
        $('.loading-screen').fadeIn(500)
        const ingMealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingName}`);
        const ingMealsData = await ingMealsResponse.json();
        this.displayIngMeals(ingMealsData);
        $('.loading-screen').fadeOut(500)
    }
    
    async displayIngMeals(ingMealsData){
        let ingMealsCards = ``;
        for (let i = 0; i < ingMealsData.meals.length ; i++) {
            ingMealsCards += `
            <div class="meal" data-id="${ingMealsData.meals[i].idMeal}">
                <img src="${ingMealsData.meals[i].strMealThumb}" alt="image">
                <div class="layer"><p>${ingMealsData.meals[i].strMeal}</p></div>
            </div>`;
        }
        document.getElementById('ingMealsPage').innerHTML = ingMealsCards;
        $('.ingredient').addClass('d-none');
        $('.ingMeals').removeClass('d-none');
    
        document.querySelectorAll('.meal').forEach(meal => {
            meal.addEventListener('click', async () => {
                const mealId = meal.dataset.id;
                await this.getDetails(mealId);
                $('.details').removeClass('d-none');
                $('.ingMeals').addClass('d-none');

                document.querySelector('.close-sign').addEventListener('click', () => {
                    $('.details').addClass('d-none');
                    $('.home').addClass('d-none');
                    $('.ingMeals').removeClass('d-none');
                });
            });
        });
        
    }
    

    async getDetails(detail){
        $('.loading-screen').fadeIn(500)
        const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`);
        const detailsData = await detailsResponse.json();
        this.displayDetails(detailsData); 
        $('.loading-screen').fadeOut(500)
    }
    

    displayDetails(detailsData){
        let detailsCards = ``;
        for (let i = 0; i < detailsData.meals.length ; i++) {
            detailsCards += `
            <div class="col-md-4">
                <img src="${detailsData.meals[i].strMealThumb}" alt="image">
                <h2>${detailsData.meals[i].strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h1>Instructions</h1>
                <p>${detailsData.meals[i].strInstructions}</p>
                <p class="fs-3 fw-medium">Area: <span class="fw-light">${detailsData.meals[i].strArea}</span></p>
                <p class="fs-3 fw-medium">Category: <span class="fw-light">${detailsData.meals[i].strCategory}</span></p>
                <p class="fs-3 fw-medium">Tags:</p>
                <h5 class="tags">${detailsData.meals[i].strTags}</h5>
                <div class="buttons">
                    <a href="${detailsData.meals[i].strSource}" target="_blank" class="btn btn-success">Source</a>
                    <a href="${detailsData.meals[i].strYoutube}" target="_blank" class="btn btn-danger">Youtube</a>
                </div>
                <div class="close-sign">
                    <i class="fas fa-times py-4"></i>
                </div>
            </div>`;
        }
        document.getElementById('mealDetails').innerHTML = detailsCards;
        $('.details').removeClass('d-none')
        $('.area').addClass('d-none'); 
        $('.categories').addClass('d-none'); 
        $('.searchSection').addClass('d-none');
        $('.ingredients').addClass('d-none'); 
        $('.contact').addClass('d-none');
        $('.home').addClass('d-none');
        $('.sidenav').animate({left: '-260px'}, 500);
        $('#hide').css('display', 'none');
        $('#view').css('display', 'block');

        document.querySelector('.close-sign').addEventListener('click', () => {
            $('.details').addClass('d-none');
            $('.home').removeClass('d-none');
        });
    }
}
