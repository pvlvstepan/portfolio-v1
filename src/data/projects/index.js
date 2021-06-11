import covidTracker from './img/covidTracker.png';

const projectsData = [
    {
        title: 'Covid-19 Tracker',
        img: covidTracker,
        description: 'COVID-19 Tracker web application features various data and statistics represented in interactive charts and a choropleth map with search functionality and data filtering options.',
        techStack: ['React', 'Node', 'Chart.JS', 'Leaflet', 'Chakra UI', 'Covid-19 API'],
        liveView: 'https://covid-corona-tracker.netlify.app/',
        github: 'https://github.com/pvlvstepan/covid-19-tracker'
    },
    {
        title: 'Instagram Post Generator - Dentis LLC',
        img: 'https://place-hold.it/670x377',
        description: 'This web application was developed for Dentis LLC to ease Instagram post creation. Previously employees had to insert text into Photoshop templates. This app, on the other hand, allows them to do so in a few clicks. HTML canvas is used to draw images and texts, allowing users to directly download pictures from the website.',
        techStack: ['React', 'Node', 'Chakra UI', 'Canvas'],
        liveView: 'https://dentis.netlify.app/',
        github: 'https://github.com/pvlvstepan/dentis-img-generator'
    }
];

export default projectsData;