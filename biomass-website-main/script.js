function checkQuiz() {
    let score = 0;

    if (document.getElementById("q1").value === "correct") score++;
    if (document.getElementById("q2").value === "correct") score++;

    document.getElementById("result").innerText =
        "You scored " + score + "/2" + "!";
}
