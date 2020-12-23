console.log('widget loaded')

const rollCredits = () => {
  if (document.URL.includes('/credits')) {
    const buttons = document.querySelectorAll('button')
    const clickButton = (matcher) => {
      for (let i = 0; i < buttons.length; i++ ) {
        if (buttons[i].innerText.toLocaleLowerCase().trim() === matcher ) {
          buttons[i].click()
          return true
        }
      }
    }

    if (document.URL.includes('test=true')) {
      console.log('Testing credits')
      return clickButton('test roll credits')
    } else if (document.URL.includes('activate=true')) {
      console.log('Rolling credits live')
      return clickButton('roll credits live')
    }
  }
}

// Make 5 attempts to click button
let tries = 0

const main = () => {
  tries++
  console.log(`Attempts to roll credits: ${tries}`)
  if (rollCredits() !== true && tries <= 5) {
    window.setTimeout(() => {
      tries++
      main()
    }, 3000)
  }
}

main()
