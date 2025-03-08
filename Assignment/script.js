function Welcome(){
    const user = prompt("Please enter your name", "Enter your name here");
    if (user != null) {
        document.getElementById("greeting").innerHTML =
        "Hello " + user + "! Welcome to The Collective Blueprint!";
    }
}