const yallahs = async function() {
  var index = 1;
  var indextwo = 0;
  setInterval(async () => {

    if (index < 453) {
      var isface = 0;
      while (isface < 2) {
        while (indextwo < 3) {
          console.log(document.querySelector(`#content-p${index} .pt-img`));
          var url = document
            .querySelector(`#content-p${index} .pt-img`)
            .children[indextwo].innerHTML.toString();
          var urltow = url.substr(
            url.search("blob:"),
            url.search("alt") - url.search("blob:") - 2
          );

          let response = await fetch(urltow);
          let blobs = await response.blob();

          var a = document.createElement("a");
          var blob = new Blob([blobs], { type: "image/jpeg" });
          a.href = window.URL.createObjectURL(blob);
          a.download = `content-p${index}_${indextwo}.jpg`;
          a.click();
          indextwo++;
        }
        index++;
        indextwo = 0;
        isface++;
      }
    } else {
      return;
    }
    document.dispatchEvent(temp1);
  }, 3500);

};

yallahs();
