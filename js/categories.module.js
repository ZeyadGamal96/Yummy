export class Categories {
    constructor(){
        document.getElementById('categories').addEventListener('click' , async () => {
            event.preventDefault();
            $('.categories').removeClass('d-none'); 
            $('.area').addClass('d-none'); 
            $('.ingredients').addClass('d-none'); 
            $('.searchSection').addClass('d-none');
            $('.contact').addClass('d-none');
            $('.home').addClass('d-none');
            $('.details').addClass('d-none');
            $('.areaMeals').addClass('d-none');
            $('.ingMeals').addClass('d-none');
            $('.sidenav').animate({left: '-260px'}, 500);
            $('#hide').css('display', 'none');
            $('#view').css('display', 'block');
            await this.getCategory(); 
        });
    }

    async getCategory(){
        $('.loading-screen').fadeIn(500)
        const categoryResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const categoryData = await categoryResponse.json();
        await this.displayCategory(categoryData); 
        document.querySelectorAll('.meal').forEach(category => {
            category.addEventListener('click', async () => {
                await this.getCategoryMeals(category.dataset.category);
            });
        });
         $('.loading-screen').fadeOut(500)
    }

    async displayCategory(categoryData){ 
        let categoryCards = ``;
        for (let i = 0; i < categoryData.categories.length ; i++) {
            categoryCards += `
            <div class="meal" data-category="${categoryData.categories[i].strCategory}">
                <img src="${categoryData.categories[i].strCategoryThumb}" alt="image">
                <div class="layer">
                    <h3>${categoryData.categories[i].strCategory}</h3>
                    <p>${categoryData.categories[i].strCategoryDescription.slice(0,150)}</p>
                </div>
            </div>`;
        }

        document.getElementById('cat').innerHTML = categoryCards;
    }

    async getCategoryMeals(categoryName){
        $('.loading-screen').fadeIn(500)
        const categoryMealsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        const categoryMealsData = await categoryMealsResponse.json();
        this.displayCategoryMeals(categoryMealsData);
        $('.loading-screen').fadeOut(500)
    }
    
    async displayCategoryMeals(categoryMealsData){
        let categoryMealsCards = ``;
        for (let i = 0; i < categoryMealsData.meals.length ; i++) {
            categoryMealsCards += `
            <div class="meal" data-id="${categoryMealsData.meals[i].idMeal}">
                <img src="${categoryMealsData.meals[i].strMealThumb}" alt="image">
                <div class="layer"><p>${categoryMealsData.meals[i].strMeal}</p></div>
            </div>`;
        }
        document.getElementById('categoryMealsPage').innerHTML = categoryMealsCards;
        $('.categories').addClass('d-none');
        $('.categoryMeals').removeClass('d-none');
    
        document.querySelectorAll('.meal').forEach(meal => {
            meal.addEventListener('click', async () => {
                const mealId = meal.dataset.id;
                await this.getDetails(mealId);
                $('.details').removeClass('d-none');
                $('.categoryMeals').addClass('d-none');

            document.querySelector('.close-sign').addEventListener('click', () => {
                $('.details').addClass('d-none');
                $('.home').addClass('d-none');
                $('.categoryMeals').removeClass('d-none');
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
                    <p class="fs-3 fw-medium">Recipes:</p>
                    <h5>${detailsData.meals[i].strMeasure1} ${detailsData.meals[i].strIngredient1}</h5>
                    <h5>${detailsData.meals[i].strMeasure2} ${detailsData.meals[i].strIngredient2}</h5>
                    <h5>${detailsData.meals[i].strMeasure3} ${detailsData.meals[i].strIngredient3}</h5>
                    <h5>${detailsData.meals[i].strMeasure4} ${detailsData.meals[i].strIngredient4}</h5>
                    <h5>${detailsData.meals[i].strMeasure5} ${detailsData.meals[i].strIngredient5}</h5>
                    <h5>${detailsData.meals[i].strMeasure6} ${detailsData.meals[i].strIngredient6}</h5>
                    <h5>${detailsData.meals[i].strMeasure7} ${detailsData.meals[i].strIngredient7}</h5>
                    <h5>${detailsData.meals[i].strMeasure8} ${detailsData.meals[i].strIngredient8}</h5>
                    <h5>${detailsData.meals[i].strMeasure9} ${detailsData.meals[i].strIngredient9}</h5>
                    <h5>${detailsData.meals[i].strMeasure10} ${detailsData.meals[i].strIngredient10}</h5>
                    <h5>${detailsData.meals[i].strMeasure11} ${detailsData.meals[i].strIngredient11}</h5>
                    <h5>${detailsData.meals[i].strMeasure12} ${detailsData.meals[i].strIngredient12}</h5>
                    <h5>${detailsData.meals[i].strMeasure13} ${detailsData.meals[i].strIngredient13}</h5>
                    <h5>${detailsData.meals[i].strMeasure14} ${detailsData.meals[i].strIngredient14}</h5>
                    <h5>${detailsData.meals[i].strMeasure15} ${detailsData.meals[i].strIngredient15}</h5>
                    <h5>${detailsData.meals[i].strMeasure16} ${detailsData.meals[i].strIngredient16}</h5>
                    <h5>${detailsData.meals[i].strMeasure17} ${detailsData.meals[i].strIngredient17}</h5>
                    <h5>${detailsData.meals[i].strMeasure18} ${detailsData.meals[i].strIngredient18}</h5>
                    <h5>${detailsData.meals[i].strMeasure19} ${detailsData.meals[i].strIngredient19}</h5>
                    <h5>${detailsData.meals[i].strMeasure20} ${detailsData.meals[i].strIngredient20}</h5>
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
