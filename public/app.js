console.log("Say hi from the client")
//

//1. recieve data from server
// 1. send data to server 
// 2. server recieve and respond to client 
// 3. populate the data on to the page

window.addEventListener('load', function () {
    // 1. recieve data from server
    fetch('/data')
        .then(response => response.json())//fetch data and make sure it is fetched, after it is fetched it wll reponde
        .then(data => {
            console.log(data);

        });

    // 2. send data to server 
    let chirpButton = document.getElementById("submit_button");
    chirpButton.addEventListener('click', function () {
        //grab data from the input box
        let inputBox = document.getElementById("chirp-name");
        let inputData = inputBox.value;
        console.log("inputData");
        //input data is a string 
        let obj = {
            chirp: inputData
        }
        console.log(obj)
        // convert a Js.Obj to json object which is called stringify
        let sendObj = JSON.stringify(obj);
        //write the attribute so that you know this is sending route
        //send packaged data
        //now the server could receive the attribute


        fetch('/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // sending
            body: sendObj
        })
            .then(response => response.json())
            .then(data => {

            })
    })
})


