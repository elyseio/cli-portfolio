const main = document.getElementById("main");
const banner = document.getElementById("banner");
const input = document.getElementById("input");
input.value = "";
input.focus();

const help = [
    "whoami         - who made this",
    "whoareyou      - yes, who are you?",
    "projects       - view projects",
    "clear          - clear the terminal screen",
    "secret         - I wonder what it does?"
];

function showHelp() {
    const div = document.createElement("div");
    help.map((el) => {
        const p = document.createElement("p");
        p.innerHTML = el
        div.appendChild(p);
    });
    main.appendChild(div);
}

function hideBanner() {
    banner.classList.add("hide");
}

function error() {
    const notFound = document.createElement("p");
    notFound.innerHTML = "Command not found. Type 'help' for the list of commands.";
    main.appendChild(notFound);
}

input.addEventListener("keypress", (event) => {
    if(event.key === "Enter" || event.keyCode === 13) {
        const userInput = event.target.value;
        input.value = "";
        switch(userInput) {
            case "help":
                showHelp();
                break;
            case "clear": 
                hideBanner();
                break;
            default:
                error();
                break;
        }
    }
});
