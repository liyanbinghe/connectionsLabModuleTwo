//require is a node function, used for requiring donwloaded library
//we are telling this that we are starting to use it 
let express = require('express')

//initializing a object using express function
// we are telling it that we start to use it. now we can 
let app = express()

// allow express to parse json
app.use(express.json());

// serve a static page to client. 
app.use(express.static('public'));

//now we want to use app to create a route. What is a route? route is the different connection between server and client. ask ada for the pic???
//so now we are creating a root route so that the client side could contact with the server side.
//now we create it. next step we gonna the client side which side she should be directed to. 
//there is a lot of function for route. Get route, post route.
app.get('/', (request, response) => {
    console.log("client joined");
    response.send("Hello from server");
})

//server side has three objects right now and then we gonna do things to send to the server
let data = {
    
    chirps: [
        {
            chirp: "Day-1"
        },
        {
            chirp: "Day-2"
        },
        {
            chirp: "Day-3"
        }
    ]
}

//next step we gonna the client side which side she should be directed to. 
//local:3000 is the pinduan. a safe pinduan.
app.listen(3000, () => {
    console.log("app is listening at local:3000")
});

// use json to transfer data, but you need to change json to objects once receive it. the first step is parse.
// create a route for data serving which is different from the root route, we must create individuals route for different purposes
app.get('/data', (request, response) => {
    console.log('data serving route');
    response.json(data);
})//‘/data’ is a different route. and then if you go to the webpage, in the url, you will receive the client side 

//app. get function is used to sending data, we need another route to receive the data. so the function
//name of this is app.post

// create a post route to save data
app.post('/save', (request, response) => {
    let gotData = request.body;
    console.log(gotData)
})

// After this. Openup a web page and type in local:3000. then we need a folder so that we dont need to send everything individually. So line 9. we create a folder and call it public or whatever it
//can be called. In this folder, we could put everything like html, css and js in this folder. this folder is the front side that we talk to.
// see in the line 9. we create this folder. and create html and css. 

//Terminal is showing or like documenting everything we do. For example, we type in local 3000 and open up the webpage, you will see
//that in the terminal. remember to save everything before you see things on the page. 
//suppose that you write something in the html in the folder, you have to make sure that you save everything and also
//type in control c in the terminal to exit, and then type in node index.js in the terminal to reenter. and then you will see the renewed things 


