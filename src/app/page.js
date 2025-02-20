import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Home() {
  return (
    <main className="grid">
      <div className="main">
        <div className="letter">
          <strong>
            Hi.<br/>
            My name is Theresa.<br/>
          </strong>
          <p>I spent ten years as a software engineer and engineering manager. I’ve been out of work almost seven years due to disability and then my resume gap putting off employers.</p>

          <p>I am back and better than ever, and I just need ONE shot. Just one company. Let me tell you why you should bet on me.</p>

          <p>I have been mentoring and learning with colleagues for as long as I have had a career; it comes naturally to me. As an engineering leader, I bring all of the following engineering wisdom with me as well as an attitude of service both to my team and to the company. I was an engineering leader for almost four years in government and grew out a high-performing new engineering department. Many people I hired and had on my team went onto become recognized technical subject area leaders and other engineering organization leaders.</p>

          <p>I bring a decade of experience as a deeply integrated software engineer on teams implementing technological solutions. I have worked in media/journalism and for the federal government on agile teams. I have also had stints at startups.</p>

          <p>What I mean by deeply integrated is that my approach to software development includes an understanding of business and user needs, as well as the approaches of design and project management. The more I understand, the better I can tailor solutions to meet needs effectively and efficiently. For example, I am interested, as possible, in being part of design and business processes to better understand the project landscape.</p>

          <p>In addition to being thorough in this way, I am flexible. I have learned tons of frameworks, libraries, and language features over the years. Given a bit of time to study, I can tackle anything new, bringing fresh eyes married with the wisdom of best practices. I started out using obscure early PHP blogging platforms and then moved to Wordpress, to Drupal, had a brief stint in Ruby on Rails, onto more bespoke solutions using Python and have landed, most recently, at JavaScript. Within JavaScript alone I have learned frameworks all the way from jQuery to the Backbone.js/Underscore.js days, up through the ES6, React and Node ecosystems.</p>

          <p>I am also iterative. I know how to prevent perfect from being the enemy of good. Software is never perfect out of the gate. It’s important to do maintenance and improvements as you go. I don’t need to use the hot, new tools. I will work with whatever technologies make sense for the project. I am not an opinionated engineer in this regard. I have made mistakes in being too quick and too slow in my approaches over the years, and now you can benefit from my relative experience in finding the right cadence.</p>

          <p>I am thoughtful. I don’t make rash decisions. I know that the best work comes from consulting with other great minds and adhering to best practices refined by many. Sometimes the work is in piecing together parts and applying glue.</p>

          <p>I am strategic in how I apply my efforts. The work of any sort of engineer is problem solving at the core. I am a professional solution seeker and, as needed, clarifying questioner. I am good with constraints and getting creative to make things work, pulling from a decade of experience in doing so. At one media company, I was asked to be the engineering team representative on a team to rethink the company’s product because of my ideas and engagement with the product beyond code.</p>

          <p>Thanks for reading. Please let me know if you know of any roles that I could bring value to.</p>
        </div>

        <div className="resume">
          <div className="job">
            <strong>18F/Technology Transformation Services, General Services Administration</strong><br/>
            <strong>Lead Innovation Specialist - Washington, DC</strong>
            <p>I spent four years here, and was asked to move from an individual contributor role to a leadership role within three months of my working there.</p>
            <ul>
              <li>Managed a team of 3-6 high performing engineers, some of whom were tech leads in their focus areas (front end, devops, etc), and a handful of whom were promoted off my team, becoming leaders alongside me.</li>
              <li>Built an engineering department from a little over a dozen to sixty engineers, focusing on engineer productivity and career development, exponentially increasing the number of paid projects the agency could accept.</li>
              <li>Co-authored Code of Conduct for events as part of internal Diversity and Inclusion Guild, which became the foundation for the organizational Code of Conduct.</li>
            </ul>

            <p>My leadership position also had a percentage of time I spent as an individual contributor still,
completing the following:</p>
            <ul>
              <li>Extended software I first built in an earlier position, used to parse and view federal regulation for the Alcohol, Tobacco and Firearms Bureau, increasing regulatory compliance and ease of use for ATF staff using React, JavaScript, Backbone.js, Python and Django, Sass, HTML.</li>
              <li>Worked closely with designers and server side engineers to develop a website for an initiative that First Lady Michelle Obama created, resulting in interest being generated in the program and sign ups to the campaign, using Jekyll, JavaScript, Sass.</li>
              <li>Led continued development of an internal tool for federal procurement officers to receive fairer prices on government contracts by comparing past prices on similar contracts, which saved compliance officers time and money on new contracts, using Python and Django.</li>
            </ul>
          </div>

          <div className="job">
            <strong>Consumer Financial Protection Bureau</strong><br/>
            <strong>Technology and Innovation Fellow - Washington, DC</strong>
            <p>I was given a two year fellowship position to get the new federal agency built out of the 2008
housing crisis off the ground technologically.</p>
            <ul>
              <li>I led front end development for innovative and modern software that dynamically parses and displays federal regulations, revolutionizing the space for federal employees and private industry alike using Python, JavaScript, Django, Backbone.js, Underscore.js, Travis CI, Sauce Labs, Selenium, Mocha, Grunt, shell scripting, ESLint, Babel, HTML, Sass.</li>
            </ul>
          </div>

          <div className="job">
            <strong>Quartz, An Atlantic Media Company</strong><br/>
            <strong>Web Application Engineer - New York, NY</strong>
            <ul>
              <li>I led front end engineering for the initial deployment of an innovative news website, using Backbone.js, Underscore.js, JavaScript, PHP, Wordpress, jQuery.</li>
            </ul>
          </div>

          <div className="job">
            <strong>ConsumerSearch, A New York Times Company</strong><br/>
            <strong>Senior Web Developer - New York, NY</strong>
            <ul>
              <li>Maintained and built new features for a consumer product comparison website owned by The New York Times Company, using JavaScript, CSS, HTML, Drupal, PHP, jQuery.</li>
              <li>Halved load times by minimizing HTTP requests and optimizing server side code for Drupal views/templates.</li>
              <li>Co-led usability testing and user feedback collection, alongside the design director.</li>
            </ul>
          </div>

          <div className="job">
            <strong>The Economist</strong><br/>
            <strong>Senior Web Developer - New York, NY</strong>
            <ul>
              <li>Ported complex news site from Coldfusion to Drupal.</li>
              <li>Mentored Coldfusion engineers learning Drupal and PHP.</li>
            </ul>
          </div>

          <div className="job">
            <strong>Sony Music</strong><br/>
            <strong>Drupal Themer - New York, NY</strong>
            <ul>
              <li>Ported musician websites from Drupal 5 to Drupal 6, including artists like Ben Folds and Kesha.</li>
            </ul>
          </div>

          <div className="job">
            <strong>The New York Observer</strong>
            <strong>Client Side Developer - New York, NY</strong>
            <ul>
             <li>Built the front end of two versions of a high traffic media website using Drupal, PHP, HTML, CSS, SVN.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
