    const Residentevil4 = {
        Fechacreacion: "11 de enero de 2005",
        Nombre: "Resident Evil 4",
        Genero: "Survival Horror",
        Modos: "Normal, Separate Ways, The Mercenaries (RE4), Assignment Ada,",
        Personajes: "Leon Scott Kennedy, Ada Wong, Bitores Méndez, Ashley Graham, Ramón Salazar,",
        Ubicacion: "España....",
        link: "Aqui tienes el link para comprarlo si es que quieres https://store.steampowered.com/app/254700/Resident_Evil_4_2005/"
    }

    const cod_bo2 = {
        Fechacreacion: "12 de noviembre de 2012",
        Nombre: "Call of Duty Black Ops 2",
        Genero: "Disparos en primera persona",
        Modos: "Multijugador, Camapaña y Zombies",
        MapasM: "Nucketoon, Raid,Slums, Hijacked,Standoff",
        MapasZ: "Tranzit, Origins, Nucketoon Zombies",
        Link: "Aqui tienes el link para comprarlo si es que quieres https://store.steampowered.com/app/202970/Call_of_Duty_Black_Ops_II/"
    }
    const fifa_17 = {
        Fechacreacion: "27 de septiembre de 2016",
        Nombre: "FIFA 17",
        Genero: "Simulación y deportes",
        Modos: "Patada inicial, Modo carrera, Ultimate Team, Clubes Pro",
        Estadios: "Santiago bernabeu, Anfield, Old Trafford, Allianz Arena, El Monumental y la Bombonera",
        Jugadores: "Lionel Messi(93), Cristiano Ronaldo(94), Neymar(92), Luis Suarez(92), Manuel Neuer(92),",
        Link: "Aqui tienes el link para comprarlo si es que quieres https://www.easports.com/es/fifa/buy-fifa-17/spain"
    }
    const counter_strike_source = {
        Fechacreacion: "1 de noviembre de 2004",
        Nombre: "Counter Strike Source",
        Genero: "Videojuego de disparos táctico",
        Modos: "Desactiva la bomba, Rescate de rehenes, Huida, Arsenal, Asesinato",
        Mapas: "De Mirage, cs_assault, de_dust2_csco, Fy pool day original, Cs mansion xeon",
        Link: "Aqui tienes el link para comprarlo si es que quieres https://store.steampowered.com/app/240/CounterStrike_Source/"
    }

    const totaljuegos = [Residentevil4, cod_bo2, fifa_17, counter_strike_source]

    function seleccionar(totaljuegos) {
        const seleccion = prompt("Historial de juegos | Ismael Ferrari:\n\n" + totaljuegos.map((juego, index) => (index + 1) + ". " + juego.Nombre).join("\n") + "\n\nIngrese el número del juego que desea seleccionar:");
    
        if (!isNaN(seleccion) && seleccion >= 1 && seleccion <= totaljuegos.length) {
            const numeroSeleccion = parseInt(seleccion);
            const juegoSeleccionado = totaljuegos[numeroSeleccion - 1];
    
            let detalles = "";
            for (const key in juegoSeleccionado) {
                detalles += key + ": " + juegoSeleccionado[key] + "\n";
            }
    
            const verHistoria = prompt(detalles + "Quieres ir al link del juego? (si/no)").toLowerCase();
    
            if (verHistoria === 'si') {
                if (juegoSeleccionado.Link) {
                    window.open(juegoSeleccionado.Link, '_blank');
                } else {
                    alert("Lo siento, no hay un enlace disponible para este juego.");
                }
            } else if (verHistoria === 'no') {
            } else {
                alert("Respuesta no válida. Por favor, ingresa 'si' o 'no'.");
            }
        } else {
            alert("Selección no válida.");
        }
    }
    
    seleccionar(totaljuegos);
    

