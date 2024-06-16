let userinput = document.getElementById("input");
let message = document.getElementById("message");
let randomNumber = Math.ceil(Math.random()*100);
function numcheck()
{
    let number = userinput.value;
    if (number==randomNumber)
    {
        message.textContent = "Congratulations! You got it right.";
        message.style.backgroundColor = "green";
    }
    else if (number<randomNumber)
    {
        message.textContent = "Too Low! Try Again.";
        message.style.backgroundColor = "#1e217c";
    }
    else if (number>randomNumber)
    {
        message.textContent = "Too High! Try Again.";
        message.style.backgroundColor = "#1e217c";
    }
    else
    {
        message.textContent = "Please provide a valid input.";
        message.style.backgroundColor = "red";
    }
}