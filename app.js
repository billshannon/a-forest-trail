(function () {
    // userStatus on initialize
    var userStatus = {
        energy: 100,
        steps: 0
    };

    //add element function created before updateUserStatusDom function
    //function addElement() {
    //    // create a new div element
    //    // and display health
    //    var newDiv = document.createElement('div');
    //    var displayHealth = document.createTextNode(userStatus);
    //    newDiv.appendChild(displayHealth);
    //
    //    //add element and content into DOM
    //    var currentDiv = document.getElementById('status')
    //    currentDiv.appendChild(newDiv)
    //}
    //addElement()

    //get element with id 'status'
    var status = document.getElementById('status');

    // display values in userStatus if > 0
    function updateUserStatusDom() {
        // clear html of status div
        status.innerHTML = '';
        for (key in userStatus) {
            //for every property in userStatus
            //create div and add it the status div
            if (userStatus[key] > 0) {
                var div = document.createElement('div');
                div.innerHTML = "<div>" + key + ": " + userStatus[key] + "</div>";
                status.appendChild(div)
            }
        }
    }

    updateUserStatusDom()
})();

