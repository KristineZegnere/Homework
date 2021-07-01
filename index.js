
window.onload = function(){
    bingoBoardCells()
  
}

const bingoBoardCells = function() {
    let newCellsPlace = document.getElementById('cells-for-numbers')

    for(let cellNum = 0; cellNum <= 76; cellNum++) {
        let newCell = document.createElement('div')
        newCell.innerText = cellNum
        newCell.classList.add('one-cell')
     //   newCell.onclick = selectNumber
        newCellsPlace.appendChild(newCell)
    
} 
}

    const selectNumber = function() {
        
    }

const randomNumber = function() {
    let oneRandomNumber = Math.floor(Math.random() * 77)

    if(oneRandomNumber === newCell) {
        oneRandomNumber.style.color = 'yellow'
    }
}