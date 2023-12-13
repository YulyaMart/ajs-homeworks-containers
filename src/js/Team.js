export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Нельзя добавить в команду несколько раз одного и того же персонажа');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      // if(this.members.has(character)){
      //   return;
      // }
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
