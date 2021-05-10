function dominante(orden){
    var diagonal = getDiagonal(orden)
    var cont = 0

    for (var i = 0; i < orden; i++) {
        for (var j = 0; j < orden; j++) {
            if (i != j){
                for (var k = 0; k < diagonal.length; k++) {
                    if (diagonal[k] < $("#X" + cont.toString()).val()){
                        return false
                    }
                }
            }
            cont += 1
        }
    }
    return true
}

function getDiagonal(orden){
    var cont = 0
    var diagonal = []
    for (var i = 0; i < orden; i++) {
        for (var j = 0; j < orden; j++) {
            if (i == j){
                diagonal.push(Math.abs(parseFloat($("#X" + cont.toString()).val())))
            }
            cont += 1
        }
    }
    return diagonal
}