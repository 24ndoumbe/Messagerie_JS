
let compteur = 0;

// Fonction Deplacer
function Deplacer() {
    const textarea = document.getElementById('clavier'); 
    const affichage = document.querySelector('.affichage'); 
    const texte = textarea.value.trim();
    if (texte) {

        const nouvelDiv = document.createElement('div');
        nouvelDiv.innerHTML = texte;
        
        if (compteur % 2 === 0) {
            nouvelDiv.classList.add('texte', 'droite'); 
        } else {
            nouvelDiv.classList.add('texte', 'gauche'); 
        }
    
        affichage.appendChild(nouvelDiv);

        textarea.value = '';
        compteur++;

    } else {
        alert('Veuillez entrer du texte dans le champ avant de cliquer sur Ajouter.');
    }
}


// Fonction ModifierAspectClavier
function ModifierAspectClavier() {
    const clavier = document.getElementById('clavier');
    clavier.style.resize = 'vertical';  
    clavier.style.overflow = 'auto';    
    clavier.style.width = '50%';        
    clavier.style.minWidth = '400px'; 
  
  window.addEventListener('load', ModifierAspectClavier);
}
  