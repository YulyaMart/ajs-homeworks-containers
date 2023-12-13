import Team from '../Team';

test(('checking add method'), () => {
  const bowman = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const characterSet = new Team();
  characterSet.add(bowman);

  const daemon = {
    name: 'Den',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  characterSet.add(daemon);

  const { size } = characterSet.members;
  const expected = 2;
  expect(size).toBe(expected);
});

test(('checking add method error'), () => {
  const bowman = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const characterSet = new Team();
  characterSet.add(bowman);

  const daemon = {
    name: 'Den',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  characterSet.add(daemon);

  expect(() => {
    characterSet.add(bowman);
  }).toThrow('Нельзя добавить в команду несколько раз одного и того же персонажа');
});

test(('checking addAll method'), () => {
  const bowman = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const daemon = {
    name: 'Den',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const magican = {
    name: 'Mag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const characterSet = new Team();
  characterSet.addAll(bowman, daemon, magican, bowman);

  const { size } = characterSet.members;
  const expected = 3;
  expect(size).toBe(expected);
});

test(('checking toArray method'), () => {
  const bowman = {
    name: 'Bow',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const daemon = {
    name: 'Den',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const magican = {
    name: 'Mag',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const characterSet = new Team();

  characterSet.addAll(bowman, daemon, magican, bowman);
  characterSet.toArray();

  const expected = [
    {
      name: 'Bow',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: 'Den',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Mag',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  expect(characterSet.toArray()).toEqual(expected);
});
