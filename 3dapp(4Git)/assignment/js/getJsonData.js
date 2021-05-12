var modelTitleContainer = document.getElementById("modelTitle");
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', './model/data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    renderHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function renderHTML(modelDescData) {
  var htmlStringTitle = "";
  var i;

  for (i = 0; i < modelDescData.length; i++) {
          htmlStringTitle = "";
          var modelTitleContainer = document.getElementById(modelDescData[i].modelName + "ProcessTitle");
          htmlStringTitle += "<h2>" + modelDescData[i].modelTitle + "</h2><br>" + modelDescData[i].modelDescription;
          modelTitleContainer.insertAdjacentHTML('beforeend', htmlStringTitle);
      }

  }