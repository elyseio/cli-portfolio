const root = document.getElementById("root");

const helpCommands = [
    {
        command: "'whoami'",
        description: "- who made this site"
    },
    {
        command: "'whoareyou'",
        description: "- yes, who are you?"
    },
    {
        command: "'tstacks'",
        description: "- technology stacks I've worked with"
    },
    {
        command: "'projects'",
        description: "- view projects"
    },
    {
        command: "'clear'",
        description: "- clear the terminal screen"
    },
    {
        command: "'banner'",
        description: "- show banner"
    },
    {
        command: "'secret'",
        description: "- I wonder what this does?"
    },
    {
        command: "'help'",
        description: "- show list of valid commands"
    }
];

const projects = [ 
    {
        name: "'BOXCHAMPY'    - landing page for a fighting gym, made with pure HTML/CSS",
        url: "https://boxchampy.netlify.app"
    },
];

function setRetroClass(el) {
    el.setAttribute("class", "retro");
}

function loadP() {
    const img = document.querySelector('img');
    function loaded() {
        const pContainer = document.getElementById('p-container');
        if(pContainer.classList.contains('hide')) {
            pContainer.classList.remove('hide');
        }
        createCLI();
        pContainer.removeAttribute('id');
    }
    if(img.complete) {
        loaded();
    } else {
        img.addEventListener('load', loaded);
    }
}

function createBanner() {
    const div = document.createElement("div");
    div.innerHTML = `
        <div id="banner" class="banner">
                    <div class="img-container">
                        <img src="./img/evil-morty.png" alt="Evil Morty">
                    </div>
                    <div class="p-container hide" id="p-container">
                        <p class="p-text crt">
                            Wel<span class="glitch" title="come">come</span>...welcome! 
                            You've found the portfolio o..of <span class="glitch" title="elyseio">elyseio</span>... 
                            Anyway, this is an interactive web terminal.
                            <br>
                            Type <span class="help">'help'</span> after the '$' to see list of
                            available commands.
                        </p>
                    </div>
                </div>
    `;
    root.appendChild(div);
    loadP();
}

function showWhoami() {
    const p = document.createElement("p");
    setRetroClass(p);
    p.textContent = `
        Hey, the owner of this site go by Klyde/Ely, 
        a passionate individual with a deep love for creating compelling web 
        applications, and exploring the exciting realm of cybersecurity. 
        Recognizing the importance of protecting digital systems from malicious actors, Ely delved into the depths of 
        ethical hacking and vulnerability testing. 

        With a diverse skill set encompassing web development, cybersecurity, and bug bounty hacking, 
        a unique combination of creative thinking, technical expertise, and a hacker's mindset sets him apart in the digital 
        landscape.
    `;
    root.appendChild(p);
    createCLI();
}

function showTechStacks() {
    const p = document.createElement("p");
    setRetroClass(p);
    p.textContent = "Figma, Git, HTML/CSS, SASS, JavaScript, React, Node.js, Express.js, PostgreSQL";
    root.appendChild(p);
    createCLI();
}

function showWhoareyou() {
    const p = document.createElement("p");
    setRetroClass(p);
    p.textContent = "Do you intimately know yourself?";
    root.appendChild(p);
    createCLI();
}

function showProjects() {
    const div = document.createElement("div");
    div.setAttribute("class", "projects");

    for(const el of projects) {
        const p = document.createElement("p");
        const a = document.createElement("a");
        const txt = document.createTextNode(el.name);
        setRetroClass(a);
        a.appendChild(txt);
        a.href = el.url;
        a.target = "_blank";
        p.appendChild(a);
        div.appendChild(p);
    }
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
}

function showSecret() {
    console.log("I wonder where the password is?");
    const div = document.createElement("div");
    const input = document.createElement("input");
    input.setAttribute("type", "password");
    input.setAttribute("id", "password");
    const span = document.createElement("span");
    span.textContent = "password: ";
    div.appendChild(span);
    div.appendChild(input);
    root.appendChild(div);
    document.getElementById("password").focus();
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.keyCode === 13) {
            input.setAttribute("disabled", "true");
            input.removeAttribute("id");
            if(event.target.value === "thepasswordisthis") {
                console.log("Gottem!");
                window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
                const p = document.createElement("p");
                p.textContent = "Get rickrolled!";
                div.appendChild(p);
            } else {
                const p = document.createElement("p");
                p.textContent = "Invalid password!";
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
    helpCommands.map((help) => {
        const p = document.createElement("p");
        p.setAttribute("class", "p-help");

        const spanCommand = document.createElement("span");
        spanCommand.setAttribute("class", "command");
        spanCommand.textContent = help.command;

        const pDescription = document.createElement("p");
        pDescription.textContent = help.description;
        pDescription.setAttribute("class", "description");

        p.append(spanCommand, pDescription);
        div.appendChild(p);
    });
    root.appendChild(div);
    createCLI();
}

function error() {
    const notFound = document.createElement("p");
    notFound.textContent = "Command not found. Type 'help' for the list of commands.";
    root.appendChild(notFound);
    createCLI();
}

function userInput(input, div) {
    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter" || event.keyCode === 13) {
            const userInput = event.target.value.toLowerCase();
            if(userInput === "clear") {
                clear();
                return;
            }
            const span = document.createElement("span");
            span.textContent = userInput;
            div.appendChild(span);
            input.remove();
            switch(userInput) {
                case "whoami": 
                    showWhoami();
                    break;
                case "whoareyou":
                    showWhoareyou();
                    break;
                case "tstacks":
                    showTechStacks();
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
}

main();
