window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  /*--------------------------------------------------------------------*/
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("EnsimmainenVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("EnsimmainenVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }

 /*--------------------------------------------------------------------*/
  function lightbox_openToinen() {
    var lightBoxVideo = document.getElementById("ToinenVideo");
    window.scrollTo(0, 0);
    document.getElementById('Toinen').style.display = 'block';
    document.getElementById('fade1').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_closeToinen() {
    var lightBoxVideo = document.getElementById("ToinenVideo");
    document.getElementById('Toinen').style.display = 'none';
    document.getElementById('fade1').style.display = 'none';
    lightBoxVideo.pause();
  }

  /*--------------------------------------------------------------------*/

  function lightbox_openKolmas() {
    var lightBoxVideo = document.getElementById("KolmasVideo");
    window.scrollTo(0, 0);
    document.getElementById('Kolmas').style.display = 'block';
    document.getElementById('fade2').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_closeKolmas() {
    var lightBoxVideo = document.getElementById("KolmasVideo");
    document.getElementById('Kolmas').style.display = 'none';
    document.getElementById('fade2').style.display = 'none';
    lightBoxVideo.pause();
  }

  /*--------------------------------------------------------------------*/
  function lightbox_openNeljas() {
    var lightBoxVideo = document.getElementById("NeljasVideo");
    window.scrollTo(0, 0);
    document.getElementById('Neljas').style.display = 'block';
    document.getElementById('fade3').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_closeNeljas() {
    var lightBoxVideo = document.getElementById("NeljasVideo");
    document.getElementById('Neljas').style.display = 'none';
    document.getElementById('fade3').style.display = 'none';
    lightBoxVideo.pause();
  }

  /*--------------------------------------------------------------------*/

  function lightbox_openViides() {
    var lightBoxVideo = document.getElementById("ViidesVideo");
    window.scrollTo(0, 0);
    document.getElementById('Viides').style.display = 'block';
    document.getElementById('fade4').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_closeNeljas() {
    var lightBoxVideo = document.getElementById("ViidesVideo");
    document.getElementById('Viides').style.display = 'none';
    document.getElementById('fade4').style.display = 'none';
    lightBoxVideo.pause();
  }

  /*--------------------------------------------------------------------*/

  /*
  * @param {string} action
  * @param {string} cateogry
  * @param {string} label
  * */

function sendEventTrackingData(action, category, label) {

  gtag('event', action, {
    'event_category': category,
    'event_label': label

  });


}

