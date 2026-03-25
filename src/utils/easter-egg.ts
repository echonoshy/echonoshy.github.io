const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function initEasterEggs() {
  let seq: string[] = []

  window.addEventListener('keydown', (e) => {
    seq.push(e.key)
    if (seq.length > KONAMI.length) {
      seq = seq.slice(-KONAMI.length)
    }
    if (seq.length === KONAMI.length && seq.every((k, i) => k === KONAMI[i])) {
      triggerKonami()
      seq = []
    }
  })
}

function triggerKonami() {
  const el = document.createElement('div')
  el.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,0.8);
    animation: fadeIn 0.3s ease;
    cursor: pointer;
  `
  el.innerHTML = `
    <div style="text-align:center;color:#f5f3eb;">
      <div style="font-size:4rem;margin-bottom:1rem;">🎮</div>
      <div style="font-family:monospace;font-size:1.2rem;color:#c4956a;">+30 EXP</div>
      <div style="font-size:0.85rem;margin-top:0.5rem;color:#9a9a97;">you found a secret.</div>
    </div>
  `
  el.addEventListener('click', () => {
    el.style.opacity = '0'
    el.style.transition = 'opacity 0.3s'
    setTimeout(() => el.remove(), 300)
  })
  document.body.appendChild(el)
}
