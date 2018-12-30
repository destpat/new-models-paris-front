export const getDay = () => {
  let day = [];
  for (let i = 1; i < 32; i++) {
    if (i < 10) {
      day.push({name: i, value: `0${i}`})
    } else {
      day.push({name: i, value: i})
    }
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
    value: '01'
  },
  {
    name: 'Février',
    value: '02'
  },
  {
    name: 'Mars',
    value: '03'
  },
  {
    name: 'Avril',
    value: '04'
  },
  {
    name: 'Mai',
    value: '05'
  },
  {
    name: 'Juin',
    value: '06'
  },
  {
    name: 'Juillet',
    value: '07'
  },
  {
    name: 'Août',
    value: '08'
  },
  {
    name: 'Septembre',
    value: '09'
  },
  {
    name: 'Octobre',
    value: '10'
  },
  {
    name: 'Novembre',
    value: '11'
  },
  {
    name: 'Décembre',
    value: '12'
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
