/* Global Variables */
let btn = document.getElementById('generate')
const apiKey = ',us&appid=&units=imperial'
const primaryUrl = 'http://api.openweathermap.org/data/2.5/weather?zip='
const currentData = document.getElementById('date')
const temperature = document.getElementById('temp')
const textContent = document.getElementById('content')
    // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();


// addEventListener will run all the app function when click the generate button
btn.addEventListener('click', (event) => {
    const zipCode = document.getElementById("zip").value
    const feelings = document.getElementById("feelings").value
        // add condition to make sure user will fill his zip and feeling 
    if (zipCode && feelings) {
        // function to get the full api that will send to the server
        getFullApiUrl(primaryUrl, zipCode, apiKey)
            //chain event with then    
            .then((data) => {

                postData('/addData', { date: newDate, temp: data.main.temp, content: feelings })
            })
            .then(() => {
                updateUI()

            })
    } else if (feelings) {
        window.alert('pls enter zip code')
    } else if (zipCode) {
        window.alert("pls write your feeling")


    } else {
        window.alert("pls enter zip code and feeling")
    }
})

// getFullApiUrl function
const getFullApiUrl = async(primaryUrl, zip, key) => {
        const res = await fetch(primaryUrl + zip + key)
        try {
            const data = await res.json()
            return data
        } catch (error) {
            console.log('error', error)
        }
    }
    //postData function
const postData = async(url = '', data = {}) => {
        console.log(data)

        const response = await fetch(url, {

            method: "POST",
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        try {
            const newData = await response.json();
            console.log(newData)
            return newData
        } catch (error) {
            console.log('error', error)
        }

    }
    //updateUI function 
const updateUI = async() => {
    const request = await fetch('/all');
    try {
        const allData = await request.json();
        currentData.innerHTML = `Date:${allData.date}`
        temperature.innerHTML = `Temperatuere:${allData.temp}`
        textContent.innerHTML = `I feel:${allData.content}`

    } catch (error) {
        textContent.innerHTML = `Error : ${error}`
    }
}
