// Data Modelling of Travel App

// User Collection
// The user collection references the places collection.
[
  {
    _id: ObjectID('userid1'),
    email: 'user1@gmail.com',
    password: 'password',
    places: [
      {
        placeId: ObjectId('placeid1'),
      },
      {
        placeId: ObjectId('placeid2'),
      },
    ],
  },
  {
    _id: ObjectID('userid2'),
    email: 'user2@gmail.com',
    password: 'password',
    places: [
      {
        placeId: ObjectId('placeid1'),
      },
      {
        placeId: ObjectId('placeid2'),
      },
    ],
  },
];

// Places
// The places collection has embedded document to represent the reviews.
[
  {
    _id: ObjectID('placeid'),
    name: 'Lumbini',
    reviews: [
      {
        reviewId: ObjectID('userid1'),
        rating: 5,
        comment: 'It was a great experience',
        images: [urls],
        cost: 1500,
        heritages: [],
        placesToVisit: [],
        safety: 'Low',
      },
      {
        reviewId: ObjectID('userid2'),
        rating: 4,
        comment: 'It was a good experience',
        images: [urls],
        cost: 1500,
        heritages: [],
        placesToVisit: [],
        safety: 'Medium',
      },
    ],
  },
  {
    _id: ObjectID('placeid'),
    name: 'Pokhara',
    reviews: [
      {
        reviewId: ObjectID('userid1'),
        rating: 3,
        comment: 'It was a poor experience',
        images: [urls],
        cost: 1500,
        heritages: [],
        placesToVisit: [],
        safety: 'High',
      },
      {
        reviewId: ObjectID('userid2'),
        rating: 5,
        comment: 'It was a an excellent experience',
        images: [urls],
        cost: 1500,
        heritages: [],
        placesToVisit: [],
        safety: 'Medium',
      },
    ],
  },
];
