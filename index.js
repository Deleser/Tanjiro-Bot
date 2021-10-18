/*################## 🍣 Importacion de librerias 🍣 ##################*/

const lolcatjs = require('lolcatjs'); // Importando lolcat (version JS) 🚀
const { exec } = require('child_process') // Importando child process 🍃
const CFonts = require('cfonts'); // Importando Cfonts 📬

/*################## 💡 Importacion de modulos 💡 ##################*/

let { spawn } = require('child_process') // Importando el modulo ChildProcess 🚀
let path = require('path'); // Importando el modulo path 💰
const { clear } = require('console') // Importando clear! 🦊

/*################## 🍤 Variables 🍤 ##################*/

let oslet = process.platform // Plataforma

/*################## 🌲 Funciones 🌲 ##################*/

function banner_start(){
    CFonts.say('Tanjiro-Bot|Hiro', { // Banner principal 🎩
        font: 'console',
        align: 'center',
        gradient: ['yellow', 'cyan']
    })
}

function init() {
  let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)] // Funcion de inicio 🍕
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['yellow', 'cyan']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('[RESET]')
      p.kill()
      init()
      delete p
    }
  })
}

/*################## 🌴 Inicio del bot 🌴 ##################*/

if (oslet == 'win32') {
  exec('rmdir /s Tanjiro-MD')
      exec('git clone https://github.com/Hiro-Beet/Tanjiro-MD.git')
} else {
  exec('rm -rf Tanjiro-MD')
      exec('git clone https://github.com/Hiro-Beet/Tanjiro-MD.git')
}

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

clear()
console.log()
lolcatjs.fromString('[TANJIRO] Que bueno volver a verte Hiro!')
console.log('-------------------------------------------------------------------------------------------------------------------------------------')
banner_start()
console.log('-------------------------------------------------------------------------------------------------------------------------------------')
init()
console.log('-------------------------------------------------------------------------------------------------------------------------------------')
lolcatjs.fromString('[SERVIDOR] Developed by Hiro')