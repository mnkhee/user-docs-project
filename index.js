function submitInput() {
    var input = document.getElementById("createInput").value;
    localStorage.setItem(input, JSON.stringify(input));
}

function displayOutput() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var data = localStorage.getItem(key);
        console.log(data);
    }
}

function removeItem() {
    var item = document.getElementById('createInput');
    localStorage.removeItem(item);
    window.location.reload();
}