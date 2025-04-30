//Se crea una funcion llamada clima para llamar la API y dar a conocer la temperatura
function clima(){ 
    //Se crea un objeto
    let xhr = new XMLHttpRequest(); 
    //Obtener el pronostico del clima Declarando una varible donde guarde la url 
    let link= "http://api.weatherapi.com/v1/forecast.json?key=13cfdc7ae8984099b5350320252904&q=Floridablanca&lang=es&days=14"; 
    // Se usa para configurar una solicitud HTTP
    xhr.open('GET',link,true); 
    // define una función de devolución de llamada (callback)
    xhr.onreadystatechange = function(){
        //Se crea una condicional que verifica que sirve la api
        if(this.status ==200){
            //representa la respuesta del sevidor y la convierte en javascript
            let respuesta = JSON.parse(this.responseText);
            // se guarda la informacion en una variable
            let Temperatura=respuesta["current"]["temp_c"]
            //Se imprime el resultado
            console.log(Temperatura); 
            displayclimainicio(respuesta);
        }
    };
    // Envia la solicitud http
    xhr.send();
}
//Llama a la funciona e ejecutar. 
clima();
// -------------------------------------------------------------------------------------------------------------------------------
// Se crea una funcion para llamar la API para realizar el encabezado. 
function displayclimainicio(data){
    // Definir una variable para solicitar un elemento 
    let inicioHTML = document.getElementById('encabezado');
    // Se crea una condicional para verificar si hay error 
    if(data.response == "error"){
        // Al elemento que solicitamos se le agregara un texto en el html que diga x cosa! 
        inicioHTML.innerHTML=`<p>Esto no funcionó :sadfeis:</p>`
        // Condicional sino se cumple
    }else{
        // Se crea las variable que van a alojar la informacion solicitada 
        // Se aplica el metodo Math.round el cual se encarga de redondear 
        let temp_c=Math.round(data["current"]["temp_c"])
        console.log(temp_c);
        let temp_fc=Math.round(data["current"]["feelslike_c"])
        let diamax=Math.round(data["forecast"]["forecastday"][0]["day"]["maxtemp_c"])
        let diamin=Math.round(data["forecast"]["forecastday"][0]["day"]["mintemp_c"])
        // 
        inicioHTML.innerHTML=`
        <img class="busquedainicio" src="./img/search_white.png">
        <h3 class="lugar">${data["location"]["name"]}, ${data["location"]["country"]}</h3>
        <h1 class="temperaturainicio">${temp_c}&deg</h1>
        <p class="feelinicio">Feels like ${temp_fc}&deg</p>
        <p class="fechainicio">${data["location"]["localtime"]}</p>
        <img class="iclimainicio" src="${data["current"]["condition"]["icon"]}">
        <h2 class="climainicio"> ${data["current"]["condition"]["text"]}</h2>
        <h3 class="diainicio">Day ${diamax}&deg</h3>
        <h3 class="nocheinicio">Night ${diamin}&deg</h3>`

    }
}