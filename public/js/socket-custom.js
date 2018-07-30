 var socket = io();
      socket.on('connect',function(){

        console.log('Conectado al servidor');

      });
      //escuchar
      socket.on('disconnect',function(){

        console.log('perdimos conexion con el servidor');

      });

      //enviar informacion
      socket.emit('enviarMensaje',{
        usuario: 'Steven',
        mensaje: 'Bienvenido'
      }, function(resp){

        console.log('respuesta server',resp);

      });

      socket.on('enviarMensaje',(mensa)=>{

        console.log(mensa);

      });
