const { PUBLIC_URL } = process.env;

const players = [
  {
    headshot: `${PUBLIC_URL}/images/defaultHeadshot.svg`,
    name: 'Steven Ramos',
    number: '20',
    position: 'DH',
    batsThrows: 'R/R',
    height: "5'9",
    weight: '200',
    dob: '03/26/1983',
  },
  {
    headshot: `${PUBLIC_URL}/images/defaultHeadshot.svg`,
    name: 'David Krauskopf-Greene',
    number: '48',
    position: '2B',
    batsThrows: 'R/R',
    height: "5'10",
    weight: '175',
    dob: '10/07/1997',
  },
];

export default players;
