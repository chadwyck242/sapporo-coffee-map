# Udacity FEND Neighborhood Map (React) Project P7

The second of the React projects, but seventh and final project overall, of the Front End Developer NanoDegree from Udacity. Completed as part of the Grow with Google Scholarship program of which I am a student.

## Getting Started

This project is simple to run on your local machine, as all that is needed is NodeJS and the cloned project repository. Unlike the projects before in which Udacity provided us with starter code, we had to start entirely from scratch. And for that I used the Create React App build tool, and loaded a lot of npm packages and other tools. These will be listed below.

**To use the app, there are the following features:**

* You are able to view a Google Map with a selection of pre-loaded coffee / cafe venues already displayed as markers on the map.
* There will be Google Maps API based InfoWindow infomation about each venue, and the venue data itself is provided by the FourSquare API.
* You can filter these locations, and see the remaining markers on the map animate or bounce, and find the venue you are interested in. Also clicking a marker should indicate that location on the sidebar list as well.
* The application is designed to be responsive, accessible and has error handling and graceful degradation features built in.

### Prerequisites

* NodeJS
* npm
* Create-React-App if you want to try building from scratch.
* Your own Google Maps and FourSquare API keys. Mine will most likely be removed or restricted upon final review.

### Installing

Just follow these steps:

1. Install NodeJS [here](https://nodejs.org/en/download/)
2. Clone the project repository at `https://github.com/chadwyck242/fend-neighborhood-map`
3. Navigate to the project root folder in your terminal and run `npm install` to ensure all dependencies are met.
4. Run `npm start` and the project will start in your browser.

## Deployment

TODO: Plan on making this a GitHub Projects page once finishing the FEND NanoDegree and reworking the project at a later time when my React skills have grown.

## Built With

* [Google Maps Platform API](https://cloud.google.com/maps-platform/) - This is a Google Maps Platform API based application
* [FourSquare Places API](https://developer.foursquare.com/places-api) - The venue data provided in this app it provided by the FourSquare Places API
* [Semantic UI React](https://react.semantic-ui.com/) - The user interface and the responsive aspects of the application are built using Semantic UI React
* [Create React App](https://github.com/facebookincubator/create-react-app) - The React build tool used to start the project
* [React](https://reactjs.org/) - This is a React project
* [NodeJS](https://nodejs.org/en/) - NodeJS is used to serve this project

## Authors

* **Chad Sisk** - *Initial work* - [chadwyck242](https://github.com/chadwyck242)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Yahya Elharony [walkthrough](https://www.youtube.com/watch?v=ywdxLNjhBYw&index=1&list=PLBDR9JgF-I5Qz6A2TjO2bslaltdxwWy8i)
* Cuneyt Aliustaoglu [Using Google Maps in React Without Custom Libraries] (http://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/)
* Ryan Waite [walkthrough](https://www.youtube.com/watch?v=LvQe7xrUh7I&t=3837s&index=6&list=PLKC17wty6rS1XVZbRlWjYU0WVsIoJyO3s)
* React Documentation [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)

### Quick Reflection
This is the final project for the Grow with Google Scholarship - Front End Developer NanoDegree. Of all the topics so far, this is simply one of the more challenging to suddenly start with as React is much different than what we have been doing up until this point. As to why the starting projects of the React NanoDegree would comprise the ending of the FEND program is a bit confusing to me, as I am sure there is plenty that could have been covered in a pure Front End education using only HTML/CSS/JS. So much of this version of the FEND was out of date anyways, so it feels like React was just used as filler material to make up for that. But after trying to work through this second project with React, I still plan on coming back once I finish the NanoDegree requirements and properly explore and build React projects without the pressures of a deadline approaching.

One important thing I have learned between these two React projects is the idea of pre-planning and visually laying out and diagramming the application before starting. The React Component system makes this easy, and allows one to separate each part of an application into their own respective components, and then plan the interaction among all these parts. As with the MyReads React project, little has changed in my thinking in terms of what to learn following FEND, and the concepts that React teach are integral to the future of Web Development, even though it need not be only React that demonstrates the future direction of Front End Web Development.
