//Variables
let api = "https://valorant-api.com/v1/agents";
let apiData = "";

//functions
$(document).ready(function () {
  function getApi() {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        for (let i = 0; i < data.data.length; i++) {
          let makeOuterDiv = document.createElement("div");
          let makeInnerDiv = document.createElement("div");
          let makeImg = document.createElement("img");

          makeOuterDiv.className = "carousel-inner";
          // makeOuterDiv.setAttribute("role", "listbox");
          // makeOuterDiv.style("width:100%; height: 500px !important;");
          makeInnerDiv.className = "carousel-item";
          makeImg.setAttribute("src", data.data[i].bustPortrait);
          makeImg.className = "d-block w-100";

          document.getElementById("bigImg").appendChild(makeOuterDiv);
          makeOuterDiv.appendChild(makeInnerDiv);
          makeInnerDiv.appendChild(makeImg);
        }
      });
  }

  getApi();
});
//event listeners
