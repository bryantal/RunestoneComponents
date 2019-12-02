var fontSizeCounter = 1

function increaseTextSize() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  if (fontSizeCounter < 6){
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) * (1.2) + "em";
  fontSizeCounter += 1;
  }
}

function decreaseTextSize() {
  if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "1.0em";
  }
  if (fontSizeCounter > 1){
  document.body.style.fontSize = parseFloat(document.body.style.fontSize) * (5/6) + "em";
  fontSizeCounter -= 1;
  }
}

function resetSize() {
  while (fontSizeCounter > 2){
        decreaseTextSize()
  }
}
