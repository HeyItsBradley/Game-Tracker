//Variables
let api = "https://valorant-api.com/v1/agents";


//functions
$(document).ready(function () {
  function getApi() {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }
  getApi();
});
//event listeners
