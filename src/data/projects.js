import gymland from '../images/gymland.png';
import pubquizbuddy from '../images/pubquizbuddy.png';
import jobswipe from '../images/jobswipe.png';
import webScraper from '../images/web_scraper.png';
import vitahealth from '../images/vitahealth.png';
import goldenshoe from '../images/goldenshoe.png';

export const projects = [
  {
    id: 'gymland',
    title: 'Gymland',
    image: gymland,
    alt: 'gymland solo project',
    description:
      "Gymland was my first solo project at Codeclan built in six days. It's structured using MVC pattern and OOP principles. I really enjoyed working on this!",
    techStack: [
      { icons: ['logos:ruby', 'logos:sinatra'], label: 'Ruby/Sinatra' },
      { icons: ['logos:postgresql'], label: 'PostgreSQL' },
    ],
    github: 'https://github.com/rosscumming/solo_ruby_project_gym',
  },
  {
    id: 'pubquizbuddy',
    title: 'Pub Quiz Buddy',
    image: pubquizbuddy,
    alt: 'pub quiz buddy group project',
    description:
      'Pub Quiz Buddy was my second project at Codeclan and my first group project. As a group of four, we created this app utilising external APIs such as Google Maps/Places. This was built in six days.',
    techStack: [
      { icons: ['logos:javascript', 'logos:vue'], label: 'JavaScript/Vue.js' },
      { icons: ['logos:express'], label: 'Express.js' },
      { icons: ['logos:mongodb-icon'], label: 'mongoDB' },
    ],
    github: 'https://github.com/rosscumming/pub-quiz-buddy',
  },
  {
    id: 'jobswipe',
    title: 'JobSwipe',
    image: jobswipe,
    alt: 'JobSwipe group project',
    description:
      'JobSwipe was my final group project at Codeclan. Our group consisted of five and together we built a tool to help search for IT related jobs. It utilises the reed.co.uk API to pull jobs and was built in six days.',
    techStack: [
      { icons: ['logos:javascript', 'logos:react'], label: 'JavaScript/React' },
      { icons: ['logos:express'], label: 'Express.js' },
      { icons: ['logos:java', 'logos:spring-icon'], label: 'Java/Spring' },
    ],
    github: 'https://github.com/rosscumming/Java-Final-Project-Job-Search-App',
  },
  {
    id: 'webscraper',
    title: 'National Lottery Web Scraper',
    image: webScraper,
    alt: 'Web scraper solo project',
    description:
      'A node web scraper I made to learn Puppeteer. Currently web scrapes the National Lottery website for latest draw details and returns this as well as the jackpot total for the next draw.',
    techStack: [
      { icons: ['logos:javascript'], label: 'JavaScript' },
      { icons: ['logos:puppeteer'], label: 'Puppeteer' },
    ],
    github: 'https://github.com/rosscumming/web_scraper_lottery',
  },
  {
    id: 'vitahealth',
    title: 'VitaHealth iOS App',
    image: vitahealth,
    alt: 'VitaHealth iOS App',
    description:
      'An app mock-up I designed to learn and understand Native App Development for iOS using SwiftUI. Still a work in progress with an end goal to publish to the App store.',
    techStack: [{ icons: ['logos:swift'], label: 'SwiftUI' }],
    github: 'https://github.com/rosscumming/SwiftUI_App_VitaHealth',
  },
  {
    id: 'goldenshoe',
    title: 'E-commerce Website',
    image: goldenshoe,
    alt: 'E-commerce Website',
    description:
      'An on-going e-commerce website I created with functional front-end and back-end code. Created to practise React and handling data.',
    techStack: [
      { icons: ['logos:javascript', 'logos:react'], label: 'JavaScript/React' },
      { icons: ['logos:express'], label: 'Express.js' },
      { icons: ['logos:mongodb-icon'], label: 'mongoDB' },
    ],
    github: 'https://github.com/rosscumming/golden_shoe_demo',
  },
];
