const getJokes = async () =>{
    try { 
        const  res =  await fetch("https://icanhazdadjoke.com/", {
       headers: { 'Accept': 'application/json' }
        });
        const data = await res.json();
        const Joke= document.querySelector("#Joke");
        Joke.innerHTML = data.joke;
    } 
    catch(error){
        console.error("Error fetching joke:", error);
    }
};

window.addEventListener("load", ()=> {
    getJokes();
});
