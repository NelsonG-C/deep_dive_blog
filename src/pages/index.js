import React from "react"
import Layout from "../components/layout"
import profile from "../images/profile.jpg"
import styles from "../components/layout.module.css"
import sea from "../images/sea1.jpg"
import { Link } from "gatsby"
import "./styles.css"

export default function Home() {
  //Code contains sections for landing page
  //Whole page image
  //Description and profile pic
  //Why blog? section
  //Contact Info

  return (
    <div>
      <div>
        <Layout>
          <div style={{ marginBottom: "1rem", objectFit: "cover" }}>
            <img src={sea} alt="" className={styles.frontPageImage} />
          </div>
          <div className={styles.layout}>
            <div className={styles.contentContainer}>
              <div>
                <div className="grid-container">
                  <div>
                    <h4 style={{ maxWidth: "500px", float: "left" }}>
                      Hi! My name is Nelson and I'm a software developer based
                      in Melbourne.
                    </h4>
                    <h4 style={{ maxWidth: "500px", float: "left" }}>
                      In July 2020 I ran an experiment to help figure out my
                      next career direction.
                    </h4>
                    <h4 style={{ maxWidth: "500px", float: "left" }}>
                      I called it the Deep Dive.
                    </h4>
                    <h4 style={{ maxWidth: "500px", float: "left" }}>
                      This blog outlines my experiment, experiences, and what I
                      learned along the way. If you want to figure out your next
                      career step or learn about the topics I covered, read on.
                      This experiment changed my life. I hope it can help you
                      too.
                    </h4>
                  </div>
                  <div className={styles.imageTextBox}>
                    <img
                      src={profile}
                      alt=""
                      className={styles.profilePicture}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Why make this blog?</h3>
                <p>
                  Like for many people, the year of 2020 has not gone as
                  planned. The startup I had been working at collapsed due to
                  COVID and internal issues, and I soon found myself jobless.
                  Afterwards, I was unsure which direction to take next.
                  Lockdown was in effect in Australia, available jobs were at an
                  all-time low, and I wanted to pivot away from the logistics
                  work I had done for the last two years.
                </p>
                <p>
                  What I did know was what interest areas I wanted to explore.
                  So I sat down at the start of July and set myself a challenge.
                  Spend one week completely focused on each topic, investing as
                  much time as I can into the area, and document the process.
                </p>
                <p>
                  By the end of my experiment, I had not only accomplished alot
                  in a month, but also gained a strong sense of direction. I
                  still had a long way to go, but was glad I took on this
                  challenge. It's for these reasons that I wanted to create this
                  blog and share this information.
                </p>
                <p>
                  I also want to note that I was very lucky to have the
                  privilege to take out this portion of my time, let alone make
                  ends meet. If you are reading this and are already doubting if
                  you could do this yourself, I'd highly suggest experimenting
                  with the idea in your own way. The key parts were due to the
                  "Rules" I followed (listed below) and not necessarily my month
                  long experiment schedule.
                </p>
              </div>
              <div>
                <h3>How did the Deep Dive work?</h3>
                <p>
                  I set an area for each week. On the weekend beforehand, I
                  would set out a rough list of ideas I was curious about, ways
                  to get an idea of what a job in this field would be like,
                  people to talk to, etc.
                </p>
                <p>
                  Each day was less structured. As long as I was doing a variety
                  of different things across the week related to the area, I was
                  happy. At the end of each day, I would write a journal,
                  listing out each activity I did for the day. I gave myself
                  some ratings out of 10 for effort, curiosity, and overall time
                  I spent that day on the area.
                </p>
                <p>
                  At the end of the week I would make a general reflection on
                  how I was feeling and what had happened in the week.
                </p>
              </div>
              <div>
                <h3>My "Rules" for the Deep Dive</h3>
                <p>I had three simple tenets for my Deep Dive Weeks:</p>
                <p style={{ fontWeight: "bold" }}>
                  Immersion, curiosity, and fun
                </p>
                <p>
                  Immersion : I committed to setting aside this time completely
                  to focus on the area for that week. No multi-tasking, no
                  procrastinating (if possible). By immersing myself in the
                  material, I knew that I would be able to get a stronger idea
                  of the area. The key to the immersion was not the week long
                  challenges though, but rather being able to set aside a
                  portion of time that completely focused on the area.
                </p>
                <p>
                  Curiosity: I gave myself free reign to explore anything and
                  everything in the area of interest. I wanted to support my
                  curiosity and not weigh myself down with specific goals and a
                  tiny focus.
                </p>
                <p>
                  Fun: The Deep Dives was an idea to help me figure out a career
                  direction. But I knew it was crucial that I had fun with
                  whatever I was doing, or at least tried to. This also helped
                  me in figuring out what I had the most passion for, what was
                  easiest to enjoy.
                </p>
              </div>
              <div>
                <h3>Read about programming, the first Deep Dive week</h3>
                <button>
                  <Link to="/programming">
                    <h1 className={styles.title}>Programming Deep Dive</h1>
                  </Link>
                </button>
              </div>

              <div>
                <h3>
                  Like this blog? Want more content like this? Want to get in
                  touch?
                </h3>
                <p>
                  Check out my Github, where you can reach out to me. Send me an
                  email with your thoughts and I'll get back to you.
                </p>
                <p>
                  I'm looking for opportunities in the software world too, so i
                  would love to connect with any fellow developers!
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}
