function submitInput() {
    var input = document.getElementById("createInput").value;
    localStorage.setItem(input, JSON.stringify(input));
}