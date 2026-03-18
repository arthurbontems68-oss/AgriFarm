// =============================================================================
//  © 2025 shadowgamer — TOUS DROITS RÉSERVÉS
//
//  Ce script est la propriété exclusive de shadowgamer.
//  Toute reproduction, copie, modification ou redistribution
//  est STRICTEMENT INTERDITE sans autorisation écrite préalable.
//
//  ⚠️  USAGE AUTORISÉ UNIQUEMENT SUR :
//      - agrifarm (site officiel)
//      - smartbot (site officiel)
//
//  Toute utilisation sur un autre site ou projet constitue
//  une violation des droits d'auteur et peut faire l'objet
//  de poursuites judiciaires.
//
//  Merci de ne pas copier-coller ce code.
// =============================================================================
document.addEventListener("contextmenu",function(e){e.preventDefault();});document.addEventListener("keydown",function(e){if(e.key==="F12"){e.preventDefault();}if(e.ctrlKey&&e.key==="u"){e.preventDefault();}if(e.ctrlKey&&e.shiftKey&&e.key==="I"){e.preventDefault();}if(e.ctrlKey&&e.shiftKey&&e.key==="J"){e.preventDefault();}if(e.ctrlKey&&e.shiftKey&&e.key==="C"){e.preventDefault();}if(e.ctrlKey&&e.key==="s"){e.preventDefault();}});function redirecterVersGoogle(){document.body.innerHTML="";window.location.replace("https://www.google.com");}function detecterDevTools(){var a=window.outerWidth-window.innerWidth>200;var b=window.outerHeight-window.innerHeight>200;if(a||b){redirecterVersGoogle();}}setInterval(detecterDevTools,1000);document.addEventListener("selectstart",function(e){e.preventDefault();});