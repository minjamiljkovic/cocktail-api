import fetchDrink from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';
const presentDrink = async () => {
    // console.log('hello there');
    const id = localStorage.getItem('drink');
    //ako ukljucimo drink.html samo preko linka, necemo imati nista jer nam je id u lokalnoj biblioteci u kojoj nista nismo klinkuli p ataj problem resavamo na sl nacin
    if(!id){
        window.location.replace('index.html');
    }
    else {
        const drink = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(drink); //vraca promisepa se ubaci await

    }
}
window.addEventListener('DOMContentLoaded', presentDrink);