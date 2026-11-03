class Coche {
    constructor(modelo) {
        this.modelo = modelo
        this.encendido = false;
    }
}

const miCoche = new Coche("Nissan Sentra")


miCoche.encendido()