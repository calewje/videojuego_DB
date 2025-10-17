import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../dist/public/css/main.css';
import Game from './Game.js';

import Swal from 'sweetalert2';
/* 
let player1 = new Game("Goku");
let player2 = new Game("Vegeta");

player1.atk_basico(player2); */
let player1;
let player2;
let personaje1="";
let personaje2="";

let turno=1;
let contador1 =0;
let contador2 =0;
let semillas =3;
let restantes="";

let vict1=0;
let vict2=0;
let ganador="";

let btn_py1 = document.getElementById("btn_py1");
let btn_py2 = document.getElementById("btn_py2");
let selecion1 = document.getElementById("selecion_personaje1");
let selecion2 = document.getElementById("selecion_personaje2");


let atk_basico1 = document.getElementById("btn_atk_basico1");
let atk_basico2 = document.getElementById("btn_atk_basico2");
let atk_especial1 = document.getElementById("btn_atk_especial1");
let atk_especial2 = document.getElementById("btn_atk_especial2");

let recarga1 = document.getElementById("btn_carga1");
let recarga2 = document.getElementById("btn_carga2");

let semillas1 = document.getElementById("btn_semillas_ermt1");
let semillas2 = document.getElementById("btn_semillas_ermt2");

let volver_inicio = document.getElementById("btn_juegar");
let revancha1 = document.getElementById("btn_revancha");

const imagenes=[
    "/public/img/fondo/5.jpeg",
    "/public/img/fondo/6.jpg",
    "/public/img/fondo/7.png",
    "/public/img/fondo/8.jpg",
    "/public/img/fondo/9.jpg",
    "/public/img/fondo/10.png",
];

const accionesPersonaje={
    "Gogueta":{
        "basico":{img:"Gogueta/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Gogueta/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Gogueta/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Gogueta/energia.png", msj:"AAAAAAHH!"},
    },
    "Cell":{
        "basico":{img:"Cell/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Cell/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Cell/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Cell/energia.png", msj:"AAAAAAHH!"},
    },
    "Veguetta":{
        "basico":{img:"Veguetta/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Veguetta/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Veguetta/curacion.png", msj:"He recuperado mi poder"},
        "ki":{img:"Veguetta/energia.png", msj:"AAAAAAHH!"},
    },
    "Pikoro":{
        "basico":{img:"Pikoro/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Pikoro/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Pikoro/cura.png", msj:"He recuperado mi poder"},
        "ki":{img:"Pikoro/energia.png", msj:"AAAAAAHH!"},
    },
    "Veguito":{
        "basico":{img:"Veguito/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Veguito/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Veguito/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Veguito/energia.png", msj:"AAAAAAHH!"},
    },
    "Trunks":{
        "basico":{img:"Trunks/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Trunks/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Trunks/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Trunks/energia.png", msj:"AAAAAAHH!"},
    },
    "Goku":{
        "basico":{img:"Goku/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Goku/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Goku/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Goku/energia.png", msj:"AAAAAAHH!"},
    },
    "Gohan":{
        "basico":{img:"Gohan/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Gohan/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Gohan/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Gohan/energia.png", msj:"AAAAAAHH!"},
    },
    "Bills":{
        "basico":{img:"Bills/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Bills/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Bills/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Bills/energia.png", msj:"AAAAAAHH!"},
    },
    "Zamasu":{
        "basico":{img:"Zamasu/basico.png", msj:"Muereeee insecto!"},
        "especial":{img:"Zamasu/especial.png", msj:"Tevoy a destrozar!"},
        "semilla":{img:"Zamasu/curar.png", msj:"He recuperado mi poder"},
        "ki":{img:"Zamasu/energia.png", msj:"AAAAAAHH!"},
    }
}

