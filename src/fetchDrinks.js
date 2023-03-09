import {showLoading} from './toggleLoading.js';
import {hideLoading} from './toggleLoading.js';
const fetchDrinks = async (url) => {
    // return 1;
    showLoading();
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error){
    // console.log(error);
        
    }
};
export default fetchDrinks;