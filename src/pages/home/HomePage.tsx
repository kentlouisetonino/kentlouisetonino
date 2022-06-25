import type { NextPage } from 'next'
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

const HomePage: NextPage = () => {
  return (
    // Header
    <div className={`${styles.header}`}>
      {/* Profile */}
      <div className={`${styles.profile}`}>
        <div className={`${styles.profileImageContainer}`}>
          <Image src={profileImage} className={`${styles.profileImage}`} />
        </div>
        <h1 className={`${styles.profileName}`}>Kent Louise Tonino</h1>
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
      {/* Navbar */}
      <div className={`${styles.navbar}`}>
        <ul className={`${styles.navbarUl}`}>
          <li className={`${styles.navbarLi}`}>
            <a className={`${styles.navbarAnchor}`} href='/#home'>
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
  )
}

export default HomePage
