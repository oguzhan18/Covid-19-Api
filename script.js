let url = "https://api.covid19api.com/summary";
    const searchCountry = document.querySelector('.searchCountry');
    const searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', displayCountryTotals); 
let countries;
fetch(url)
        .then(result => result.json())


    .then(json => {
            console.log(json);
            countries = json.Countries;
            displayWorldTotals(json);})

function displayWorldTotals(world){

    let worldTotalDeaths = document.querySelector('.worldTotalDeaths')
    worldTotalDeaths.innerText = "Deaths: " + world.Global.TotalDeaths.toLocaleString()
             let worldTotalConfirmed = document.querySelector('.worldTotalConfirmed')
    worldTotalConfirmed.innerText = "Confirmed Cases: " + world.Global.TotalConfirmed.toLocaleString()
    let worldTotalRecovered = document.querySelector('.worldTotalRecovered')

         worldTotalRecovered.innerText = "Recovered Cases: " + world.Global.TotalRecovered.toLocaleString()
     let worldNewDeaths = document.querySelector('.worldNewDeaths')
    worldNewDeaths.innerText = "Deaths: " + world.Global.NewDeaths.toLocaleString()
            let worldNewConfirmed = document.querySelector('.worldNewConfirmed')
        worldNewConfirmed.innerText = "Confirmed Cases: " + world.Global.NewConfirmed.toLocaleString()
                    let worldNewRecovered = document.querySelector('.worldNewRecovered')
    worldNewRecovered.innerText = "Recovered Cases: " + world.Global.NewRecovered.toLocaleString()
}
function displayCountryTotals(e){
    e.preventDefault()
   let country = e.target[0].value;
   let capCountry = country.charAt(0).toUpperCase() + country.slice(1)
        for (i=0; i<countries.length; i++){
            
                if (capCountry === countries[i].Country){

                    console.log(countries[i])

                    let countryTotalDeaths = document.querySelector('.countryTotalDeaths')
                    countryTotalDeaths.innerText = "Deaths: " + countries[i].TotalDeaths.toLocaleString()
                    let countryTotalConfirmed = document.querySelector('.countryTotalConfirmed')

                    countryTotalConfirmed.innerText = "Confirmed Cases: " + countries[i].TotalConfirmed.toLocaleString()
                    let countryTotalRecovered = document.querySelector('.countryTotalRecovered')
                    countryTotalRecovered.innerText = "Recovered Cases: " + countries[i].TotalRecovered.toLocaleString()

                    let countryNewDeaths = document.querySelector('.countryNewDeaths')
                    countryNewDeaths.innerText = "Deaths: " + countries[i].NewDeaths.toLocaleString()
                    let countryNewConfirmed = document.querySelector('.countryNewConfirmed')
                    
                    countryNewConfirmed.innerText = "Confirmed Cases: " + countries[i].NewConfirmed.toLocaleString()
                    let countryNewRecovered = document.querySelector('.countryNewRecovered')
                    countryNewRecovered.innerText = "Recovered Cases: " + countries[i].NewRecovered.toLocaleString()}}}