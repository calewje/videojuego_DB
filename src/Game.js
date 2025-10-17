class Game{
    #username;
    #vida;
    #energia;
    #ki;
    constructor(username){
        this.#username = username;
        this.#vida = 1000;
        this.#energia = 1000;
        this.#ki = 1000;
        this.mostrar_stats();


    }
    /* Metodo para mostar los estados del jugador */
    mostrar_stats(){
        /* Imprimir la vida actual del jugador */
        console.log(`
                        username: ${this.#username},
                        vida: ${this.#vida},
                        energia: ${this.#energia},
                        ki:${this.#ki}
            `);
    }

    getVida(){
        return this.#vida;
    }
    getKi(){
        return this.#ki;
    }
    getEnergia(){
        return this.#energia;
    }


    /* Metodo encargado de decremento de la vida del jugador */
    decremento_vida(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#vida = this.#vida - 190 >= 0 ? this.#vida - 190 : 0; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    decremento_vida_atk(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#vida = this.#vida - 350 >= 0 ? this.#vida - 350 : 0; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    
    decremento_ki(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#ki = this.#ki - 150 >= 0 ? this.#ki - 150 : 0; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    decremento_ki_atk(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#ki = this.#ki -380 >= 0 ? this.#ki - 380 : 0;
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }


    decremento_energia(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#energia = this.#energia - 180 >= 0 ? this.#energia - 180 : 0;
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    decremento_energia_atk(){
        /* Se valida que el decremento de vida sea un numero positivo mayor a cero */
        this.#energia = this.#energia - 390 >= 0 ? this.#energia - 390 : 0;
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }

    

    atk_basico(player){
        /* Resta energia y ki al personaje que esta atacndo y recibe como argumento un objeto
            correspondiente al jugador opuesto, esto para acceder al metodo decremento_vida y 
            reducir sis stacks
        */
        player.decremento_vida();
        
        this.decremento_ki();
        
        this.decremento_energia();
        
        
        /* decremento de vida al jugador opuesto*/
    }

    atk_especial(player){
        /* this.#energia = this.#energia - 480 >= 0 ? this.#energia - 480 >= 0 : 0;
        this.#ki = this.#ki -380 >= 0 ? this.#ki - 380 >= 0 : 0; */
        player.decremento_vida_atk();
        
        this.decremento_energia_atk();
        
        this.decremento_ki_atk();
        /* decremento de vida al jugador opuesto*/
    }

    recarga(){

        this.ingremento_ki();
        
        this.ingremento_energia();
        
    }

    ingremento_ki(){
        this.#ki = this.#ki + 300 <= 1000 ? this.#ki + 300 : 1000; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    ingremento_energia(){
        this.#energia = this.#energia + 200 <= 1000 ? this.#energia + 200 : 1000; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }

    recuperacion(){
        this.recuperacion_vida();
        this.recuperacion_ki();
        this.recuperacion_energia();
    }

    recuperacion_ki(){
        this.#ki = this.#ki + 1000 <= 1000 ? this.#ki + 1000 : 1000; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    recuperacion_energia(){
        this.#energia = this.#energia + 1000 <= 1000 ? this.#energia + 1000 : 1000; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }
    recuperacion_vida(){
        this.#vida = this.#vida + 1000 <= 1000 ? this.#vida + 1000 : 1000; 
        /* Al aplicarel decremento se muestra los stacks actulizados */
        this.mostrar_stats();
    }

/* 
    revancha_play(player){
        player.recuperacion_vida();
        player.recuperacion_ki();
        player.recuperacion_energia();
    } */

}
/* 
let player1 = new Game("goku");
let player2 = new Game("vegeta");

player1.atk_basico(player2);
player2.atk_especial(player1); */
/* 
player1.mostrar_stats();
player1.atk_basico(player2);
player2.mostrar_stats(); */
/* 
console.log(Object); */

export default Game;