!function(){var app=angular.module("tripSnipModule");app.factory("snippetStorage",function(){function setSnip(fullData){storedObj=fullData,snippetArray.push(storedObj),console.log(snippetArray)}function getSnip(){return snippetArray}var storedObj={},snippetArray=[{name:"Aruba",region:"Americas",icon:"../images/region_icons/Americas.png",nativeName:"Aruba",capital:"Oranjestad",language:"Dutch",population:"107,394",flag:"https://github.com/hjnilsson/country-flags/blob/master/png250px/aw.png?raw=true",favePlace:"The beach!",faveRestaurant:"Faro Blanco",faveFood:"seafood",rating:"4",date:"January 2016",note:"Aruba is cool. It's very warm here."},{name:"Belarus",region:"Europe",icon:"../images/region_icons/Europe.png",nativeName:"Белару́сь",capital:"Minsk",language:"Belarusian",population:"9,485,300",flag:"https://github.com/hjnilsson/country-flags/blob/master/png250px/by.png?raw=true",favePlace:"The beach?",faveRestaurant:"Bistro de Luxe",faveFood:"cocktails",rating:"3",date:"June 2016",note:"Much colder than Aruba. You'll probably need a jacket."},{name:"Cambodia",region:"Asia",icon:"../images/region_icons/Asia.png",nativeName:"Kâmpŭchéa",capital:"Phnom Penh",language:"Khmer",population:"15,405,157",flag:"https://github.com/hjnilsson/country-flags/blob/master/png250px/kh.png?raw=true",favePlace:"Still the beach.",faveRestaurant:"Romdeng",faveFood:"fish amok",rating:"2",date:"August 2016",note:"No McDonald's here! What's the deal?!? :("}];return{setSnip:setSnip,getSnip:getSnip}})}();