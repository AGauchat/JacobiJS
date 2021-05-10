function drawMatriz(orden){
    if(orden > 1){
        $('#sistema').empty()
        
        $('#sistema').append("<h2 class='colorTitulos'>Ingrese los valores del sistema</h2>")
        
        var line = ""
        var lineTable = ""
        var cont = 0
        for (var i = 0; i < orden; i++) {
            for (var j = 0; j < orden; j++) {
                line += "<input type='number' style='width: 40px; margin-left: 10px;' id='X" + cont + "' /><label>X<label style='font-size: 10px;'>" + j + "</label></label>"
                cont += 1
            }
            line += "= <input type='number' style='width: 40px;' id='R" + i + "' /><br /><br />"
            $('#sistema').append(line)
            line = ""
        }
    
        $('#sistema').append('<button onclick="calcular(' + orden + ')">Siguiente</button>')

    }else{
        alert("Ingrese valor válido")
    }
}