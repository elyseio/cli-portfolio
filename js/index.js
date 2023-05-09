const root = document.getElementById("root");

const help = [
    "'whoami'         - who made this",
    "'whoareyou'      - yes, who are you?",
    "'projects'       - view projects",
    "'clear'          - clear the terminal screen",
    "'banner'         - show banner",
    "'secret'         - I wonder what it does?",
    "'help'           - show list of valid commands"
];

const projects = [
    "'BOXCHAMPY'    - landing page for a fighting gym",
    "'test'         - test"
];

function createBanner() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div id="banner" class="banner">
                    <div class="img-container">
                        <img src="./img/evil-morty.png" alt="Evil Morty">
                    </div>
                    <div class="p-container">
                        <p>
                            Wel<span class="glitch" data-text="come">come</span>...welcome! 
                            You've found the portfolio o..of <span class="glitch" data-text="elyseio">elyseio</span>... 
                            Anyway, this is an interactive web terminal.
                            <br>
                            Type <span class="help">'help'</span> to see list of
                            available commands.
                        </p>
                    </div>
                </div>
    `;
    root.appendChild(div);
}

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

function showProjects() {
    const div = document.createElement("div");
    projects.map((el, i) => {
        const p = document.createElement("p");
        const a = document.createElement("a");
        const txt = document.createTextNode(el);
        a.appendChild(txt);
        if(i === 0) a.href = "https://boxchampy.netlify.app/";
        if(i === 1) a.href= "https://google.com";
        a.target = "_blank";
        p.appendChild(a);
        div.appendChild(p);
    })
    root.appendChild(div);
    createCLI();
}

function clear() {
    while(root.firstChild) {
        root.removeChild(root.firstChild);
    }
    createCLI();
}

function showBanner() {
    createBanner();
    createCLI();
}

function showSecret() {
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("id", "password");
    const span = document.createElement("span");
    span.innerHTML = "password: ";
    div.appendChild(span);
    div.appendChild(input);
    root.appendChild(div);
    document.getElementById("password").focus();
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.keyCode === 13) {
            input.setAttribute("disabled", "true");
            input.removeAttribute("id");
            if(event.target.value === "thepasswordisthis") {
                console.log("correct!");
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                const p = document.createElement("p");
                p.innerHTML = "Get rickrolled!";
                div.appendChild(p);
            } else {
                const p = document.createElement("p");
                p.innerHTML = "Invalid password";
                div.appendChild(p);
            }
            createCLI();
            const newInput = document.getElementById("input");
            newInput.focus();
            newInput.scrollIntoView();
        }
    });
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
                case "projects":
                    showProjects();
                    break;
                case "banner":
                    showBanner();
                    break;
                case "secret":
                    showSecret();
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
    div.setAttribute("class", "cli");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "input");
    span.classList.add("whois");
    span.innerHTML = "[intruder@term ~] $ ";
    div.appendChild(span);
    div.appendChild(newInput);
    root.appendChild(div);
    document.getElementById("input").focus();
    document.getElementById("input").scrollIntoView();
    userInput(newInput, div);
}

function main() {
    createBanner();
    createCLI();
}

main();
