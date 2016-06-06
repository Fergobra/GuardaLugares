        function registrar(){
            usuario = document.getElementById('usuario').value;  //igualando el input usuario a variable usuario
            contraseña = document.getElementById('contra').value; //igualando input contraseña a variable contraseña
            localStorage.setItem('usuario', usuario);   //guardando usuario en almacenamiento local
            localStorage.setItem('contra', contraseña); //guardando contraseña en almacenamiento local
            alert('estás registrado');
            window.location.assign('inicio.html');
            }
        function mostrar(){
            mostrarcontra = localStorage.getItem('contra');
            mostrarusuario = localStorage.getItem('usuario');
            alert(mostrarcontra + mostrarusuario);
        }
        function iniciar(){
            valusuario = localStorage.getItem('usuario');
            valcontra = localStorage.getItem('contra')
             usuario = document.getElementById('usuario').value;  //igualando el input usuario a variable usuario
            contraseña = document.getElementById('contra').value; //igualando input contraseña a variable contraseña
            if (usuario == valusuario && contraseña == valcontra){
                 window.location.assign('inicio.html');
            }
            else {
                alert('Usuario o contraseña incorrecta ):');
            }
        }
        function editar1(){
 //obtener la posición actual y llamar a la función  "localitation" cuando tiene éxito
            navigator.geolocation.getCurrentPosition(verPosicion); //le pido al navegador que me de la localización y ejecuto otra funcion
        }
        function verPosicion(posicion){
            localStorage.setItem('long',posicion.coords.longitude); //guardo en localstorage la longitud
            localStorage.setItem('lat',posicion.coords.latitude)  // ¿guardo en localstorage la latitude
            alert("ha sido guardado correctamente")     //le digo al usuario que se guardo chido
        }
   
        function vermapa(){
            
            window.location.assign('mapa.html');   //abro la pagina donde se mostrara el mapa
           
        }
        function generar(){
            var divmapa = document.getElementById('mapa');   //creo una variable y la igualo al id de un elemento para mostrar en html
            latt = localStorage.getItem('lat');   //leo la latitud guardada en localstorage y la guardo en variable
            longg = localStorage.getItem('long'); //leo la longitud guardada en localstorage y lo guardo en una variable
            alert(latt+', '+longg);
            
            divmapa.src="http://maps.googleapis.com/maps/api/staticmap?center="+latt+','+longg+"zoom=17&size=290x450&markers=color:red%7Clabel:YO!%7c"+latt+','+longg;
            //Muestro el mapa en la variable que contiene el mostrador del mapa
            
        }
        function editar2(){
 //obtener la posición actual y llamar a la función  "localitation" cuando tiene éxito
            navigator.geolocation.getCurrentPosition(verPosicion); //le pido al navegador que me de la localización y ejecuto otra funcion
        }
        function verPosicion(posicion){
            localStorage.setItem('longg',posicion.coords.longitude); //guardo en localstorage la longitud
            localStorage.setItem('latt',posicion.coords.latitude)  // ¿guardo en localstorage la latitude
            alert("ha sido guardado correctamente")     //le digo al usuario que se guardo chido
        }
   
        function vermapa1(){
            
            window.location.assign('mapa.html');   //abro la pagina donde se mostrara el mapa
           
        }
        function generar(){
            var divmapa = document.getElementById('mapa');   //creo una variable y la igualo al id de un elemento para mostrar en html
            latt = localStorage.getItem('latt');   //leo la latitud guardada en localstorage y la guardo en variable
            longg = localStorage.getItem('longg'); //leo la longitud guardada en localstorage y lo guardo en una variable
            alert(latt+', '+longg);
            
            divmapa.src="http://maps.googleapis.com/maps/api/staticmap?center="+latt+','+longg+"zoom=17&size=290x450&markers=color:red%7Clabel:YO!%7c"+latt+','+longg;
            //Muestro el mapa en la variable que contiene el mostrador del mapa
            
        }
        function editar3(){
 //obtener la posición actual y llamar a la función  "localitation" cuando tiene éxito
            navigator.geolocation.getCurrentPosition(verPosicion); //le pido al navegador que me de la localización y ejecuto otra funcion
        }
        function verPosicion(posicion){
            localStorage.setItem('longgg',posicion.coords.longitude); //guardo en localstorage la longitud
            localStorage.setItem('lattt',posicion.coords.latitude)  // ¿guardo en localstorage la latitude
            alert("ha sido guardado correctamente")     //le digo al usuario que se guardo chido
        }
   
        function vermapa2(){
            
            window.location.assign('mapa.html');   //abro la pagina donde se mostrara el mapa
           
        }
        function generar(){
            var divmapa = document.getElementById('mapa');   //creo una variable y la igualo al id de un elemento para mostrar en html
            latt = localStorage.getItem('lattt');   //leo la latitud guardada en localstorage y la guardo en variable
            longg = localStorage.getItem('longgg'); //leo la longitud guardada en localstorage y lo guardo en una variable
            alert(latt+', '+longg);
            
            divmapa.src="http://maps.googleapis.com/maps/api/staticmap?center="+latt+','+longg+"zoom=17&size=290x450&markers=color:red%7Clabel:YO!%7c"+latt+','+longg;
            //Muestro el mapa en la variable que contiene el mostrador del mapa
            
        }
        