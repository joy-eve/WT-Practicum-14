
let questions = [
    {
        q: "What is inventory management?",
        o: ["Managing stock", "Hiring workers", "Making products", "Advertising"],
        a: 0
    },
    {
        q: "Which method tracks goods during delivery?",
        o: ["Billing", "Shipment tracking", "Packaging", "Marketing"],
        a: 1
    },
    {
        q: "What helps reduce transportation delays?",
        o: ["Poor planning", "Extra storage", "Route optimization", "Less tracking"],
        a: 2
    },
    {
        q: "What is the main goal of a supply chain?",
        o: ["Delay orders", "Increase costs", "Stop production", "Move goods efficiently"],
        a: 3
    }
];

let current = 0, score = 0, selected = -1;

function showQuestion() {
    selected = -1;
    let q = questions[current];

    document.getElementById("num").innerHTML = current + 1;
    document.getElementById("question").innerHTML = q.q;
    document.getElementById("bar").style.width = (current / 4 * 100) + "%";
    document.getElementById("msg").innerHTML = "Select an answer to continue.";

    let area = document.getElementById("options");
    area.innerHTML = "";

    q.o.forEach((option, i) => {
        let btn = document.createElement("button");
        let letter = document.createElement("span");
        let text = document.createElement("p");

        btn.className = "option";
        letter.innerHTML = "ABCD"[i];
        text.innerHTML = option;

        btn.appendChild(letter);
        btn.appendChild(text);
        btn.onclick = function() { choose(i); };

        area.appendChild(btn);
    });
}

function choose(i) {
    selected = i;

    document.querySelectorAll(".option").forEach((btn, n) => {
        btn.classList.toggle("selected", n === i);
    });
}

function nextQuestion() {
    if (selected === -1) {
        document.getElementById("msg").innerHTML = "Choose an answer first!";
        return;
    }

    if (selected === questions[current].a) {
        score++;
    }

    document.getElementById("score").innerHTML = score;

    current++;

    if (current < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").innerHTML = "Quiz Completed!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("msg").innerHTML =
            "Your Score: " + score + "/4";
        document.getElementById("next").style.display = "none";
        document.getElementById("bar").style.width = "100%";
    }
}

showQuestion();
