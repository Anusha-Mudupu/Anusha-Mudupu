const ListJs = [
  {
    id: 1,
    name: 'Product abcdef',
    code: 'product admin',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 2,
    name: 'IT Admin',
    code: 'it_admin',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 3,
    name: 'Zonal Manager',
    code: 'zonal_manager',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 4,
    name: 'Coordinator',
    code: 'coordinator',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 5,
    name: 'Super Admin',
    code: 'super_Admin',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 6,
    name: 'Agent',
    code: 'agent',
    reportingTo: 'Adminstrator',
    isSelected: false,
  },
  {
    id: 7,
    name: 'Employee',
    code: 'employee',
    reportingTo: 'Branch Manager',
    isSelected: false,
  },
  {
    id: 8,
    name: 'Branch Manager',
    code: 'branch_manager',
    reportingTo: 'Regional Manager',
    isSelected: false,
  },
  {
    id: 19,
    name: 'Regional Manager',
    code: 'regional_manager',
    reportingTo: 'Zonal Manager',
    isSelected: false,
  },
  {
    id: 19,
    name: 'Adminstrator',
    code: 'admin',
    reportingTo: '----',
    isSelected: false,
  },
];

const dataattribute = [
  {
    id: '3',
    name: 'Jonny Stromberg',
    year: '1986',
    img: 'assets/images/users/avatar-1.jpg',
  },
  {
    id: '2',
    name: 'Jonas Arnklint',
    year: '1985',
    img: 'assets/images/users/48/avatar-2.jpg',
  },
  {
    id: '5',
    name: 'Martina Elm',
    year: '1986',
    img: 'assets/images/users/avatar-3.jpg',
  },
  {
    id: '1',
    name: 'Gustaf Lindqvist',
    year: '1983',
    img: 'assets/images/users/avatar-4.jpg',
  },
  {
    id: '4',
    name: 'Leia',
    year: '1954',
    img: 'assets/images/users/avatar-5.jpg',
  },
];

const existingList = [
  {
    id: '1',
    name: 'Gustaf Lindqvist',
    time: '01 hrs',
    content: "I've finished it! See you so",
    img: 'assets/images/users/avatar-4.jpg',
  },
  {
    id: '2',
    name: 'Jonas Arnklint',
    time: '12 min',
    content: 'Bug Report - abc theme',
    img: 'assets/images/users/48/avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Jonny Stromberg',
    time: '06 min',
    content: 'New updates for ABC Theme',
    img: 'assets/images/users/avatar-1.jpg',
  },
  {
    id: '4',
    name: 'Martina Elm',
    time: '28 min',
    content: 'Nice to meet you',
    img: 'assets/images/users/avatar-3.jpg',
  },
];

const FuzzyList = [
  {
    id: '1',
    name: 'Guybrush Threepwood',
  },
  {
    id: '2',
    name: 'Elaine Marley',
  },
  {
    id: '3',
    name: 'LeChuck',
  },
  {
    id: '4',
    name: 'Stan',
  },
  {
    id: '5',
    name: 'Voodoo Lady',
  },
  {
    id: '6',
    name: 'Herman Toothrot',
  },
  {
    id: '7',
    name: 'Meathook',
  },
  {
    id: '8',
    name: 'Carla',
  },
  {
    id: '9',
    name: 'Otis',
  },
  {
    id: '10',
    name: 'Rapp Scallion',
  },
  {
    id: '11',
    name: 'Rum Rogers Sr.',
  },
  {
    id: '12',
    name: 'Men of Low Moral Fiber',
  },
  {
    id: '13',
    name: 'Murray',
  },
  {
    id: '14',
    name: 'Cannibals',
  },
];

const paginationlist = [
  {
    id: '1',
    name: 'Jonny Stromberg',
    type: 'Front end Developer',
    img: 'assets/images/users/avatar-1.jpg',
  },
  {
    id: '2',
    name: 'Jonas Arnklint',
    type: 'Backend Developer',
    img: 'assets/images/users/48/avatar-2.jpg',
  },
  {
    id: '3',
    name: 'Martina Elm',
    type: 'UI/UX Designer',
    img: 'assets/images/users/avatar-3.jpg',
  },
  {
    id: '4',
    name: 'Gustaf Lindqvist',
    type: 'Full Stack Developer',
    img: 'assets/images/users/avatar-4.jpg',
  },
  {
    id: '5',
    name: 'Jonny Stromberg',
    type: 'Front end Developer',
    img: 'assets/images/users/avatar-1.jpg',
  },
  {
    id: '6',
    name: 'Jonas Arnklint',
    type: 'Backend Developer',
    img: 'assets/images/users/48/avatar-2.jpg',
  },
];

export { ListJs, paginationlist, dataattribute, existingList, FuzzyList };
