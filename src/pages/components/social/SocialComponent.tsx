import Image from 'next/image'

import linkedInImage from '../../../images/linkedin.png'
import githubImage from '../../../images/github.png'

interface Props {
  className: string
}

const SocialComponent = ({ className }: Props) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/kenttonino/' target='_blank'>
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
  )
}

export default SocialComponent
