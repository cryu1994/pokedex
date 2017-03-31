$(document).ready(function () {

     var str= "";
     for(var i = 1; i < 156; i++){
        str += "<img src='http://pokeapi.co/media/img/"+ i +".png' id ='"+i+"'>"
      }
    $('.row').append(str);

    $('img').click(function(){
      var id = $(this).attr('id');
      $.get("http://pokeapi.co/api/v1/pokemon/"+id+"/", function(res) {
        console.log(res);
          var html_str = "";
          for(var j = 0; j < res.types.length; j++) {
            var name = res.name;
            var height = res.height;
            var weight = res.weight;
            var type = res.types[j].name;
          }
          console.log(name, weight, height, type);
          html_str += "<img src='http://pokeapi.co/media/img/"+id+".png'>";
          html_str +="<p>Name: "+name+"</p><p>Type: "+type+"</p><p>Height: "+height+"</p><p>Weight: "+weight+"</p>"
          console.log(html_str);
          $(".info").html(html_str);
      }, "json");
  })
  });
