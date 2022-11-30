let API_key = 'AIzaSyDvbPDozZbbFW0R13_oKrnwrTdRkh5EvhA';
let container = document.getElementById("container");


getHomeData()
async function getHomeData() {

    try {
        let query = 'songs';
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_key}&part=snippet&maxResults=20`);
        let data = await res.json()  // collects stream of data and convert
        // let {items} = await res.json()
        // let array_of_videos = items;
        // console.log(data);
        let array_of_videos = data.items;
        console.log(array_of_videos);
        appendHomeData(array_of_videos) 

    }
    catch (error) {

    }
}

function appendHomeData(data) {
    container.innerHTML = null;
    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {

        console.log(url);
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = url;
        let Title = document.createElement('h5');
        Title.innerText = title;
        div.append(img, Title);
        container.append(div)
        div.addEventListener("click", function () {
            let x = {
                xtitle: title,
                xvideo: videoId
            }
            window.location.href = 'video.html';
            localStorage.setItem("you_video", JSON.stringify(x));
        })

    });
}
// async function getdata(){

// }

let getdata = async () => {
    try {
        let query = document.getElementById("query").value;
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API_key}&part=snippet&maxResults=20`);
        let data = await res.json()  // collects stream of data and convert
        // let {items} = await res.json()
        // let array_of_videos = items;
        // console.log(data);
        let array_of_videos = data.items;
        console.log(array_of_videos);
        appendVideos(array_of_videos)


    }
    catch (error) {

    }
}
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/IVNK5gkVq2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }
// function appendVideos(){

// }


let appendVideos = (data) => {
    container.innerHTML = null;
    data.forEach(({ snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {
        // let title = el.snippet.title;
        // let videoId = el.id.videoId
        // console.log(title,videoId);
        // console.log(elem.snippet.thumbnails.default.url);
        console.log(url);
        let div = document.createElement('div');
        // let iframe = document.createElement("iframe");

        // let in_div = document.createElement('div');
        let img = document.createElement('img');
        img.src = url;
        let Title = document.createElement('h5');
        Title.innerText = title;
        // in_div.append(img,Title)
        // iframe.src = `https://www.youtube.com/embed/${videoId}`
        // iframe.src = url;
        // iframe.width = '100%';
        // iframe.height = '100%';0
        // iframe.allow = 'fullscreen'
        // let Title = document.createElement('h5');
        // Title.innerText = title;
        div.append(img, Title);
        container.append(div)
        div.addEventListener("click", function () {
            let x = {
                xtitle: title,
                xvideo: videoId
            }

            window.location.href = 'video.html';
            localStorage.setItem("you_video", JSON.stringify(x));
        })

    });

}