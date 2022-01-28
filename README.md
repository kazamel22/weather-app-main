# Weather-Journal App Project

## server.js
run local server using node_modules
install express , body-parser and cors and used on the server
listen to server 3013
add get and post methods to get data from app to api server



## app.js
add event listener will run all the app functions when click on generate 
condition added to make sure user will add his zip and feel
getFullApi function that will get the api url will used to get data from the api site
postData function will convert data to json file 
this method will chain the event after get the full data *.then* will get  the temperature data we get and get the date and the user feeling then will send them to local server
updateUi function will update the dom to show the data we got to user and error if any

