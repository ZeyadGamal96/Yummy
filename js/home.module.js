export class Home {
    constructor(){
        this.view = document.getElementById('view').addEventListener('click' , ()=> {
            $('.sidenav').animate({left: '0px'}, 500);
            $('#view').css('display', 'none');
            $('#hide').css('display', 'block');
        })

        this.hide = document.getElementById('hide').addEventListener('click' , ()=> {
            $('.sidenav').animate({left: '-260px'}, 500);
            $('#hide').css('display', 'none');
            $('#view').css('display', 'block');
        })
        this.getHome()
    }

    async getHome(){
        $('.loading-screen').fadeIn(500)
        const homeResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        const homeData = await homeResponse.json();
        this.displayHome(homeData);

        const meals = document.querySelectorAll('.meal');
        meals.forEach(meal => {
        meal.addEventListener('click', () => {
            const mealId = meal.getAttribute('data-id');
            this.getDetails(mealId);
            });
        });
        $('.loading-screen').fadeOut(500)
    }
    
    displayHome(homeData){
        let homeCards = ``;
        for (let i = 0; i < homeData.meals.length ; i++) {
            homeCards += `
            <div class="meal" data-id="${homeData.meals[i].idMeal}">
                <img src="${homeData.meals[i].strMealThumb}" alt="image">
                <div class="layer"><p>${homeData.meals[i].strMeal}</p></div>
            </div>`;
        }
        document.getElementById('homePage').innerHTML = homeCards;
    
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
        <div class="col-md-3">
                <img src="${detailsData.meals[i].strMealThumb}" alt="image">
                <h2>${detailsData.meals[i].strMeal}</h2>
                </div>
                <div class="col-md-7">
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
