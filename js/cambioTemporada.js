$("#BotonTemporada").click(function cambiarTemporada(){


    if (($("#nombreTemporada").html()) === "Temporada Baja"){
        $("#tarifas").replaceWith($('<div id="tarifas"><h3 id="nombreTemporada">Temporada Alta</h3> <table class="table"> <tr> <th>Características:</th> <th>Precio:</th> </tr> <tr> <td>Habitacion Doble:</td> <td>16000$</td> </tr> <tr> <td>Habitacion Individual:</td> <td>16000$</td> </tr> <tr> <td>Cama Supletoria:</td> <td>16000$</td> </tr> <tr> <td>Cuna:</td> <td>1600$</td> </tr> <tr> <td>Desayuno:</td> <td>1600$</td> </tr> <tr> <td>Cena:</td> <td>1600$</td> </tr> </table> </div>'));
    }
    else {
        if (($("#nombreTemporada").html())==="Temporada Alta"){
            $("#tarifas").replaceWith($('<div id="tarifas"><h3 id="nombreTemporada">Temporada Baja</h3> <table class="table"> <tr> <th>Características:</th> <th>Precio:</th> </tr> <tr> <td>Habitacion Doble:</td> <td>1600$</td> </tr> <tr> <td>Habitacion Individual:</td> <td>1600$</td> </tr> <tr> <td>Cama Supletoria:</td> <td>1600$</td> </tr> <tr> <td>Cuna:</td> <td>1600$</td> </tr> <tr> <td>Desayuno:</td> <td>1600$</td> </tr> <tr> <td>Cena:</td> <td>1600$</td> </tr> </table> </div>'));


        }
    }
});