export const calculateWinner = ((user) => {
    let winners = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
    // Horizontal
    let win = false;

    for (let combo of winners) {
        let win = checkCombo(combo, user);
        if (win) { 
            return win;
        }
    }
    
    return false;
})

const checkCombo = ((arr, user) => {
    let one = false, two = false, three = false; 

    for (let square of user.squares) {
        if (square === arr[0]) {    
            one = true;
        }
        if (square === arr[1]) {
            two = true;
        }
        if (square === arr[2]) {
            three = true;
        }
    }

    return one && two && three;
})