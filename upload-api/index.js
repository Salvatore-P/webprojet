let express = require('express'),
    multer = require('multer'),
    mysql = require("mysql"),
    qs = require("querystring")


let app = express(),
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
    })

db.connect( e => {
    if(e) throw e
    console.log("Connectée à la base de données !")
})



let fileFilter = function (req,file,cb){
    let type = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"];
    if(!type.includes(file.mimetype)){
        let error = new Error("Le type de fichier ne correspond pas");
        error.code = "LIMIT_FILE_TYPES";
        return cb(error,false);
    }
    cb(null,true);
}

let upload = multer({
    dest: './uploads/',
    fileFilter
})


app.post("/Fichierliste", upload.single("file"), (req, res) =>{
    console.log(req.body.info);
    db.query("SELECT * FROM Users", (e, result) => {
        if(e){
            res.status(404)
            res.send("Echec recuperation données")
        }
        else{
            console.log("donnees recuperees !")
            res.json({donnees : result})
        }
    })
})

app.post("/liste", upload.array("file"), (req, res) =>{
    console.log("tab recu");
    console.log(req.files);
    console.log(req.id);
    res.json({"hello" : "nice"});

});

let cpUpload = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'info', maxCount: 1 }]);
app.post('/cool', cpUpload, function (req, res, next) {
    console.log("fields recu");
    console.log(req.files['file'][0]);
    console.log(req.files['info']);
    res.json({"hello" : "nice"});
})

app.use(function (err,req,res,next){
    if(err.code == "LIMIT_FILE_TYPES"){
        res.status(422).json({error : "Fichier de type excel uniquement"});
        return;
    }
});

app.listen(5555, () => console.log("Le serveur est lancé sur le port 5555"));