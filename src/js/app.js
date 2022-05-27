import Person from './Person';
import Team from './Team';

const character1 = new Person('Meow', 'cat');
const character2 = new Person('Woof', 'dog');

const team = new Team();
team.addAll(character1, character2);
for (const char of team) {
  console.log(char);
}
