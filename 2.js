function submit() {

    var a = document.querySelector("#name").value;
    var b = document.querySelector("#sname").value;
    var c = document.querySelector("#age").value;
    console.log(a);
    console.log(b);
    console.log(b);
    var d = document.querySelector("#value").cloneNode(true);
    d.innerHTML = "Name: " + a + "\n" + "Surname: " + b + "\n" + "Age: " + c;
    console.log(d.innerHTML);

    var f = document.querySelector("#output");

    f.insertBefore(d, f.firstChild)

    document.querySelector("#name").value = "";
    document.querySelector("#sname").value = "";
    document.querySelector("#age").value = "";
}