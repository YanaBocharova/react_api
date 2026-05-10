import { useEffect } from "react";

// utility: hex to rgb
function hexToRgb(hex) {
  const h = hex.replace('#','');
  const bigint = parseInt(h, 16);
  if (h.length === 6) {
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }
  // fallback
  return [0,0,0];
}

// utility: rgb to hex
function rgbToHex(r,g,b){
  return '#'+[r,g,b].map(x=>{
    const h = Math.round(x).toString(16);
    return h.length===1? '0'+h : h;
  }).join('');
}

function lerp(a,b,t){ return a + (b-a)*t; }

function lerpHex(startHex, endHex, t){
  const s = hexToRgb(startHex);
  const e = hexToRgb(endHex);
  const r = lerp(s[0], e[0], t);
  const g = lerp(s[1], e[1], t);
  const b = lerp(s[2], e[2], t);
  return rgbToHex(r,g,b);
}

export default function useScrollGradient(options = {}){
  // presets (top = lighter, bottom = darker)
  const top = {
    sep1: options.topSep1 || '#1f0b3a',
    sep2: options.topSep2 || '#2b1850',
    footerA: options.topFooter || 'linear-gradient(135deg,#1f0b3a,#2b1850)',
    bottomBg: options.topBottomBg || '#04030a'
  };

  const bottom = {
    sep1: options.bottomSep1 || '#07020b',
    sep2: options.bottomSep2 || '#0e0520',
    footerA: options.bottomFooter || 'linear-gradient(135deg,#07020b,#0e0520)',
    bottomBg: options.bottomBottomBg || '#000'
  };

  useEffect(()=>{
    let raf = null;

    function update(){
      // Prefer computing progress from the footer's position so short pages still show effect
      const footerEl = document.querySelector('.footer-container') || document.querySelector('.bottom-page');
      let t = 0;

      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        // when footer top is at bottom of viewport => t ~ 0
        // when footer top reaches top of viewport => t ~ 1
        t = (viewHeight - rect.top) / (viewHeight + rect.height);
        t = Math.min(1, Math.max(0, t));
      } else {
        const scrollY = window.scrollY || window.pageYOffset;
        const doc = document.documentElement;
        const scrollable = doc.scrollHeight - window.innerHeight;
        t = scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0;
      }

      // interpolate separators
      const s1 = lerpHex(top.sep1, bottom.sep1, t);
      const s2 = lerpHex(top.sep2, bottom.sep2, t);

      // interpolate bottom background roughly by mixing hex colors
      const bb = lerpHex(top.bottomBg, bottom.bottomBg, t);

      // footer gradient can't be simply interpolated as linear-gradient string;
      // build a simple gradient using the two stops we computed
      const footerGradient = `linear-gradient(135deg, ${s1}, ${s2})`;

      const root = document.documentElement;
      root.style.setProperty('--sep-stop-1', s1);
      root.style.setProperty('--sep-stop-2', s2);
      root.style.setProperty('--bottom-bg', bb);
      root.style.setProperty('--footer-bg', footerGradient);

      raf = null;
    }

    function onScroll(){
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // initial
    onScroll();

    return ()=>{
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  // include specific option-derived values so effect updates if presets change
  }, [
    top.sep1,
    top.sep2,
    top.bottomBg,
    bottom.sep1,
    bottom.sep2,
    bottom.bottomBg,
  ]);
}
