export class Search{
    constructor(){
        document.getElementById('searchSection').addEventListener('click' , ()=> {
            event.preventDefault();
            $('.searchSection').removeClass('d-none'); 
            $('.categoryMeals').addClass('d-none');
            $('.area').addClass('d-none');
            $('.categories').addClass('d-none');  
            $('.ingredients').addClass('d-none'); 
            $('.contact').addClass('d-none');
            $('.home').addClass('d-none');
            $('.details').addClass('d-none');
            $('.areaMeals').addClass('d-none');
            $('.ingMeals').addClass('d-none');
            $('.sidenav').animate({left: '-260px'}, 500);
            $('#hide').css('display', 'none');
            $('#view').css('display', 'block');
        })
    }
}

