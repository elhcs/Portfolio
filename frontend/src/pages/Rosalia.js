import React, { useState } from 'react';
import axios from 'axios';
import styles from './Rosalia.module.css';

const heroFrames = [
  'https://i.pinimg.com/1200x/2f/d0/62/2fd062f916481cfb5ffb3d72030e2fcd.jpg',
  'https://i.pinimg.com/1200x/82/f5/94/82f5943c86690cd9e4cfe7f8c82eb01d.jpg',
];

export const rosaliaHeroColors = {
  container: '#000000',
  textColumn: '#000000',
  imageColumn: '#000000',
};

const Rosalia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [email, setEmail] = useState('');
  const [signupStatus, setSignupStatus] = useState('idle');

  const handleSignup = async (event) => {
    event.preventDefault();
    if (signupStatus === 'sending') return;
    setSignupStatus('sending');
    try {
      await axios.post('https://portfoliox-vdrp.onrender.com/api/messages/add', {
        name: 'Rosalía story update request',
        email: email.trim(),
        body: 'Please email me when the Rosalía and the Art of Transformation story is published. I consent to receiving an email about this story.',
      }, { timeout: 20000 });
      setSignupStatus('success');
      setEmail('');
    } catch {
      setSignupStatus('error');
    }
  };

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
         
          <h1>ROSALÍA AND THE ART OF TRANSFORMATION</h1>
          <p>On contradiction, transcendence, and why deconstruction is the only language that has ever made sense to her.</p>
          <a className={styles.readLink} href="#rosalia-story">Coming soon <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.heroMedia}>
          <img src={heroFrames[currentIndex]} alt="Rosalía — editorial portrait" />
          <div className={styles.imageControls} role="group" aria-label="Choose a portrait">
            {heroFrames.map((frame, index) => (
              <button key={frame} type="button" onClick={() => setCurrentIndex(index)} aria-pressed={currentIndex === index} aria-label={`Show portrait ${index + 1}`}>
                0{index + 1}
              </button>
            ))}
          </div>
        </div>
      </header>
      <div className={styles.articleLabel}><span>Rosalía</span><span>Transformation, contradiction & transcendence</span></div>
      <section id="rosalia-story" className={styles.workInProgress} aria-labelledby="work-in-progress-title">
        <div>
          <h2 id="work-in-progress-title">Still in the works.</h2>
          <p>I’m still working on this story. Check back soon.</p>
        </div>
        <div className={styles.signup}>
          <h3>A note when it’s ready.</h3>
          <p>Leave your email and I’ll let you know when the full story is ready.</p>
          {signupStatus !== 'success' && (
            <form onSubmit={handleSignup} aria-busy={signupStatus === 'sending'}>
              <label htmlFor="rosalia-email">Your email</label>
              <div className={styles.signupRow}>
                <input id="rosalia-email" name="email" type="email" autoComplete="email"
                  placeholder="you@example.com" required maxLength={254}
                  value={email} onChange={(event) => setEmail(event.target.value)}
                  disabled={signupStatus === 'sending'} aria-describedby="rosalia-signup-note" />
                <button type="submit" disabled={signupStatus === 'sending'}>
                  {signupStatus === 'sending' ? 'Sending…' : 'Notify me'} <span aria-hidden="true">↗</span>
                </button>
              </div>
              <p id="rosalia-signup-note" className={styles.signupNote}>By clicking “Notify me”, you agree to receive an email when this story is published.</p>
            </form>
          )}
          <p className={styles.signupStatus} role="status" aria-live="polite">
            {signupStatus === 'success' && 'Thanks — I’ll email you when it’s ready.'}
            {signupStatus === 'error' && 'Your request couldn’t be saved. Please try again in a moment.'}
          </p>
        </div>
      </section>
      {/* Unfinished draft preserved for editing; excluded from the rendered page.
      <div id="rosalia-story" className={styles.section}>
        <div className={styles.prose}>
          <span className={styles.kicker}>01 / Transformation</span>
          <h2>Rosalía and the Art of Transformation, Contradiction and Transcendence</h2>
            <p>
              Pop stars are allowed to reinvent themselves, although ideally not so completely that anyone loses track of the product. Rosalía has tested that allowance more aggressively than most. Before the Kardashians started putting her in captions, she spent years studying flamenco at the Escola Superior de Música de Catalunya; afterward came medieval Occitan literature, reggaeton, bachata, jazz interruptions, motorcycle engines, distorted electronics, and “Hentai,” where she places fucking directly beneath God in the hierarchy of things. This can look like genre-hopping if you list it quickly enough. Her albums sound more deliberate than that, and stranger. </p>
            <p>
              <em>El Mal Querer</em> makes that training audible. The album is structured around <em>Flamenca</em>, a 13th-century Occitan roman à clef about a woman imprisoned by a jealous husband, which is either among the most obscure source materials in modern pop history or a completely logical choice for an artist whose practice depends on excavating the past for usable emotional material.
            </p>
            <p>
              Probably both.
            </p>
            <p>
              Then came <em>Motomami</em>, a fragmentary, splintered record that refused to cohere in traditional ways and still somehow became one of the most precisely constructed pop albums of the last decade. “Saoko” begins with a reggaeton rhythm, mutates almost immediately, swerves into jazz, and ends before most pop songs have reached the second chorus. The rest of the album behaves similarly. A hard electronic track gives way to an exposed voice; a childish joke sits beside grief; the delicate piano of “Hentai” supports lyrics lurid enough to make the tenderness feel slightly illicit. The record’s title divides Rosalía into  machine and flesh. She likes the noise produced when they scrape against each other.
            </p>
            <p>
             In interviews, Rosalía often talks about change and contradiction. Speaking to Genius, she put it simply: “Ser humano es ser contradictorio.” To accept change is to accept that what once felt right may not always feel right, and that people cannot be held forever inside a fixed idea of who they are. Her music follows that instinct. “Segundo es chingarte, lo primero e’ Dios,” she sings in “Hentai”: fucking you comes second; God comes first. The joke depends on the bluntness of the ranking, but it also shows how little interest she has in the old demand that bodily desire make itself respectable before approaching the sacred. Rosalía has said that the song was inspired by desire and sexuality, which she treats as parts of life deserving the same artistic seriousness as any other human experience. Yet even at the climax of the song, amid her most explicit descriptions of sex and longing, she remembers God. God remains first; the lover is placed as high as anything human can be, second only to the divine.          </p>

        </div>
        <aside className={styles.aside}>
          <figure>
            <span className={styles.kicker}>In her own words</span>
            <iframe
              title="Rosalía on change and contradiction"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1345782379946036&show_text=false&width=500"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
            <figcaption>Rosalía on the constant state of change, transformation, and contradiction.</figcaption>
            <a href="https://www.facebook.com/watch/?v=1345782379946036" target="_blank" rel="noreferrer">Watch on Facebook ↗</a>
          </figure>
        </aside>
      </div>
      <div className={styles.section}>
        <div className={styles.prose}>
          <span className={styles.kicker}>02 / Transcendence</span>
          <h2>Let There Be LUX</h2>
<p> The album is immense: massed voices, orchestral movements, abrupt elevations, arrangements that seem to open upward. Reviewers have naturally called it “cinematic,” a compliment so automatic that it is worth asking what it gives away. Music of sufficient scale is routinely praised for resembling film, as though sound becomes impressive only when it causes us to imagine pictures. LUX does produce images, but its achievement is not that it could accompany a cathedral in a movie. Rosalía has spent years working out how much pressure a voice, a rhythm, or a silence can carry. Here she asks them to carry God. That grandeur is more interesting than tasteful restraint would have been. Contemporary pop has no shortage of orchestras brought in to certify that an album matters. Add strings, a choir, a famous composer; seriousness arrives by implication. On LUX, however, scale is not a substitute for substance. The music is enormous because its subject is enormous. A restrained album about divine infinitude might have been easier to admire and much easier to forget.</p>
 
<p>The album's multilingualism gets flattened in a similar way. The count, somewhere around fifteen languages, is repeated as though it were a stunt, a fun fact with a choir attached. But Rosalía has said something more revealing about the making of <em>LUX</em>: she did not write 70 songs and carve them down into a final cut, the now-standard gesture of pop-star rigor. She made exactly 15 songs and went all the way with them.</p>

<p>The languages are part of that refusal to stop halfway. If God is universal, then making an album about God in one language would quietly betray the premise.</p>
 
<p>The idea surfaces most powerfully in the closing moments of "La Yugular." The verse leading into the outro builds a chain where scale keeps flipping — a person and the world contain each other, a haiku holds a country, a splinter is said to hold an entire galaxy, a single drop holds an avenue, a thorn holds a continent. Big fits inside small, then small fits inside big, over and over, so that no image is ever too vast or too tiny to be absorbed by the next. It's a rule that holds for everything — until it reaches God. The chain has just taught us that anything can fit inside anything; then, in the one exception the whole verse has been building toward, she sings that a continent does not fit inside Him. The pattern breaks exactly there. </p>
<h2 lang="ar" dir="rtl">من أجلك أدمَّر السماء، من أجلك أهدم الجحيم، فلا وعود ولا وعيد</h2>

<p>Rosalía draws specifically on the doctrine of divine love associated with Rābiʿa al Adawiyya, the eighth century Sufi mystic. Rābiʿa placed the love of God at the centre of religious devotion, insisting that God should be loved for His own sake rather than out of fear of Hell or in the hope of entering Heaven. This does not amount to a rejection of either concept. Heaven and Hell remain part of the Islamic faith, but within Rābiʿa’s vision of divine love, they lose their power as motives for worship. Devotion should arise neither from the promise of reward nor from the threat of punishment, but from the belief that God is inherently worthy of love.

Rosalía makes precisely this choice in “La Yugular.” The song grounds its spiritual vision in Qur’an 50:16, which states that God is closer to a person than their own jugular vein. Rosalía finds intimacy and immense divine love in this verse. Borrowing language associated with Rābiʿa’s doctrine, she sings, *“من أجلك أدمَّر السماء، من أجلك أهدم الجحيم، فلا وعود ولا وعيد,”* which translates roughly as: “For You, I destroy Heaven; for You, I demolish Hell. Free from promises Free from threats.”

What makes this choice so interesting and so deliberate is that much of the surah from which the verse is taken is explicitly framed around God’s promises of Paradise to the faithful and His threats of punishment to disbelievers. The surah is more commonly read through the themes of resurrection, judgment, human sinfulness, and the punishment that follows wrongdoing.

Rosalía, however, is blinded by the love contained in that single verse, buried within a broader context of punishment and promise. In this sense, she follows Rābiʿa al Adawiyya, who places divine love for its own sake at the centre of her Islamic devotion without denying the existence of either Heaven or Hell.
</p>

<p>Rosalía’s lyric, “I have no time to hate Lucifer; I am too busy loving you, Undibel,” offers another, more direct echo of Rābiʿa’s theology. Undibel is a Caló word for God. I find its use here a small but beautiful detail, connecting the song’s Sufi inspiration to Spanish Gitano culture and the flamenco tradition that has shaped Rosalía’s music.  I also hear an ethical implication in the line. If devotion to God leaves no room even for hatred of Lucifer, then it leaves even less room for the hatred of queer and trans people, or of anyone whom religion has been used to police and exclude. The song does not make this argument explicitly, but its theology makes such exclusion difficult to justify. A faith too occupied with loving God to hate the devil has no business hating queer people.</p>
<img src="https://pbs.twimg.com/media/G6ErZvbXoAAENWl?format=jpg&name=4096x4096" alt="RAYE" className={styles.articleImage} loading="lazy" />
<h2>A Comparison: RAYE</h2>



<p>Take RAYE's recent work. There are moments on that record that are undeniably ambitious: orchestral arrangements, classical influences, and RAYE's impressive vocal abilities.What strikes me about the comparison is how much of the album's force comes from that scale, especially the Hans Zimmer collaboration. And to be fair, those moments are genuinely impressive. Zimmer is one of the most accomplished composers working today; bring someone with that level of mastery into a project and the result will almost inevitably sound enormous. Outside those moments, though, the album loses much of its momentum for me. The songwriting feels surprisingly weak, sometimes among the weakest in RAYE's catalog. Again and again, the record falls back on familiar empowerment narratives, the broad "you can overcome anything, girl" anthem that has become almost a genre unto itself. There's nothing inherently wrong with that message. But after a while, it begins to feel predictable rather than revelatory.</p>          
        </div>
        <aside className={styles.aside}>
          <figure>
            <span className={styles.kicker}>The world of LUX</span>
            <img src="https://i.pinimg.com/736x/e8/fd/d7/e8fdd7cf0dce1dc845e3f801c89c1722.jpg" alt="Rosalía" loading="lazy" />
            <figcaption>Rosalía's work is deeply spiritual, and LUX is her most explicit exploration of that dimension yet.</figcaption>
          </figure>
        </aside>
      </div>
      <footer className={styles.endnote}><span>End of story</span><a href="#rosalia-story">Back to the article ↑</a></footer>
      */}
    </article>
  );
};

export default Rosalia;
