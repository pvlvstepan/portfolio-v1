import covidTracker from "./img/covidTracker.png";
import movieLister from "./img/movieLister.png";
import dentisGenerator from "./img/dentisGenerator.png";
import bigdata from "./img/bigdata.png";
import report from "./img/report.png";
import codd from "./img/codd.png";
import automl from "./img/automl.png";

import { ParagraphLink } from "../../components/TextElements";

const projectsData = [
  {
    title: "Ecology Report 2020",
    img: report,
    description:
      "Ecology Report is an interactive version of Ecological Report 2020 for Ministry of Natural Resources and Environment of the Russian Federation. Delivered frontend part of the application with complex routing and API integration.",
    techStack: ["React", "Chart.JS", "Leaflet", "React Router", "SCSS"],
    liveView: "https://2020.ecology-gosdoklad.ru/",
  },
  {
    title: "CODD Damage Detector",
    img: codd,
    description:
      "CODD Damage Detector is an SPA built for monitoring and reporting damage of the road infrastructure for the Moscow Government Traffic Management Center. Damage markers are placed on the interactive map with toolkit for data filtering and reporting.",
    techStack: ["React", "Leaflet", "REST", "SCSS", "TypeScript"],
  },
  {
    title: "MSU BigData",
    img: bigdata,
    description:
      "Rebuilt and delivered frontend portion of the website to adapt it to new technological stack with React and Next.js. Applied refreshed styles and utilized TypeScript to update the codebase.",
    techStack: ["React", "Next.JS", "REST", "React Router", "SCSS"],
    liveView: "https://bigdata.msu.ru/",
  },
  {
    title: "Covid-19 Tracker",
    img: covidTracker,
    description:
      "COVID-19 Tracker web application features various data and statistics represented in interactive charts and a choropleth map with search functionality and data filtering options.",
    techStack: ["React", "Chart.JS", "Leaflet", "Covid-19 API", "Axios"],
    liveView: "https://covid19.stepanpavlov.com",
    github: "https://github.com/pvlvstepan/covid-19-tracker",
    simple: true,
  },
  {
    title: "MovieLister",
    img: movieLister,
    description: (
      <>
        MovieLister is a single page application that I've developed during a
        coding interview at{" "}
        <ParagraphLink text="BigData MSU" to="https://bigdata.msu.ru/" />. The
        app features movies that are being pulled from{" "}
        <ParagraphLink text="YTS.mx" to="https://yts.mx/api" /> API and displays
        them in a neatly designed pages on the website.
      </>
    ),
    techStack: ["React", "Axios", "YTS.mx API", "React Router"],
    liveView: "https://movies.stepanpavlov.com",
    github: "https://github.com/pvlvstepan/movie-lister",
    simple: true,
  },
  {
    title: "Instagram \ncontent Generator",
    img: dentisGenerator,
    description:
      "This web application was developed for Dentis LLC to ease Instagram post creation. Previously employees had to insert text into Photoshop templates. This app, on the other hand, allows them to do so in a few clicks. HTML canvas is used to draw images and texts, allowing users to directly download pictures from the website.",
    techStack: ["React", "React Router", "Node", "Canvas"],
    simple: true,
  },
  {
    title: "Auto ML\nDashboard",
    img: automl,
    description:
      "Auto ML is a dashboard created to give no-code machine learning models to end users through a simple and user-friendly interface. The user can use various machine learning approaches to solve classification, regression, and clustering problems.",
    techStack: ["React", "TypeScript", "REST", "MUI"],
    simple: true,
  },
];

export default projectsData;
