const nombres = require('./verificarLenghtNombre');

//Empezar con el testing
 test('numero menor de 50 letras',() =>{
     expect (nombres.nombreCompleto("Carlos","Daniel","Lopez González")).toBe("correcto");//true
 })

test('numero mayor de 50 letras',() =>{
    expect (nombres.nombreCompleto("Carlos","Daniel","Lopez González De La Concepcion De Nuestra Madre Dolores")).toBe("error");
})