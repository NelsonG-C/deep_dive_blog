import React from "react"
import Layout from "../components/layout"
import profile from "../images/profile.jpg"
import styles from "../components/layout.module.css"
import sea from "../images/sea1.jpg"

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
                <div className={styles.imageTextBox}>
                  <h4 style={{ maxWidth: "500px", float: "left" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </h4>
                  <img src={profile} alt="" className={styles.profilePicture} />
                </div>
              </div>

              <div>
                <h3>Why make this blog?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>

              <div>
                <h3>
                  Like this blog? Want more content like this? Need to get in
                  touch?
                </h3>
                <p>
                  Check out my Github, where you can reach out to me.
                  Alternatively, send me an email with your thoughts and I'll
                  get back to you.
                </p>
                <p>
                  I'm also working as a freelancer, so please contact me if you
                  like what you see and need help with a project.
                </p>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  )
}
