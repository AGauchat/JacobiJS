function calcular(orden){
    if (!dominante(orden)){
        document.getElementById("dIteraciones").style.display = "block";
    }else{
        var vIncial = []
        $('#tabla').empty()
        $('#tabla').append('<tr id="Xs"><tr/>')

        $('#Xs').append("<th style='color:white; background-color: #1abc9c'>Step</th>")

        for(var i = 0; i < orden; i++){
            vIncial.push(0)
            $('#Xs').append("<th style='color:white; background-color: #1abc9c'>X" + i.toString() + "</th>")
        }
        $('#Xs').append("<th style='color:white; background-color: #1abc9c'>Error</th>")
        
        var error = -1
        var contWhile = 0
        while (error != 0) {
            var cont = 0
            var xi = 0.0
            var aii = 0.0
            var bi = 0.0
            var Xi = []
            var pXi = []
        
            for (var i = 0; i < orden; i++) {
                aii = parseFloat($("#X" + (cont + i).toString()).val())
                bi = parseFloat($("#R" + i.toString()).val())

                var o = 0

                for (var j = 0; j < orden; j++) {                
                    if (i != j){
                        o += (parseFloat($("#X" + cont.toString()).val()) * vIncial[j])
                    }
                    cont += 1
                }
                xi += (1 / aii) * (bi - o)
                pXi.push(xi.toFixed(5))
                xi = 0.0
                o = 0
            }

            error = calcError(vIncial, pXi)

            Xi.push(pXi)
            vIncial = pXi
            
            //console.log(Xi)
            $('#tabla').append('<tr id="Rs' + contWhile + '"><tr/>')
            var r = ""
            for (var z = 0; z < Xi.length; z++) {
                for (var l = 0; l < Xi[z].length; l++) {
                    r += "<th>" + Xi[z][l] + "</th>"
                }
            }

            $('#Rs' + contWhile).append("<th>" + contWhile + "</th>" + r + "<th>" + error + "</th>")
            r = ""

            contWhile += 1
        }
    }
}

function calcularIteraciones(orden){
    var iteraciones = parseInt($("#iteraciones").val())
    var vIncial = []
    $('#tabla').empty()
    $('#tabla').append('<tr id="Xs"><tr/>')
    $('#Xs').append("<th style='color:white; background-color: #1abc9c'>Step</th>")

    for(var i = 0; i < orden; i++){
        vIncial.push(0)
        $('#Xs').append("<th style='color:white; background-color: #1abc9c'>X" + i.toString() + "</th>")
    }
    $('#Xs').append("<th style='color:white; background-color: #1abc9c'>Error</th>")

    for (var k = 0; k < iteraciones; k++) {
        var cont = 0
        var xi = 0.0
        var aii = 0.0
        var bi = 0.0
        var Xi = []
        var pXi = []
    
        for (var i = 0; i < orden; i++) {
            aii = parseFloat($("#X" + (cont + i).toString()).val())
            bi = parseFloat($("#R" + i.toString()).val())

            var o = 0

            for (var j = 0; j < orden; j++) {                
                if (i != j){
                    o += (parseFloat($("#X" + cont.toString()).val()) * vIncial[j])
                }
                cont += 1
            }
            xi += (1 / aii) * (bi - o)
            pXi.push(xi.toFixed(5))
            xi = 0.0
            o = 0
        }

        var error = calcError(vIncial, pXi)

        Xi.push(pXi)
        vIncial = pXi
        
        //console.log(Xi)
        $('#tabla').append('<tr id="Rs' + k + '"><tr/>')
        var r = ""
        for (var z = 0; z < Xi.length; z++) {
            for (var l = 0; l < Xi[z].length; l++) {
                r += "<th>" + Xi[z][l] + "</th>"
            }
        }

        $('#Rs' + k).append("<th>" + k + "</th>" + r + "<th>" + error + "</th>")
        r = ""
    }
}

// max(absoluto(inicial - final))  (miembro a miembro)
function calcError(mInicial, mFinal){
    var mError = [];
    for (var i = 0; i < mInicial.length; i++) {
        mError.push(Math.abs(mFinal[i] - mInicial[i]))
    }
    return Math.max(...mError).toFixed(5)
}