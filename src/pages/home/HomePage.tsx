import Head from 'next/head'
import type { NextPage } from 'next'
import { Fragment } from 'react'

import styles from './HomePage.module.css'
import NameComponent from '../components/name/NameComponent'
import TitleComponent from '../components/title/TitleComponent'
import SocialComponent from '../components/social/SocialComponent'
import CertificateComponent from '../components/certificate/CertificateComponent'

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
          <SocialComponent className={`${styles.containerThree}`} />
          <CertificateComponent />
        </div>
      </div>
    </Fragment>
  )
}

export default HomePage
