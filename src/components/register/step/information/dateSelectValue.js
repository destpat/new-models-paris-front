export const getDay = () => {
  let day = [];
  for (let i = 1; i < 32; i++) {
    day.push({name: i, value: i})
  }
  return day
}

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  let day = [];
  for (let i = currentYear; i > 1930; i--) {
    day.push({name: i, value: i})
  }
  return day
}

export const month = [
  {
    name: 'Janvier',
    value: 0
  },
  {
    name: 'Février',
    value: 1
  },
  {
    name: 'Mars',
    value: 2
  },
  {
    name: 'Avril',
    value: 3
  },
  {
    name: 'Mai',
    value: 4
  },
  {
    name: 'Juin',
    value: 5
  },
  {
    name: 'Juillet',
    value: 6
  },
  {
    name: 'Août',
    value: 7
  },
  {
    name: 'Septembre',
    value: 8
  },
  {
    name: 'Octobre',
    value: 9
  },
  {
    name: 'Novembre',
    value: 10
  },
  {
    name: 'Décembre',
    value: 11
  },
]

export const sex = [
  {
    name: 'Homme',
    value: 'men'
  },
  {
    name: 'Femme',
    value: 'women'
  }
]
