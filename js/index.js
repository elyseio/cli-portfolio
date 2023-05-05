const root = document.getElementById("root");
const banner = document.getElementById("banner");

const help = [
    "whoami         - who made this",
    "whoareyou      - yes, who are you?",
    "projects       - view projects",
    "clear          - clear the terminal screen",
    "secret         - I wonder what it does?",
    "help           - show list of valid commands"
];


function showWhoami() {
    const p = document.createElement("p");
    p.innerHTML = "Hey, I go by the name of elyseio!";
    root.appendChild(p);
    createCLI();
}

function showWhoareyou() {
    const p = document.createElement("p");
    p.innerHTML = "Do you intimately know yourself?";
    root.appendChild(p);
    createCLI();
}

function clear() {
    banner.classList.add("hide");
    while(root.firstChild) {
        root.removeChild(root.firstChild);
    }
    createCLI();
}

function showHelp() {
    const div = document.createElement("div");
    help.map((el) => {
        const p = document.createElement("p");
        p.innerHTML = el
        div.appendChild(p);
    });
    root.appendChild(div);
    createCLI();
}

function error() {
    const notFound = document.createElement("p");
    notFound.innerHTML = "Command not found. Type 'help' for the list of commands.";
    root.appendChild(notFound);
    createCLI();
}

function userInput(input, div) {
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.keyCode === 13) {
            const userInput = event.target.value;
            if(userInput === "clear") {
                clear();
                return;
            }
            const span = document.createElement("span");
            span.innerHTML = userInput;
            div.appendChild(span);
            input.remove();
            switch(userInput) {
                case "whoami": 
                    showWhoami();
                    break;
                case "whoareyou":
                    showWhoareyou();
                    break;
                case "help":
                    showHelp();
                    break;
                default:
                    error();
                    break;
            }
        }
    });
}

function createCLI() {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const newInput = document.createElement("input");

    div.setAttribute("id", "div");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "input");
    newInput.autofocus = true;
    span.classList.add("whois");
    span.innerHTML = "[intruder@term ~] $ ";
    div.appendChild(span);
    div.appendChild(newInput);
    root.appendChild(div);
    userInput(newInput, div);
}

function start() {
    createCLI();
}

start();
