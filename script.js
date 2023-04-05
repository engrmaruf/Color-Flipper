const colorCodeElem = document.getElementById('color-code');
const resultText = document.getElementById('resultText');
const copyBtn = document.getElementById('copy-btn');
const container = document.getElementById('container');
const changeBtn = document.getElementById('change-btn');

copyBtn.addEventListener('click', () => {
  const colorCode = colorCodeElem.innerText;
  navigator.clipboard.writeText(colorCode)
    .then(() => {
        resultText.style.display = 'block';

        resultText.innerText =`Copied color code to clipboard: ${colorCode}`;
    })
    .catch(err => {
        resultText.style.display = 'block';
      resultText.innerText =`Failed to copy color code: ${err}`;

    });
});

changeBtn.addEventListener('click', () => {
  const colorCode = generateRandomColor();
  container.style.backgroundColor = colorCode;
  colorCodeElem.innerText = colorCode;
  resultText.style.display = 'none';

});

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    hexCode += letters[Math.floor(Math.random() * 16)];
  }
  return hexCode;
}

// Initial color generation
const initialColor = generateRandomColor();
container.style.backgroundColor = initialColor;
colorCodeElem.innerText = initialColor;
