import { useEffect, useState } from 'react'
import { Mobile } from './components/mobile'
import { MainBackground } from './components/main-background'
import { Preloader } from './components/preloader'
import { TerminalWindow } from './components/terminal-window'

export function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  return (
    <>
      {!isReady && <Preloader />}
      <div className="max-h-screen overflow-auto py-10 lg:px-10 xl:px-20">
        <MainBackground />
        <div className="lg:border-page-content relative max-w-full rounded-xl">
          <div className="flex w-full justify-center">
            <div className="ml-4 flex w-full items-center max-lg:hidden xl:mx-10">
              <TerminalWindow />
            </div>
            <Mobile />
          </div>
        </div>
      </div>
    </>
  )
}
