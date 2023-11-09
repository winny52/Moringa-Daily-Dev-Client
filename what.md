# Redux User Auth

The first obvious thing I have to do is setup redux in the first place. The next I have to do is to create the store which stores all
the relevent state for my application that I will be able to acess and use elsewhere in the app.

Than create the reducers which take the state and transform it in some way. The actions define those transformations and can
carry data alongside them.

Steps:

- Create a store.
- Create userslice

  - Inside userslice create a name and to an isAuthenticated variable
  - Than create a reducer for logging in which takes in a username and password,
    than checks to see if the person is logged in by fetching with the api
  - create another reducer that logs the person out when they click logout.
    - all this does is takes the user and sets the value of isAuthenticated to false

- when they login to change the routes

---

Dashboard

Admin: - everything

Writer: - catagories of intrest - add category - wishlist

User: - profile - sidebar - catagories - Wishlist
