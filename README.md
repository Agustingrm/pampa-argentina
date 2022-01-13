This is a next.js project, run with npm run dev or yarn dev

## Pampa Argentina

Pampa Argentina is the culmination of several months of study of different sources.

This Next application has the following features:
- The backend is done through Keystone and using Mongodb as database
- Graphql was used as the data query language, with Apollo as provider
- The styling of the pages was done by styled components
- The app can move between pages
- Users with admin access can create new products, with many images, adding a description, price and title
- Normal users can sign up, sign in and ask for a password reset that gets delivered to the user email.
- The app admits diferents users, each one with differents roles, for example, Admin that has access to everything related to CRUD, or just the normal costumer that can only buy the products.
- The app has a payment option via Stripe
- After the purchase, the order is saved with the items characteristics at the moment of the purchase
- The app has an included search bar made via dropdown, that allows to search between all the items
- Lastly the app has some test in Jest adn react-testing-library to test the current pages in case of changes.
