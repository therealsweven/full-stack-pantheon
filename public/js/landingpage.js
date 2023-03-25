var menuDisplay = document.getElementById('menuDisplay');

function renderMenuItems(){
    for (let index = 1; index < 6; index++) {
        //create div container
        var item = document.createElement('div');
        item.setAttribute('class','item-'+index);
        item.setAttribute('id', 'menu-items');
        //create image
        var img = document.createElement('img');
        img.setAttribute('src','https://images.unsplash.com/photo-1619096252214-ef06c45683e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')
        //
    }
}