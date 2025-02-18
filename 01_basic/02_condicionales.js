/*
    [CONDICIONALES IF, ELSE IF, ELSE]

    IF: (Sí) el if comprueba una condición y sí esta se cumple ejecuta el bloque de codigo dentro del if
    SINTAX: 
    if(condicion/comparación){
      ...codigó a ejecutar si se cumple la condición
    }

    ELSE IF: el else if, agrega una condición a contemplar si el if no ha sido ejecutado / o la condicion retorna **false**
    SINTAX:
    else if(condicion_2/compracion_2){
        ...codigó a ejecutar si se cumple la condición
    }

    ELSE: (Sí no) else, se ejecuta si ninguna condición ha sido ejecutada / o todas han retornado **false**
    SINTAX:
    else{
      ... codigó a ejecutar si ninguna condición anterior se cumple.
    }

    signos de unión de comparaciones:
    && = Y (A y B deben retornar true para que se ejecute la condición)
    || = Ó (A o B deben retornar true , con que una de las condiciones se cumpla, se ejecutará la condición)

    EJEMPLOS:
*/

let mayorDeEdad = false; //  esto es un booleano

let licencia; // esta variable esta vacia (null//undefine...)

let altura = 1.50; // esta varible contiene un double.


// Una actracción/juego para niños evalua si estos pueden o no ingresar solo si miden menos de 1.50
// if(altura>1.50 ){
//     console.log("tu altura es: "+altura+"cm\n","Uy estas muy alto no puedes entrar en este juego")
// }else{
//     console.log("Excelente chiquitin, puedes jugar! :D")
// }

/*
    # Signos de comparación:
     - menor qué (<)
     - mayor qué (>)
     - igual basico (==)
     - igual extremo (===) => =*3 => comprueba de que sean estrictamente iguales
     - menor igual qué (<=) => comprueba que A sea menor o igual qué B
     - mayor igual qué (>=) => comprueba que A sea mayor o igual qué B
     - diferente (!=) => la negación  (!+=) => comprueba de que sean diferentes
     - diferencia extrema (!==) comprueba de que sea estrictamente diferentes.
     - negación(!) => ejemplo !false = true
*/

// dos policias hacen un reten y estan colocando multas si el conductor es **menor edad** o **no tiene licencia**
licencia = true;

if(licencia == false || mayorDeEdad == false ){
    console.log("Su vehiculo será incautado. por incumplir con las normas de transito");
}
else if(licencia == false && mayorDeEdad == true){
    console.log("Usted debe pagar una multa de 25SMMV, además debera sacar su licencia en los proximos 2 meses");
}
else if(mayorDeEdad == false && licencia == true){
    console.log("Bien hecho muchacho, siga su ruta. :D")
}
