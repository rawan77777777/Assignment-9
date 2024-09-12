var bookMarkNameInput =document.getElementById("bookMarkName");
var bookMarkSiteInput =document.getElementById("bookMarkSite");

addMoreInfo=[];
if (localStorage.getItem("infoContainer") !==null) {
    addMoreInfo = JSON.parse(localStorage.getItem("infoContainer"))
    addMore();
 }
function addNew() {
if (validationName() == true && validationUrl() == true) {
    var info={
        name:bookMarkNameInput.value,
        url:bookMarkSiteInput.value,
    }
    addMoreInfo.push(info);
    localStorage.setItem("infoContainer", JSON.stringify(addMoreInfo))
 addMore();
    console.log(addMoreInfo);
    // alert("hi")
    clearList();
}
}
function clearList(){
    bookMarkNameInput.value= null;
    bookMarkSiteInput.value= null;
    bookMarkNameInput.classList.remove("is-valid")
    bookMarkSiteInput.classList.remove("is-valid")
}
function addMore(){
    var cartona = "";
    for(var i= 0; i<addMoreInfo.length; i++){
        cartona +=
    `<tr>
    <td>${i}</td>
            <td>
  <i class="fa-brands fa-${addMoreInfo[
    i
  ].name.toLowerCase()} fa-xl me-2 fw-bold ${getIconColor(
      addMoreInfo[i].name
    )}"></i>
  <span class="fs-5 fw-bold">${addMoreInfo[i].name}</span>
</td>
    <td><button onclick="openPage(${i})" class="btn btn-success"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
    <td><button onclick="deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
</tr>`;
    }
    document.getElementById("tableData").innerHTML=cartona
 }
 function deleteItem(indexItem){
    addMoreInfo.splice(indexItem , 1);
    localStorage.setItem("infoContainer", JSON.stringify(addMoreInfo));
    addMore();
    console.log(addMoreInfo);
  }
  function validationName() {
    var text = bookMarkNameInput.value;
    var regex=/^[A-Z][a-z]{3,8}$/;
    var msgNameElement = document.getElementById("msgName")
    if (regex.test(text) ==true) {
        // console.log("match");
        bookMarkNameInput.classList.add("is-valid")
        bookMarkNameInput.classList.remove("is-invalid")
        msgNameElement.classList.add("d-none")
        return true;
    } else {
        // console.log("not match");
        bookMarkNameInput.classList.add("is-invalid")
        bookMarkNameInput.classList.remove("is-valid")
        msgNameElement.classList.remove("d-none")
        return false;
    }
  }

  function validationUrl() {
    var text = bookMarkSiteInput.value;
    var regex=  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
    ;
    var msgUrlElement = document.getElementById("msgUrl")
    if (regex.test(text) ==true) {
        // console.log("match");
        bookMarkSiteInput.classList.add("is-valid")
        bookMarkSiteInput.classList.remove("is-invalid")
        msgUrlElement.classList.add("d-none")
        return true;
    } else {
        // console.log("not match");
        bookMarkSiteInput.classList.add("is-invalid")
        bookMarkSiteInput.classList.remove("is-valid")
        msgUrlElement.classList.remove("d-none")
        return false;
    }
  }

  function openPage(index) {
  parent.open(addMoreInfo[index].url);
}

function getIconColor(iconName) {
    switch (iconName.toLowerCase()) {
      case "facebook":
      case "linkedin":
        return "text-primary";
      case "twitter":
        return "text-info";
      case "instagram":
        return "text-danger";
      case "google":
        return "text-warning";
      default:
        return "text-secondary";
    }
  }
//     function visitProduct(index) {
//      var regexUUrl = /^https?:\/\//;
//      if (regexUUrl.test(bookMarkSiteInput[index].addMoreInfo)) {
//        window.open(bookMarkSiteInput[index].addMoreInfo, "_blank");
//      } else {
//        window.open(https://${bookMarkSiteInput[index].addMoreInfo}, "_blank");
//      }
//     }