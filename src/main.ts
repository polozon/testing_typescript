import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { TeslaModelS } from './interfaces.ts'
import { Pair } from './interfaces.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// ---- Added to test the Tesla interface ----

function buildTeslaModelS (teslaObj: TeslaModelS) {
  console.log("Car length = ", teslaObj.length)
}

buildTeslaModelS({
  length: 196,
  width: 86,
  wheelbase: 116,
  seatingCapacity: 4,
  getTyrePressure: function () {
      let tyrePressure = 20 // Evaluated after doing a few complex computations!
      return tyrePressure
  },
  getRemCharging: function () {
      let remCharging = 20 // Evaluated after doing a few complex computations!
      return remCharging
  }
})

// Look at https://www.typescripttutorial.net/typescript-tutorial/typescript-generic-interfaces/

let month: Pair<string, number> = {
  key: 'Jan',
  value: 1
};

console.log(month.key);