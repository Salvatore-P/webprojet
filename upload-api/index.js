let express = require('express'),
    multer = require('multer'),
    mysql = require("mysql"),
    qs = require("querystring")


let app = express(),
    resulatRequete = '',
    db = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "bdheplmanager"
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


//fonctions
let insersion = (requete) =>{
        return db.query(requete, (e, result) => {
            if(e)
                return false
            else{
                resulatRequete = result
                return true
            }
        })
    },
    selection = (requete) =>{
        return db.query(requete, (e, result) => {
            if(e)
                return false
            else{
                console.log("taille result selection:" + result.length)
                resulatRequete = result
                console.log("taille result selection:" + resulatRequete.length)
                return true
            }
        })
    }
//`SELECT * FROM users_listes WHERE email = '${email}' AND titre = '${titre}'`
//`INSERT INTO users_listes values(null, '${email}', '${titre}', '${fichier}')`
app.post("/upload/liste", upload.single("file"), async (req, res) =>{
    let email = req.body.email, 
        titre = req.body.titre, 
        fichier = req.file.filename

    if(await selection(`SELECT * FROM users_listes WHERE email = '${email}' AND titre = '${titre}'`)){
        if(resulatRequete.length === 0){
            if(insersion(`INSERT INTO users_listes values(null, '${email}', '${titre}', '${fichier}')`)){
                res.json({donnees : "ok"})
            }
            else{
                res.status(422)
                .json({error : "probleme base de données"})
            }
        } 
        else{
            res.status(422)
            .json({error : "ce nom de liste existe déjà"})   
        } 
    }
    else{
        res.status(422)
        .json({error : "probleme base de données"})
    }
})

app.post("/name/liste", upload.single("email"), (req, res,next) =>{
    let email = req.body.email
    selection(`SELECT id,titre FROM users_listes WHERE email = '${email}'`)
    next()
    /*if(selection(`SELECT id,titre FROM users_listes WHERE email = '${email}'`)){
        console.log("taille result dans if :" + resulatRequete.length)
        if(resulatRequete.length === 0){
            console.log(resulatRequete[0].titre)
            res.status(422)
                .json({error : "probleme base de données"})

        }
        else{
            res.json({donnees : resulatRequete})
        }
    }
    else{
        res.status(422)
            .json({error : "probleme base de données"})
    }*/
})
app.use(function (err,req,res,next){
    if(err.code == "LIMIT_FILE_TYPES"){
        res.status(422).json({error : "Fichier de type excel uniquement"});
        return;
    }
});

app.listen(5555, () => console.log("Le serveur est lancé sur le port 5555"));