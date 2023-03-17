let namePerson = document.getElementById("nm");
let jobPerson = document.getElementById("jb");
let hobbyPerson = document.getElementById("hb");
let nationalPerson = document.getElementById("nt");
let element = document.getElementById("myform");
let submitButton = document.getElementById("btn-add");
let edit = document.getElementById("btn-edit");
let card = document.getElementById("card");
let data = [];

function addNewUser() {
    event.preventDefault();
    const newUser = {
        name: namePerson.value,
        job: jobPerson.value,
        hobby: hobbyPerson.value,
        national: nationalPerson.value
    };
    data.push(newUser);
    card.innerHTML += `
        <div class="card">
        <div class="head">
        <img src="../img/profile.png" alt="">
        </div>
        <div class="body">
        <p id="cardName">Nama : ${newUser.name}</</p>
        <p id="cardJob">Pekerjaan : ${newUser.job}</p>
        <p id="cardHobby">Hobi : ${newUser.hobby}</p>
        <p id="cardNational">Nationaly : ${newUser.national}</p>
        <button id="btn-edit" class="btn-list">Edit</button>
        <button onclick="removeUser(${data.length - 1})">Delete</button>
        </div>
        </div>
        `;
    element.reset();
}

submitButton.addEventListener("click", addNewUser);

function removeUser(id) {
    data.splice(id, 1);
    card.innerHTML = "";
    data.map((x, y) => {
        return (card.innerHTML += `
      <div id=${y} class="card">
          <div class="head">
              <img src="../img/profile.png" alt="">
          </div>
          <div class="body">
              <p id="cardName">Nama : ${x.name}</p>
              <p id="cardJob">Pekerjaan : ${x.job}</p>
              <p id="cardHobby">Hobi : ${x.hobby}</p>
              <p id="cardNational">Nationaly : ${x.national}</p>
              <button id="btn-edit" class="btn-list">Edit</button>
              <button class="btn-delete" onclick="removeUser(${y})">Delete</button>
          </div>
      </div>
      `);
    });
}

// Dapatkan referensi ke tombol Hapus
const btnRemove = document.getElementById('btn-remove');

// Tambahkan pendengar acara klik ke tombol Hapus
btnRemove.addEventListener('click', function () {
    // Dapatkan referensi ke elemen kartu yang akan dihapus
    const cardToRemove = btnRemove.parentNode.parentNode;

    // Hapus elemen kartu dari DOM
    cardToRemove.remove();
});

// Get a reference to the Edit button
const btnEdit = document.getElementById('btn-edit');

// Add a click event listener to the Edit button
btnEdit.addEventListener('click', function () {
    // Get a reference to the card element to be edited
    const cardToEdit = btnEdit.parentNode.parentNode;

    // Get references to the card content elements to be edited
    const cardName = cardToEdit.querySelector('#cardname');
    const cardJob = cardToEdit.querySelector('#cardjob');
    const cardHobby = cardToEdit.querySelector('#cardhobby');
    const cardNationality = cardToEdit.querySelector('#cardNationality');

    // Prompt the user for new values for each content element
    const newName = prompt("Enter new name:");
    const newJob = prompt("Enter new job:");
    const newHobby = prompt("Enter new hobby:");
    const newNationality = prompt("Enter new nationality:");

    // Modify the content of the card elements with the new values
    cardName.textContent = "Nama : " + newName;
    cardJob.textContent = "Pekerjaan : " + newJob;
    cardHobby.textContent = "Hobi : " + newHobby;
    cardNationality.textContent = "Nationality : " + newNationality;
}); QQ2QQQ
