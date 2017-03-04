$( document ).ready(function(){

  $("#Geldautomat").css("background", "#00F");
  $("#Geldautomat").on('click', function (e) {
    LAtm.addTo(map);
    });
  $("#Parkbank").css("background", "#9A4");
  $("#Parkbank").on('click', function (e) {
    Baenke.addTo(map);
    });

  $("#Altenheim").css("background", "#F00");
  $("#Altenheim").on('click', function (e){
    Heime.addTo(map);
    });
  $("#Apotheke").css("background", "#0F0");
  $("#Apotheke").on('click', function (e){
    Apo.addTo(map);
    });
  $("#Arzt").css("background", "#6D0026");
  $("#Arzt").css("color", "#FFA8FF");
  $("#Arzt").on('click', function (e){
    Doctors.addTo(map);
    });


  $("#Frisoer").css("background", "#888");
  $("#Frisoer").on('click', function (e){
    Friesoer.addTo(map);
    });

  });



function off(tag)
{
  map.removeLayer(tag);
}
