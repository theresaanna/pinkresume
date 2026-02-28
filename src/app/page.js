import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import BlogList, { getBlogPosts } from "./components/blog-list"

async function Home() {
    const posts = await getBlogPosts();

  return (
    <>
      <Analytics />
      <SpeedInsights />

      <section className="section-light">
        <div className="section-content">
          <strong>Hi.</strong><br/>
          <h2>This is my software engineering blog and resume.</h2>
          <p>I have been a software engineer professionally since 2007.<br/>
              Here you will find information about my personal projects and professional experience.</p>
        </div>
      </section>

      <section className="section-mid" id="blog">
        <div className="section-content">
          <BlogList posts={posts} limit={5} />
        </div>
      </section>

      <section className="section-light" id="projects">
        <div className="section-content">
          <h1>Projects</h1>
          <nav className="project-nav">
              <li><a href="https://glossysites.live">Glossy Sites/GlossyCMS</a></li>
            <li><a href="https://theresasumma.com/sparklefall">Sparklefall</a></li>
              <li><a href="https://vibecheckai.pro">VibeCheckAI</a> (no longer maintained)</li>
              <li><a href="https://lastfriends.site">LastFriends</a> (no longer maintained)</li>
            <li><a href="https://github.com/theresaanna">See also: my Github</a></li>
          </nav>
        </div>
      </section>

      <section className="section-mid" id="contact">
        <div className="section-content">
          <h1>Contact</h1>
          <ul>
            <li><a href="mailto:theresasumma@gmail.com">theresasumma@gmail.com</a></li>
            <li>Text only: <a href="tel:13474150944">+1-347-415-0944</a></li>
            <li><a href="https://github.com/theresaanna">Github</a></li>
            <li><a href="https://linkedin.com/in/theresasumma">LinkedIn</a></li>
          </ul>
        </div>
      </section>

      <section className="section-light" id="about">
        <div className="section-content">
          <h1>About</h1>
          About Theresa and this site:
          <ul>
            <li>This site is built with <a href="https://nextjs.org/">Next.js</a> and hosted with <a href="https://vercel.com/">Vercel</a>.</li>
            <li>On <a href="https://en.wikipedia.org/wiki/MacOS">MacOS</a>, I use <a href="https://www.jetbrains.com/">JetBrains IDEs, WebStorm or PyCharm</a>. I also use <a href="https://claude.ai">Claude</a> as a pair programming partner.</li>
            <li>Theresa is a crafter, thinker, cat mom, Lady Gaga superfan, lifelong tinkerer.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
