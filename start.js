console.log('widget loaded')

if (document.URL.includes('test=true')) {
  console.log('Rolling credits')

  const buttons = document.querySelectorAll('button')

  for (let i = 0; i = buttons.length; i++ ) {
    if (button.innerText.toLocaleLowerCase().trim() === 'test roll credits' ) {
      button.click()
      break;
    }
  }
} else if (document.URL.includes('activate=true')) {
  console.log('Testing credits')

  const buttons = document.querySelectorAll('button')

  for (let i = 0; i = buttons.length; i++ ) {
    if (button.innerText.toLocaleLowerCase().trim() === 'roll credits live' ) {
      button.click()
      break;
    }
  }
}
