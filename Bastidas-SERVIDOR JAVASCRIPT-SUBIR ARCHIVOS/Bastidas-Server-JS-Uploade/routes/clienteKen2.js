var express = require('express');
var router = express.Router();
var multer  = require('multer');
 var storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files/subidas2/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
  const fileFilter2=(req, file, cb)=>{
    if(file.mimetype ==='text/plain'||file.mimetype ==='text/html'||file.mimetype ==='text/javascript'
    ||file.mimetype ==='application/json'||file.mimetype ==='application/pdf'
    ||file.mimetype ==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ||file.mimetype ==='application/vnd.openxmlformats-officedocument.presentationml.presentation'
    ||file.mimetype ==='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'){
        cb(null,true);
    }else{
        cb(null, false);
    }
  
   }
  
  var upload2 = multer({ 
     storage:storage2,
     fileFilter:fileFilter2
  });
  
  router.get('/',function(req,res){
   res.sendFile(__dirname + '/index.html');
  
  });
  router.post("/fileupload2",upload2.single('document'),function(req,res,next){
    
  const filename2=req.file.filename;
  res.json({
             message2:"Su archivo ha sido subido con exito!!!",
             filename:filename2
         });
     });

module.exports=router;