var ticket_items;
var menuDisplay;

$(function(){
    menuDisplay = document.getElementById('menuDisplay');
    ticket_items = document.getElementById('ticket-items');
    retrieveMenuData();
})

function renderMenuRow(data){
    console.log(data);
    //create row container
    var row = document.createElement('div');
    row.setAttribute('class','d-flex justify-content-evenly col-md-12');

    for (let index = 0; index < data.length; index++) {
        //create div container
        var item = document.createElement('div');
        item.setAttribute('class','item-' + index);
        item.setAttribute('id', 'menu-items');
        //create image
        var img = document.createElement('img');
        img.setAttribute('src',data[index].image);
        img.setAttribute('class','images');
        //create name paragraph
        var name = document.createElement('p');
        name.textContent = data[index].item_name;
        //create price paragraph
        var price = document.createElement('p');
        price.textContent = '$' + data[index].price;
        //append
        item.append(img, name, price);
        row.append(item);
    }
    menuDisplay.append(row);
}

function renderMenuItems(data){
    for (let index = 1; index <= data.length; index++) {
         if(index % 4 == 0 || index == data.length){
            renderMenuRow(data.slice(index-4, index));
         }
    }
}


function renderTicketItems(data){
    for (let index = 1; index < 3; index++) {
        var tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>Item 1</td>
        <td>
            <button class="btn btn-default btn-subtract" type="button">-</button>
         x 1
            <button class="btn btn-default btn-add" type="button">+</button>
        </td>
        <td>$4.99</td>`;
        ticket_items.append(tableRow);
    }
}

async function retrieveMenuData(){
    await fetch("http://localhost:3001/api/menu", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        renderMenuItems(data);
      })
}