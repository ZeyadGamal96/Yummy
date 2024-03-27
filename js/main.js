import { Home } from "./home.module.js";
import { Area } from "./area.module.js";
import { Categories } from "./categories.module.js";
import { Contact } from "./contact.module.js";
import { Ingredients } from "./ingredients.module.js";
import { SearchByLetter } from "./searchByLetter.module.js";
import { SearchByName } from "./searchByName.module.js";
import { Search } from "./search.module.js";


$(document).ready(()=>{
    $('.loading-screen').fadeOut(500)
    $('body').css('overflow' , 'visible')
})
const home = new Home();
const contact = new Contact();
const ingredients = new Ingredients();
const area = new Area();
const categories = new Categories();
const searchByName = new SearchByName();
const searchByLetter = new SearchByLetter();
const search = new Search();


