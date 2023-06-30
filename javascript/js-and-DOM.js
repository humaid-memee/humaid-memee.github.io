document.getElementById('exampleJsDomButton').onclick = exampleButton

function exampleButton() {
  const button = document.getElementById('exampleJsDomButton')
  button.setAttribute('id', 'changedJsDOMButton')
}
