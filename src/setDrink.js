const setDrink = (section) => {
// console.log(section);
section.addEventListener('click', function (e) {
    //mi kliknemo ali ne dobijemo povratnu informaciju u logu ispod jer otvaramo novi link
    // console.log(e.target);
    //ponasanje ce da ostane i dalje zelimo da pokrenemo drugu stranicu ali moramo da korstimo prvo
    // e.preventDefault();
    // console.log(e.target);
    // Ovim iznad se dobiju informacije o img klikom, a mogu se dobiti informacije i o hedingu medjutim nedobijamo data-id;
    // e.preventDefault(); //ovo da ne bi otislo na link nego da pokupi info
    const id = e.target.parentElement.dataset.id;
    // console.log(id);
    //pristupicemo dataid preko loacal storage
    // JSON ne koristimo JSON parse ili stringfy
    // unekim slucajevima koristimo JSON.stringfy pa JSON.parse ovde necemo to koristiti
    localStorage.setItem('drink', id);
})
}
export default setDrink;