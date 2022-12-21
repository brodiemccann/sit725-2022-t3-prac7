var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects, projectRoutes')

// const createColllection = (collectionName) => {

// }

const cardList = [

    {
        title: "Tassie Devil",
        image: "images/tassie-unsplash.jpg",
        link: "About Tassie Devil",
        desciption: "Demo desciption about Tassie Devil"

    },

    {
        title: "Dingo",
        image: "images/dingo-unsplash.jpg",
        link: "About Dingo",
        desciption: "Demo desciption about Dingo"
    }

]


var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to: http://localhost:" + port)
    //createColllection("Australian Wildlife")
})

