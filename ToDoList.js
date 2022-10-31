var inputText = document.getElementById("listName");
var add = document.getElementById("addButton");
var mainLists = document.getElementById("mainList");
var saveButtonTask = document.getElementById("saveButton");
var inputItemData = document.getElementById("inputItems");
var clearAllItems = document.getElementById("clearAllItem");

add.addEventListener("click",()=> {

    var s = inputText.value;
    var g = s.trim();

    var objectItem = {

        content:[inputText.value,inputText.value.strike()],
        status:false
    }

    if(g.length!=0) {

        var listNames = JSON.parse(localStorage.getItem("listName"));
        
        if(listNames==null) {

            listArray = [];
        }

        else {

           listArray =  listNames;
        }

        listArray.push(objectItem);
        localStorage.setItem("listName",JSON.stringify(listArray));

inputText.value = "";
        display();

    }

});


function deleteGo(i) {

    listArray = JSON.parse(localStorage.getItem("listName"));
    listArray.splice(i,1);
    localStorage.setItem("listName",JSON.stringify(listArray));
    display();

}

function display() {

    var output = '';
    var listNames = JSON.parse(localStorage.getItem("listName"));
        
    if(listNames==null) {

        listArray = [];
    }

    else {

       listArray =  listNames;
    }

    listArray.forEach((Element,index)=> {

        output+=`
    
        <div class="listRow" style="user-select: none;">
        <div id="listNameId">
        <p id="nop">${Element.content[0]}</p>
        </div>
        <div> 
       <i class="fa fa-check" id="tikMark" name="nishu" onclick=doneItem(${index})></i>
        <button type="button" id="editButton" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(${index})" style="margin-right: 8px;" class="btn btn-warning">Edit</button>
        <button type="button" id="deleteButton" onclick="deleteGo(${index})" class="btn btn-danger">Delete</button>
        </div>
        </div>
    
        `;
    });

    mainLists.innerHTML = output;

}

function doneItem(indexC) {

    var localArray1 = JSON.parse(localStorage.getItem("listName"));
    
    if(localArray1[indexC].status==true) {

        localArray1[indexC].status = false;
    }

    else {

        localArray1[indexC].status = true;

    }
    
    localStorage.setItem("listName",JSON.stringify(localArray1));

    var localArray2 = JSON.parse(localStorage.getItem("listName"));

            var temp = localArray2[indexC].content[0];
            localArray2[indexC].content[0] = localArray2[indexC].content[1];
            localArray2[indexC].content[1] = temp;
            localStorage.setItem("listName",JSON.stringify(localArray2));
    display();

        }


function edit(listIndex) {

var rohit45 = JSON.parse(localStorage.getItem("listName"));

    if(rohit45[listIndex].status==true) {

        inputItemData.value = rohit45[listIndex].content[1];
    }

    else {

        inputItemData.value = rohit45[listIndex].content[0];

    }


    saveButtonTask.addEventListener("click",()=> {

        if(rohit45[listIndex].status==true) {

    rohit45[listIndex].content[0] = inputItemData.value.strike();
     rohit45[listIndex].content[1] = inputItemData.value;

        }

        else{

            rohit45[listIndex].content[0] = inputItemData.value;
     rohit45[listIndex].content[1] = inputItemData.value.strike();


        }
        
    localStorage.setItem("listName",JSON.stringify(rohit45));
    display();

    })

}


display();

clearAllItems.addEventListener("click",()=> {

    var local = JSON.parse(localStorage.getItem("listName"));

    local = [];
    localStorage.setItem("listName",JSON.stringify(local));

    display();
})
