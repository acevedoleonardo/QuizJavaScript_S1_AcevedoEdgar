function clima(){ //Se crea una funcion llamada clima 
    let xhr = new XMLHttpRequest();
    let link= "http://api.weatherapi.com/v1/forecast.json?key=13cfdc7ae8984099b5350320252904&q=Floridablanca&lang=es&days=14"; //Obtener el pronostico del clima
    xhr.open('GET',link,true);
    xhr.onreadystatechange = function(){
        if(this.status ==200){
            let respuesta = JSON.parse(this.responseText);
            let Temperatura=respuesta["current"]["temp_c"]
            console.log(Temperatura); 
            displayclimainicio(respuesta);
        }
    };
    xhr.send();
}
clima();
