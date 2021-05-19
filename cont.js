function list() {
    var tab = document.getElementById("data");
    var row = tab.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();

    const url = 'https://nagaveni.freshdesk.com/api/v2/contacts';

    const username = ['ZcVbEwsby5MDSnD4xleQ'];

    const person = fetch(url, {
            method: 'GET',

            headers: {
                'Authorization': 'Basic ' + btoa(username)
            }

        })
        .then(data => data.json())
        .then(x => {
            if (x.length > 0) {
                var temp = "";

                x.forEach((ele) => {
                    temp += "<tr>";
                    temp += "<td>" + ele.name + "</td>";
                    temp += "<td>" + ele.email + "</td>";
                    temp += "<td>" + ele.phone + "</td>";
                })
                document.getElementById("data").innerHTML = temp;
            }
        })
}


function appendtable() {
    var tab = document.getElementById("data");
    var row = tab.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();

    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("email").value;
    cell3.innerHTML = document.getElementById("phone").value;
    // alert('Succesfully added the new Contact');
    //add();
    list();
    clear();
}

function clear() {
    //add();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}

function add() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let user = {
        name: name,
        email: email,
        phone: phone
    }

    const url = 'https://nagaveni.freshdesk.com/api/v2/contacts';
    const username = ['ZcVbEwsby5MDSnD4xleQ'];
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            "Content-Type": "application/json",

            headers: {
                "Content-Type": "application/json",
                // "Content - Type": text / html,
                // "charset": "UTF - 8",
                // "Content - Type": "multipart / form - data",
                // "boundary": "something",
                'X-Content-Type-Options': 'nosniff',
                'Authorization': 'Basic ' + btoa(username)
            }
        })
        .then(user => user.json())
        .then(res => {
            console.log(res);
            console.log(data)
        })
    appendtable();
    list();
    clear();
}