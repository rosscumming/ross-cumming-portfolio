import React from 'react';
import './Tech.scss';
import { Icon } from '@iconify/react';

const Tech = () => {
  return (
    <>
      <section id='tech'>
        <div id='tech-stack' className='tech-cont'>
          <div className='text-cont'>
            <p className='comp-title'>Tech Stack</p>
            <p className='comp-p'>
              As a Front-End enthusiast, I've worked with many different
              technologies. I really enjoy working with TypeScript,
              Styled-Components, and React.
            </p>
            <p className='comp-p'>
              Although I specialise in Front-End development, I also have
              Back-End development experience and am keen to learn new
              languages.
            </p>
          </div>

          <section className='tech-type-cont'>
            <div className='front-end-cont'>
              <p className='tech-head'>Front-End</p>
              <div className='inner-cont'>
                <span className='tech-name'>
                  <Icon
                    icon="logos:javascript"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  JavaScript
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:html-5"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  HTML5
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:css-3"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  CSS3
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:sass"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  SASS/SCSS
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:react"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  React
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:vue"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Vue.js
                </span>
              </div>
            </div>
            <div className='back-end-cont'>
              <p className='tech-head'>Back-End</p>
              <div className='inner-cont'>
                <span className='tech-name'>
                  <Icon
                    icon="logos:ruby"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Ruby
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:sinatra"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Sinatra
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:python"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Python
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:django-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Django
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:flask"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Flask
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:nodejs-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Node.js
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:express"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Express.js
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:deno"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Deno
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:java"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Java
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:spring-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Spring
                </span>
              </div>
            </div>
            <div className='misc-cont'>
              <p className='tech-head'>Miscellaneous</p>
              <div className='inner-cont'>
                <span className='tech-name'>
                  <Icon
                    icon="logos:mongodb-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  mongoDB
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:postgresql"
                    height={25}
                    width={25}
                    className='icons postg'
                  />
                  PostgreSQL
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:git-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Git
                </span>
                <span className='tech-name'>
                  <Icon
                    icon="logos:heroku-icon"
                    height={25}
                    width={25}
                    className='icons'
                  />
                  Heroku
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Tech;
