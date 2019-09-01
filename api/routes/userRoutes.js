
module.exports = app => {
  app.get('/users', (req, res) => {
    res.send(users);
  });

  app.get('/admins', (req, res) => {
    res.send(admins);
  });
};

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' }
];

const admins = [
  { id: 1, name: 'Kurtis Weissnat' },
  { id: 2, name: 'Nicholas Runolfsdottir' },
  { id: 3, name: 'Gelann Reichert' },
  { id: 4, name: 'Moriah Stanton' },
  { id: 5, name: 'Rey Padberg' }
];
