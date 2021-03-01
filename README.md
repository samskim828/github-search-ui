
## GitHub Search UI Assignment

To start the app:

You will first need to create your own personal access token to access the GitHub GraphQL API.
Then you will have to create a `.env` file with the following variables:
- `REACT_APP_GITHUB_API_TOKEN`
- `REACT_APP_GITHUB_API_URL`

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`
Runs a couple of basic tests.
 
### If I spent more time:
- Add more information to the cards such as language and time
- Would have set home page to be current trending repos instead of just a search bar
- Would have implemented pagination for results. Currently set to only retrieve the Top 15 results. This was also done to not hit the GitHub GraphQL API Rate Limit