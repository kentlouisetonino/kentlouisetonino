import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './HomePage.module.css'
import profileImage from '../../images/profile.png'
import linkedinImage from '../../images/linkedin.png'
import githubImage from '../../images/github.png'
import homeImage from '../../images/home.png'
import userImage from '../../images/user.png'
import skillsImage from '../../images/skills.png'
import resumeImage from '../../images/resume.png'
import projectsImage from '../../images/projects.png'
import personalImage from '../../images/personal.jpg'

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>kenttonino</title>
        <link rel="icon" href='/head.ico'></link>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>

      {/* Header */}
      <div className={`${styles.header}`}>
        <div className={`${styles.profile}`}>
          <div className={`${styles.profileImageContainer}`}>
            <Image src={profileImage} className={`${styles.profileImage}`} />
          </div>
          <h1 className={`${styles.profileName}`}>Kent Tonino</h1>
          <div className={`${styles.socialLinksContainer}`}>
            <a
              className={`${styles.socialLinks}`}
              href='https://www.linkedin.com/in/kenttonino/'
              target='_blank'
            >
              <Image src={linkedinImage} />
            </a>
            <a
              className={`${styles.socialLinks}`}
              href='https://github.com/kenttonino'
              target='_blank'
            >
              <Image src={githubImage} />
            </a>
          </div>
        </div>
        <div className={`${styles.navbar}`}>
          <ul className={`${styles.navbarUl}`}>
            <li className={`${styles.navbarLi}`}>
              <a className={`${styles.navbarAnchor}`} href='/#hero'>
                <span className={`${styles.navbarImage}`}>
                  <Image src={homeImage} />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li className={`${styles.navbarLi}`}>
              <a className={`${styles.navbarAnchor}`} href='/#about'>
                <span className={`${styles.navbarImage}`}>
                  <Image src={userImage} />
                </span>
                <span>About</span>
              </a>
            </li>
            <li className={`${styles.navbarLi}`}>
              <a className={`${styles.navbarAnchor}`} href='/#skills'>
                <span className={`${styles.navbarImage}`}>
                  <Image src={skillsImage} />
                </span>
                <span>Skills</span>
              </a>
            </li>
            <li className={`${styles.navbarLi}`}>
              <a className={`${styles.navbarAnchor}`} href='/#resume'>
                <span className={`${styles.navbarImage}`}>
                  <Image src={resumeImage} />
                </span>
                <span>Resume</span>
              </a>
            </li>
            <li className={`${styles.navbarLi}`}>
              <a className={`${styles.navbarAnchor}`} href='/#projects'>
                <span className={`${styles.navbarImage}`}>
                  <Image src={projectsImage} />
                </span>
                <span>Projects</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div id='hero' className={`${styles.hero}`}>
        <h1 className={`${styles.heroHeader}`}>
          Software Developer / Backend Developer
        </h1>
      </div>

      {/* About */}
      <div id='about' className={`${styles.about}`}>
        <div className={`${styles.aboutContainer}`}>
          <div className={`${styles.aboutTitle}`}>
            <h1 className={`${styles.aboutHeader}`}>About</h1>
            <p className={`${styles.aboutParagraph}`}>
              Experienced Software Developer with demonstrated history of
              working in API and Backend Development. Have strong interest in
              Application and DevOps Development and willing to learn old and
              new technologies with a strong "Get it Done" and "Can Do" mindset.
            </p>
          </div>
          <div className={`${styles.aboutPersonalContainer}`}>
            <div className={`${styles.aboutPersonalImage}`}>
              <Image src={personalImage} />
            </div>
            <div className={`${styles.aboutPersonalInfo}`}>
              <h2 className={`${styles.aboutPersonalHeader}`}>
                Personal Information
              </h2>
              <p>
                <span>Phone</span> | +63-975-902-4002
              </p>
              <p>
                <span>Email</span> | tonino.kentlouise@gmail.com
              </p>
              <p>
                <span>Permanent Address</span> | Sitio Sabang, Brgy. Marvel,
                Isabel, Leyte
              </p>
              <p>
                <span>Current Address</span> | Sitio Orel, Brgy. Banilad,
                Mandaue City, Cebu
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
