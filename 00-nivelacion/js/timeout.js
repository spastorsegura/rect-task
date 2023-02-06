const evaluar = () => {
    const edad = prompt("Cuál es tu edad?")

    if(edad<18){
        alert("Menor de edad")
        return
    }

    alert("Mayor de edad")
}

setTimeout(evaluar,2000)

// evaluar()