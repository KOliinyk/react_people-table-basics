export interface Person {
  slug: string;
  name: string;
  sex: 'm' | 'f';
  born: number;
  died: number;
  motherName?: string;
  fatherName?: string;
}

const MOCK_PEOPLE: Person[] = [
  {
    slug: 'jan-van-brussel-1714',
    name: 'Jan van Brussel',
    sex: 'm',
    born: 1714,
    died: 1748,
    motherName: 'Joanna van Rooten',
    fatherName: 'Jacobus van Brussel',
  },
  {
    slug: 'joanna-van-rooten-1680',
    name: 'Joanna van Rooten',
    sex: 'f',
    born: 1680,
    died: 1742,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'jacobus-van-brussel-1685',
    name: 'Jacobus van Brussel',
    sex: 'm',
    born: 1685,
    died: 1750,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'jan-frans-van-brussel-1761',
    name: 'Jan Frans van Brussel',
    sex: 'm',
    born: 1761,
    died: 1833,
    motherName: '',
    fatherName: 'Jacobus van Brussel',
  },

  {
    slug: 'emma-de-milliano-1876',
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1940,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'philibert-haverbeke-1907',
    name: 'Philibert Haverbeke',
    sex: 'm',
    born: 1907,
    died: 1997,
    motherName: 'Emma de Milliano',
    fatherName: 'Emile Haverbeke',
  },
  {
    slug: 'emile-haverbeke-1877',
    name: 'Emile Haverbeke',
    sex: 'm',
    born: 1877,
    died: 1968,
    motherName: '',
    fatherName: '',
  },

  {
    slug: 'livina-haverbeke-1692',
    name: 'Livina Haverbeke',
    sex: 'f',
    born: 1692,
    died: 1743,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'bernardus-de-causmaecker-1721',
    name: 'Bernardus de Causmaecker',
    sex: 'm',
    born: 1721,
    died: 1789,
    motherName: 'Livina Haverbeke',
    fatherName: 'Lieven de Causmaecker',
  },
  {
    slug: 'lieven-de-causmaecker-1696',
    name: 'Lieven de Causmaecker',
    sex: 'm',
    born: 1696,
    died: 1754,
    motherName: '',
    fatherName: '',
  },

  {
    slug: 'lievijne-jans-1542',
    name: 'Lievijne Jans',
    sex: 'f',
    born: 1542,
    died: 1582,
    motherName: '',
    fatherName: '',
  },

  {
    slug: 'pieter-de-smet-1801',
    name: 'Pieter De Smet',
    sex: 'm',
    born: 1801,
    died: 1872,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'maria-de-smet-1805',
    name: 'Maria De Smet',
    sex: 'f',
    born: 1805,
    died: 1880,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'hendrik-de-smet-1830',
    name: 'Hendrik De Smet',
    sex: 'm',
    born: 1830,
    died: 1899,
    motherName: 'Maria De Smet',
    fatherName: 'Pieter De Smet',
  },

  {
    slug: 'anna-vermeer-1820',
    name: 'Anna Vermeer',
    sex: 'f',
    born: 1820,
    died: 1888,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'willem-vermeer-1818',
    name: 'Willem Vermeer',
    sex: 'm',
    born: 1818,
    died: 1875,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'elisabeth-vermeer-1850',
    name: 'Elisabeth Vermeer',
    sex: 'f',
    born: 1850,
    died: 1910,
    motherName: 'Anna Vermeer',
    fatherName: 'Willem Vermeer',
  },

  {
    slug: 'thomas-janssen-1920',
    name: 'Thomas Janssen',
    sex: 'm',
    born: 1920,
    died: 1985,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'helena-janssen-1925',
    name: 'Helena Janssen',
    sex: 'f',
    born: 1925,
    died: 1993,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'robert-janssen-1950',
    name: 'Robert Janssen',
    sex: 'm',
    born: 1950,
    died: 2010,
    motherName: 'Helena Janssen',
    fatherName: 'Thomas Janssen',
  },

  {
    slug: 'lucas-meijer-1960',
    name: 'Lucas Meijer',
    sex: 'm',
    born: 1960,
    died: 2020,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'sophie-meijer-1965',
    name: 'Sophie Meijer',
    sex: 'f',
    born: 1965,
    died: 2022,
    motherName: '',
    fatherName: '',
  },
  {
    slug: 'emma-meijer-1990',
    name: 'Emma Meijer',
    sex: 'f',
    born: 1990,
    died: 0,
    motherName: 'Sophie Meijer',
    fatherName: 'Lucas Meijer',
  },
];

export const fetchPeople = async (): Promise<Person[]> => {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_PEOPLE), 300));
};
