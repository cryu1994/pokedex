$(document).ready(function () {

    var str= "";
    for(var i = 1; i < 156; i++){
        str += "<img src='http://pokeapi.co/media/img/"+ i +".png'>"
    }
        $('div').append(str);

});
