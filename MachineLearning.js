window.onload = iniciar; //se le indica que cuando se actualize hagae el proceso inicar 

function iniciar() { //se habre la funcion iniciar

    const redNeural = new brain.NeuralNetwork(); //se crea la red neuronal 
    const datos = [{ //se habr un array donde se almacenaran los datos los cuales van aservir para 
        "input": { "R": 0.78, "G": 0.9, "B": 1, }, //se pone los valores referentes 
        "output": { "claro": 1 } //se inidica que es lo que es realmente y el 1 es para decirle que se mantenga activo
    }, {
        "input": { "R": 0, "G": 0.11, "B": 0.2 },
        "output": { "obscuro": 1 }
    }, {
        "input": { "R": 0.4, "G": 1, "B": 0.2 },
        "output": { "claro": 1 }
    }, {
        "input": { "R": 0.4, "G": 0, "B": 0.4 },
        "output": { "obscuro": 1 }
    }];
    redNeural.train(datos); //se ingresan los datos a la red nauronal 
    let resultado = brain.likely({ "R": 0.4, "G": 0, "B": 0.4 }, redNeural); //ae ingresa el valor ala red 

    alert(resultado); //se muestra el resultado
} //se cierra la funcion de iniciar