var books = [];

var tab = document.getElementById("tab");
var form = document.getElementById("form");


function addBookRow(book) {
    const ligne = tab.insertRow(); 

    
    const idCell = ligne.insertCell(0);
    const titreCell = ligne.insertCell(1);
    const auteurCell = ligne.insertCell(2);
    const prixCell = ligne.insertCell(3);
    const editerCell = ligne.insertCell(4);
    const supprimerCell = ligne.insertCell(5);

    
    idCell.textContent = book.id;
    titreCell.textContent = book.titre;
    auteurCell.textContent = book.auteur;
    prixCell.textContent = book.prix;

    
    editerCell.innerHTML = '<button onclick="editBook(this)">Editer</button>';
    supprimerCell.innerHTML = '<button onclick="deleteBook(this)">Supprimer</button>';
}


form.onsubmit = function(event) {
    event.preventDefault(); 

   
    const id = document.getElementById('id').value;
    const titre = document.getElementById('titre').value;
    const auteur = document.getElementById('auteur').value;
    const prix = document.getElementById('prix').value;

    
    const newBook = {
        id: id,
        titre: titre,
        auteur: auteur,
        prix: prix
    };

    
    books.push(newBook);

    
    addBookRow(newBook);

    
    form.reset();
}



function deleteBook(button) {
    const row = button.closest('tr'); 

    
    const ligneASupprimer = prompt("Veuillez saisir l'ID de la ligne que vous souhaitez supprimer :");

    
    const id = row.cells[0].textContent; 

    if (ligneASupprimer === id) {
       
        row.remove();
    } else {
        alert("L'ID que vous avez saisi ne correspond pas à la ligne sélectionnée.");
    }
}



function editBook(button) {
    const row = button.closest('tr'); 
    const id = row.cells[0].textContent; 

    
    const ligneAEditer = prompt("Veuillez saisir l'ID de la ligne que vous souhaitez éditer :");

    
    if (ligneAEditer === id) {
        
        document.getElementById('id').value = row.cells[0].textContent;
        document.getElementById('titre').value = row.cells[1].textContent;
        document.getElementById('auteur').value = row.cells[2].textContent;
        document.getElementById('prix').value = row.cells[3].textContent;

        
        document.getElementById('id').disabled = true;

        
        form.onsubmit = function(event) {
            event.preventDefault(); 

            
            row.cells[1].textContent = document.getElementById('titre').value;
            row.cells[2].textContent = document.getElementById('auteur').value;
            row.cells[3].textContent = document.getElementById('prix').value;

            
            form.reset();
            document.getElementById('id').disabled = false;

            alert("Les informations du livre ont été mises à jour avec succès !");
        }
    } else {
        alert("L'ID que vous avez saisi ne correspond pas à la ligne sélectionnée.");
    }
}

document.getElementById('cacher').addEventListener('click', function() {
    document.getElementById('form').style.display = 'block'; 
});

