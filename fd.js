const url = 'https://nagaveni.freshdesk.com/api/v2/tickets';

const username = ['ZcVbEwsby5MDSnD4xleQ'];



fetch(url,

        {
            method: 'GET',

            headers: { 'Authorization': 'Basic ' + btoa(username) }

        })
    .then(data => data.json())
    .then(x => {
        if (x.length > 0) {
            var temp = "";

            x.forEach((ele) => {
                temp += "<tr>";
                temp += "<td>" + ele.id + "</td>";
                temp += "<td>" + ele.subject + "</td>";
                temp += "<td>" + ele.created_at + "</td>";
                temp += "<td>" + ele.due_by + "</td>";
                temp += "<td>" + ele.priority + `<input type="button"`
                "</td>";
                temp += "<td>" + ele.status + /*distat()*/ "</td></tr>";

            })
            document.getElementById("data").innerHTML = temp;
        }
    });


// function display(){
//     document.createElement('div');
//     div.append()
// }

// <
// select >
//     option value = 'default' > 1 < /option> <
// option value = 'Low' > 1 < /option> <
// option value = 'Medium' > 2 < /option> <
// option value = 'High' > 3 < /option> <
// option value = 'Urgent' > 4 < /option>  <
//     /select>