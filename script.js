/*<div class="card">
    <div class="top">
        <div class="left">
            <div class="status">
                Approved
            </div>
            <div class="id">
                S230SKAN
            </div>
        </div>

        <div class="right">
            <div class="date">
                Mar 24, 2023, 545664
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="location">
            Bellenduru spike lake
        </div>
        <div class="address">
            KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India
        </div>
        <div class="price">
            ₹ 0
        </div>
    </div>
    </div>*/

let container = document.getElementsByClassName("container")[0];
console.log(container);
async function fetchData() {
    let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";

    let promise = await fetch(url);

    let data = await promise.json();
     console.log(data);
    loadData(data);
}

function loadData(data) {

    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `<div class="top">
        <div class="left">
            <div class="status ${data[i].status.toLowerCase()}">
                ${data[i].status}
            </div>
            <div class="id">
                ${data[i].caseNumber}
            </div>
        </div>

        <div class="right">
            <div class="date">
            ${data[i].date}
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="location">
        ${data[i].fromLocation}
        </div>
        <div class="address">
        ${data[i].toLocation}
        </div>
        <div class="price">
        ${data[i].fare}
        </div>
    </div>`

     container.appendChild(div);
    }
}

fetchData();