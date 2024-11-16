/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno  
 */


export const crearCartaHTML = (carta) => {
   
    if (!carta) throw new Error('La carta es un argumento valido')
   
   
    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    return imgCarta;

}