// ==UserScript==
// @name     binki-google-youtube-music-volume
// @version  1.0
// @author Nathan Phillip Brink (binki) (@ohnobinki)
// homepageURL https://github.com/binki/binki-google-youtube-music-volume/
// @include https://music.youtube.com/*
// ==/UserScript==

// To see the custom elements’ properties, must run as content script. The easiest
// way to do that is with window.eval, but YouTube added a CSP against that (see #3).
const script = document.createElementNS(document.body.namespaceURI, 'script');
script.textContent = `(${() => {
    const div = document.createElementNS(document.body.namespaceURI, 'div');
    div.style = 'position: absolute; left: 0; top: 0; z-index: 100;';
    document.body.append(div);
    for (const value of [
      5,
      10,
      50,
      100,
    ]) {
      const button = document.createElementNS(document.body.namespaceURI, 'button');
      button.style = 'color: #ccc; background: #333; border: none; border-radius: 1em;';
      button.type = 'button';
      button.addEventListener('click', () => {
        const slider = document.getElementById('expand-volume-slider');
        slider.value = value;
        slider.dispatchEvent(new Event('change'));
      });
      button.textContent = `${value}%`;
      div.append(button);
      div.append(document.createTextNode(' '));
    }
  }})();`;
document.head.append(script);
