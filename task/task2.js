var clothes = [['jakartajs'],['awsome day', 'elixir'],['gojakarta', 'elixir']]
var test = []


for(var x=0; x<clothes.length; x++) test[x] = clothes[x][1]

var check = clothes.filter(function(elem,pos) {return (test.indexOf(elem[1]) === pos )})




console.log(test)