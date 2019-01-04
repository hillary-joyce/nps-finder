# NATIONAL PARK FINDER

Check out the project [here](http://national-park-finder.surge.sh/)

## Motivation
I love the US National Park Service, and spend any nice weekend I can visting them to hike with my dog. But I felt like thier national park finding feature was a little outdated - the search was a little cumbersome and the interface, while easy to use, was very basic. I thought a fresh, modern look could help inspire people to visit the parks.

Because of the shutdown, I was worried about the NPS API going down, so I saved their data in a JS file locally.

## How it Works
When you visit the [National Park Finder](http://national-park-finder.surge.sh/) on the homepage you will see a search bar that allows you to search by the park name or State.

As soon as you start typing, the page responds to your query by displaying cards with park information (name, park designation, and a photo)

Simply click on one of the cards to be taken to a details page showing a park description, map of the location, and a link to the NPS website for that park.

## Tools Used
[Create React App](https://github.com/facebook/create-react-app)
[react-router](https://reacttraining.com/react-router/)
[Figma](https://www.figma.com/)
[National Park API](https://www.nps.gov/subjects/digital/nps-data-api.htm)
[Mapbox gl](https://www.mapbox.com/mapbox-gl-js/api/)

## Next Steps
For now, the data is limited to National Parks & Preserves. I'd like to expand the data to include Monuments, Recreation Areas, and other smaller parks for a more complete experience.

While the state is minimal, I'd like to manage it using Redux to get some practice with the library.

And since I'm learning Jest & Enzyme, I'd like the future additions to be built using TDD instead of BDD.





