/*################## Archivo de colores para el archivo principal (Main) 🚀 ##################*/

/*################## 🍣 Importacion de librerias 🍣 ##################*/

const chalk = require('chalk') // Importando chalk 🌚

/*################## 🌴 Inicio del Json 🌴 ##################*/

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

/*################## 🛠 Exportando modulos 🛠 ##################*/

module.exports = { color }