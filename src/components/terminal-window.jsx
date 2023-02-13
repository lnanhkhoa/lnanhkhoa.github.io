import React, { useState, useRef } from 'react'
import { BLACKLISTED_KEY_CODES, COMMANDS } from '../constants'

export function TerminalWindow() {
  const [inputText, setInputText] = useState('')
  const terminalOutputRef = useRef(null)
  const terminalOutput = terminalOutputRef.current
  const terminalInputRef = useRef(null)

  function handClick() {
    terminalInputRef.current?.focus()
  }

  function onChange(e) {
    const value = e.target.value
    console.log({ value })
    setInputText(value)
  }

  function executeCommand(input) {
    console.log('input', input)
    input = input.toLowerCase()
    if (input.length === 0) {
      return
    }
    let output = `<div className="terminal-line"><span className="success">➜</span> <span className="directory">~</span> ${input}</div>`

    const command = Object.keys(COMMANDS).find((i) => i.startsWith(input))

    if (!command) {
      output += `<div className="terminal-line">no such command: ${input}</div>`
      console.log('Oops! no such command')
    } else {
      output += COMMANDS[command]
    }

    if (input === 'clear') {
      terminalOutput.innerHTML = ``
    } else {
      terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div className="terminal-line">${output}</div>`
      terminalOutput.scrollTop = terminalOutput.scrollHeight
    }
  }

  function keyPressEvent(e) {
    if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
      return
    }

    if (e.key === 'Enter') {
      executeCommand(inputText)
      setInputText('')
      const element = document.getElementById("terminal-window")
      element.scrollTop = element.scrollHeight
      return
    }
  }

  function backSpaceKeyEvent(e) {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      return
    }
  }

  React.useEffect(() => {
    document.getElementById('help-text').innerHTML = COMMANDS.help
  }, [])

  React.useEffect(() => {
    window.addEventListener('keydown', keyPressEvent)
    return () => {
      window.removeEventListener('keydown', keyPressEvent)
    }
  }, [inputText, backSpaceKeyEvent, keyPressEvent])

  return (
    <div className="terminal-shadow w-full">
      <div className="terminal-bar dark-mode">
        <div className="icon-btn close"></div>
        <div className="icon-btn min"></div>
        <div className="icon-btn max"></div>
        <div className="terminal-bar-text is-hidden-mobile dark-mode-text">guest@lnanhkhoa.github.io: ~</div>
      </div>
      <div className="terminal-window primary-bg" id="terminal-window" onClick={handClick}>
        <div className="terminal-output" ref={terminalOutputRef}>
          <div className="terminal-line">
            <span className="help-msg">
              Welcome to <a href="/">lnanhkhoa.github.io</a>
              <p id="help-text"></p>
              <p>
                Type <span className="code"> help</span> for a list of supported commands.
              </p>
            </span>
          </div>
        </div>
        <div className="terminal-line">
          <span className="success">➜</span>
          <span> </span>
          <span className="directory">~</span>
          <span> </span>
          <span className="user-input">{inputText}</span>
          <input type="text" className="dummy-keyboard" lang='en' onChange={onChange} value={inputText} ref={terminalInputRef} />
        </div>
      </div>
    </div>
  )
}
