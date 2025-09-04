import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BlogList, { getBlogPosts } from "./components/blog-list"

async function Home() {
    const posts = await getBlogPosts();

  return (
    <main>
      <Analytics />
      <SpeedInsights />
      <div className="main">
        <div className="star-container">
          <div className="star-menu">
            <nav className="star-nav">
             <li><a href="#blog">Writing</a></li>
             <li><a href="#resume">Resume</a></li>
             <li><a href="#contact">Contact</a></li>
             <li><a href="#about">About</a></li>
            </nav>
         </div>
        </div>
        <div className="body">
          <strong><a name="letter">Hi.</a></strong><br/>
          <h2>My name is Theresa Summa.</h2>
            <h3>I am a software engineer.</h3>
          <BlogList posts={posts} />
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
          <hr/>

          <div className="contact">
            <h1><a name="contact">Contact</a></h1>
            <ul>
              <li><a href="mailto:theresasumma@gmail.com">theresasumma@gmail.com</a></li>
              <li>Text only: <a href="tel:13474150944">+1-347-415-0944</a></li>
              <li><a href="https://github.com/theresaanna">Github</a></li>
              <li><a href="https://linkedin.com/in/theresasumma">LinkedIn</a></li>
                <li><a href="https://threads.com/@hellyeahitstheresa">Threads</a></li>
            </ul>
          </div>
          <hr/>

          <div className="about">
            <h1><a name="about">About</a></h1>
            About Theresa and this site:
            <ul>
              <li>This site is built with <a href="https://nextjs.org/">Next.js</a> and hosted with <a href="https://vercel.com/">Vercel</a>.</li>
              <li>On <a href="https://en.wikipedia.org/wiki/MacOS">MacOS</a>, I use <a href="https://www.warp.dev/">Warp</a> for an AI-powered Terminal replacement. Warp was handy when I botched my Git history and when I ran into dependency versioning issues. I am using <a href="https://www.jetbrains.com/">JetBrains IDEs, PyCharm mostly</a>. I also use <a href="https://claude.ai">Claude</a> as a pair programming partner.</li>
              <li>Theresa is a crafter, thinker, cat mom, Lady Gaga superfan, lifelong tinkerer.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;