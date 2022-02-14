class Consultorio {
    constructor(nombre) {
        this.nombre = nombre
        this._pacientes = []
    }
    agregarPaciente(value) {
        this._pacientes.push(value)
    }
    set pacientes(value) {
        this._pacientes.push(value)
    }
}
class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this._nombre = nombre
        this._edad = edad
        this._rut = rut
        this._diagnostico = diagnostico
    }
    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }
    get rut() {
        return this._rut
    }
    get diagnostico() {
        return this._diagnostico
    }
    set nombre(value) {
        this._nombre = value
    }
    set edad(value) {
        this._edad = value
    }
    set rut(value) {
        this._rut = value
    }
    set diagnostico(value) {
        this._diagnostico = value
    }
}
const valdivia = new Consultorio("ValdiviaConsultorio")

Consultorio.prototype.buscarPorNombre = function(value = "") {
    const resultadoBusqueda = this._pacientes.find(item => item.nombre.toUpperCase() === value.toUpperCase())
    if (!resultadoBusqueda) {
        console.log("Sin Resultado");

    } else {
        console.log(resultadoBusqueda);
    }
}

Consultorio.prototype.mostrarTodos = function() {
    //for (let paciente of this._paciente) { }
    this._pacientes.forEach(Paciente => {
        console.log(Paciente)
    })
}

const uno = new Paciente("Rosa Medina", 61, 10896, "dolor de espalda")
uno._nombre = "Rosa Medina"
uno._edad = 61
uno._rut = 10896
uno._diagnostico = "dolor de espalda"

const dos = new Paciente("Maria Lopez", 52, 13896, "fiebre")
uno._nombre = "Rosa Medina"
uno._edad = 61
uno._rut = 10896
uno._diagnostico = "fiebre"

const tres = new Paciente("marcos cortez", 32, 15896, "asma")
uno._nombre = "marcos cortez"
uno._edad = 32
uno._rut = 15896
uno._diagnostico = "asma"

//valdivia.pacientes
valdivia.agregarPaciente(uno)
valdivia.agregarPaciente(dos)
valdivia.agregarPaciente(tres)

valdivia.buscarPorNombre("dos");