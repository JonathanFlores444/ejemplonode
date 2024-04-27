//Llamar al protocolo
var hppt=require('http');
//a traves del protocolo
var server = hppt.createServer();

function mensaje(peticion,resp){
    resp.writeHead(200,{'content-type':'text/plain'});
    //mensaje que se muestra
    resp.write("Hola Mundo");
    //fin de la respuesta 
    resp.end
}
// inicializa el servidor cuando exista una peticion
server.on('request', mensaje);
// cada vez que exista una peticion, salga por el puerto 3000
server.listen(3000,function(){
    console.log('la aplicacion esta corriendo en un cliente');
})