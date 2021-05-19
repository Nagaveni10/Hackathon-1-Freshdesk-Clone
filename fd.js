const url = 'https://nagaveni.freshdesk.com/api/v2/tickets';

const username = ['ZcVbEwsby5MDSnD4xleQ'];



const fun = fetch(url,

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
                temp += "<td>" + `<select name="priority" id="prior" onclick=${display()} >
                <option value="Default">${ele.priority}</option>
                </select>`
                "</td>";
                temp += "<td>" + `<select name="status" id="stat" onclick=${distat()} >
                <option value="Default">${ele.status}</option>
                </select>`
                "</td></tr>";

            })
            document.getElementById("data").innerHTML = temp;
        }
    });


function display() {
    var temp = "";
    fun.then(ele => {

        ele.priority = document.getElementById('prior').innerHTML = `<select name="priority" id="prior">
            <option value="Low" name="Low">1</option>
            <option value="Medium" name="Medium">2</option>
            <option value="High" name="High">3</option>
            <option value="Urgent" name="Urgent">4</option>
          </select>`;
    })
}

function distat() {
    var temp = "";
    fun.then(ele => {

        ele.status = document.getElementById('stat').innerHTML = `<select name="status" id="stat">
            <option value="Open" name="Open">2</option>
            <option value="Pending" name="Pending">3</option>
            <option value="Resolved" name="Resolved">4</option>
            <option value="Closed" name="Closed">5</option>
          </select>`;
    })
}
// <
// select >
//     option value = 'default' > 1 < /option> <
// option value = 'Low' > 1 < /option> <
// option value = 'Medium' > 2 < /option> <
// option value = 'High' > 3 < /option> <
// option value = 'Urgent' > 4 < /option>  <
//     /select>