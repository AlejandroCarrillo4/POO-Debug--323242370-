class Gato {
    constructor(nombre) {
        this.nombre = nombre;
    }

    maullar() {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}


const miGato = Gato("Pelusa"); 
miGato.maullar();