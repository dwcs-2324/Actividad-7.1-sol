

window.onload = function () {
    onceLoaded();

};

function onceLoaded() {
    
    var data_enviar = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};
//Para probar a ver la respuesta cuando no se adecúa a las sugerencias de la documentación
  var data_enviar_mal = {
        "email": "algo@algo.in",
        "password": "cityslicka"
    };
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify(data_enviar),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
            .then((response) => response.json())
            .then((json) => console.log(json));

}
