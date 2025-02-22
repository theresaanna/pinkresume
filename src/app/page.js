import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

function Home() {
  return (
    <main>
      <Analytics />
      <SpeedInsights />
      <div className="main">
        <div class="star-container">
          <div class="star-menu">
            <nav className="star-nav">
             <li><a href="#letter">Letter</a></li>
             <li><a href="#resume">Resume</a></li>
             <li><a href="#contact">Contact</a></li>
            </nav>
         </div>
        </div>
        <div className="body">
          <div className="letter">
            <strong><a name="letter">Hi.</a></strong><br/>
            <h2>My name is Theresa.</h2>
            <h1>This is my open cover letter and resume.</h1>
            <p><strong>I am a software engineer and engineering manager.</strong> I’ve been out of work almost seven years due to disability and then, frankly, because my resume gap puts off employers.</p>

            <p>I am back and better than ever, and I just need ONE shot. Just one company. <strong>Let me tell you why you should bet on me.</strong></p>

            <p>I have been mentoring and learning with colleagues for as long as I have had a career; it comes naturally to me. As an engineering leader, I bring all of the following engineering wisdom with me as well as an attitude of service both to my team and to the company. <strong>I was an engineering leader for almost four years in government</strong> and grew out a high-performing new engineering department. Many people I hired and had on my team went onto become recognized technical subject area leaders and other engineering organization leaders.</p>

            <p>I bring a <strong>decade of experience</strong> as a deeply integrated software engineer on teams implementing technological solutions. I have worked in media/journalism and for the federal government on agile teams. I have also had stints at startups.</p>

            <p>What I mean by deeply integrated is that my approach to software development includes an <strong>understanding of business and user needs</strong>, as well as the approaches of design and project management. The more I understand, the better I can tailor solutions to meet needs effectively and efficiently. For example, I am interested, as possible, in being part of design and business processes to better understand the project landscape.</p>

            <p>In addition to being thorough in this way, I am flexible. <strong>I have learned tons of frameworks, libraries, and language features over the years.</strong> Given a bit of time to study, I can tackle anything new, bringing fresh eyes married with the wisdom of best practices. I started out using obscure early <a href="https://www.php.net/">PHP</a> blogging platforms and then moved to <a href="https://wordpress.com/">Wordpress</a>, to <a href="https://new.drupal.org/home">Drupal</a>, had a brief stint in <a href="https://rubyonrails.org/">Ruby on Rails</a>, onto more bespoke solutions using <a href="https://www.python.org/">Python</a> and have landed, most recently, at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>. Within <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a> alone I have learned frameworks all the way from <a href="https://jquery.com/">jQuery</a> to the <a href="https://backbonejs.org/">Backbone.js</a>/<a href="https://underscorejs.org/">Underscore.js</a> days, up through the <a href="https://www.geeksforgeeks.org/introduction-to-es6/">ES6</a>, <a href="https://react.dev/">React</a> and <a href="https://nodejs.org/en">Node</a> ecosystems.</p>

            <p>I am also iterative. I know how to prevent perfect from being the enemy of good. Software is never perfect out of the gate. It’s important to do maintenance and improvements as you go. I don’t need to use the hot, new tools. I will work with whatever technologies make sense for the project. I am not an opinionated engineer in this regard. I have made mistakes in being too quick and too slow in my approaches over the years, and <strong>now you can benefit from my relative experience</strong> in finding the right cadence.</p>

            <p><strong>I am thoughtful.</strong> I don’t make rash decisions. I know that the best work comes from consulting with other great minds and adhering to best practices refined by many. Sometimes the work is in piecing together parts and applying glue.</p>

            <p>I am strategic in how I apply my efforts. The work of any sort of engineer is problem solving at the core. I am a <strong>professional solution seeker</strong> and, as needed, clarifying questioner. I am good with constraints and getting creative to make things work, pulling from a decade of experience in doing so. At one media company, I was asked to be the engineering team representative on a team to rethink the company’s product because of my ideas and engagement with the product beyond code.</p>

            <p><strong>Thanks for reading.</strong> Please let me know if you know of any roles that I could bring value to.</p>
          </div>

          <hr/>

          <div className="resume">
            <h1><a name="resume">My Experience</a></h1>
            <div className="job">
              <strong><a href="https://www.linkedin.com/company/gsa18f/">18F/Technology Transformation Services, General Services Administration</a></strong><br/>
              <strong>Lead Innovation Specialist - Washington, DC</strong>
              <p>I spent four years here, and was asked to move from an individual contributor role to a leadership role within three months of my working there.</p>
              <ul>
                <li>Managed a team of 3-6 high performing engineers, some of whom were tech leads in their focus areas (front end, devops, etc), and a handful of whom were promoted off my team, becoming leaders alongside me.</li>
                <li>Built an engineering department from a little over a dozen to sixty engineers, focusing on engineer productivity and career development, exponentially increasing the number of paid projects the agency could accept.</li>
                <li>Co-authored <a href="https://github.com/18F/code-of-conduct">Code of Conduct</a> for events as part of internal Diversity and Inclusion Guild, which became the foundation for the organizational Code of Conduct.</li>
              </ul>

              <p>My leadership position also had a percentage of time I spent as an individual contributor still,
  completing the following:</p>
              <ul>
                <li>Extended software I first built in an earlier position, used to parse and view federal regulation for the Alcohol, Tobacco and Firearms Bureau, increasing regulatory compliance and ease of use for ATF staff using <a href="https://react.dev/">React</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://backbonejs.org/">Backbone.js</a>, <a href="https://www.python.org/">Python</a> and <a href="https://www.djangoproject.com/">Django</a>, <a href="https://sass-lang.com/">Sass</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>.</li>
                <li>Worked closely with designers and server side engineers to develop a website for an initiative that First Lady Michelle Obama created, resulting in interest being generated in the program and sign ups to the campaign, using Jekyll, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://sass-lang.com/">Sass</a>.</li>
                <li>Led continued development of an internal tool for federal procurement officers to receive fairer prices on government contracts by comparing past prices on similar contracts, which saved compliance officers time and money on new contracts, using <a href="https://www.python.org/">Python</a> and <a href="https://www.djangoproject.com/">Django</a>.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://en.wikipedia.org/wiki/Consumer_Financial_Protection_Bureau">Consumer Financial Protection Bureau</a></strong><br/>
              <strong>Technology and Innovation Fellow - Washington, DC</strong>
              <p>I was given a two year fellowship position to get the new federal agency built out of the 2008
  housing crisis off the ground technologically.</p>
              <ul>
                <li>I led front end development for innovative and modern software that dynamically parses and displays federal regulations, revolutionizing the space for federal employees and private industry alike using <a href="https://www.python.org/">Python</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://www.djangoproject.com/">Django</a>, <a href="https://backbonejs.org/">Backbone.js</a>, <a href="https://underscorejs.org/">Underscore.js</a>, <a href="https://www.travis-ci.com/">Travis CI</a>, <a href="https://saucelabs.com/">Sauce Labs</a>, <a href="https://www.selenium.dev/">Selenium</a>, <a href="https://mochajs.org/">Mocha</a>, <a href="https://gruntjs.com/">Grunt</a>, shell scripting, linting tools, <a href="https://babeljs.io/">Babel</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, <a href="https://sass-lang.com/">Sass</a>.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://qz.com/">Quartz, An Atlantic Media Company</a></strong><br/>
              <strong>Web Application Engineer - New York, NY</strong>
              <ul>
                <li>I led front end engineering for the initial deployment of an innovative news website, using <a href="https://backbonejs.org/">Backbone.js</a>, <a href="https://underscorejs.org/">Underscore.js</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://www.php.net/">PHP</a>, <a href="https://wordpress.com/">Wordpress</a>, <a href="https://jquery.com/">jQuery</a>.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://www.consumersearch.com/">ConsumerSearch, A New York Times Company</a></strong><br/>
              <strong>Senior Web Developer - New York, NY</strong>
              <ul>
                <li>Maintained and built new features for a consumer product comparison website owned by The New York Times Company, using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, <a href="https://new.drupal.org/home">Drupal</a>, <a href="https://www.php.net/">PHP</a>, <a href="https://jquery.com/">jQuery</a>.</li>
                <li>Halved load times by minimizing HTTP requests and optimizing server side code for <a href="https://new.drupal.org/home">Drupal</a> views/templates.</li>
                <li>Co-led usability testing and user feedback collection, alongside the design director.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://www.economist.com/">The Economist</a></strong><br/>
              <strong>Senior Web Developer - New York, NY</strong>
              <ul>
                <li>Ported complex news site from Coldfusion to <a href="https://new.drupal.org/home">Drupal</a>.</li>
                <li>Mentored Coldfusion engineers learning <a href="https://new.drupal.org/home">Drupal</a> and <a href="https://www.php.net/">PHP</a>.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://www.sonymusic.com/">Sony Music</a></strong><br/>
              <strong>Drupal Themer - New York, NY</strong>
              <ul>
                <li>Ported musician websites from <a href="https://new.drupal.org/home">Drupal</a> 5 to <a href="https://new.drupal.org/home">Drupal</a> 6, including artists like Ben Folds and Kesha.</li>
              </ul>
            </div>

            <div className="job">
              <strong><a href="https://observer.com/">The New York Observer</a></strong><br/>
              <strong>Client Side Developer - New York, NY</strong>
              <ul>
               <li>Built the front end of two versions of a high traffic media website using <a href="https://new.drupal.org/home">Drupal</a>, <a href="https://www.php.net/">PHP</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</a>.</li>
              </ul>
            </div>
          </div>

          <div className="contact">
            <h1><a name="contact">Contact Info</a></h1>
            <ul>
              <li><a href="mailto:theresasumma@gmail.com">theresasumma@gmail.com</a></li>
              <li>Text only: <a href="tel:13474150944">+1-347-415-0944</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
