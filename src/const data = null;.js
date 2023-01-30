const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://echo.paw.cloud/?part=snippet&order=date&q=reactjs");
xhr.setRequestHeader("X-RapidAPI-Key", "328f08c448mshdc92f9792d9a875p157666jsn8ebb9d00a1d4");
xhr.setRequestHeader("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");

xhr.send(data);