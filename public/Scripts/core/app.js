// IIFE - Immediately Invoked Function Expression
// sometimes called a self-excuting anonymous function
(function(){
    let name = "Amarender";
    let otherName = "Tangella";


    function Start() {
        console.log("application starting");

        console.log(`My first name is ${name}`);
        console.log(`lastname is ${otherName}`);
        Main();
    }

    function Main() {
        console.log("App Started");
    }

    window.onload = Start;
})();