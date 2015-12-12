//Registro de Contacto
//verificar si es un contacto correcto
//req = peticion
//res = respuesta
var models = require('../models/model.js');

exports.registroPost = function (req, res){
	var post = models.Posts.build({ nombres: "Nombres",
									post: "post"
									});

	res.render('registroPost', {titulo:'Registro de Post', post: post});
}
exports.respuestaPost=function(req,res){res.render('respuestaPost',{mensaje:'post recibido'})}


exports.guardarPost = function(req, res){
	console.log("ingresa a guardar");
	var Post = models.Posts.build (req.body.Post);
    //a continuacion guardamos los campos que recibimos del formulario
    Post.save	({fields:["Nombre",
    					  "Post"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirecr");
    			 	res.render('respuestaPost', {mensaje:'Se registro el Post con exito'});
    			 });  	
}








//escribir el codigo para devolver respuesta

//Escribir el codigo para guardar los datos
