const buttons = document.querySelectorAll(".button")

const myBody = document.querySelector("body")

buttons.forEach(function(button){

    button.addEventListener('click' ,function(e){

        if(e.target.id == 'red'){
            myBody.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'green'){
            myBody.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'purple'){
            myBody.style.backgroundColor = e.target.id;
        }
        if(e.target.id == 'olive'){
            myBody.style.backgroundColor = e.target.id;
        }
    });
});