function calcular(){
    var pes = (document.convertidor.pesos.value)*1;
    var tot = pes / 3.835;
    tot = tot.toFixed(2)
    document.convertidor.dolar.value = tot;
}

function limpiar(){
    document.getElementById("convertidor").reset(); 
}