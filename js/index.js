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

input.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        console.log(event.target.value);
        input.value = "";
    }
});
