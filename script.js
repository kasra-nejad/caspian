$(document).ready(function() {
  let location = 'http://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&APPID=37b3bd6754246ed9f8c27d7b9ab81a8e';
  $.getJSON(location, function(data) {
    let sort = function(x) {
      for (let k in x) {
        if (typeof x[k] == 'number' || typeof x[k] == 'string') {
          logLi(k, x[k]);
        } else if (Array.isArray(x[k])) {
          logUl(k);
          sort(x[k]);
        } else if (typeof x[k] == 'object') {
          logUl(k);
          isObject(x[k]);
        }
      }
    }
    sort(data);
  });
});

let logLi = function(k, j) {
  if (typeof j === 'object') {
    isObject(j);
  } else {
    let li = document.createElement('LI');
    let liText = document.createTextNode('\u00A0\u00A0\u00A0\u00A0' + k + ": " + j);
    let brLi = document.createElement("BR");
    document.querySelector('body').appendChild(li.appendChild(liText));
    document.querySelector('body').appendChild(brLi);
  }
}

let logUl = function(x) {
  if (isNaN(x)) {
    let output = document.createElement('UL');
    let outputText = document.createTextNode(x);
    let brUl = document.createElement("BR");
    document.querySelector('body').appendChild(output.appendChild(outputText));
    document.querySelector('body').appendChild(brUl);
  }
}

let isObject = function(x) {
  for (let i in x) {
    logLi(i, x[i]);
  }
};
