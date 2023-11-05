/* For Xray of earbuds
(() => {
    let imageCon = document.querySelector('#imageCon'),
        drag = document.querySelector('.image-drag'),
        left = document.querySelector('.image-left'),
        dragging = false,
        min = 0,
        max = imageCon.offsetWidth;

    function onDown() {
        dragging = true;
        console.log("set to true");
    }

    function onUp() {
        dragging = false;
        console.log("set to false");
    }

    function onMove(event) {
        if (dragging === true) {
            let x = event.clientX - imageCon.getBoundingClientRect().left;
            console.log(x);

            if (x < min) {
                x = min;
            } else if (x > max) {
                x = max - 10;
            }

            drag.style.left = x + "px";
            left.style.width = x + "px";
        }
    }

    drag.addEventListener('mousedown', onDown);
    document.body.addEventListener('mouseup', onUp);
    document.body.addEventListener('mousemove', onMove);
})();
*/

/* For model viewer live view


(() => { 
  console.log("IIFE Fired");
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  const InfoBoxes = [{
          title: "Touch sensitive controls",
          text: "touch to control play, pause, stop and skip",
      },
      {
          title: "+24 hrs battery backup",
          text: "long lasting music playback",
          image: "img/battery.png",

      },
      {
          title: "Noise cancelling mic",
          text: "blocks outside noise with new AI powered software",
      },
      {
          title: "Fast charging",
          text: "full charge in under 30 minutes",
      },
      {
          title: "Earpiece",
          text: "confort fit for every ear type",
      },
  ];

  function modelLoaded() {
      hotspots.forEach((hotspot) => {
          hotspot.style.display = "block";
      });
  }

  function loadInfo() {
      InfoBoxes.forEach((infoBox, index) => {
          let selected = document.querySelector(`#hotspot-${index + 1}`);

          if (selected) {
              const titleElement = document.createElement("h2");
              titleElement.textContent = infoBox.title;
              titleElement.style.color = "#9cacac";

              const textElement = document.createElement("p");
              textElement.textContent = infoBox.text;

              textElement.style.color = "#161616";



              selected.appendChild(titleElement);
              selected.appendChild(textElement);



              if (infoBox.image) {
                  const imgElement = document.createElement("img");
                  imgElement.src = infoBox.image;
                  imgElement.classList.add("hotspot-image");
                  selected.appendChild(imgElement);
              }




          } else {
              console.log(`#hotspot-${index + 1} not found`);
          }
      });
  }


  loadInfo();

  function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, {
          duration: 0.5,
          autoAlpha: 1,
          visibility: "visible"
      });
  }

  function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, {
          duration: 0.5,
          autoAlpha: 0,
          visibility: "hidden"
      });
  }


  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function(hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
  });
})();



*/ 