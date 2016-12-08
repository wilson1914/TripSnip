(function(){ //IIFE

var app = angular.module('tripSnipModule');

app.factory("snippetStorage", function(){ //creates factory
  var storedObj = {};

  var snippetArray = [
    {
      name: "Aruba",
      nativeName: "Aruba",
      capital: "Oranjestad",
      population: "107,394",
	  flag: "https://github.com/hjnilsson/country-flags/blob/master/png250px/aw.png?raw=true",
      note: "Aruba is cool. It's very warm here."
    },
    {
      name: "Belarus",
      nativeName: "Белару́сь",
      capital: "Minsk",
      population: "9,485,300",
	  flag: "https://github.com/hjnilsson/country-flags/blob/master/png250px/by.png?raw=true",
      note: "Much colder than Aruba. You'll probably need a jacket."
    },
    {
      name: "Cambodia",
      nativeName: "Kâmpŭchéa",
      capital: "Phnom Penh",
      population: "15,405,157",
	  flag: "https://github.com/hjnilsson/country-flags/blob/master/png250px/kh.png?raw=true",
      note: "No McDonald's here! What's the deal?!? :("
    }
  ];

//puts the user's entry and API data into factory
  function setSnip(fullData){
    storedObj = fullData;
    snippetArray.push(storedObj);
    console.log(snippetArray);
  };

//retrieves the entire array of snips from factory
  function getSnip(){
    return snippetArray;
  };

  return {
    setSnip: setSnip,
    getSnip: getSnip
  }
});

})(); //END IIFE
