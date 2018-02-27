//Creating the list on page load

window.onload = function() {
   
    var array = ['Box 1', 'Box 2 has a medium text', 'Box 3 has a very very long text', 'Box4'];

    var ul = document.getElementsByClassName('reorderable-list')[0];

	for (var i=0; i<array.length; i++){
		
			var li=document.createElement('li');
			li.id = array[i]; 
			li.innerHTML=
			'<img class="li-image" src="assets/smile.ico"/>' +
			'<span class="li-text-rel"><span class="li-text">' + array[i] + '</span></span>' +
			'<span class="li-button-grp"><img class="li-button-up-image" src="assets/up.png" onclick="upButton(event)"/>' +
			'<img class="li-button-down-image" src="assets/down.png" onclick="downButton(event)"/>' +
			'<img class="li-button-remove-image" src="assets/remove.png" onclick="removeButton(event)"/></span>';

			ul.appendChild(li);
		
	}

};

function upButton(event) {
	moveItem(event.target.parentNode.parentNode.id, -1);
}

function downButton(event) {
	moveItem(event.target.parentNode.parentNode.id, 1);
}

function removeButton(event) {

	var ul = document.getElementsByClassName('reorderable-list')[0];

	ul.removeChild(event.target.parentNode.parentNode);
}

function moveItem(id, direction) {

    var ul = document.getElementsByClassName('reorderable-list')[0];
    var items = ul.getElementsByTagName('li');


    for (var i = 0, len = items.length; i < len; i++) {

        var item = items[i];

        if (item.id == id) {

            if (direction == 1) { 
			
				items[i+1].parentNode.insertBefore( items[i+1], item );
                break;
		   
			} else if (direction == -1) {

                item.parentNode.insertBefore( item, items[i-1] );
                break;
            }
        }
    }
}