let query = document.querySelector('input').innerText;
let id;
async function getData(){
    try{
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}&key='1'`);
        let data = await res.json();
        return data.meals;
    }
    catch(err){

    }
}
let result = document.getElementById("result");
function appendData(data){
    data.forEach((element)=>{
        let div = document.createElement('div');
        // let image = document.createElement('img');
        // image.src = element.strMealThumb;
        
        let meal = document.createElement('h3')
        meal.innerText = element.strMeal;
        div.append(meal)
        result.append(div);
        div.addEventListener("click",function(){
            // console.log(element.strMeal);
            localStorage.setItem("R_Details",JSON.stringify(element));
            window.location.href = 'details.html'
        })
    })

}
async function main(){
    let data =await  getData();
    appendData(data)
}
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        func();
    },delay)
}
document.getElementById("signin").addEventListener("click",()=>{
    window.location.href = 'signup.html'
})
document.getElementById("login").addEventListener("click",()=>{
    window.location.href = 'login.html'
})
document.getElementById("theday").addEventListener("click",()=>{
    window.location.href = 'oftheday.html'
})
// dateModified: null
// idMeal: "52977"
// strArea: "Turkish"
// strCategory: "Side"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Lentils"
// strIngredient2: "Onion"
// strIngredient3: "Carrots"
// strIngredient4: "Tomato Puree"
// strIngredient5: "Cumin"
// strIngredient6: "Paprika"
// strIngredient7: "Mint"
// strIngredient8: "Thyme"
// strIngredient9: "Black Pepper"
// strIngredient10: "Red Pepper Flakes"
// strIngredient11: "Vegetable Stock"
// strIngredient12: "Water"
// strIngredient13: "Sea Salt"
// strMeal: "Corba"
// strMealThumb: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
// strMeasure1: "1 cup "
// strMeasure2: "1 large"
// strMeasure3: "1 large"
// strMeasure4: "1 tbs"
// strMeasure5: "2 tsp"
// strMeasure6: "1 tsp "
// strMeasure7: "1/2 tsp"
// strMeasure8: "1/2 tsp"
// strMeasure9: "1/4 tsp"
// strMeasure10: "1/4 tsp"
// strMeasure11: "4 cups "
// strMeasure12: "1 cup "
// strMeasure13: "Pinch"
// strMeasure14: " "
// strMeasure15: " "
// strMeasure16: " "
// strMeasure17: " "
// strMeasure18: " "
// strMeasure19: " "
// strMeasure20: " "
// strSource: "https://findingtimeforcooking.com/main-dishes/red-lentil-soup-corba/"
// strTags: "Soup"
// strYoutube: "https://www.youtube.com/watch?v=VVnZd8A84z4"