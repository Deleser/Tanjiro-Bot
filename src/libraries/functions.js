/*################## Archivo de funciones para el archivo principal (Main) 🚀 ##################*/

/*################## 🍣 Importacion de librerias 🍣 ##################*/

const fetch = require('node-fetch') // Importando node fetch 🚀
const axios = require('axios') // Importando axios 🍕
const spin = require('spinnies') // Importando spinnies 🛠
const Crypto = require('crypto') // Importando crypto 🌲
const fs = require('fs') // Importando fs 😀
const exec = require("child_process").exec // Importando child process 🍃

/*################## 💡 Importacion de modulos 💡 ##################*/

const config = JSON.parse(fs.readFileSync('./config.json')) // Cargando archivo de configuracion 🌚
const {
    nombreBot,
    owner,
    nombreOwner,
    prefijo,
    creditosDefault,
    miembrosMinimo,
    separadorComun,
    separadorArriba,
    separadorAbajo,
    separadorKawaii,
    flecha
} = config;

/*################## 🌴 Inicio del Json 🌴 ##################*/

const getBuffer = async (url, options) => { // Funcion para obtener el buffer de una imagen
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const getGroupAdmins = (participants) => { // Obtener admins de un grupo
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => { // Obtener numero random
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = {  // Animacion con un intervalo de 120 segundos por frame
    "interval": 120,
    "frames": [
      "🌔",
      "🌓",
      "🌒",
      "🌑",
      "🌘",
      "🌗",
      "🌖",
      "🌕",
      "🌔",
      "🌓",
      "🌒",
      "🌑",
      "🌘",
      "🌗",
      "🌖",
    ]}

let globalSpinner; // Haciendo la variable spinner global

const getGlobalSpinner = (disableSpins = false) => {
    if(!globalSpinner) globalSpinner = new spin({ color: 'yellow', succeedColor: 'green', spinner, disableSpins});
    return globalSpinner;
  }
  
spins = getGlobalSpinner(false)

const start = (id, text) => { // Constante start para los spinners
	spins.add(id, {text: text})
}

const exito = (id, text) => { // Constante para definir el inicio de sesion
	spins.succeed(id, {text: text})
	}

const fetchJson = (url, options) => new Promise(async (resolve, reject) => { // FetchJson (Opcione de URL)
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

const log = console.debug

function recognize(filename, config = {}) { // Funcion OCR
  const options = getOptions(config)
  const binary = config.binary || "tesseract"

  const command = [binary, `"${filename}"`, "stdout", ...options].join(" ")
  if (config.debug) log("command", command)

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (config.debug) log(stderr)
      if (error) reject(error)
      resolve(stdout)
    })
  })
}

function getOptions(config) {
  const ocrOptions = ["tessdata-dir", "user-words", "user-patterns", "psm", "oem", "dpi"]

  return Object.entries(config)
    .map(([key, value]) => {
      if (["debug", "presets", "binary"].includes(key)) return
      if (key === "lang") return `-l ${value}`
      if (ocrOptions.includes(key)) return `--${key} ${value}`

      return `-c ${key}=${value}`
    })
    .concat(config.presets)
    .filter(Boolean)
}

const search = async (media) => new Promise(async (resolve, reject) => { // Comando Search 🚀
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`${separadorComun}\n\n_Etiqueta la *imagen*!_\n\n${separadorComun}`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? `${separadorArriba}\n\n_Aqui estan los resultados del *scan*:_ ` : ""
    	let ecch = () => is_adult ? "✅" : "❌"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
${flecha} _Ecchi: *${ecch()}*_
${flecha} _Titulo en Japones: *${title}*_
${flecha} _Titulo en Ingles: *${title_english}*_
${flecha} _Ortografia: *${title_romaji}*_
${flecha} _Episodio: *${episode}*_
${flecha} _Temporada: *${season}*_\n\n${separadorAbajo}`});
	} catch (e) {
		console.log(e)
		reject(`${separadorComun}\n\n_No puedo reconocer esta *imagen*!_\n\n${separadorComun}`)
	}
})

module.exports = { getBuffer, search, getGroupAdmins, getRandom, start, exito, fetchJson, recognize }