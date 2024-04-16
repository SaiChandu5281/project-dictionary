

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c1e55e1bdmshfd9b72d9dea9969p13e53ejsndfb03be3babc',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then(response => {
            
            wordheading.innerHTML = "Meaning of : " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
        })
        .catch(err => console.log(err));
}


searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
