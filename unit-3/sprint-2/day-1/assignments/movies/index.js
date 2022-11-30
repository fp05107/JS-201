document.querySelector("#sortName").addEventListener("change", rating)
function rating() {

    let select = document.querySelector("select").value;
    if (select == "low") {
        movies_arr.sort(function (a, b) {
            return b.rating - a.rating;
        })
        // console.log(movies_arr);
        display(movies_arr)
    }
    if (select == "high") {
        movies_arr.sort(function (a, b) {
            return a.rating - b.rating;
        })
        // console.log(movies_arr);
        display(movies_arr)
    }
}


let movies_arr = [
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        release: "12/12/2015",
        name: "Tanhaji",
        rating: "3.4"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/1354/1000001354/1000001354-v",
        release: "6/7/2012",
        name: "Bhag Milkha Bhag",
        rating: "4.0"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7853/1307853-v-74106fd16f3f",
        release: "3/7/2015",
        name: "Vikram",
        rating: "4.8"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v",
        release: "12/5/2018",
        name: "Chhichore",
        rating: "4.7"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
        release: "2/3/2013",
        name: "MS Dhoni",
        rating: "4.9"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3560/1303560-v-9493f9786e7b",
        release: "2/6/2013",
        name: "Garam Masala",
        rating: "4.0"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5231/1305231-v-36834326a2c4",
        release: "2/6/2013",
        name: "shoorveer",
        rating: "4.0"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4828/1214828-v-9235416956d5",
        release: "1/6/2022",
        name: "Chudala",
        rating: "3.0"
    },
    {
        poster: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/531/1310531-v-3305c44df381",
        release: "1/6/2022",
        name: "Safar",
        rating: "4.0"
    },

];

function display(movies_arr) {
    localStorage.setItem("movies", JSON.stringify(movies_arr))
    document.querySelector("#container").innerHTML = "";
    movies_arr.forEach(function (elem) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = elem.poster;
        let p1 = document.createElement("p");
        p1.innerText = elem.name;
        let p2 = document.createElement("p");
        p2.innerText = elem.release;
        let h3 = document.createElement("h3");
        h3.innerText = elem.rating;

        div.append(img, p1, p2, h3);
        document.querySelector("#container").append(div)
    })
}
display(movies_arr)