import type { NextPage } from 'next'
import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'

import styles from './HomePage.module.css'
import linkedInImage from '../../images/linkedin.png'
import githubImage from '../../images/github.png'
import NameComponent from '../components/name/NameComponent'
import TitleComponent from '../components/title/TitleComponent'

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>kenttonino</title>
        <link rel='icon' href='/head.ico'></link>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
      <div className={`${styles.containerOne}`}>
        <div className={`${styles.containerTwo}`}>
          <NameComponent name='Kent Louise Tonino' />
          <TitleComponent title='Backend Developer' />
          <div className={`${styles.containerThree}`}>
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/kenttonino/'
                  target='_blank'
                >
                  <Image src={linkedInImage} />
                </a>
              </li>
              <li>
                <a href='https://github.com/kenttonino' target='_blank'>
                  <Image src={githubImage} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
