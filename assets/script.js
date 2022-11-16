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
        let charArr = [];
        for (let i = 0; i < data.data.length; i++) {
          charArr.push(data.data[i]);
        }

        charArr.splice(7, 1);
        console.log(charArr);

        for (let i = 0; i < charArr.length; i++) {
          console.log("second loop is runninog");
          if (i === 0) {
            let makeDiv = document.createElement("div");

            let makeImg = document.createElement("img");
            let makeInnerDiv = document.createElement("div");
            let makeCaption = document.createElement("h2");

            makeDiv.setAttribute("role", "listbox");
            // makeDiv.style = "width:50%;!important;";
            makeDiv.className = "carousel-item active";
            makeImg.setAttribute("src", charArr[i].fullPortrait);
            makeImg.className = "d-block w-100";
            makeImg.style = "box-shadow:100px black;";
            makeInnerDiv.className = "carousel-caption d-none d-md-block";
            makeCaption.textContent = charArr[i].displayName;

            document.getElementById("innerC").appendChild(makeDiv);

            makeDiv.appendChild(makeImg);
            makeDiv.appendChild(makeInnerDiv);
            makeInnerDiv.appendChild(makeCaption);
            i++;
          }
          let makeDiv = document.createElement("div");

          let makeImg = document.createElement("img");
          let makeInnerDiv = document.createElement("div");
          let makeCaption = document.createElement("h2");

          makeDiv.setAttribute("role", "listbox");
          // makeDiv.style = "width:50%; !important;";
          makeDiv.className = "carousel-item";
          makeImg.setAttribute("src", charArr[i].fullPortrait);
          makeImg.className = "d-block w-100";
          makeInnerDiv.className = "carousel-caption d-none d-md-block";
          makeCaption.textContent = charArr[i].displayName;

          document.getElementById("innerC").appendChild(makeDiv);

          makeDiv.appendChild(makeImg);
          makeDiv.appendChild(makeInnerDiv);
          makeInnerDiv.appendChild(makeCaption);
        }
        let activeChar = $(".active");
      });
  }

  getApi();
});
//event listeners
