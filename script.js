function calculateRisk() {
    const stage = parseFloat(document.getElementById("stage").value);
    const level = parseFloat(document.getElementById("level").value);
    const resultElement = document.getElementById("result");

    if (isNaN(stage) || isNaN(level) || stage < 0 || level < 0) {
        resultElement.textContent = "Please enter valid non-negative numbers.";
        return;
    }

    const risk = stage / (stage + level + 3);
    const percentage = (risk * 100).toFixed(2);
    resultElement.textContent = `The risk of dying on stage ${stage} with level ${level} is ${percentage}%`;
}