const alertaAtk = (personaje,accion) => {
    let timerInterval;
    if(accion === "basico"){

        Swal.fire({
            title: accionesPersonaje[personaje][accion].msj,
            imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
            imageWidth: 400,
            imageHeight: 400,
            showCancelButton: false,
            showConfirmButton: false,
            background: "none",
            html: "<b></b>",
            backdrop:`rgba(248, 255, 57, 0.75)`,
            timer: 2000,
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
    if(accion === "especial"){

        Swal.fire({
            title: accionesPersonaje[personaje][accion].msj,
            imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
            imageWidth: 400,
            imageHeight: 400,
            showCancelButton: false,
            showConfirmButton: false,
            background: "none",
            html: "<b></b>",
            backdrop:`rgba(255, 0, 0, 0.79)`,
            timer: 2000,
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
    if(accion === "semilla"){

        Swal.fire({
            title: accionesPersonaje[personaje][accion].msj,
            imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
            imageWidth: 400,
            imageHeight: 400,
            showCancelButton: false,
            showConfirmButton: false,
            background: "none",
            html: "<b></b>",
            backdrop:`rgba(1, 255, 9, 0.61)`,
            timer: 2000,
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
    if(accion === "ki"){

        Swal.fire({
            title: accionesPersonaje[personaje][accion].msj,
            imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
            imageWidth: 400,
            imageHeight: 400,
            showCancelButton: false,
            showConfirmButton: false,
            background: "none",
            html: "<b></b>",
            backdrop:`rgba(0, 136, 255, 0.75)`,
            timer: 2000,
            willClose: () => {
                clearInterval(timerInterval);
            }
        });
    }
};

const img_random = () => {
    
      const aleatorio = Math.floor(Math.random() * imagenes.length);
      
      document.body.style.backgroundImage = `url(${imagenes[aleatorio]})`;
      console.log(imagenes);

}

const victorias = (ganador)=>{
    if(ganador == player1){
        vict1++;
        document.getElementById("vict1").classList.remove("d-none");
        document.getElementById("victorias1").innerText = `Victorias ${vict1}`;

    }else{
        vict2++;
        document.getElementById("vict2").classList.remove("d-none");
        document.getElementById("victorias2").innerText = `Victorias ${vict2}`;
    }

}

const cambiar_selecion = (botones,selecionado,color)=>{
    botones.forEach(btn=>{
        //console.log(btn.title);
        if(selecionado === btn.querySelector("img").title){
            btn.classList.remove(color);
            btn.classList.add("btn-warning");
        }else{
            btn.classList.remove("btn-warning");
            btn.classList.add(color);
        }
    });
};


const actualizarTurno =()=> {
    const turnoJugador1 = turno === 1;

    // Botones jugador 1
    atk_basico1.disabled = !turnoJugador1;
    atk_especial1.disabled = !turnoJugador1;
    recarga1.disabled = !turnoJugador1; 
    semillas1.disabled = !turnoJugador1;

    // Botones jugador 2
    atk_basico2.disabled = turnoJugador1;
    atk_especial2.disabled = turnoJugador1;
    recarga2.disabled = turnoJugador1;
    semillas2.disabled = turnoJugador1;
}

const muerte = ()=>{
    atk_basico1.disabled = true;
    atk_especial1.disabled = true;
    recarga1.disabled = true;
    semillas1.disabled = true;

    atk_basico2.disabled = true;
    atk_especial2.disabled = true;
    recarga2.disabled = true;
    semillas2.disabled = true;
}

/* 
const tiempo_espera=(boton, segundos)=> {
    boton.disabled = true;
    let tiempo_res = segundos;

    const textoOriginal = boton.innerText;
    boton.innerText = `Recargando (${tiempo_res})`;

    const intervalo = setInterval(() => {
        tiempo_res--;
        boton.innerText = `Recargando (${tiempo_res})`;

        if (tiempo_res <= 0) {
            clearInterval(intervalo);
            boton.disabled = false;
            boton.innerText = textoOriginal;
        }
    }, 1000);
} */

//console.log(selecion1.querySelectorAll("img"));

selecion1.querySelectorAll("button").forEach(btn =>{
    btn.addEventListener("click", (evento)=>{
        cambiar_selecion(selecion1.querySelectorAll("button"),evento.target.title,"btn-danger");

        //console.log("click en boton", evento.target.title);

        personaje1 = evento.target.title;
    });
});
selecion2.querySelectorAll("button").forEach(btn =>{
    btn.addEventListener("click", (evento)=>{
        cambiar_selecion(selecion2.querySelectorAll("button"),evento.target.title,"btn-primary");

        //console.log("click en boton", evento.target.title);

        personaje2 = evento.target.title;
    });
});


const mostrar_batalla = ()=>{
    if(player1 != "" && personaje1 !="" && player2 != "" && personaje2 !=""){
            document.getElementById("batalla").classList.remove("d-none");
            img_random();
            actualizarTurno(); 
        }
}
const ocultar_batalla = ()=>{
        document.getElementById("batalla").classList.add("d-none");
        
}

const ocultar_selecion1 = ()=>{
    if(player1 != "" && personaje1 !="" && player1 != "" && personaje1 !=""){
        document.getElementById("jugador1").classList.add("d-none");
        document.getElementById("nombre_personaje1").innerText= personaje1;
        mostrar_batalla();
        
    }
}

const ocultar_selecion2 = ()=>{
    if( player2 != "" && personaje2 != "" && player1 != "" && personaje1 !=""){
        document.getElementById("jugador2").classList.add("d-none");
        document.getElementById("nombre_personaje2").innerText= personaje2;
        
        mostrar_batalla();
    }
}
const mostrar_selecion = ()=>{
        document.getElementById("jugador1").classList.remove("d-none");
        document.getElementById("username_py1").innerText= "";
        
        document.getElementById("jugador2").classList.remove("d-none");
        document.getElementById("username_py1").innerText= "";
        
        ocultar_batalla();
        player1;
        player2;
        personaje1="";
        personaje2="";
        revancha();
        
    
}
const revancha = () =>{
    player1.recuperacion();
    document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
    document.getElementById("vida1").innerText = `${player1.getVida()}`;
    document.getElementById("ki1").style.width = `${(player1.getKi()/10)}%`;
    document.getElementById("ki1").innerText = `${player1.getKi()}`;

    document.getElementById("energia1").style.width = `${(player1.getEnergia() / 1000) * 100}%`;
    document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
    restantes = 3;
    semillas1.innerText = `Semillas (${restantes})`;
    turno = 2; 
        actualizarTurno();

    player2.recuperacion();
    document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
    document.getElementById("vida2").innerText = `${player2.getVida()}`;
    document.getElementById("ki2").style.width = `${(player2.getKi()/10)}%`;
    document.getElementById("ki2").innerText = `${player2.getKi()}`;

    console.log("Ki actual:", player2.getKi());
    document.getElementById("energia2").style.width = `${(player2.getEnergia() / 1000) * 100}%`;
    document.getElementById("energia2").innerText = `${player2.getEnergia()}`;
    restantes = 3;
    semillas2.innerText = `Semillas (${restantes})`;
    turno = 1; 
        actualizarTurno();
}

const regresar = ()=>{
    document.getElementById("volver_juego").classList.remove("d-none");
    volver_inicio.addEventListener("click",()=>{
        
    document.getElementById("volver_juego").classList.add("d-none");
    document.getElementById("revancha").classList.add("d-none");
        mostrar_selecion();


    });
    document.getElementById("revancha").classList.remove("d-none");
    revancha1.addEventListener("click",()=>{
        
        revancha();
        mostrar_batalla();
        document.getElementById("revancha").classList.add("d-none");
        document.getElementById("volver_juego").classList.add("d-none");

    });
    
}

const limite_semillas1=()=>{
    contador2 ++;
        restantes = semillas-contador2;
        semillas1.innerText = `Semillas (${restantes})`;
}
const limite_semillas2=()=>{
    contador2 ++;
        restantes = semillas-contador2;
        semillas2.innerText = `Semillas (${restantes})`;
}

btn_py1.addEventListener("click",()=>{
    let user_py1 = document.getElementById("username_py1").value;
    // se casa con la primera linea y se ahorra espacio

    if(user_py1 !="" ){
        player1 = new Game(user_py1);
        document.getElementById("username1").innerText = user_py1;
        document.getElementById("img_personaje1").src= ` ./public/img/${personaje1}/base.png`;
        ocultar_selecion1();
    }else{
        Swal.fire({
        icon: "error",
        title: "Error",
        text:"El nombre del jugador no puede ir vacio"
        }); 
    }
    if(personaje1 =="") Swal.fire({
       icon: "error",
       title: "Error",
       text:"El jugador 1 debe selecionar un personaje" 
    });
    
    
    /* if(user_py1 !=="") player1 = new Game(user_py1);
    if(user_py1 =="") Swal.fire({
       icon: "error",
       title: "Error",
       text:"El nombre del jugador 1 esta vacio" 
    }); */
});

btn_py2.addEventListener("click",()=>{
    let user_py2 = document.getElementById("username_py2").value;
    if(user_py2 !=""){
        player2 = new Game(user_py2);
        document.getElementById("username2").innerText = user_py2;
        document.getElementById("img_personaje2").src= ` ./public/img/${personaje2}/base.png`;
        ocultar_selecion2();
    }else{
        Swal.fire({
        icon: "error",
        title: "Error",
        text:"El nombre del jugador no puede ir vacio"
        }); 
    }
    if(personaje2 =="") Swal.fire({
       icon: "error",
       title: "Error",
       text:"El jugador 1 debe selecionar un personaje" 
    });
    
    /* if(user_py2 !== "")player2 = new Game(user_py2);
    if(user_py2 =="") Swal.fire({
       icon: "error",
       title: "Error",
       text:"El nombre del jugador 2 esta vacio" 
    }); */
});


atk_basico1.addEventListener("click", () => {
    
    
    if(player1.getEnergia() < 150){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu energia no te alcanza."
        });

    }else if(player1.getKi() < 180){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu Ki no te alcanza."
        });

    }else {
        player1.atk_basico(player2);

        alertaAtk(personaje1,"basico");
        document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
        document.getElementById("vida2").innerText = `${player2.getVida()}`;
        
        
        document.getElementById("ki1").style.width = `${player1.getKi()/10}%`;
        document.getElementById("ki1").innerText = `${player1.getKi()}`;
        
        console.log("Energía actual:", player2.getEnergia());
        document.getElementById("energia1").style.width = `${(player1.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
        turno = 2; 
        actualizarTurno();
        
        if(player2.getVida() == 0){
            
            document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
            document.getElementById("vida2").innerText = `${player2.getVida()}`;

            Swal.fire({
                icon: "success",
                title: "¡ganador!",
                text: "Jugador 1 Gano.✨"
            });
            ganador = player1;
            muerte();
            victorias(ganador);
            regresar();
        }
        /* atk_especial1.disabled = true;
        atk_basico2.disabled = false;
        atk_especial2.disabled = false; */
        
    }

});

atk_basico2.addEventListener("click", () => {
   
    if(player2.getEnergia() < 150){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu energia no te alcanza."
        });

    }else if(player2.getKi() < 180){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu Ki no te alcanza."
        });

    }else {
         player2.atk_basico(player1);
        alertaAtk(personaje2,"basico");
        document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
        document.getElementById("vida1").innerText = `${player1.getVida()}`;
    
        document.getElementById("ki2").style.width = `${player2.getKi()/10}%`;
        document.getElementById("ki2").innerText = `${player2.getKi()}`;
        
     
        document.getElementById("energia2").style.width = `${(player2.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia2").innerText = `${player2.getEnergia()}`;
        turno = 1; 
        actualizarTurno();
        if(player1.getVida() == 0){
            
            document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
            document.getElementById("vida1").innerText = `${player1.getVida()}`;
            Swal.fire({
                icon: "success",
                title: "¡ganador!",
                text: "Jugador 2 Gano.✨"
            });
            ganador = player2;
            muerte();
            victorias(ganador);
            regresar();
        }
        /* atk_especial2.disabled = true;
        atk_especial1.disabled = false;
        atk_basico1.disabled = false; */
        
    }

});


atk_especial1.addEventListener("click", () => {
    
    //document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
    if(player1.getEnergia() < 380){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu energia no te alcanza."
        });

    }else if(player1.getKi() < 390){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu Ki no te alcanza."
        });

    }else{
        player1.atk_especial(player2);
        alertaAtk(personaje1,"especial");
        document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
        document.getElementById("vida2").innerText = `${player2.getVida()}`;

        document.getElementById("ki1").style.width = `${player1.getKi()/10}%`;
        document.getElementById("ki1").innerText = `${player1.getKi()}`;
        
        console.log("Energía actual:", player2.getEnergia());
        document.getElementById("energia1").style.width = `${(player1.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
        turno = 2; // pasa turno al jugador 2
        actualizarTurno();
        if(player2.getVida() == 0){
            document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
            document.getElementById("vida2").innerText = `${player2.getVida()}`;
            Swal.fire({
                icon: "success",
                title: "¡ganador!",
                text: "Jugador 1 Gano.✨"
            });
            ganador = player1;
            muerte();
            victorias(ganador);
            regresar();
        }
        /* atk_basico1.disabled= true;
        atk_basico2.disabled= false;
        atk_especial2.disabled= false; */
        
    }
    
});

atk_especial2.addEventListener("click", () => {
    
    //ocument.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
    if(player2.getEnergia() < 380){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu energia no te alcanza."
        });

    }else if(player2.getKi() < 390){
        Swal.fire({
            icon: "info",
            title: "¡Insuficiente!",
            text: "Tu Ki no te alcanza."
        });

    }else{
        player2.atk_especial(player1);
        alertaAtk(personaje2,"especial");
        document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
        document.getElementById("vida1").innerText = `${player1.getVida()}`;
    
        document.getElementById("ki2").style.width = `${player2.getKi()/10}%`;
        document.getElementById("ki2").innerText = `${player2.getKi()}`;
        
     
        document.getElementById("energia2").style.width = `${(player2.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia2").innerText = `${player2.getEnergia()}`;
        
        turno = 1; // pasa turno al jugador 2
        actualizarTurno();
        if(player1.getVida() == 0){
        /*  Swal.fire({
            icon: "info",
            title: "¡Muerto!",
            text: "Jugador 1 eliminado."
        }); */
        document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
        document.getElementById("vida1").innerText = `${player1.getVida()}`;
    
        document.getElementById("vida1").style.width = `0`;
        Swal.fire({
            icon: "success",
            title: "¡ganador!",
            text: "Jugador 2 Gano.✨"
        });
        muerte();
        victorias();
        regresar();
    }
        /* atk_basico2.disabled= true;
        atk_basico1.disabled= false;
        atk_especial1.disabled= false; */
        
    }

});


recarga1.addEventListener("click", ()=>{
    
    if (player1.getKi() >= 1000) {
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Ki están al máximo."
        });
    }else if(player1.getEnergia() >= 1000){
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Ki están al máximo."
        });
    }else{
        player1.recarga();
    alertaAtk(personaje1,"ki");
    document.getElementById("ki1").style.width = `${(player1.getKi()/10)}%`;
    document.getElementById("ki1").innerText = `${player1.getKi()}`;

    console.log("Ki actual:", player1.getKi());
    document.getElementById("energia1").style.width = `${(player1.getEnergia() / 1000) * 100}%`;
    document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
    
    //tiempo_espera(recarga1, 3);
    turno = 2; 
        actualizarTurno();
    }
    
    
});
recarga2.addEventListener("click", ()=>{
    
    if (player2.getKi() >= 1000) {
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Ki están al máximo."
        });
    }else if(player2.getEnergia() >= 1000){
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Ki están al máximo."
        });
    }else{
        player2.recarga();
    alertaAtk(personaje2,"ki");
    document.getElementById("ki2").style.width = `${(player2.getKi()/10)}%`;
    document.getElementById("ki2").innerText = `${player2.getKi()}`;

    console.log("Ki actual:", player2.getKi());
    document.getElementById("energia2").style.width = `${(player2.getEnergia() / 1000) * 100}%`;
    document.getElementById("energia2").innerText = `${player2.getEnergia()}`;


    //tiempo_espera(recarga2, 3);

    turno = 1; 
        actualizarTurno();
    }
    
    
});


