export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Персонаж ${character} уже есть в команде`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      if (this.members.has(character)) {
        return;
      }
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    let count = 0;
    const arr = this.toArray();
    return {
      next() {
        if (count > arr.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        count += 1;
        return {
          value: arr[count - 1],
          done: false,
        };
      },
    };
  }
}
