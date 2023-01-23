# Check it out here!

Deployed build: [nasa-spacestagram.netlify.app](https://nasa-spacestagram.netlify.app)

If you would like to run a local version of the app, simply:

- clone this repo
- run `yarn` to install dependencies
- run `yarn start` to run the app locally, and
- you can see your local app at `http://localhost:3000/`

### The Basics

- App fetches data from NASA's Astronomy Photo of the Day (APOD) API
- Displays post info
  - Displays photo
  - Displays title
  - Displays date
  - Displays description
- Ability to "like" a photo
- Ability to "unlike" a photo

## Extra Features

### Session Saving

- "Liked" photos will persist through reloads until user "unlikes" them (or until browser cache & cookies are cleared)

### Search Support

- Users may choose to view post from a specific day using searchbar and "Search" button
- Users may return to viewing this week's most recent posts using the "Home" button

### Chronological Ordering

- App will calculate and display posts from only the past seven days
- Posts will be ordered to appear in reverse chronological order (similar to instagram)

### Video Support

- The app supports the playback of embedded videos (ex. 2022-12-04)

### Animations

- Like & Share buttons have a clean and subtle hover/focus animation
- Heart icon will interchange between Red and White, to indicate whether the user has "liked" the photo
- Page icon will continue to spin indefinitely

### Loading Indicator

- Loading text will appear while awaiting a response from NASA's API

### Sharable Links

- Share button will copy a sharable link to the user's clipboard

### Error Handling

- In cases where the API responds with bad/missing data, the app will continue to run without crashing
- For cases with missing images/videos, a "no image" text will appear
- For cases with null values returned, defaults exist to handle any error occurrences
- If loading persists for more than 30 seconds (the upper average of load times), a refresh button exists at the bottom of the page

### CI/CD

- App is deployed via Netlify
- New app builds must complete without error in order to be deployed to production
- Jest unit tests written for each query

### Mobile Compatibility

- App will work just as well on mobile as desktop

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
