const express = require("express");
const bodyParser = require("body-parser");

// require the date.js Module object
const date = require(__dirname + "/date.js");

const app = express();

//Declare the items variable as an array, to be defined in the app.get, otherwise it's only created in app.post() -> would be undefined in app.get()
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

// set EJS after installing - place below declaring the app const.
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// Tell Express to use the files inside the public folder as static files
app.use(express.static("public"));


app.get("/", function (req, res) {

    const day = date.getDate();
    const year = date.getYear();

    // Express to look inside views folder for list.ejs, searching for the EJS_Markers to replace with the JS variable
    res.render("list", {
        listTitle: day,
        newListItems: items,
        currentYear: year
    });

});


// Post Request set to add list item to the corresponding array and redirect accordingly depending on the route.
// Add value attribute to the HTML button and create an if in the app.post("/", …) -> as the form is set to: action="/"
app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});


// "/work" route -> app.get() & app.post()
app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post("/work", function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});


// Layouts ->  Include header.ejs & footer.ejs inside the views folder (put the html header from list.ejs in headers.ejs, and the html footer  inside footer.ejs)
app.get("/about", function (req, res) {
    res.render("about");
});



// Server set to run on port 3000, console logging it in the Terminal
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});