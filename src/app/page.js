import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import dividerheart from './dividerheart.png';
import keepgoingdivider from './keepgoingdivider.png';
import dividersimple from './dividersimple.png';
import thankyoudivider from './thankyoudivider.png';
import dividerheartlight from './dividerheartlight.png';
import bordertopbottom from './bordertopbottom.png';
import linkbg from './linkbg.png';
import linkbgheart from './linkbgheart.png';
import bgheart from './bgheart.png';

function Home() {
  return (
    <main className="grid m-50 pl-50">
      <div className="grid main shadow-md mx-5 my-2 smartphone:mt-20 smartphone:mb-10 smartphone:mx-20 smartphone:gap-y-5">
        <header className="grid grid-row row-span-full smartphone:m-20 vsmall:m-5 grid-cols-4 p-10 smartphone:p-0">
          <div className="col-span-4">
            <h1 className="name font-bold text-3xl smartphone:text-4xl col-span-3 smartphone:inline pink mr-3">Theresa Summa</h1>
            <h2 className="location col-span-1 smartphone:inline text-xl smartphone:text-2xl light-gray">Software Engineering Leader in the SF Bay Area</h2>
          </div>
          <nav className="contact col-span-4 list-none text-sm smartphone:text-2xl mt-2">
            <li className="telephone smartphone:inline mb-2 smartphone:mb-0">
              <Link href="tel:3474150944" className="rounded p-1 mr-2"><FontAwesomeIcon icon={faPhoneVolume} className="mr-2" />347-415-0944</Link>
            </li>
            <li className="email smartphone:inline mb-2 smartphone:mb-0"><Link href="mailto:theresasumma@gmail.com" className="rounded p-1 mr-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />theresasumma@gmail.com</Link></li>
            <li className="linkedIn smartphone:inline mb-2 smartphone:mb-0"><Link href="http://linkedin.com/in/theresasumma" className="rounded p-1 mr-2"><FontAwesomeIcon icon={faLinkedin} className="mr-2" />LinkedIn</Link></li>
            <li className="github smartphone:inline mb-2 smartphone:mb-0"><Link href="http://github.com/theresaanna" className="rounded p-1 mr-2"><FontAwesomeIcon icon={faGithub} className="mr-2" />Github</Link></li>
          </nav>
        </header>
      </div>
      <div className="grid smartphone:gap-y-2 smartphone:mx-20 place-items-center no-print">
        <div className="grid-row">
          <Image className="smartphone:col-span-1 inline collapse smartphone:visible" src={dividerheart} width="200"/>
          <Image className="smartphone:col-span-2 col-span-4 smartphone:inline" src={dividerheart} width="300"/>
          <Image className="smartphone:col-span-1 inline collapse smartphone:visible" src={dividerheart} width="200"/>
        </div>
      </div>
      <div className="grid main shadow-md mx-5 my-2 smartphone:mt-6 smartphone:mb-10 smartphone:mx-20 smartphone:gap-y-10 grid-flow-cols">
        <div className="grid-row row-span-full m-10 smartphone:m-20 vsmall:m-5 grid-rows-3">
          <ul className="panel skills list-disc grid grid-rows-auto grid-cols-3 list-inside text-sm gap-4 smartphone:text-lg">
            <lh className="panel-header text-2xl pink smartphone:text-3xl mb-5 pl-10 border-dashed border-b col-span-full heart-bg little-heart-bg">Some of my skills</lh>
            <li><Link href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript</Link></li>
            <li><Link href="https://react.dev/">React</Link></li>
            <li><Link href="https://sass-lang.com/">Sass</Link></li>
            <li><Link href="https://lesscss.org/">Less</Link></li>
            <li><Link href="https://backbonejs.org/">Backbone.js</Link></li>
            <li><Link href="https://mochajs.org/">Mocha</Link></li>
            <li>shell scripting</li>
            <li>JS linting tools</li>
            <li><Link href="https://babeljs.io/">Babel</Link></li>
            <li><Link href="https://webpack.js.org/">Webpack</Link></li>
            <li><Link href="https://jestjs.io/">Jest</Link></li>
            <li><Link href="https://jasmine.github.io/">Jasmine</Link></li>
            <li><Link href="https://www.python.org/">Python</Link></li>
            <li><Link href="https://www.djangoproject.com/">Django</Link></li>
            <li><Link href="https://jekyllrb.com/">Jekyll</Link></li>
            <li><Link href="https://saucelabs.com/">Sauce Labs</Link></li>
            <li><Link href="https://www.selenium.dev/">Selenium</Link></li>
            <li><Link href="https://www.npmjs.com/">npm</Link></li>
            <li><Link href="https://github.com/">Git and Github</Link></li>
            <li><Link href="https://en.wikipedia.org/wiki/SQL">SQL</Link></li>
            <li><Link href="https://www.linux.org/">Linux systems administration</Link></li>
            <li>Agile methodologies</li>
            <li><Link href="https://www.gatsbyjs.com/">Gatsby</Link></li>
            <li><Link href="https://graphql.org/">GraphQL</Link></li>
            <li><Link href="https://www.heroku.com/">Heroku</Link></li>
            <li><Link href="https://flask.palletsprojects.com/en/3.0.x/">Flask</Link></li>
            <li><Link href="https://nodejs.org/en">NodeJS</Link></li>
            <li><Link href="https://www.mongodb.com/">MongoDB</Link></li>
            <li><Link href="https://mongoosejs.com/">Mongoose</Link></li>
            <li><Link href="https://jade-lang.com/">Jade</Link></li>
            <li>light graphic design work</li>
            <li><Link href="https://www.pon.harvard.edu/daily/leadership-skills-daily/servant-leadership-theory/">servant leadership</Link></li>
          </ul>
        </div>
      </div>
      <div className="grid smartphone:gap-y-2 mt-5 smartphone:mt-0 smartphone:mx-20 place-items-center no-print">
        <div className="grid-row">
          <Image className="smartphone:col-span-1 inline divider-hack collapse smartphone:visible" src={dividersimple} width="200"/>
          <Image className="smartphone:col-span-2 mx-5 smartphone:inline divider-hack" src={dividersimple} width="300"/>
          <Image className="smartphone:col-span-1 inline divider-hack collapse smartphone:visible" src={dividersimple} width="200"/>
        </div>
      </div>
      <div className="grid main shadow-md mx-5 my-2 smartphone:mt-6 smartphone:mb-10 smartphone:mx-20 smartphone:gap-y-10 grid-flow-cols">
        <div className="grid-row row-span-full m-10 smartphone:m-20 vsmall:m-5 grid-rows-3">
          <h3 className="panel-header text-2xl pink smartphone:text-3xl mb-5 border-dashed border-b heart-bg little-heart-bg heart-bg-right">First, A Quick Note</h3>
          <p className="text-lg my-3">I began my professional life much earlier than many, working full time in a pizzeria by 15 years old. <strong>Twenty years later</strong>, my brain and body told me it was time for a break.</p>
          <p className="text-lg my-3">I experienced some health issues, but <strong>never stopped being an engineer</strong>. In fact, I have become a stronger engineer for the time off. I have continued to <strong>read the industry newsletters and blogs</strong>, I have been <strong>writing code</strong>, including for a <strong>computer science course</strong> I completed. I have <strong>become wiser, more confident</strong> and patient.</p>
          <p className="text-lg my-3">I am a <strong>stronger leader</strong>, a <strong>sharper problem solver</strong> and reinvigorated to <strong>bring value to your project or team</strong>.</p>
        </div>
      </div>
      <div className="grid smartphone:gap-y-2 mt-5 smartphone:mt-0 smartphone:mx-20 place-items-center no-print">
        <div className="grid-row">
          <Image className="smartphone:col-span-1 inline divider-hack collapse smartphone:visible" src={dividersimple} width="200"/>
          <Image className="smartphone:col-span-2 mx-5 smartphone:inline divider-hack" src={dividersimple} width="300"/>
          <Image className="smartphone:col-span-1 inline divider-hack collapse smartphone:visible" src={dividersimple} width="200"/>
        </div>
      </div>
      <div className="grid main shadow-md mx-5 my-2 smartphone:mt-6 smartphone:mb-10 smartphone:mx-20 smartphone:gap-y-10 grid-flow-col">
        <div className="grid-row row-span-full smartphone:m-20 vsmall:m-5 grid-rows-3 p-10 smartphone:p-0">
          <h3 className="panel-header text-2xl pink smartphone:text-3xl mb-5 border-dashed border-b heart-bg little-heart-bg heart-bg-right">Professional experience: Government</h3>
          <div className="panel job grid grid-cols-8">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://18f.gsa.gov">18F</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Lead Innovation Specialist</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">Washington, DC and remote</div>
              <div className="dates text-md smartphone:text-lg mt-3">December 2014 - August 2018</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg mb-4">
                <li className="mb-1">Extended software used to parse and view federal regulation for the <Link href="https://regulations.atf.gov/" className="rounded">Alcohol, Tobacco and Firearms Bureau</Link>, increasing regulatory compliance and ease of use for ATF staff using <Link href="https://react.dev/" className="rounded">React</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="rounded">JavaScript</Link>, <Link className="rounded" href="https://backbonejs.org/">Backbone.js</Link>, <Link href="https://www.python.org/">Python</Link> and <Link href="https://www.djangoproject.com/">Django</Link>, <Link href="https://sass-lang.com/">Sass</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</Link>.</li>
              <li className="mb-1">Worked closely with designers and server side engineers to develop a website for an initiative that First Lady Michelle Obama created, resulting in interest being generated in the program and sign ups to the campaigh, using <Link href="https://jekyllrb.com/" className="rounded">Jekyll</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="rounded">JavaScript</Link>, <Link href="https://sass-lang.com/" className="rounded">Sass</Link>.</li>
              <li className="mb-1">Built an engineering department from a little over a dozen to sixty engineers, focusing on engineer productivity and career development, exponentially increasing the number of paid projects the agency could accept.</li>
              <li className="mb-1">Managed a team of 3-6 high performing engineers, some of whom were tech leads in their focus areas (front end, devops, etc), and a handful of whom were promoted off my team, becoming leaders alongside me.</li>
              <li className="mb-1">Co-authored Code of Conduct for events as part of internal Diversity and Inclusion Guild, which became the foundation for the <Link className="rounded" href="https://github.com/18F/code-of-conduct">organizational Code of Conduct</Link>.</li>
            </ul>
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://18f.gsa.gov">18F</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Innovation Specialist</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">Washington, DC and remote</div>
              <div className="dates text-md smartphone:text-lg mt-3">August 2014 - December 2014</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg">
              <li>Led continued development of an <Link href="https://buy.gsa.gov/pricing/">internal tool for federal procurement officers</Link> to receive fairer prices on government contracts by comparing past prices on similar contracts, which saved compliance officers time and money on new contracts, using <Link href="https://www.python.org/">Python</Link> and <Link href="https://www.djangoproject.com/">Django</Link>.</li>
            </ul>
          </div>
          <div className="panel job grid grid-cols-8 mt-20">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://cfpb.gov">CFPB</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Technology & Innovation Fellow</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">Washington, DC and remote</div>
              <div className="dates text-md smartphone:text-lg mt-3">December 2012 - August 2014</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg">
              <li>Led front end development for innovative and modern <Link href="https://www.consumerfinance.gov/rules-policy/regulations/">software that dynamically parses and displays federal regulations</Link>, revolutionizing the space for federal employees and private industry alike using <Link href="https://www.python.org/">Python</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>, <Link href="https://www.djangoproject.com/">Django</Link>, <Link href="https://backbonejs.org/">Backbone.js</Link>, <Link href="https://underscorejs.org/">Underscore.js</Link>, <Link href="https://www.travis-ci.com/">Travis CI</Link>, <Link href="https://saucelabs.com/">Sauce Labs</Link>, <Link href="https://www.selenium.dev/">Selenium</Link>, <Link href="https://mochajs.org/">Mocha</Link>, <Link href="https://gruntjs.com/">Grunt</Link>, shell scripting, <Link href="https://eslint.org/">ESLint</Link>, <Link href="https://babeljs.io/">Babel</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</Link>, <Link href="https://sass-lang.com/">Sass</Link>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid smartphone:gap-y-2 smartphone:mt-0 mt-5 smartphone:mx-20 place-items-center no-print">
        <Image className="gap-x-4 col-span-4 mt-5" src={keepgoingdivider} width="500" height="169"/>
      </div>
      <div className="grid main shadow-md mx-5 my-2 smartphone:mt-6 smartphone:mb-20 smartphone:mx-20 smartphone:gap-y-10 grid-flow-col">
        <div className="grid-row row-span-full smartphone:m-20 vsmall:m-5 grid-rows-3 p-10 smartphone:p-0">
          <h3 className="panel-header text-2xl border-dashed border-b pink smartphone:text-3xl mb-5 heart-bg little-heart-bg heart-bg-right">Professional experience: Media Companies</h3>
          <div className="panel job grid grid-cols-8">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://qz.com">Quartz</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Web Application Engineer</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">New York, NY</div>
              <div className="dates text-md smartphone:text-lg mt-3">July 2012 - October 2012</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg">
              <li className="mb-1">Led front end engineering for the initial deployment of an innovative news website owned by <Link href="https://www.theatlantic.com/">The Atlantic Media Company</Link>, using <Link href="https://backbonejs.org/">Backbone.js</Link>, <Link href="https://underscorejs.org/">Underscore.js</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>, <Link href="https://www.php.net/">PHP</Link>, <Link href="https://wordpress.com/">Wordpress</Link>, <Link href="https://jquery.com/">jQuery</Link>.</li>
            </ul>
          </div>
          <div className="panel job grid grid-cols-8 mt-20">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl vsmall:text-md text-xl"><Link href="http://consumersearch.com">ConsumerSearch</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Senior Web Developer</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">New York, NY</div>
              <div className="dates text-md smartphone:text-lg mt-3">May 2010 - April 2012</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg mb-4">
              <li className="mb-1">Maintained and built new features for a consumer product comparison website owned by <Link href="https://www.nytco.com/">The New York Times Company</Link>, using <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</Link>, <Link href="https://www.drupal.org/">Drupal</Link>, <Link href="https://www.php.net/">PHP</Link>, <Link href="https://jquery.com/">jQuery</Link>.</li>
              <li className="mb-1">Halved load times by minimizing HTTP requests and optimizing server side code for <Link href="https://www.drupal.org/">Drupal</Link> views/templates.</li>
              <li className="mb-1">Co-led usability testing and user feedback collection, alongside the design director.</li>
            </ul>
          </div>
          <div className="panel job grid grid-cols-8 mt-20">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://economist.com">The Economist</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Client Side Developer</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">New York, NY</div>
              <div className="dates text-md smartphone:text-lg mt-3">May 2009 - May 2010</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg mb-4">
              <li className="mb-1">Ported complex news site from Coldfusion to <Link href="https://www.drupal.org/">Drupal</Link>.</li>
              <li className="mb-1">Mentored Coldfusion engineers learning <Link href="https://www.drupal.org/">Drupal</Link> and <Link href="https://www.php.net/">PHP</Link>.</li>
            </ul>
          </div>
          <div className="panel job grid grid-cols-8 mt-20">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="https://www.sonymusic.com/">Sony Music</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Drupal Themer</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">New York, NY</div>
              <div className="dates text-md smartphone:text-lg mt-3">April 2009 - May 2009</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg mb-4">
              <li className="mb-1">Ported musician websites from <Link href="https://www.drupal.org/">Drupal</Link> 5 to <Link href="https://www.drupal.org/">Drupal</Link> 6, including artists like Ben Folds and Kesha.</li>
            </ul>
          </div>
          <div className="panel job grid grid-cols-8 mt-20">
            <div className="col-span-4">
              <h4 className="smartphone:text-3xl text-xl"><Link href="http://observer.com">The New York Observer</Link></h4>
              <h5 className="title pink smartphone:text-2xl text-lg mt-2">Front End Developer</h5>
            </div>
            <div className="col-span-4">
              <div className="location text-lg smartphone:text-xl light-gray">New York, NY</div>
              <div className="dates text-md smartphone:text-lg mt-3">October 2008 - April 2009</div>
            </div>
            <ul className="responsibilities list-disc list-inside col-span-8 mt-4 text-lg mb-4">
              <li className="mb-1">Built the front end of two versions of a high traffic media website using <Link href="https://www.drupal.org/">Drupal</Link>, <Link href="https://www.php.net/">PHP</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</Link>, <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS</Link>, <Link href="https://subversion.apache.org/">SVN</Link>.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid gap-y-2 mx-20 place-items-center no-print">
        <div className="grid-row">
          <Image className="smartphone:col-span-1 inline collapse smartphone:visible" src={dividerheartlight} width="200"/>
          <Image className="smartphone:col-span-2 smart phone:inline" src={dividerheartlight} width="300"/>
          <Image className="smartphone:col-span-1 inline collapse smartphone:visible" src={dividerheartlight} width="200"/>
        </div>
      </div>
      <div className="grid main heart-bg no-printshadow-md mx-5 my-2 smartphone:mt-6 smartphone:mb-20 smartphone:mx-20 smartphone:gap-y-10 grid-flow-col">
        <div className="grid-row row-span-full smartphone:m-20 vsmall:m-5 grid-rows-3 p-10 smartphone:p-0">
          <h3 className="panel-header text-2xl light-gray border-dashed border-b smartphone:text-3xl">Made with Love</h3>
          <p>And built using <Link href="https://nextjs.org/">Next.js</Link>, <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, <Link href="https://fonts.google.com/">Google Fonts</Link>, <Link href="https://github.com/theresaanna/pinkresume">Github</Link> and deployed with <Link href="https://vercel.com">Vercel</Link>. Illustrative elements are © 2024 Theresa Summa</p>
        </div>
      </div>
      <div className="grid gap-y-2 mx-20 mb-10 place-items-end no-print">
        <Image className="gap-x-4 col-span-4" src={thankyoudivider} width="200" height="169"/>
      </div>
    </main>
  );
}

export default Home;
