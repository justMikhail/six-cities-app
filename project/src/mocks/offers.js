const offersMocks = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.1,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Enjoy the elegance of a by-gone era while staying in this Art Deco home.',
    goods: ['Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 60,
    rating: 3.4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'It’s a spacious apartment with five bedrooms with breathtaking views of the mountains from all the windows.',
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge', 'Jacuzzi'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    },
    id: 3,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/apartment-03.jpg',
    price: 250,
    rating: 5.0,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'It’s a quiet, safe neighbourhood and walking distance from stores and restaurants in the town.',
    goods: ['Wi-Fi', 'Washing machine', 'Heating', 'Coffee machine', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: false,
      name: 'Max',
    },
    id: 4,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-01.jpg',
    price: 160,
    rating: 4.6,
    title: 'Wood and stone place',
    type: 'House',
  },
];

export default offersMocks;