semillas1.addEventListener("click", ()=>{
    if(player1.getVida() >= 1000) {
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Vida están al máximo."
        });
    }else if(contador1 >= 3){
        Swal.fire({
            icon: "warning",
            title: "¡Límite alcanzado!",
            text: "Ya usaste todas las semillas del ermitaño."
        });
        recarga1.disabled = false; 
        return;
    }else{

        limite_semillas1();
        
    
        player1.recuperacion();
    
        alertaAtk(personaje1,"semilla");
        document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
        document.getElementById("vida1").innerText = `${player1.getVida()}`;
        document.getElementById("ki1").style.width = `${(player1.getKi()/10)}%`;
        document.getElementById("ki1").innerText = `${player1.getKi()}`;
    
        console.log("Ki actual:", player1.getKi());
        document.getElementById("energia1").style.width = `${(player1.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia1").innerText = `${player1.getEnergia()}`;
        turno = 2; 
            actualizarTurno();
    }
});
semillas2.addEventListener("click", ()=>{
    if(player2.getVida() >= 1000) {
        Swal.fire({
            icon: "info",
            title: "¡Recarga completa!",
            text: "Tu Vida están al máximo."
        });
    }else if(contador2 >= 3){
        Swal.fire({
            icon: "warning",
            title: "¡Límite alcanzado!",
            text: "Ya usaste todas las semillas del ermitaño."
        });
        
        recarga2.disabled = true; 
        return;
    }else{
        limite_semillas2();
        player2.recuperacion();
        alertaAtk(personaje2,"semilla");
        document.getElementById("vida2").style.width = `${player2.getVida()/10}%`;
        document.getElementById("vida2").innerText = `${player2.getVida()}`;
        document.getElementById("ki2").style.width = `${(player2.getKi()/10)}%`;
        document.getElementById("ki2").innerText = `${player2.getKi()}`;

        console.log("Ki actual:", player2.getKi());
        document.getElementById("energia2").style.width = `${(player2.getEnergia() / 1000) * 100}%`;
        document.getElementById("energia2").innerText = `${player2.getEnergia()}`;
        turno = 1; 
            actualizarTurno();
    }
    
});

/* document.getElementById("btn_atk_basico2").addEventListener("click", () => {
    player2.atk_basico(player1);
    document.getElementById("vida1").style.width = `${player1.getVida()/10}%`;
    document.getElementById("vida1").innerText = `${player1.getVida()}`;

    document.getElementById("ki2").style.width = `${player1.getKi()/10}%`;
    document.getElementById("ki2").innerText = `${player1.getKi()}`;

    document.getElementById("energia2").style.width = `${player1.getEnergia()/10}%`;
    document.getElementById("energia2").innerText = `${player1.getEnergia()}`;
}); */


/* 
ki 30%
energia 20%
semillas del ermitaño 3
    restaura la todo
elecion por turno
*/