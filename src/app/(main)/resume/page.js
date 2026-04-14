import "./resume-print.css";

export const metadata = {
  title: "Resume - Theresa Summa",
  description: "Resume of Theresa Summa, Software Engineer",
};

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-container">
        {/* Header */}
        <header className="resume-header">
          <h1>Theresa Summa</h1>
          <p className="resume-subtitle">Software Engineer</p>
          <p className="resume-contact">
            Sacramento, CA |{" "}
            <a href="tel:13474150944">347-415-0944</a> |{" "}
            <a href="mailto:theresasumma@gmail.com">theresasumma@gmail.com</a>
          </p>
          <p className="resume-tagline">Full stack web software | Python + JavaScript | Generative AI</p>
          <p className="resume-links">
            <a href="https://github.com/theresaanna">github.com/theresaanna</a>
            {" - "}
            <a href="https://theresasumma.com">theresasumma.com</a>
          </p>
        </header>

        <hr className="resume-divider" />

        {/* Education and Self-Directed Project Highlights */}
        <section className="resume-section">
          <h2 className="resume-section-title">
            Education and Self-Directed Project Highlights
            <span className="resume-date-range">2018-current</span>
          </h2>

          <div className="resume-entry">
            <h3>
              VibrantSocial
              <span className="resume-date-range">2026- (current)</span>
            </h3>
            <p>VibrantSocial is a social media app for the folks who want the days of MySpace back. I have created it alone so far. It is currently a web app, and I am building native apps to accompany it.</p>
            <ul>
              <li>
                Vibrant:
                <ul>
                  <li>uses next.js and TypeScript for the web app, using Expo for native apps,</li>
                  <li>has real time chat and chat room features using Ably for real time services,</li>
                  <li>uses Prisma ORM and a PostgresSQL database hosted on Neon, Vercel is the web host,</li>
                  <li>has a Docker container running Python that scans for adult, sensitive material and CSAM,</li>
                  <li>uses Redis rate limiting, along with Inngest for long-running jobs,</li>
                  <li>implements TOTP 2FA and Cloudflare Turnstile for security, in part,</li>
                  <li>has a robust suite of unit and E2E tests using vitest, React Testing Library and Playwright,</li>
                  <li>includes Zod for type schemas and the Anthropic API for AI touches.</li>
                </ul>
                Features Include:
                <ul>
                  <li>posts with fine grain audience control,</li>
                  <li>a full text and media editor for posts and bios,</li>
                  <li>app-wide custom themes, can see other user's themes on their pages,</li>
                  <li>real-time direct chat, group chats and chat rooms,</li>
                  <li>custom image frames, username fonts,</li>
                  <li>AI-generated post tags, theme color profiles, AI-generated "while you were away" summary,</li>
                  <li>multiple post feed views and configurations,</li>
                  <li>post and people notification and email subscriptions,</li>
                  <li>a marketplace a la Facebook Marketplace,</li>
                  <li>ability to upload/download app themes,</li>
                  <li>full threaded comment discussions on posts,</li>
                  <li>a suite of content moderation tools,</li>
                  <li>user-made lists of users per theme, more!</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>
              Certification Program in Generative AI at Johns Hopkins University Whiting School of Engineering
              <span className="resume-date-range">2025-2026 (current)</span>
            </h3>
            <p>I am enjoying the privilege of learning the latest in theoretical and industry use of Generative AI and the AI landscape in general from the amazing faculty at Johns Hopkins.</p>
            <ul>
              <li>
                I am learning new material all of the time, but so far have taken a particular interest in
                <ul>
                  <li>NLP and more specifically sentiment analysis,</li>
                  <li>methods for using AI on the web to make information faster to process,</li>
                  <li>refining LLMs through transformer models and</li>
                  <li>optimizing different algorithms and methods of ML and AI.</li>
                </ul>
              </li>
              <li>My mid-term project is to create an email secretary AI to prioritize, summarize and organize emails.</li>
              <li>My final project will be a system to generate grant proposals that leverage AI for effectiveness.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>
              VibeCheckAI
              <span className="resume-date-range">2025-2026</span>
            </h3>
            <p>VibeCheckAI is a tool for small to medium size content creators to gather meaningful and actionable feedback based on their audiences&apos; comments and posts.</p>
            <ul>
              <li>Inspired by my education at Johns Hopkins and some subsequent independent traditional and AI-powered NLP experimentation.</li>
              <li>It runs on a multi-vendor infrastructure of traditional web servers and cloud GPUs.</li>
              <li>After running analysis on a post, using a unique ensemble of LLMs and other ML and NLP methods, it presents charts, an AI-generated summary of comments and some other interesting information about the comments in aggregate.</li>
              <li>There are logged in and paid user features such as queuing posts, saving results, bulk analysis, more. It is written in Python and uses PostgreSQL.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>
              Outco: Technical Interview Skill Course
              <span className="resume-date-range">2021-2022</span>
            </h3>
            <p>In this course, I twice completed what I call a &ldquo;computer science bootcamp&rdquo;. I studied algorithms and practiced daily at completing Leetcode-type programming exercises in front of peers and mentors. This course refined my skill as a technical thinker and filled in my knowledge of computer science fundamentals.</p>
          </div>
        </section>

        <hr className="resume-divider" />

        {/* Public Sector Work Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">
            Public Sector Work Experience
            <span className="resume-date-range">2012-2018</span>
          </h2>

          <div className="resume-entry">
            <h3>18F/Technology Transformation Services, General Services Administration</h3>
            <p className="resume-role">Lead Innovation Specialist - Washington, DC - 2014-2018</p>
            <p>I was lucky to be on this team for four years. I was asked to move from an individual contributor role to a leadership role within three months of my employment.</p>
            <ul>
              <li>Managed a team of 3-6 high performing engineers, some of whom were tech leads in their focus areas (front end, devops, etc). A handful of this talent was promoted off my team, becoming leaders as well, while I was helping mentor them.</li>
              <li>On initial leadership team that built an engineering department from a little over a dozen engineers to sixty engineers, focusing on individual productivity and career development, thereby exponentially increasing the number of paid projects the agency could accept.</li>
              <li>Co-authored Code of Conduct for events as part of internal Diversity and Inclusion Guild, which became the foundation for the organizational Code of Conduct.</li>
            </ul>
            <p>My leadership position also came with individual contributor responsibilities:</p>
            <ul>
              <li>Extended software I first built in an earlier position, used to parse and view federal regulation for the Alcohol, Tobacco and Firearms Bureau, increasing regulatory compliance and ease of use for ATF staff using React, JavaScript, Backbone.js, Python and Django, Sass, HTML.</li>
              <li>Worked closely with designers and server side engineers to develop a website for an initiative that First Lady Michelle Obama created, resulting in interest being generated in the program and sign ups to the campaign, using Jekyll, JavaScript, Sass.</li>
              <li>Led continued development of an internal tool for federal procurement officers to receive fairer prices on government contracts by comparing past prices on similar contracts, which saved compliance officers time and money on new contracts, using Python and Django.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>Consumer Financial Protection Bureau</h3>
            <p className="resume-role">Technology and Innovation Fellow - Washington, DC - 2012-2014</p>
            <p>I was awarded a two year fellowship position to establish the digital components of this new federal agency built out of the 2008 housing crisis.</p>
            <ul>
              <li>I led front end development for innovative and modern software that dynamically parses and displays federal regulations, revolutionizing the space for federal employees and private industry alike using Python, JavaScript, Django, Backbone.js, Underscore.js, Travis CI, Sauce Labs, Selenium, Mocha, Grunt, shell scripting, ESLint, Babel, HTML, Sass.</li>
            </ul>
          </div>
        </section>

        <hr className="resume-divider" />

        {/* Media Industry Work Experience */}
        <section className="resume-section">
          <h2 className="resume-section-title">
            Media Industry Work Experience
            <span className="resume-date-range">Pre-2012</span>
          </h2>

          <div className="resume-entry">
            <h3>Quartz, An Atlantic Media Company</h3>
            <p className="resume-role">Web Application Engineer - New York, NY</p>
            <ul>
              <li>I led front end engineering for the initial deployment of an innovative news website, using Backbone.js, Underscore.js, JavaScript, PHP, Wordpress, jQuery.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>ConsumerSearch, then A New York Times Company</h3>
            <p className="resume-role">Senior Web Developer - New York, NY</p>
            <ul>
              <li>Maintained and built new features for a consumer product comparison website owned by The New York Times Company, using JavaScript, CSS, HTML, Drupal, PHP, jQuery.</li>
              <li>Halved load times by minimizing HTTP requests and optimizing server side code for Drupal views/templates.</li>
              <li>Co-led usability testing and user feedback collection, alongside the design director.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>The Economist</h3>
            <p className="resume-role">Senior Web Developer - New York, NY</p>
            <ul>
              <li>Ported complex news site from Coldfusion to Drupal.</li>
              <li>Mentored Coldfusion engineers learning Drupal and PHP.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>Sony Music</h3>
            <p className="resume-role">Drupal Themer - New York, NY</p>
            <ul>
              <li>Ported musician websites from Drupal 5 to Drupal 6, including artists like Ben Folds and Kesha.</li>
            </ul>
          </div>

          <div className="resume-entry">
            <h3>The New York Observer</h3>
            <p className="resume-role">Client Side Developer - New York, NY</p>
            <ul>
              <li>Built the front end of two versions of a high traffic media website using Drupal, PHP, HTML, CSS, SVN.</li>
            </ul>
          </div>
        </section>

        <hr className="resume-divider" />

        {/* Personal Interests */}
        <section className="resume-section">
          <h2 className="resume-section-title">Personal Interests</h2>
          <ul className="resume-interests">
            <li>Resin crafting</li>
            <li>Sewing</li>
            <li>Crochet and knitting</li>
            <li>My cats</li>
            <li>Cricut crafting</li>
            <li>Music (lots of Lady Gaga)</li>
            <li>Reading autobiographies</li>
            <li>Writing poetry</li>
            <li>Good coffee</li>
            <li>Breakfast foods</li>
            <li>Bike riding</li>
            <li>Observing art</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
