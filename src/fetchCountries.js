export function fetchExport({name}) {
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
        .then(response => { return response.json() })
       .then(country => { return country })
}

