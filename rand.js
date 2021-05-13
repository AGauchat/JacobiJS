function generateRand(orden){
    cont = 0
    for (var i = 0; i < orden; i++) {
        for (var j = 0; j < orden; j++) {                
            $("#X" + cont.toString()).val(Math.round(Math.random() * 10))
            cont += 1
        }
        $("#R" + i.toString()).val(Math.round(Math.random() * 10))
    }
}