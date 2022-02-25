<image src="https://user-images.githubusercontent.com/16717155/155587487-04fc8e8d-c9fc-4865-96f7-7d2159d82f29.png" width="350" align="right" />

# Build and Deploy a Google Maps Travel Companion Application | React.js

2 hour course from JavaScript Mastery https://www.youtube.com/watch?v=UKdQjQX1Pko

> Create a React JS app from scratch using Geolocation, Google Maps API & Google Places API. Fetching API data based location and data filtering are just some features that make this Travel Advisor App the best Maps Application...

## Start, End Date & Final Project

- **Start:** 24th Feb 2022
- **End:** 24th Feb 2022
- **URL:** https://travel-advisor.pages.dev/

## What I liked & disliked

- Before even starting, I already like the look of the site and its ability to pull in from multiple API's and make a visually pleasing site. Just hoping the code/app itself is on par!
- Turns out the travel API being used is depreciated, but thankfully still working! (the weather API was defunct)
- Had to put card details into Google for billing (limited to £1 in a budget)
- Ran into loads of issues with the tutorial and following along. Quite frustrating. The bounds sw/ne for the map coords were not being picked up and got stuck in a loop trying to figure out WTF a useState() setter was not being recognised.
- I know everything is supposed to be all pretty in these notes, but this tutorial and site was very frustrating (although happy to finish and it did work with some refences back to the finished code base AND some removal of the weather )
- BUT! There is one positive from this... I really enjoyed the use of material-ui, I must look into this further
- And because of my terrible spelling, I found the [Spell Right](https://marketplace.visualstudio.com/items?itemName=ban.spellright) extension, which is massively helpful!

## How could I expand upon this project?

- Already thinking before I start why not just go straight to TripAdvisor and get direct access to this API instead? Simple instructions here https://elfsight.com/blog/2020/10/how-to-get-tripadvisor-api-key/
- The weather was a cute idea, but pointless tbh.
-

## Setup Notes:

Requires a google maps key from https://console.cloud.google.com/ to work and a Travel API key from https://rapidapi.com/apidojo/api/travel-advisor/

    REACT_APP_GOOGLE_MAP_API_KEY=
    REACT_APP_RAPID_API_TRAVEL_API_KEY=
