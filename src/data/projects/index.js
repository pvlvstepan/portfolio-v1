import covidTracker from './img/covidTracker.png';
import movieLister from './img/movieLister.png';
import dentisGenerator from './img/dentisGenerator.png';

const projectsData = [
    {
        title: 'Covid-19 Tracker',
        img: covidTracker,
        description: 'COVID-19 Tracker web application features various data and statistics represented in interactive charts and a choropleth map with search functionality and data filtering options.',
        techStack: ['React', 'Node', 'Chart.JS', 'Leaflet', 'Chakra UI', 'Covid-19 API', 'Axios'],
        liveView: 'https://covid-corona-tracker.netlify.app/',
        github: 'https://github.com/pvlvstepan/covid-19-tracker'
    },
    {
        title: 'MovieLister',
        img: movieLister,
        description: "MovieLister is a single page application that I've developed during a coding interview at Bigdata MSU. The app features movies that are being pulled from YTS.mx API and displays them in a neatly designed pages on the website.",
        techStack: ['React', 'Axios', 'Node', 'Chakra UI', 'React Router'],
        liveView: 'https://react-movie-lister.netlify.app/',
        github: 'https://github.com/pvlvstepan/movie-lister'
    },
    {
        title: 'Instagram Post Generator - Dentis LLC',
        img: dentisGenerator,
        description: 'This web application was developed for Dentis LLC to ease Instagram post creation. Previously employees had to insert text into Photoshop templates. This app, on the other hand, allows them to do so in a few clicks. HTML canvas is used to draw images and texts, allowing users to directly download pictures from the website.',
        techStack: ['React', 'Node', 'Chakra UI', 'Canvas'],
        liveView: 'https://dentis.netlify.app/',
        github: 'https://github.com/pvlvstepan/dentis-img-generator'
    }
];

export default projectsData;