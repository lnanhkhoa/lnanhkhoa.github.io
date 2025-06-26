import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GOOGLE_LINK = 'mailto:lnanhkhoa303@gmail.com'
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lnanhkhoa/'
const GITHUB_LINK = 'https://github.com/lnanhkhoa/'

export function Mobile() {
  const [timeString, settimeString] = useState('')

  React.useEffect(() => {
    setInterval(() => {
      const text = `${new Date().getHours().toString().padStart(2, '0')}:${new Date()
        .getMinutes()
        .toString()
        .padStart(2, '0')}`
      if (text !== timeString) {
        settimeString(text)
      }
    }, 1000)
  }, [timeString])

  return (
    <div className="m-4 block min-h-[744px] min-w-[360px] sm:min-h-[812px] sm:min-w-[393px]">
      <div className="block h-full w-full bg-new-iphone bg-cover">
        <div className="datetime absolute ml-16 mt-[34px] pl-1">
          <strong className="text-white">{timeString}</strong>
        </div>
        <header className="safe-bottom safe-top flex h-full flex-col px-3 text-center">
          <div className="flex h-full flex-col">
            <div className="flex-row items-center">
              <div className="header-photo pt-12">
                <img src="img/resume-photo-round.png" alt="Khoa Le" />
              </div>
            </div>
            <div className="header-titles">
              <h2>Khoa Le</h2>
              <p></p>
              <h4>Fullstack JS Developer</h4>
            </div>

            <div className="social-links">
              <ul>
                <li>
                  <a href={GOOGLE_LINK} target="_blank">
                    <FontAwesomeIcon icon={['fab', 'fa-google']} />
                  </a>
                </li>
                <li>
                  <a href={LINKEDIN_LINK} target="_blank">
                    <FontAwesomeIcon icon={['fab', 'fa-linkedin-in']} />
                  </a>
                </li>
                <li>
                  <a href={GITHUB_LINK} target="_blank">
                    <FontAwesomeIcon icon="fab fa-github" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-buttons">
              <a href="/khoale-resume.pdf" target="_blank" className="btn btn-primary">
                Download CV
              </a>
            </div>
          </div>
          <div className="copyrights">© {new Date().getFullYear()} All rights reserved.</div>
        </header>
      </div>
    </div>
  )
}
