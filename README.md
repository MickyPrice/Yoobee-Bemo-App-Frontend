# bemo

## Project setup
```
npm install
```


### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Environmental Variables
The frontend of this application requires a .env file to store the url for the backend.
This variable will named "VUE_APP_API_URL".
An example of this is:
```
VUE_APP_API_URL=http://localhost:3000
```

You will also need to add a GIPHY API token to the .env to enable GIFs in the chats.
To do this, you'll need to add a variable named "VUE_APP_GIPHY_API_KEY" which will equal your GIPHY API access token