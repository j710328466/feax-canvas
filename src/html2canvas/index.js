import html2canvas from 'html2canvas'
import QRCode from "qrcode"

window.onload = () => {

    
}

document.querySelector('.show').onclick = function () {
  draw()
}

function draw(params) {
  let opt = {
    errorCorrectionLevel: "L",
    type: "image/jpeg",
    rendererOpts: {
      quality: 0.8
    }
  };

  QRCode.toDataURL("I am a pony!", opt, (err, url) => {
    if (err) console.log(err)
    document.querySelector('.qrcode').src = url
  })

  let targetDom = document.getElementById("draw")

  html2canvas(targetDom, {
    allowTaint: false,
    useCORS: true,
    height: targetDom.scrollHeight,
    width: targetDom.scrollWidth,
  }).then(function (canvas) {
    let url = canvas.toDataURL("image/jpeg", 0.8);
    document.querySelector(".copy_pic").src = url;
    document.querySelector('.draw').style.display = 'none'
  });
}