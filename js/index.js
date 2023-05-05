const main = document.getElementById("main");
const banner = document.getElementById("banner");

const help = [
    "whoami         - who made this",
    "whoareyou      - yes, who are you?",
    "projects       - view projects",
    "clear          - clear the terminal screen",
    "secret         - I wonder what it does?",
    "help           - show list of valid commands"
];

function userInput(input, div) {
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.keyCode === 13) {
            const span = document.createElement("span");
            const userInput = event.target.value;
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
                case "clear": 
                    hideBanner();
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
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "input");
    newInput.autofocus = true;
    span.classList.add("whois");
    span.innerHTML = "[intruder@term ~] $ ";
    div.appendChild(span);
    div.appendChild(newInput);
    newInput.focus();
    main.appendChild(div);
    userInput(newInput, div);
}

function showWhoami() {
    const p = document.createElement("p");
    p.innerHTML = "Hey, I go by the name of elyseio!";
    main.appendChild(p);
    createCLI();
}

function showWhoareyou() {
    const p = document.createElement("p");
    p.innerHTML = "Do you intimately know yourself?";
    main.appendChild(p);
    createCLI();
}

function hideBanner() {
    banner.classList.add("hide");
}

function showHelp() {
    const div = document.createElement("div");
    help.map((el) => {
        const p = document.createElement("p");
        p.innerHTML = el
        div.appendChild(p);
    });
    main.appendChild(div);
    createCLI();
}

function error() {
    const notFound = document.createElement("p");
    notFound.innerHTML = "Command not found. Type 'help' for the list of commands.";
    main.appendChild(notFound);
    createCLI();
}

function start() {
    createCLI();
}

start();
