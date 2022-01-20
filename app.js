fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    let count = 0;
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country-div';
        count++;
        const countryInfo = `
            <aside><img src="${country.flags.png}"></aside>
            <h1 class="country-count">${count}</h1>
            <h2>Country Name: <span class="country-name">${country.name}, ${country.alpha2Code}</span></h2>
            <h3>Capital: <span class="capital-name">${country.capital}</span></h3>
            <h5>Area: <span class="area-name">${country.area} km²</span></h5>
            <h5>Population: <span class="population-name">${country.population}</span></h5>
            <button onclick="countryDetails('${country.name}')" class="button">Details</button>

        `;
        countryDiv.innerHTML = countryInfo;  
        countriesDiv.appendChild(countryDiv)
    });
}

const countryDetails = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        popupMsg(data);
    })  
}

function popupMsg(country) {
    // const cName = data[0].name.common;
    const msgDiv = `
        <div class="popup">
            <h2>Country Name: <span class="country-name">${country[0].name.common}, ${country[0].altSpellings[0]}</span></h2>
            <h3>Capital: <span class="capital-name">${country[0].capital[0]}</span></h3>
            <h5 class="Area-name">Area: ${country[0].area} km²</h5>
            <h5 class="population-name">Population: ${country[0].population}</h5>
        </div>
    `
    alert('Right now i working this module. Thank you🤳✔');

}

// const countryDetails = name => {
//     const url = `https://restcountries.com/v3.1/name/${name}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     // `
//     //     <div class="popuptext">
//     //         <h2>Country Name: <span class="country-name">${country[0].name.common}, ${country[0].altSpellings[0]}</span></h2>
//     //         <h3>Capital: <span class="capital-name">${country[0].capital[0]}</span></h3>
//     //         <h5 class="Area-name">Area: ${country[0].area} km²</h5>
//     //         <h5 class="population-name">Population: ${country[0].population}</h5>
//     //     </div>
//     // `
//         // myFunction();
//     })  
// }

// function popupMsg(country) {
//     // const cName = data[0].name.common;
//     const msgDiv = `
//         <div class="popuptext">
//             <h2>Country Name: <span class="country-name">${country[0].name.common}, ${country[0].altSpellings[0]}</span></h2>
//             <h3>Capital: <span class="capital-name">${country[0].capital[0]}</span></h3>
//             <h5 class="Area-name">Area: ${country[0].area} km²</h5>
//             <h5 class="population-name">Population: ${country[0].population}</h5>
//         </div>
//     `
// }

{/* <div class="popup" onclick="myFunction()">Click me to toggle the popup!
  <span class="popuptext" id="myPopup">A Simple Popup!</span>
</div> */}

// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }