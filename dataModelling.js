// Data Modelling of Travel App

// User Collection
// The User collection is referenced by the embedded document in Places collection i.e. reviews.
[
  {
    _id: ObjectID('userid1'),
    email: 'user1@gmail.com',
    password: 'password',
  },
  {
    _id: ObjectID('userid2'),
    email: 'user2@gmail.com',
    password: 'password',
  },
];

// Places
// The Places collection has embedded document to represent the reviews, and the reviews reference the User collection.
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
