const winChecker = {
  checkForWin: (guessedName, chosenCharacter) => {
    if(guessedName === chosenCharacter.name){
      return true;
    }
    return false;
  }
}

export default winChecker;