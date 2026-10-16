"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const highlights = [
  {
    sport: "Basketball",
    number: "01",
    note: "Since age three",
    tone: "orange",
    motif: "basketball",
    description: "Tommy began shooting basketballs at three and now regularly sinks half-court shots.",
  },
  {
    sport: "Tennis",
    number: "02",
    note: "Back-to-back firsts",
    tone: "lime",
    motif: "tennis",
    description: "A two-time first-place finisher in his Special Olympics State Games division.",
  },
  {
    sport: "More sports",
    number: "03",
    note: "Any game, any time",
    tone: "blue",
    motif: "motion",
    description: "Softball, baseball, racquetball, bowling, soccer, golf—and whatever comes next.",
  },
];

const careStandards = [
  {
    number: "01",
    title: "Family approved",
    copy: "Photos, clips, and updates will be selected and published by Tommy’s family.",
  },
  {
    number: "02",
    title: "Privacy first",
    copy: "Private routines, live locations, and personal information will stay off the public site.",
  },
  {
    number: "03",
    title: "Made accessible",
    copy: "Published videos will include captions or context so more people can enjoy the story.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navCompact, setNavCompact] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const updateScroll = () => {
      setNavCompact(window.scrollY > 40);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty("--scroll-progress", `${progress}`);
    };
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", updateScroll);
      revealObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className={`nav ${navCompact ? "compact" : ""}`} aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Tommy Godfrey home" onClick={closeMenu}>
          <span className="brand-mark">TG</span>
          <span>Tommy Godfrey</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-links">
          <a href="#story" onClick={closeMenu}>His story</a>
          <a href="#highlights" onClick={closeMenu}>Media</a>
          <a href="#purpose" onClick={closeMenu}>Our purpose</a>
          <a href="#care" onClick={closeMenu}>Shared with care</a>
          <a className="nav-cta" href="#connect" onClick={closeMenu}>Join Team Tommy <span>↗</span></a>
        </div>
      </nav>

      <main id="content">
        <section className="hero" id="top">
          <figure className="hero-photo">
            <Image
              src="/media/tommy-hero-campaign.png"
              alt="Tommy smiling while holding his basketball trophy"
              fill
              unoptimized
              priority
              sizes="100vw"
            />
            <figcaption>Superstar &amp; winner</figcaption>
          </figure>
          <div className="court-lines" aria-hidden="true">
            <span className="court-circle" />
            <span className="court-line" />
          </div>
          <div className="hero-kicker"><span /> Meet Tommy</div>
          <div className="hero-copy">
            <h1>
              <span>ALL <em>HEART.</em></span>
              <span>EVERY <em>GAME.</em></span>
            </h1>
            <p>
              Tommy Godfrey is a 16-year-old nonverbal autistic athlete,
              competitor, high-five champion, and fan of just about every sport.
            </p>
          </div>
          <div className="hero-rail" aria-hidden="true">
            <span>ATL</span><i /><span>ATHLETE 01</span>
          </div>
          <div className="hero-footer">
            <a className="round-cta" href="#story" aria-label="Discover Tommy's story">
              <span>Discover<br />his story</span><b aria-hidden="true">↘</b>
            </a>
            <div className="status-card" aria-label="Tommy's signature phrase">
              <div className="status-line"><span className="availability-dot" /> In Tommy&apos;s words</div>
              <strong>SUPERSTAR<br />&amp; WINNER</strong>
              <small>Family managed</small>
            </div>
          </div>
          <div className="ticker" aria-hidden="true">
            <div>HOOPS <b>•</b> TENNIS <b>•</b> MOVEMENT <b>•</b> TEAM TOMMY <b>•</b> HOOPS <b>•</b> TENNIS <b>•</b> MOVEMENT <b>•</b> TEAM TOMMY <b>•</b></div>
          </div>
        </section>

        <section className="scoreboard" aria-label="Tommy at a glance">
          <div className="scoreboard-title"><span>Player profile</span></div>
          <div className="scoreboard-stat"><strong>08</strong><span>Sports<br />and counting</span></div>
          <div className="scoreboard-stat"><strong>2×</strong><span>State Games<br />first place</span></div>
          <div className="scoreboard-stat spirit"><strong>∞</strong><span>Heart, joy<br />and energy</span></div>
        </section>

        <section className="story" id="story">
          <div className="section-label" data-reveal><span>01</span> The person behind the player</div>
          <div className="story-grid" data-reveal>
            <h2>BUILT TO<br /><i>COMPETE.</i></h2>
            <div className="story-copy">
              <p className="lead">
                Tommy is nonverbal, but never low-energy. He loves saying hello,
                sharing high fives, and bringing his competitive spirit to every game.
              </p>
              <p>
                His interest in sports started early: Tommy was shooting basketballs
                by age three. Today, he is open to playing any sport and especially
                loves basketball, softball, baseball, tennis, racquetball, bowling,
                soccer, and golf.
              </p>
              <div className="tag-row" aria-label="Tommy's sports">
                <span>Basketball</span><span>Softball</span><span>Baseball</span>
                <span>Tennis</span><span>Racquetball</span><span>Bowling</span>
                <span>Soccer</span><span>Golf</span>
              </div>
            </div>
          </div>
          <div className="profile-grid" data-reveal>
            <article>
              <small>Hometown pride</small>
              <strong>ATL</strong>
              <p>An Atlanta Braves and Atlanta Hawks fan through and through.</p>
            </article>
            <article>
              <small>Beyond the game</small>
              <strong>PLAY</strong>
              <p>Arcade high scores, roller coasters, and swimming with friends.</p>
            </article>
            <article>
              <small>Signature energy</small>
              <strong>HIGH 5</strong>
              <p>Always ready to say hello and bring the energy.</p>
            </article>
          </div>
          <div className="gallery-heading" data-reveal>
            <span>Selected moments</span>
            <p>Courtside, game-ready, and always bringing the energy.</p>
          </div>
          <div className="photo-story" aria-label="Tommy at Atlanta Hawks events" data-reveal>
            <figure className="photo-tile photo-tall">
              <Image src="/media/tommy-hawks-win.webp" alt="Tommy smiling after an Atlanta Hawks win" fill unoptimized sizes="(max-width: 800px) 100vw, 35vw" />
              <figcaption><span>01</span> A Hawks win</figcaption>
            </figure>
            <figure className="photo-tile photo-friend">
              <Image src="/media/tommy-hawks-friend.webp" alt="Tommy celebrating and clapping with a friend at a Hawks game" fill unoptimized sizes="(max-width: 800px) 100vw, 30vw" />
              <figcaption><span>02</span> Game-night energy</figcaption>
            </figure>
            <figure className="photo-tile photo-meet">
              <Image src="/media/tommy-hawks-meet-greet.webp" alt="Tommy at an Atlanta Hawks meet and greet" fill unoptimized sizes="(max-width: 800px) 100vw, 58vw" />
              <figcaption><span>03</span> Hometown team</figcaption>
            </figure>
            <figure className="photo-tile photo-mascot">
              <Image src="/media/tommy-harry-the-hawk.webp" alt="Tommy smiling with Harry the Hawk at State Farm Arena" fill unoptimized sizes="(max-width: 800px) 100vw, 35vw" />
              <figcaption><span>04</span> With Harry the Hawk</figcaption>
            </figure>
          </div>
          <div className="statement" data-reveal>
            <span className="statement-orbit" aria-hidden="true">TG</span>
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>Nonverbal never means without a voice.<br /><strong>Tommy speaks through energy, effort, and sport.</strong></p>
          </div>
          <div className="record-block" data-reveal>
            <div className="record-head">
              <p className="eyebrow">Tommy&apos;s athletic record</p>
              <h3>PROVEN ON<br /><i>EVERY STAGE.</i></h3>
            </div>
            <div className="record-grid">
              <article><span>01</span><strong>Two years running</strong><p>First place in his division in both tennis and basketball at the Special Olympics State Games.</p></article>
              <article><span>02</span><strong>Three State Games sports</strong><p>A regular competitor in tennis, softball, and basketball.</p></article>
              <article><span>03</span><strong>Half-court range</strong><p>Invited to shoot from half court at State Farm Arena during an Atlanta Hawks game—and regularly makes the shot at high-school games.</p></article>
              <article><span>04</span><strong>Community competition</strong><p>Has played baseball and kickball through Horizon Sports adaptive leagues.</p></article>
            </div>
            <figure className="record-photo">
              <Image src="/media/tommy-basketball-game.webp" alt="Tommy and his teammates in position during a basketball game" fill unoptimized sizes="(max-width: 800px) 100vw, 92vw" />
              <figcaption><span>Game day</span><strong>Ready for the next play.</strong></figcaption>
            </figure>
          </div>
        </section>

        <section className="highlights" id="highlights">
          <div className="section-label light" data-reveal><span>02</span> Media library</div>
          <div className="section-head" data-reveal>
            <h2>THE REEL<br /><i>STARTS HERE.</i></h2>
            <p>Purpose-built spaces for Tommy’s real moments—ready when the footage is.</p>
          </div>
          <div className="highlight-grid" data-reveal>
            {highlights.map((item) => (
              <article className={`highlight-card ${item.tone}`} key={item.sport}>
                <div className="card-top">
                  <span>{item.number}</span>
                  <small><i className="availability-dot" /> Media reserved</small>
                </div>
                <div className={`sport-motif ${item.motif}`} aria-hidden="true">
                  <span className="motif-ring" /><span className="motif-line" />
                </div>
                <div className="card-bottom">
                  <div><small>{item.note}</small><h3>{item.sport}</h3></div>
                  <span className="media-status">Soon <b aria-hidden="true">↗</b></span>
                </div>
                <p className="card-description">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="media-note">The first photos are here. Sport-specific action galleries will grow as Tommy’s new media arrives.</p>
        </section>

        <section className="why" id="purpose" aria-label="Tommy and the autism community">
          <span className="why-vertical" aria-hidden="true">Different does not mean less • Different does not mean less</span>
          <div data-reveal>
          <p className="eyebrow">Tommy&apos;s story. A bigger movement.</p>
          <h2>AUTISTIC<br /><i>EXCELLENCE.</i></h2>
          <div className="why-copy">
            <p>Tommy’s achievements are a testament to his drive—and one bright example of the talent, determination, and greatness found throughout the autism community.</p>
            <p className="why-detail">Every autistic person has a different story. This is Tommy’s: competitive, joyful, athletic, and entirely his own.</p>
            <span>Different does not mean less.</span>
          </div>
          </div>
        </section>

        <section className="care" id="care">
          <div className="section-label" data-reveal><span>03</span> Shared with care</div>
          <div className="care-head" data-reveal>
            <h2>PUBLIC STORY.<br /><i>PRIVATE LIFE.</i></h2>
            <p>Tommy’s safety, dignity, and privacy come before clicks. These principles guide what will appear here.</p>
          </div>
          <div className="care-grid" data-reveal>
            {careStandards.map((standard) => (
              <article key={standard.number}>
                <span>{standard.number}</span>
                <h3>{standard.title}</h3>
                <p>{standard.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="connect" id="connect">
          <div className="connect-ghost" aria-hidden="true">TOMMY</div>
          <div className="connect-inner" data-reveal>
            <p className="eyebrow">Join the journey</p>
            <h2>TEAM<br /><i>TOMMY.</i></h2>
            <p className="connect-copy">Follow Tommy&apos;s journey on Instagram. More official channels will be added here as they launch.</p>
            <div className="social-row" aria-label="Tommy's social channels">
              <a
                href="https://www.instagram.com/tommygodfreyhoops/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Tommy Godfrey Hoops on Instagram (opens in a new tab)"
              >
                Instagram <b>@tommygodfreyhoops ↗</b>
              </a>
              <span>TikTok <b>Coming soon</b></span>
              <span>YouTube <b>Coming soon</b></span>
            </div>
            <div className="contact-panel">
              <div><small>Press & partnerships</small><strong>Family-managed inquiries</strong></div>
              <p>A dedicated contact address will be added before launch.</p>
            </div>
          </div>
          <footer>
            <span>© {new Date().getFullYear()} Tommy Godfrey</span>
            <span>Family managed • Shared with care</span>
            <a href="#top">Back to top ↑</a>
          </footer>
        </section>
      </main>
    </>
  );
}
