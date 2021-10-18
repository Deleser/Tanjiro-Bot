/*################## 🍣 Importacion de librerias 🍣 ##################*/

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
} = require('@adiwajshing/baileys') // Importando baileys 🗺
const fs = require('fs') // Importando fs 💳
const moment = require('moment-timezone') // Importando moment timezone ⚜
const { exec } = require('child_process') // Importando child process 🍃
const fetch = require('node-fetch') // Importando node fetch 🚀
const speed = require('performance-now') // Importando performance now 🎩
const rimraf = require("rimraf") // Importando rimraf 🎵
const crypto = require('crypto') // Importando crypto 🌲
const axios = require('axios') // Importando axios 🍕
const lolcatjs = require('lolcatjs') // Importando lolcatjs 🌚
const ffmpeg = require('fluent-ffmpeg') // Importando ffmpeg 🧐

/*################## 💡 Importacion de modulos 💡 ##################*/

const { color } = require('./src/libraries/colores')
const { getBuffer, search, getGroupAdmins, getRandom, start, exito, fetchJson, recognize } = require('./src/libraries/functions')
const config = JSON.parse(fs.readFileSync('./config.json')) // Cargando archivo de configuracion 🌚

/*################## 🌚 Variables/Constantes 🌚 ##################*/

const owner = config.configuracion.personalizable.owner.owner
const nombreOwner = config.configuracion.personalizable.owner.nombreOwner
const menu_owner_response = config.configuracion.personalizable.owner.menu_owner_response
const ms_apagado = config.configuracion.personalizable.power.ms_apagado
const nombreBot = config.configuracion.personalizable.nombreBot
const prefijo = config.configuracion.personalizable.prefijo
const zona_horaria = config.configuracion.personalizable.zona_horaria
const cooldown_activado = config.configuracion.personalizable.opciones.cooldown.activado
const ms_espera = config.configuracion.personalizable.opciones.cooldown.ms_espera
const dm_activado = config.configuracion.personalizable.opciones.comandos_DM
const menu_response = config.configuracion.menu.menu_response
const separadorComun = config.configuracion.menu.separadorComun
const separadorArriba = config.configuracion.menu.separadorArriba
const separadorAbajo = config.configuracion.menu.separadorAbajo
const separadorKawaii = config.configuracion.menu.separadorKawaii
const flecha = config.configuracion.menu.flecha
const mensaje_a_espera = config.configuracion.mensajes.espera
const mensaje_a_hecho = config.configuracion.mensajes.hecho
const mensaje_a_solo_grupo = config.configuracion.mensajes.solo_grupo
const mensaje_a_solo_admin = config.configuracion.mensajes.solo_admin
const mensaje_a_tanjiro_admin = config.configuracion.mensajes.tanjiro_admin
const mensaje_a_largo = config.configuracion.mensajes.mensaje_largo
const mensaje_a_corto = config.configuracion.mensajes.mensaje_corto
const mensaje_a_muy_largo = config.configuracion.mensajes.mensaje_muy_largo
const mensaje_a_peticiones = config.configuracion.mensajes.muchas_peticiones
const creditosDefault = config.configuracion.stats.creditosDefault // Futuro :3
const miembrosMinimo = config.configuracion.stats.miembrosMinimo
const minecraft_activado = config.configuracion.minecraft.activado
const minecraft_bedrock = config.configuracion.minecraft.bedrock
const minecraft_nombre = config.configuracion.minecraft.minecraft_nombre
const ip_minecraft = config.configuracion.minecraft.ip_minecraft
const puerto_minecraft = config.configuracion.minecraft.puerto_minecraft
const minecraft_response = config.configuracion.minecraft.minecraft_response
const debug = config.developer.debug
const version = config.developer.version
const Mail_Organizacion = config.developer.mail_Organizacion
const linkgroupdev = config.developer.linkgroupdev
const usuario_github = config.developer.usuario_Github
const golden_patreon = config.developer.golden_Patreon
const nezuko_api = config.developer.nezuko_Api
const organizacion = config.developer.organizacion
const hirogithub = config.developer.hiroGithub
const repositorio = config.developer.repositorio
const repositorio_nezuko_api = config.developer.repositorio_nezuko_api
const botID = config.developer.no_tocar.botID

const segundos_espera = `${ms_espera}` / 1000
const segundos_apagado = `${ms_apagado}` / 1000

var credenciales_Existen = fs.existsSync(`./Tanjiro-MD/${botID}.txt`) // Comprobacion de credenciales
var osvar = process.platform // Plataforma

/*################## 🍕 Importacion de archivos locales 🍕 ##################*/

if (osvar == 'win32') {
    exec('rmdir /s Tanjiro-MD')
        exec('git clone https://github.com/Hiro-Beet/Tanjiro-MD.git')
} else {
    exec('rm -rf Tanjiro-MD')
        exec('git clone https://github.com/Hiro-Beet/Tanjiro-MD.git')
}

if (`${credenciales_Existen}` === 'true') {

    try {

const { menu_1 } = require('./src/menu/menu_1') // Primer menu
const { menu_2 } = require('./src/menu/menu_2') // Segundo menu
const { menu_owner } = require('./src/menu/menu_owner') // Menu owner
const { mine_server } = require('./src/menu/mineserver') // Menu MineServer
const { menu_staff, menu_staff_premium } = require('./src/menu/menu_staff') // Menu Staff
const { menu_principal, smenu_principal, omenu_principal, pmenu_principal, p2menu_principal } = require('./src/menu/menu_principal') // Menu principal
const premium = JSON.parse(fs.readFileSync('./db/grupos/premium/premium.json')) // Importando DB (grupos premium)
const tanjiro_off = JSON.parse(fs.readFileSync('./db/grupos/baneados/tanjiro_off.json')) // Importando DB (tanjiro off)
const grupos_baneados = JSON.parse(fs.readFileSync('./db/grupos/baneados/grupos_baneados.json')) // Importando DB (grupos baneados)
const bienvenida = JSON.parse(fs.readFileSync('./db/grupos/bienvenida/bienvenida.json')) // Importando DB (grupos con bienvenida)
const despedida = JSON.parse(fs.readFileSync('./db/grupos/despedida/despedida.json')) // Importando DB (grupos con despedida)
const scespera = JSON.parse(fs.readFileSync('./db/grupos/espera/scespera.json')) // Importando DB (DB de espera de sclose)

/*################## 🍃 ETC 🍃 ##################*/

const ownercard = 'BEGIN:VCARD\n' // Metadatos de la VCARD
    + 'VERSION:3.0\n'
    + 'FN:Owner-Hiro\n' // Nombre compvaro
    + 'ORG:DarknessParadise;\n' // Organizacion
    + 'TEL;type=CELL;type=VOICE;waid=447309247974:+44 7309 247974\n' // Numero dew WhatsApp
    + 'END:VCARD'

/*################## ⚙ Configs ⚙ ##################*/

blocked = []

/*################## 🌴 Inicio del bot 🌴 ##################*/

async function starts() { // Inicio del bot
    const tanjiro = new WAConnection()
    tanjiro.logger.level = 'warn'
    tanjiro.on('qr', () => {
        console.log(color('[', 'white'), color('!', 'red'), color(']', 'white'), color(' [SERVIDOR] Escanea el codigo QR!'))
    })
    fs.existsSync('./db/token/Tanjiro_Token.json') && tanjiro.loadAuthInfo('./db/token/Tanjiro_Token.json') // Guardado/Comprobacion del token
    tanjiro.on('connecting', () => {
        start('2', ' [SERVIDOR] Conectando...')
    })
    tanjiro.on('open', () => {
        exito('2', '[SERVIDOR] Tanjiro-Bot se ha conectado correctamente!')
    })

    await tanjiro.connect({ timeoutMs: 30 * 1000 })
    fs.writeFileSync('./db/token/Tanjiro_Token.json', JSON.stringify(tanjiro.base64EncodedAuthInfo(), null, '\t'))

    lolcatjs.fromString('[SERVIDOR] Cargando archivos...')
    lolcatjs.fromString(`[TANJIRO] Bienvenido de vuelta ${nombreOwner}!`)
    lolcatjs.fromString('[SERVIDOR] Cargando chats...')

    tanjiro.on('chats-received', async ({ hasNewChats }) => {
            lolcatjs.fromString(`[TANJIRO] Tienes ${tanjiro.chats.length} chats!`)
            if (`${hasNewChats}` == 'true') {
                lolcatjs.fromString(`[TANJIRO] Tienes nuevos chats, date prisa!`)
            } else if (`${hasNewChats}` == 'false') {
                lolcatjs.fromString(`[TANJIRO] Oh, no hay nuevos chats! :(`)
            }
    })

    tanjiro.on('CB:Blocklist', json => { // Comprobacion de usuarios bloqueados   
        if (blocked.length > 2) return
        for (var i of json[1].blocklist) {
            blocked.push(i.replace('c.us', 's.whatsapp.net'))
        }
    })

    tanjiro.on('group-participants-update', async (shinobu) => { // Funcion de despedida
        if (!despedida.includes(shinobu.jid)) return
            try {
                const data = await tanjiro.groupMetadata(shinobu.jid)
                    if (shinobu.action == 'remove') {
                        viejo_participante = shinobu.participants[0]
                            try {
                                get_foto = await tanjiro.getProfilePicture(`${shinobu.participants[0].split('@')[0]}@c.us`)
                            } catch {
                                get_foto = 'https://i.ibb.co/Wgs2WCL/guest-despedida.jpg'
                            }
                                var texto_despedida =[`_*@${viejo_participante.split('@')[0]}* se acaba de ir del grupo *${data.subject}*, espero que vuelva pronto :(_`,`_Oh no, *@${viejo_participante.split('@')[0]}* se ha perdido en el bosque! Ahora sera una persona menos en *${data.subject}*_`] // Diferentes textos de despedida!
                                    const texto_despedida_random = texto_despedida[Math.floor(Math.random() * texto_despedida.length)]
                                        var buFFer = await getBuffer(get_foto)
                                            tanjiro.sendMessage(data.id, buFFer, MessageType.image, {caption: `${separadorKawaii}\n\n`+texto_despedida_random+`\n\n${separadorKawaii}`, contextInfo: {"mentionedJid": [viejo_participante]}})
            }
                } catch (e) {
                    null;
            }})

    tanjiro.on('group-participants-update', async (zenitsu) => { // Funcion de bienvenida
		if (!bienvenida.includes(zenitsu.jid)) return
		    try {
			    const data = await tanjiro.groupMetadata(zenitsu.jid)
			        if (zenitsu.action == 'add') {
				        nuevo_participante = zenitsu.participants[0]
				            try {
					            get_foto = await tanjiro.getProfilePicture(`${zenitsu.participants[0].split('@')[0]}@c.us`)
				            } catch {
					            get_foto = 'https://i.ibb.co/xJfpDy0/guest.jpg'
				            }
				                var texto_bienvenida =[`_Hola! *@${nuevo_participante.split('@')[0]}* me llamo *Tanjiro* y acabas de entrar a el grupo llamado *${data.subject}*, disfruta!_`,`_Hey! acaba de aparecer alguien en el bosque, creo que se llama *@${nuevo_participante.split('@')[0]}*, bienvenid@ a la aldea *${data.subject}*, soy Tanjiro, un placer!_`] // Diferentes textos de bienvenida!
                                    const texto_bienvenida_random = texto_bienvenida[Math.floor(Math.random() * texto_bienvenida.length)]
				                        var buFfer = await getBuffer(get_foto)
				                            tanjiro.sendMessage(data.id, buFfer, MessageType.image, {caption: `${separadorKawaii}\n\n`+texto_bienvenida_random+`\n\n${separadorKawaii}`, contextInfo: {"mentionedJid": [nuevo_participante]}})
            }
                } catch (e) {
                    null;
            }})

    tanjiro.on('chat-update', async (nezuko) => {
        try {
            if (!nezuko.hasNewMessage) return
            nezuko = JSON.parse(JSON.stringify(nezuko)).messages[0]
            if (!nezuko.message) return
            if (nezuko.key && nezuko.key.remoteJid == 'status@broadcast') return
            if (nezuko.key.fromMe) return
            global.prefijo
            global.blocked
            const content = JSON.stringify(nezuko.message)
            const from = nezuko.key.remoteJid
            const type = Object.keys(nezuko.message)[0]
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const time = moment.tz(`${zona_horaria}`).format('DD/MM HH:mm:ss')
            const body = (type === 'conversation' && nezuko.message.conversation.startsWith(prefijo)) ? nezuko.message.conversation : (type == 'imageMessage') && nezuko.message.imageMessage.caption.startsWith(prefijo) ? nezuko.message.imageMessage.caption : (type == 'videoMessage') && nezuko.message.videoMessage.caption.startsWith(prefijo) ? nezuko.message.videoMessage.caption : (type == 'extendedTextMessage') && nezuko.message.extendedTextMessage.text.startsWith(prefijo) ? nezuko.message.extendedTextMessage.text : ''
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            const args = body.trim().split(/ +/).slice(1)
            const input = args.join(' ')
            const esCmd = body.startsWith(prefijo)
            const adicion_numero = [`0@s.whatsapp.net`]

/*################## 🗺 Clases 🗺 ##################*/

            mensajes = {
                espera: `${separadorComun}\n\n${mensaje_a_espera}\n\n${separadorKawaii}`,
                hecho: `${separadorComun}\n\n${mensaje_a_hecho}\n\n${separadorKawaii}`,
                error: {
                    no_comparado: `${separadorComun}\n\n${mensaje_a_espera}\n\n${separadorKawaii}`,
                    largo: `${separadorComun}\n\n${mensaje_a_largo}\n\n${separadorKawaii}`,
                    corto: `${separadorComun}\n\n${mensaje_a_corto}\n\n${separadorKawaii}`,
                    largo_2: `${separadorComun}\n\n${mensaje_a_muy_largo}\n\n${separadorKawaii}`,
                    peticiones: `${separadorComun}\n\n${mensaje_a_peticiones}\n\n${separadorKawaii}`
                },
                solo: {
                    grupo: `${separadorComun}\n\n${mensaje_a_solo_grupo}\n\n${separadorKawaii}`,
                    owner: `${separadorComun}\n\n_No tienes permiso de usar este comando!_ ❌\n\n${separadorKawaii}`,
                    admin: `${separadorComun}\n\n${mensaje_a_solo_admin}\n\n${separadorKawaii}`,
                    tanjiroAdmin: `${separadorComun}\n\n${mensaje_a_tanjiro_admin}\n\n${separadorKawaii}`
                }
            }

            const numerobot = tanjiro.user.jid
            const esGrupo = from.endsWith('@g.us')
            const totalchat = await tanjiro.chats.all()
            const sender = esGrupo ? nezuko.participant : nezuko.key.remoteJid
            const groupMetadata = esGrupo ? await tanjiro.groupMetadata(from) : ''
            const groupName = esGrupo ? groupMetadata.subject : ''
            const groupId = esGrupo ? groupMetadata.jid : ''
            const groupMembers = esGrupo ? groupMetadata.participants : ''
            const groupAdmins = esGrupo ? getGroupAdmins(groupMembers) : ''
            const esTanjiroAdmin = groupAdmins.includes(numerobot) || false
            const esAdmin = groupAdmins.includes(sender) || false
            const esOwner = owner.includes(sender)
            const esPremium = esGrupo ? premium.includes(from) : false
            const esTanjiroOff = esGrupo ? tanjiro_off.includes(from) : false
            const esGrupoBaneado = esGrupo ? grupos_baneados.includes(from) : false
            const esBienvenida = esGrupo ? bienvenida.includes(from) : false
            const esDespedida = esGrupo ? despedida.includes(from) : false
            const esEspera = esGrupo ? scespera.includes(from) : false
            pushname = tanjiro.contacts[sender] != undefined ? tanjiro.contacts[sender].vname || tanjiro.contacts[sender].notify : undefined

/*################## 🌲 Funciones 🌲 ##################*/

            const reply = (texto) => { // Crea la funcion reply
                tanjiro.sendMessage(from, texto, text, { quoted: nezuko })
            }
            const sendMess = (uwu, texto) => { // Crea la funcion sendMess
                tanjiro.sendMessage(uwu, texto, text)
            }
            const mentions = (texto, miembro, id) => { // Crea la funcion mentions
                (id == null || id == undefined || id == false) ? tanjiro.sendMessage(from, texto.trim(), extendedText, { contextInfo: { 'mentionedJid': miembro } }) : tanjiro.sendMessage(from, texto.trim(), extendedText, { quoted: nezuko, contextInfo: { 'mentionedJid': miembro } })
            }
            const sendImage = (texto) => { // Crea la funcion send image
                tanjiro.sendMessage(from, texto, image, { quoted: nezuko })
            }

            const sendFile = (mensaje, tipo, primer_objetivo, segundo_objetivo) => { // Crea la funcion sendFile
                tanjiro.sendMessage(from, mensaje, tipo, {quoted: { key: { fromMe: false, participant: `${primer_objetivo}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${segundo_objetivo}` }}})
            }

            if (esGrupo === true) // Funcion para dejar el grupo si tiene menos de X miembros
                try {
                    const getMiembrosLeave = groupMembers.length
                        if (getMiembrosLeave < miembrosMinimo)
                            mensaje_pocos_miembros = `${separadorComun}\n\n_Este grupo tiene menos de *${miembrosMinimo} miembros*, tendre que irme!_\n\n${separadorKawaii}`
                                reply(mensaje_pocos_miembros)
                        setTimeout( () => {
                        tanjiro.groupLeave (from)
                            }, 2000)
                } catch {
                    null;
                }

            if (`${debug}` === 'false') {
                setInterval ( () => {
                    try {
                        rimraf.sync('.npm')
                    } catch(err) {
                        null;
                        }
                    }, 100)
            }

            colores = ['red', 'white', 'black', 'blue', 'yellow', 'green']
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            if (!esGrupo && esCmd) console.log(`\x1b[1;31m${flecha}`, '[\x1b[1;32mRECIBIDO\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'palabras :', color(args.length))
            if (!esGrupo && !esCmd) console.log(`\x1b[1;31m${flecha}`, '[\x1b[1;31mRECIBIDO\x1b[1;37m]', time, color('mensaje'), 'de', color(sender.split('@')[0]), 'palabras :', color(args.length))
            if (esCmd && esGrupo) console.log(`\x1b[1;31m${flecha}`, '[\x1b[1;32mRECIBIDO\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'palabras :', color(args.length))
            if (!esCmd && esGrupo) console.log(`\x1b[1;31m${flecha}`, '[\x1b[1;31mRECIBIDO\x1b[1;37m]', time, color('mensaje'), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'palabras :', color(args.length))

            switch (command) {

/*################## 🦊 Menu/s 🦊 ##################*/

                case 'menu': // Menu Principal
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === true && esOwner === true || esGrupo === false && esOwner === true) {
                        await tanjiro.updatePresence(from, Presence.available)
                            await sendFile(omenu_principal(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break
                    } else if (esGrupo === true && esPremium === true && esAdmin === true) {
                        await tanjiro.updatePresence(from, Presence.available)
                            await sendFile(p2menu_principal(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break
                    } else if (esGrupo === true && esPremium === true) {
                        await tanjiro.updatePresence(from, Presence.available)
                            await sendFile(pmenu_principal(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break
                    } else if (esGrupo === true && esAdmin === true) {
                        await tanjiro.updatePresence(from, Presence.available)
                            await sendFile(smenu_principal(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break
                    } else {
                        await tanjiro.updatePresence(from, Presence.available)
                            await sendFile(menu_principal(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break
                    }
                        break

                case 'menu1': // Menu 1
                    case 'menu_1':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else await tanjiro.updatePresence(from, Presence.available)
                            sendFile(menu_1(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                break

                case 'menu2': // Menu 2
                    case 'menu_2':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else await tanjiro.updatePresence(from, Presence.available)
                                sendFile(menu_2(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub), text, adicion_numero, menu_response)
                                    break

                case 'owner_menu': // Menu Owner
                    case 'ownermenu':
                        case 'menuowner':
                            if (esOwner === false) {
                                await tanjiro.updatePresence(from, Presence.available)
                                    reply(mensajes.solo.owner)
                            } else if (esOwner === true) {
                                await tanjiro.updatePresence(from, Presence.available)
                                    sendFile(menu_owner(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft), text, adicion_numero, menu_owner_response)
                                        break
                            }
                        
                    

                case 'mineserver': // SubMenu
                    case'mine_server':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${minecraft_activado}` !== 'true') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                    break
                        } else {
                            await tanjiro.updatePresence(from, Presence.available) 
                                sendFile(mine_server(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft), text, adicion_numero, minecraft_response)
                        }
                            break

                case 'staffmenu': // Menu Staff
                    case 'menustaff':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false) {
                            await tanjiro.updatePresence(from, Presence.available)
                                reply(mensajes.solo.grupo)
                                    break
                        } else if (esAdmin === false) {
                            await tanjiro.updatePresence(from, Presence.available)
                                reply(mensajes.solo.admin)
                                    break
                        } else if (esGrupo === true && esAdmin === true && esPremium === true) {
                            await tanjiro.updatePresence(from, Presence.available)
                                sendFile(menu_staff_premium(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft), text, adicion_numero, menu_response)
                                    break
                        } else if (esGrupo === true && esAdmin === true) {
                            await tanjiro.updatePresence(from, Presence.available)
                                sendFile(menu_staff(nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft), text, adicion_numero, menu_response)
                                    break
                        }
                            break

/*################## 📣 Codigo (bot) 📣 ##################*/

/*################## 👑 Owner 👑 ##################*/

/*################## 🌲 Menu DB 🌴 ##################*/

                case 'premium': // Agregar/Quitar grupos premium (Owner)
                    if (`${body.slice(9)}` < 9 && esOwner === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        if (`${body.slice(9)}` === `on`) {
                            if (esPremium) return reply(`${separadorComun}\n\n_*${groupMetadata.subject}* ya es un grupo premium! ❌_\n\n${separadorKawaii}`)
                               await premium.push(from)
                                    await fs.writeFileSync('./db/grupos/premium/premium.json', JSON.stringify(premium))
                                        reply(`${separadorComun}\n\n_Felicidades! Ahora *${groupMetadata.subject}* es un grupo premium! ✅_\n\n${separadorKawaii}`)
                                            break
                    } else if (`${body.slice(9)}` === `off`) {
                        if (esPremium === false) return reply(`${separadorComun}\n\n_*${groupMetadata.subject}* ya no es un grupo premium! ❌_\n\n${separadorKawaii}`) // Correcion de bugs
                                await premium.splice(from, 1)
                                    await fs.writeFileSync('./db/grupos/premium/premium.json', JSON.stringify(premium))
                                        reply(`${separadorComun}\n\n_*${groupMetadata.subject}* ya no es un grupo premium! ✅_\n\n${separadorKawaii}`)
                                            break
                        } else {
                            reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                        }
                    }
                        break

                case 'bangroup': // Agregar/Quitar grupos baneados (Owner)
                    case 'bangroup':
                        if (`${body.slice(9)}` < 9 && esOwner === true){
                            reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                                break
                        } else if (esGrupo === false) {
                            reply(mensajes.solo.grupo)
                                break
                        } else if (esOwner === false) {
                            reply(mensajes.solo.owner)
                                break
                        } else if (esOwner === true) {
                            if (`${body.slice(10)}` === `on`) {
                                if (esGrupoBaneado) return reply(`${separadorComun}\n\n_*${groupMetadata.subject}* ya esta baneado! ❌_\n\n${separadorKawaii}`)
                                await grupos_baneados.push(from)
                                        await fs.writeFileSync('./db/grupos/baneados/grupos_baneados.json', JSON.stringify(grupos_baneados))
                                            reply(`${separadorComun}\n\n_Atencion *${groupMetadata.subject}* acaba de ser baneado! ✅_\n\n${separadorKawaii}`)
                                                break
                        } else if (`${body.slice(10)}` === `off`) {
                            if (esGrupoBaneado === false) return reply(`${separadorComun}\n\n_*${groupMetadata.subject}* ya esta baneado! ❌_\n\n${separadorKawaii}`) // Correcion de bugs
                                    await grupos_baneados.splice(from, 1)
                                        await fs.writeFileSync('./db/grupos/baneados/grupos_baneados.json', JSON.stringify(grupos_baneados))
                                            reply(`${separadorComun}\n\n_*${groupMetadata.subject}* acaba de ser desbaneado! ✅_\n\n${separadorKawaii}`)
                                                break
                            } else {
                                reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                            }
                        }
                            break

/*################## 🌑 Funciones Power 🌑 ##################*/

                case 'power': // Agregar/Quitar grupos premium (Owner)
                    if (`${body.slice(7)}` < 7 && esOwner === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        if (`${body.slice(7)}` === `off`) {
                            tanjiro.updatePresence(from, Presence.composing)
                                foto_power_off = `https://i.ibb.co/s3Y7FxG/off.jpg`
                                    var aBuff3R = await getBuffer(foto_power_off)
                                        apagado = `${separadorComun}\n\n_Oh, parece que me tengo que ir... me apagare en *${segundos_apagado}* segundos!_\n\n${separadorKawaii}`
                                            tanjiro.sendMessage(from, aBuff3R, MessageType.image, {quoted: nezuko, caption: apagado})
                                                setTimeout ( () => {
                                                    tanjiro.close()
                                                }, `${ms_apagado}`)
                                                    break
                        }
                    }
                        break

/*################## ✨ Tools de Owner ✨ ##################*/

                case 'block': // Funcion de bloqueo (Owner)
                    if (`${body.slice(7)}` < 7 && esOwner === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            await tanjiro.blockUser (`${body.slice(8)}@c.us`, "add")
                                reply(`${separadorComun}\n\n_*@${body.slice(8)}* ha sido bloquead@!_\n\n${separadorComun}`)
                                    break
                    } else {
                        reply(`${separadorComun}\n\n_Ha habido un *error* al llevar a cabo esta accion! ❌_\n\n${separadorComun}`)
                    }
                        break

                case 'unblock': // Funcion de bloqueo (Owner)
                    if (`${body.slice(9)}` < 9 && esOwner === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            await tanjiro.blockUser (`${body.slice(10)}@c.us`, "remove")
                                reply(`${separadorComun}\n\n_*@${body.slice(10)}* ha sido desbloquead@!_\n\n${separadorComun}`)
                                    break
                    } else {
                        reply(`${separadorComun}\n\n_Ha habido un *error* al llevar a cabo esta accion! ❌_\n\n${separadorComun}`)
                    }
                        break
                
                case 'newgroup': // Funcion de bloqueo (Owner)
                    if (`${body.slice(10)}` < 10 && esOwner === true){
                        reply(`${separadorComun}\n\n_Donde esta el nombre?_ ❌\n\n${separadorKawaii}`)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            reply(mensajes.espera)
                                newgroup = await tanjiro.groupCreate(`${input}`, [sender])
                                    foto_grupo = `https://i.ibb.co/tLdvNSw/newgroup.jpg`
                                        var foto_grupo_nuevo = await getBuffer(foto_grupo)
                                            nuevo_grupo = `${separadorComun}\n\n_Nuevo grupo creado!_\n\n${separadorComun}`
                                                tanjiro.sendMessage(newgroup.gid, foto_grupo_nuevo, MessageType.image, {quoted: nezuko, caption: nuevo_grupo})
                                                    break
                    } else {
                        reply(`${separadorComun}\n\n_Ha habido un *error* al llevar a cabo esta accion! ❌_\n\n${separadorComun}`)
                    }
                        break

                case 'update': // Funcion de bloqueo (Owner)
                    if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            reply(mensajes.espera)
                                exec('cd /home/container/src/scripts/linux && bash update.sh', (err) => {
                                    if (err) {
                                        console.log(err)
                                    } else {
                                        null;
                                    }
                                })
                                        break
                    } else {
                        reply(`${separadorComun}\n\n_Ha habido un *error* al llevar a cabo esta accion! ❌_\n\n${separadorComun}`)
                    }
                        break

                /*case 'terminal': // Manda un comando a la terminal
                    if (`${body.slice(9)}` < 9 && esOwner === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esOwner === false) {
                        reply(mensajes.solo.owner)
                            break
                    } else if (esOwner === true) {*/


/*################## 💸 Grupos 💸 ##################*/

                case 'tanjiro': // Encender/Apagar a Tanjiro (Grupos)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (`${body.slice(9)}` < 9 && esAdmin === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        if (`${body.slice(9)}` === `on`) {
                            await tanjiro_off.splice(from, 1)
                                await fs.writeFileSync('./db/grupos/baneados/tanjiro_off.json', JSON.stringify(tanjiro_off))
                                    reply(`${separadorComun}\n\n_Tanjiro acaba de ser encendido por *@${sender.split(`@`)[0]}* ✅_\n\n${separadorKawaii}`)
                                        break
                    } else if (`${body.slice(9)}` === `off`) {
                                    await tanjiro_off.push(from)
                                        await fs.writeFileSync('./db/grupos/baneados/tanjiro_off.json', JSON.stringify(tanjiro_off))
                                            reply(`${separadorComun}\n\n_Tanjiro acaba de ser apagado por *@${sender.split(`@`)[0]}* ✅_\n\n${separadorKawaii}`)
                                                break
                        } else {
                            reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                        }
                    }
                        break

                case 'bienvenida': // Funcion de activacion para bienvenida/welcome (Grupos)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (`${body.slice(12)}` < 12 && esAdmin === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        if (`${body.slice(12)}` === `on`) {
                            if (esBienvenida) return reply(`${separadorComun}\n\n_La bienvenida en *${groupMetadata.subject}* ya esta activada! ❌_\n\n${separadorKawaii}`)
                               await bienvenida.push(from)
                                    await fs.writeFileSync('./db/grupos/bienvenida/bienvenida.json', JSON.stringify(bienvenida))
                                        reply(`${separadorComun}\n\n_Felicidades! La bienvenida en *${groupMetadata.subject}* acaba de ser activada! ✅_\n\n${separadorKawaii}`)
                                            break
                    } else if (`${body.slice(12)}` === `off`) {
                        if (esBienvenida === false) return reply(`${separadorComun}\n\n_La bienvenida en *${groupMetadata.subject}* ya esta desactivada! ❌_\n\n${separadorKawaii}`) // Correcion de bugs
                                await bienvenida.splice(from, 1)
                                    await fs.writeFileSync('./db/grupos/bienvenida/bienvenida.json', JSON.stringify(bienvenida))
                                        reply(`${separadorComun}\n\n_La bienvenida en *${groupMetadata.subject}* acaba de ser desactivada! ✅_\n\n${separadorKawaii}`)
                                            break
                        } else {
                            reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                        }
                    }
                        break

                case 'despedida': // Funcion de activacion para despedida/bye (Grupos)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (`${body.slice(11)}` < 11 && esAdmin === true){
                        reply(`${separadorComun}\n\n_Que te gustaria hacer?_ 🌲\n\n${separadorKawaii}`)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        if (`${body.slice(11)}` === `on`) {
                            if (esDespedida) return reply(`${separadorComun}\n\n_La despedida en *${groupMetadata.subject}* ya esta activada! ❌_\n\n${separadorKawaii}`)
                               await despedida.push(from)
                                    await fs.writeFileSync('./db/grupos/despedida/despedida.json', JSON.stringify(despedida))
                                        reply(`${separadorComun}\n\n_Felicidades! La despedida en *${groupMetadata.subject}* acaba de ser activada! ✅_\n\n${separadorKawaii}`)
                                            break
                    } else if (`${body.slice(11)}` === `off`) {
                        if (esDespedida === false) return reply(`${separadorComun}\n\n_La despedida en *${groupMetadata.subject}* ya esta desactivada! ❌_\n\n${separadorKawaii}`) // Correcion de bugs
                                await despedida.splice(from, 1)
                                    await fs.writeFileSync('./db/grupos/despedida/despedida.json', JSON.stringify(despedida))
                                        reply(`${separadorComun}\n\n_La despedida en *${groupMetadata.subject}* acaba de ser desactivada! ✅_\n\n${separadorKawaii}`)
                                            break
                        } else {
                            reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                        }
                    }
                        break

                case 'bug': // Desbuguea a Tanjiro en dado caso que lo este! 🧐
                tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        setTimeout ( () => {
                            tanjiro.updatePresence(from, Presence.composing)
                                scespera.splice(from)
                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} se ha desbugueado a Tanjiro!`)
                        }, `${ms_espera}`)
                    }
                        break

/*################## ‼ StaffMenu ‼ ##################*/

                case 'anuncio':
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (`${body.slice(9)}` < 9) {
                        reply(`${separadorComun}\n\n_Hey! Donde esta el *anuncio*!? ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (`${body.slice(9)}` > 450) {
                        reply(`${separadorComun}\n\n_anuncio *demasiado* largo ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        anuncio = `_Atent@s! Hay un anuncio de *@${sender.split(`@`)[0]}*_`
                            texto_anuncio = `${body.slice(9)}`
                                tanjiro.updatePresence(from, Presence.composing)
                                    id_miembros = []
                                        etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                            etiquetas += `  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                                for (var miembros of groupMembers) {
                                                    etiquetas += `   ${flecha} @${miembros.jid.split('@')[0]}\n`
                                                        id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n\n`+anuncio+`\n\n\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'opengroup': // Funcion de abrir grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.composing)
                            abre = `${separadorComun}\n\n_El grupo ha sido_ _*abierto*_ _por:_ _*@${sender.split(`@`)[0]}*_\n\n_ahora todos los(as)_ _*Miembros*_ _podran hablar_\n\n${separadorKawaii}`
                                await tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, false)
                                    tanjiro.sendMessage(from, abre, text, {quoted: nezuko})
                                        break
                    }
                        break

                case 'closegroup': // Funcion cerrar grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.composing)
                            cierra = `${separadorComun}\n\n_El grupo ha sido_ _*cerrado*_ _por:_ _*@${sender.split(`@`)[0]}*_\n\n_ahora solo los(as)_ _*Administradores(as)*_ _podran hablar_\n\n${separadorKawaii}`
                                await tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, true)
                                    tanjiro.sendMessage(from, cierra, text, {quoted: nezuko})
                                        break
                    }
                        break

                case 'closeon': // Funcion closeon
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            closeOn = `${separadorComun}\n\n_CloseOn ha sido *activado*!_ ✅\n\n_Esto significa que el grupo se ha puesto en modo *medio* seguro por *10 minutos*!_\n\n${separadorKawaii}`
                                closeOff = `${separadorComun}\n\n⏱ _*Tiempo*, han pasado *10 minutos*!_ ✅\n\n${separadorKawaii}`
                                    await tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, true) // Cierra el grupo
                                        await tanjiro.groupSettingChange (from, GroupSettingChange.settingsChange, true) // Ajusta los ajustes del grupo solo admins
                                            if (esEspera) return reply(`${separadorComun}\n\n_Hey! Ya hay un timer puesto! ❌_\n\n${separadorKawaii}`)
                                                await scespera.push(from)
                                                    await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                        tanjiro.sendMessage(from, closeOn, text, {quoted: nezuko})
                    setTimeout( () => {
                        tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, false) // Abre el grupo
                            scespera.splice(from)
                                fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                            tanjiro.sendMessage(from, closeOff, text, {quoted: nezuko})
                        }, 600000)
                            break
                    }
                        break

                case 'closeoff': // Funcion closeoff
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            closeOff = `${separadorComun}\n\n_El grupo acaba de ser abierto! ✅ (probablemente han *desactivado* el modo *medio* seguro!)_\n\n${separadorKawaii}`
                                await scespera.splice(from)
                                    await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                        await tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, false) // Abre el grupo
                                            tanjiro.sendMessage(from, closeOff, text, {quoted: nezuko})
                            break
                    }
                        break

                case 'scloseon': // Funciones scloseon/secure close on
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            scloseOn = `${separadorComun}\n\n_SCloseOn ha sido *activado*!_ ✅\n\n_Esto significa que el grupo se ha puesto en modo *seguro* por *15 minutos*!_\n\n${separadorKawaii}`
                                scloseOff = `${separadorComun}\n\n⏱ _*Tiempo*, han pasado *15 minutos*!_ ✅\n\n${separadorKawaii}`
                                    await tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, true) // Cierra el grupo
                                        await tanjiro.groupSettingChange (from, GroupSettingChange.settingsChange, true) // Ajusta los ajustes del grupo solo admins
                                            await tanjiro.revokeInvite (from) // Restablece el link del grupo
                                                if (esEspera) return reply(`${separadorComun}\n\n_Hey! Ya hay un timer puesto! ❌_\n\n${separadorKawaii}`)
                                                    await scespera.push(from)
                                                        await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            tanjiro.sendMessage(from, scloseOn, text, {quoted: nezuko})
                    setTimeout( () => {
                        tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, false) // Abre el grupo
                            scespera.splice(from)
                                fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                    tanjiro.sendMessage(from, scloseOff, text, {quoted: nezuko})
                        }, 900000)
                            break
                    }
                        break

                case 'scloseoff': // Funcion scloseoff/secure close off
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            scloseOff = `${separadorComun}\n\n_El grupo acaba de ser abierto! ✅ (han *desactivado* el modo *seguro*!)_\n\n${separadorKawaii}`
                                await scespera.splice(from)
                                    await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                        tanjiro.groupSettingChange (from, GroupSettingChange.messageSend, false) // Abre el grupo
                                            tanjiro.sendMessage(from, scloseOff, text, {quoted: nezuko})
                            break
                    }
                        break

                case 'editon': // Permite que solo el staff pueda editar la informacion del grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            edit_activado = `${separadorComun}\n\n_Ahora solo el staff en *${groupMetadata.subject}* pueden editar los ajustes del *grupo*!_\n\n_Hecho por *@${sender.split(`@`)[0]}*_\n\n_Tanjiro_\n\n${separadorKawaii}`
                               await tanjiro.groupSettingChange (from, GroupSettingChange.settingsChange, true)
                                    tanjiro.sendMessage(from, edit_activado, text, {quoted: nezuko})
                                        break
                    }
                        break

                case 'editoff': // Permite a todos los participantes editar la informacion del grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            edit_desactivado = `${separadorComun}\n\n_Ahora todo el mundo en *${groupMetadata.subject}* pueden editar los ajustes del *grupo*!_\n\n_Hecho por *@${sender.split(`@`)[0]}*_\n\n_Tanjiro_\n\n${separadorKawaii}`
                              await tanjiro.groupSettingChange (from, GroupSettingChange.settingsChange, false)
                                    tanjiro.sendMessage(from, edit_desactivado, text, {quoted: nezuko})
                                        break
                    }
                        break

                case 'gname': // Funcion para cambiar nombre al grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (`${body.slice(7)}` < 7) return reply(mensajes.error.corto)
                    if (`${body.slice(7)}` >= 25) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        await tanjiro.groupUpdateSubject(from, `${body.slice(7)}`)
                            reply(`${mensajes.hecho}`)
                                break
                    }
                        break
                    
                case 'rmgname': // Funcion para eliminar nombre al grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (`${body.slice(9)}` >= 10) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        await tanjiro.groupUpdateSubject(from, `.`)
                            reply(`${mensajes.hecho}`)
                                break
                    }
                        break

                case 'desc': // Funcion para cambiar la descripcion
                    tanjiro.updatePresence(from, Presence.composing)
                    if (`${body.slice(7)}` < 7) return reply(mensajes.error.corto)
                    if (`${body.slice(6)}` >= 512) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        await tanjiro.groupUpdateDescription(from, `${body.slice(6)}`)
                            reply(`${mensajes.hecho}`)
                                break
                    }
                        break
                
                case 'rmdesc': // Funcion para remover la descripcion
                    tanjiro.updatePresence(from, Presence.composing)
                    if (`${body.slice(8)}` >= 9) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        await tanjiro.groupUpdateDescription(from, `.`)
                            reply(`${mensajes.hecho}`)
                                break
                    }
                        break

                case 'promote': // Hace admin a la persona etiquetada
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (nezuko.message.extendedTextMessage === undefined || nezuko.message.extendedTextMessage === null) {
                        reply(`${separadorComun}\n\n_*@${sender.split("@s.whatsapp.net")[0]}* Etiqueta a alguien!_\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        mencion = nezuko.message.extendedTextMessage.contextInfo.mentionedJid
                            await tanjiro.groupMakeAdmin(from, mencion)
                                mensaje = `${separadorComun}\n\n_Hola!_ @${mencion[0].split('@')[0]} _ahora seras_ _*Administrador(a)*_ _del grupo_ \n\n_Grupo:_ *${groupMetadata.subject}* \n\n_Felicidades!!!_ 🎉 \n\n_Hecho por:_ *@${sender.split("@s.whatsapp.net")[0]}* \n\n_Tanjiro_ \n\n${separadorKawaii}`
                                    reply(mensaje)
                                        break
                    }
                        break

                case 'demote': // Quita admin a una persona
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (nezuko.message.extendedTextMessage === undefined || nezuko.message.extendedTextMessage === null) {
                        reply(`${separadorComun}\n\n_*@${sender.split("@s.whatsapp.net")[0]}* Etiqueta a alguien!_\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        mencion = nezuko.message.extendedTextMessage.contextInfo.mentionedJid
                            await tanjiro.groupDemoteAdmin(from, mencion)
                                mensaje = `${separadorComun}\n\n_Hola!_ @${mencion[0].split('@')[0]} _ahora seras_ _*Miembro*_ _del grupo_ \n\n_Grupo:_ *${groupMetadata.subject}* \n\n_Hecho por:_ *@${sender.split("@s.whatsapp.net")[0]}* \n\n_Tanjiro_ \n\n${separadorKawaii}`
                                    reply(mensaje)
                                        break
                    }
                        break

                case 'tagall': // Etiqueta a todos los del grupo
                    case 'tagall1':
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} @${miembros.jid.split('@')[0]}\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'tagall2': // Etiqueta a todos los del grupo (2)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} wa.me/${miembros.jid.split('@')[0]}\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break
                
                case 'tagall3': // Etiqueta a todos los del grupo (3)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} ${miembros.jid.split('@')[0]}\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'tagall4': // Etiqueta a todos los del grupo (4)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} ${miembros.jid.split('@')[0]}@c.us\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'tagall5': // Etiqueta a todos los del grupo (5)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} ${miembros.jid.split('@')[0]}@s.whatsapp.net\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'tagall6': // Etiqueta a todos los del grupo (6)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} wa.me/${miembros.jid.split('@')[0]}@c.us\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break

                case 'tagall7': // Etiqueta a todos los del grupo (7)
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.updatePresence(from, Presence.composing)
                            id_miembros = []
                                etiquetas = (args.length > 1) ? body.slice(8).trim() : ''
                                    etiquetas += `\n  ${flecha} _Total:_ *${groupMembers.length}*\n\n`
                                        for (var miembros of groupMembers) {
                                            etiquetas += `   ${flecha} wa.me/${miembros.jid.split('@')[0]}@s.whatsapp.net\n`
                                                id_miembros.push(miembros.jid)
                    }
                        reply(`${separadorArriba}\n`+etiquetas+`\n${separadorKawaii}`, id_miembros, true)
                            break    
                    }
                        break
                    
                case 'kick': // Kickea/Banea a alguien del grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (nezuko.message.extendedTextMessage === undefined || nezuko.message.extendedTextMessage === null) {
                        reply(`${separadorComun}\n\n_*@${sender.split("@s.whatsapp.net")[0]}* Etiqueta a alguien!_\n\n${separadorKawaii}`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else {
                        mencion = nezuko.message.extendedTextMessage.contextInfo.mentionedJid
                            await tanjiro.groupRemove(from, mencion)
                                mensaje = `${separadorComun}\n\n_*@${mencion[0].split('@')[0]}* fue *kickeado* del grupo:_ *${groupMetadata.subject}* \n\n_Hecho por:_ *@${sender.split("@s.whatsapp.net")[0]}* \n\n_Tanjiro_ \n\n${separadorKawaii}`
                                    reply(mensaje)
                                        break
                    }
                        break

                case 'revoke': // Hace revoke del link del grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        var revoke_invitacion = await tanjiro.revokeInvite (from)
                            nuevo_link = (`${separadorComun}\n\n_Hola! aqui esta el *nuevo* link de *${groupMetadata.subject}*:_\nhttps://chat.whatsapp.com/${revoke_invitacion.code}\n\n_Tanjiro_\n\n${separadorKawaii}`)
                                reply(nuevo_link)
                                    break
                    }
                        break

                case 'linkgroup': // Obtiene el link de invitacion de el grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        var codigo_invitacion = await tanjiro.groupInviteCode (from)
                            link = (`${separadorComun}\n\n_Hola! aqui esta el link de *${groupMetadata.subject}*:_\n\n https://chat.whatsapp.com/${codigo_invitacion}\n\n_Tanjiro_ \n\n${separadorKawaii}`)
                                reply(link)
                                    break
                    }
                        break

                case 'bye': // Funcion para abandonar el grupo
                    tanjiro.updatePresence(from, Presence.composing)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else {
                        mensaje = (`${separadorComun}\n\n_Me tengo que ir a jugar, *adios*!_\n\n_Tanjiro_ \n\n${separadorKawaii}`)
                           reply (mensaje)
                    setTimeout( () => {
                        tanjiro.groupLeave (from)
                            }, 1000)
                    }
                        break

                case 'delete': // Funcion de eliminar mensajes permanentes Tanjiro
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === false) {
                        reply(mensajes.solo.grupo)
                            break
                    } else if (esAdmin === false) {
                        reply(mensajes.solo.admin)
                            break
                    } else if (esTanjiroAdmin === false) {
                        reply(mensajes.solo.tanjiroAdmin)
                            break
                    } else if (esPremium === false) {
                        reply(`${separadorComun}\n\n_Lo sentimos, *${groupMetadata.subject}* *no* es un grupo premium! ❌_\n\n${separadorKawaii}`)
                            break
                    } else if (esPremium === true) {
                        tanjiro.deleteMessage(from, { id: nezuko.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                            break
                    }
                        break

/*################## 🌕 Menu (1) 🌕 ##################*/

/*################## 🏧 Financiacion 🏧 ##################*/

                case 'contrato': // Manda una especie de 'contrato'
                    case 'contratos':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else await tanjiro.updatePresence(from, Presence.available)
                            respuesta = `${separadorComun}\n       _*💀🎯  𝔠𝐎ℕ𝓉尺𝓐ᵗ𝑜  💢🍫*_\n\n_Te gustaria tener a Tanjiro *en tu grupo*?_\n\n_Es totalmente gratis, solo mira este video -> https://www.youtube.com/watch?v=Tnve-IPsLzU\n_(Si te gustaria tener comandos personalizados tendras que pagarlos aparte, contacta con +44 7309 247974 para mas informacion!)_\n\n                  << ${nombreBot} >>\n${separadorKawaii}`
                                tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                    break

                case 'patreon': // Manda el patreon de Golden Coders
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else await tanjiro.updatePresence(from, Presence.available)
                        foto_patreon = `https://i.ibb.co/6mLHKs6/patreon.jpg`
                            var buPatreon = await getBuffer(foto_patreon)
                                respuesta = `${separadorComun}\n    _*🐙 Ⓟαţ尺𝔢𝑜𝓷 🐤*_\n\n_Te gustaria donar el proyecto!? Hazlo atraves de nuestro perfil de patreon!_\n\n_*${golden_patreon}*_\n\n                  << ${nombreBot} >>\n${separadorKawaii}`
                                    tanjiro.sendMessage(from, buPatreon, MessageType.image, {quoted: nezuko, caption: respuesta})
                                        break

/*################## ‼️ Setup ‼️ ##################*/

                case 'setup':
                    case 'instalacion': // Tutorial de instalacion
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else await tanjiro.updatePresence(from, Presence.available)
                            foto_setup = `https://i.ibb.co/sQKMyfN/icon.jpg`
                                var busetup = await getBuffer(foto_setup)
                                    respuesta = `${separadorComun}\n      _*🎅 𝓈ｅᵗ𝓊𝔭 ☯*_\n\n_Oh... ya veo, vas a instalarme? Primero mira esta video!_\n\nhttps://youtu.be/Tnve-IPsLzU\n\n                  << ${nombreBot} >>\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, busetup, MessageType.image, {quoted: nezuko, caption: respuesta})
                                            break

/*################## 🌑 Codigo Menu (1) 🌑 ##################*/

                case 'devgroup': // Grupo de desarrollo
                    case 'dev_group':
                        case 'groupdev':
                            case 'group_dev':
                                if (esGrupoBaneado === true) {
                                    console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                        break
                                } else if (esTanjiroOff === true) {
                                    console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                        break
                                } else if (esGrupo === true) { 
                                    await tanjiro.updatePresence(from, Presence.available)
                                        miembro = `${sender.split(`@`)[0]}@s.whatsapp.net`
                                            mensaje = `${separadorComun}\n\n_Te enviare el link al privado!_\n\n${separadorComun}`
                                                mensaje_privado = `${separadorComun}\n\n    _*🍔 ᵍｒⓤⓅＯ 𝓓𝔢𝓿 🏧*_\n\n_Aqui tienes el link de el grupo oficial:_\n\n_*${linkgroupdev}*_\n\n_Ventajas:_\n\n_*1* - Podras ver el *changelog*_\n_*2* - Podras *discutir* acerca de Tanjiro_\n_*3* - Podras decidir que agregar *nuevo*_\n\n    _Y mucho mas! 🦊_\n\n${separadorKawaii}`
                                                    await tanjiro.sendMessage(from, mensaje, text, {quoted: nezuko})
                                                        tanjiro.sendMessage(miembro, mensaje_privado, text, {quoted: nezuko})
                                                            break
                                } else {
                                    await tanjiro.updatePresence(from, Presence.available)
                                        mensaje = `${separadorComun}\n\n    _*🍔 ᵍｒⓤⓅＯ 𝓓𝔢𝓿 🏧*_\n\n_Aqui tienes el link de el grupo oficial:_\n\n_*${linkgroupdev}*_\n\n_Ventajas:_\n\n_*1* - Podras ver el *changelog*_\n_*2* - Podras *discutir* acerca de Tanjiro_\n_*3* - Podras decidir que agregar *nuevo*_\n\n    _Y mucho mas! 🦊_\n\n${separadorKawaii}`
                                            tanjiro.sendMessage(from, mensaje, text, {quoted: nezuko})
                                                break
                                }
                                    break

                case 'blocklist': // Funcion para ver los contactos bloqueados
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            texto_bloqueados = `${separadorComun}\n\n_Lista de *contactos* bloquead@s!_\n\n`
                                for (var blockeados of blocked) {
                                    texto_bloqueados += `   ${flecha} @${blockeados.split('@')[0]}\n`
                    }
                        texto_bloqueados += `  \n${flecha} _Total:_ *${blocked.length}*\n\n${separadorKawaii}`
                            tanjiro.sendMessage(from, texto_bloqueados.trim(), text, {quoted: nezuko, contextInfo: {"mentionedJid": blocked}})
                                break

                case 'latencia': // Funcion para medir la Latencia
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            const timestamp = speed()
                                const latencia = speed() - timestamp
                                    tanjiro.sendMessage(from, `${separadorComun}\n\n_Velocidad: *${latencia.toFixed(4)}MS*_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                        break

                case 'suptime': // Funcion para medir tiempo que Tanjiro tien ejecutandose (Segundos)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            suptime = process.uptime()
                                tanjiro.sendMessage(from, `${separadorComun}\n\n_Segundos de ejecucion de Tanjiro: *${suptime.toFixed(0)} segundos*_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                    break

                case 'muptime': // Funcion para medir tiempo que Tanjiro tien ejecutandose (Minutos)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            s2uptime = process.uptime()
                                muptime = s2uptime / 60
                                    if (muptime < 1) {
                                        tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro *no* tiene ejecutandose ni un *minuto*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                            break
                                    } else if (muptime === 1) {
                                        tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro tiene ejecutandose: *${muptime.toFixed(0)} minuto*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                            break
                                    } else if (muptime >= 2) {
                                        tanjiro.sendMessage(from, `${separadorComun}\n\n_Minutos de ejecucion de Tanjiro: *${muptime.toFixed(1)} minutos*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                            break
                                    }
                                        break

                case 'huptime': // Funcion para medir tiempo que Tanjiro tien ejecutandose (Horas)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            s2uptime = process.uptime()
                                muptime = s2uptime / 60
                                    huptime = muptime / 60
                                        if (huptime < 1) {
                                            tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro *no* tiene ejecutandose ni una *hora*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                break
                                        } else if (huptime === 1) {
                                            tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro tiene ejecutandose: *${huptime.toFixed(0)} hora*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                break
                                        } else if (huptime >= 2) {
                                            tanjiro.sendMessage(from, `${separadorComun}\n\n_Horas de ejecucion de Tanjiro: *${huptime.toFixed(1)} horas*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                break
                                        }
                                            break

            case 'duptime': // Funcion para medir tiempo que Tanjiro tien ejecutandose (Dias)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            s2uptime = process.uptime()
                                muptime = s2uptime / 60
                                    huptime = muptime / 60
                                        duptime = huptime / 24
                                            if (duptime < 1) {
                                                tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro *no* tiene ejecutandose ni un *dia*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                    break
                                            } else if (duptime === 1) {
                                                tanjiro.sendMessage(from, `${separadorComun}\n\n_Tanjiro tiene ejecutandose: *${duptime.toFixed(0)} dia*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                    break
                                            } else if (duptime >= 2) {
                                                tanjiro.sendMessage(from, `${separadorComun}\n\n_Dias de ejecucion de Tanjiro: *${duptime.toFixed(1)} dias*!_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                                    break
                                            }
                                                break

                case 'status': // Obtiene el estado de Tanjiro
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
                            const velocidad = speed()
                                const latencia_2 = speed() - velocidad
                                    uptime = process.uptime()
                                        tanjiro.sendMessage(from, `${separadorComun}\n\n_Estado de Tanjiro:_\n\n_Latencia: *${latencia_2.toFixed(4)}MS*_\n\n_Funcionando: ✅_\n\n_Tiempo encendido: *${uptime.toFixed(2)} segundos*_\n\n${separadorKawaii}`, text, {quoted: nezuko})
                                            break

                case 'info': // Obtiene informacion de Tanjiro
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else
                        tanjiro.updatePresence(from, Presence.available)
					        get_foto = await tanjiro.getProfilePicture()
                                var buffer = await getBuffer(get_foto)
                                    tanjiro.informacion = `${separadorComun}\n\n_Informacion Tanjiro:_\n\n_Nombre: *${nombreBot}*_\n_Owner: *${nombreOwner}*_\n_Version: *${version}*_\n_Chats: *${tanjiro.chats.length}*_\n_Miembros minimo en un grupo: *${miembrosMinimo}*_\n_Prefijo: *${prefijo}*_\n_Cooldown: *${segundos_espera}* segundos_\n\n_Github_\n\n_Repositorio: *${repositorio}*_\n\n_Organizacion:_\n\n_Organizacion Github: *${organizacion}*_\n_Correo de la organizacion: *${Mail_Organizacion}*_\n\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, buffer, MessageType.image, {quoted: nezuko, caption: tanjiro.informacion})
                                            break

                case 'premiumcheck': // Hace checkeo de si el grupo es premium o no!
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else if (esGrupo === true && esPremium === false) {
                        tanjiro.updatePresence(from, Presence.available)
                            noPremiumFoto = `https://i.ibb.co/LNvnZXq/malo.jpg`
                                noPremiumBuffer = await getBuffer(noPremiumFoto)
                                    respuesta = `${separadorComun}\n\n_Este grupo no es premium! 🎩_\n\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, noPremiumBuffer, MessageType.image, {quoted: nezuko, caption: respuesta})
                                            break
                    } else if (esGrupo === true && esPremium === true) {
                        tanjiro.updatePresence(from, Presence.available)
                            PremiumFoto = `https://i.ibb.co/QrWHcKJ/bien.jpg`
                                PremiumBuffer = await getBuffer(PremiumFoto)
                                    respuesta = `${separadorComun}\n\n_Este grupo es un grupo premium, disfruta de los privilegios que conlleva! 🦊_\n\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, PremiumBuffer, MessageType.image, {quoted: nezuko, caption: respuesta})
                                            break
                    }
                        break

                case 'versioncheck': // Hace checkeo de la version actual
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            respuesta = `${separadorComun}\n\n_Esta es la version actual de ${nombreBot}: *${version}*_\n\n${separadorKawaii}`
                                tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                    break
                    }
                        break

                case 'prefijocheck': // Hace checkeo de el prefijo actual
                if (esGrupoBaneado === true) {
                    console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                        break
                } else if (esTanjiroOff === true) {
                    console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                        break
                } else {
                    tanjiro.updatePresence(from, Presence.available)
                        respuesta = `${separadorComun}\n\n_El prefijo actual de ${nombreBot}: *${prefijo}*_\n\n${separadorKawaii}`
                            tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                break
                }
                    break

				case 'reportebug': // Hace posible poder reportar un bug
                    if (`${body.slice(12)}` <= 12) return reply(mensajes.error.corto)
                    if (`${body.slice(12)}` >= 200) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            texto_reporte = `${separadorComun}\n\n    _*👺 ᖇ𝔼ᵖ𝓸Ｒ𝐭Ⓔ ᵇⓤ𝕘 ☺*_\n\n_Esta persona *wa.me/${sender.split("@")[0]}* acaba de reportar el bug *${body.slice(12)}*_\n\n${separadorKawaii}`
                                await tanjiro.sendMessage('447309247974@s.whatsapp.net', texto_reporte, text, {quoted: nezuko})
                                    reply(`${separadorComun}\n\n_Se ha informado el problema, no se responderan informes falsos!_\n\n${separadorKawaii}`)
                                        break
                    }
                        break

                case 'sugerencia': // Hace posible poder reportar una sugerencia
                    if (`${body.slice(12)}` <= 12) return reply(mensajes.error.corto)
                    if (`${body.slice(12)}` >= 200) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            texto_sugerencia = `${separadorComun}\n\n    _*🐙 𝕊ｕǤᵉ𝕣𝔼𝐧𝒸ⓘⒶ 👻*_\n\n_Esta persona *wa.me/${sender.split("@")[0]}* acaba de dejar una sugerencia, y dice *${body.slice(12)}*_\n\n${separadorKawaii}`
                                await tanjiro.sendMessage('447309247974@s.whatsapp.net', texto_sugerencia, text, {quoted: nezuko})
                                    reply(`${separadorComun}\n\n_Se ha informado su sugerencia, gracias!_\n\n${separadorKawaii}`)
                                        break
                    }
                        break

                case 'asistencia': // Hace poder pedir asistencia
                    if (`${body.slice(12)}` >= 13) return reply(mensajes.error.largo)
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            texto_asistencia = `${separadorComun}\n\n    _*🐻 ᗩ𝓢Į𝓢𝔱є𝐍𝐂𝒾ᗩ ♪*_\n\n_Esta persona *wa.me/${sender.split("@")[0]}* acaba de solicitar *asistencia*_\n\n${separadorKawaii}`
                                await tanjiro.sendMessage(owner, texto_asistencia, text, {quoted: nezuko})
                                    reply(`${separadorComun}\n\n_Se ha solicitado asistencia, por favor sea paciente, gracias!_\n\n${separadorKawaii}`)
                                        break
                    }
                        break

                case 'adeveloper': // Funcion adeveloper
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            about_developer = `${separadorKawaii}\n\n    _*🔥 Δ𝐝ᵉⓥⓔ𝓛𝕠ℙ𝑒г 👻*_\n\n_Hey! Me llamo Hiro, y a mi corta edad desarrolle un interes muy fuerte por las computadoras, ahora ya soy un poco mayor, pero sigo siendo un Geek! :D_\n\n${separadorKawaii}`
                                developer_foto = `https://i.ibb.co/vv4DySr/HiroIcon.png`
                                    var Buff3R = await getBuffer(developer_foto)
                                        tanjiro.sendMessage(from, Buff3R, MessageType.image, {quoted: nezuko, caption: about_developer})
                                            break
                    }
                        break

                case 'aproyecto': // Funcion aproyecto
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            about_proyecto = `${separadorComun}\n\n    _*💥 Δρ𝓡Ⓞ𝐲Ｅc𝔱σ 👑*_\n\n_Tanjiro es un bot independiente desarrollado por mi como un pasatiempo/hobby ( *aburrimiento* )_\n\n${separadorKawaii}`
                                foto_proyecto_tanjiro = `https://i.ibb.co/5Kqnc7z/image.jpg`
                                    var Bufffeer = await getBuffer(foto_proyecto_tanjiro)
                                        tanjiro.sendMessage(from, Bufffeer, MessageType.image, {quoted: nezuko, caption: about_proyecto})
                                            break
                    }
                        break

                case 'owner': // Funcion Owner
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            tanjiro.sendMessage(from, {displayname: "Owner-Hiro", vcard: ownercard}, MessageType.contact, { quoted: nezuko})
                                break
                    }
                        break

                case 'regithub': // Funcion Regithub/Github
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            api = await fetchJson(`https://api.github.com/users/${usuario_github}`)
                                github_hiro = `${separadorComun}\n\n         _*💥 Ğ𝕚т𝐡𝐔β 🍪*_\n\n_Aqui te dejo mi github!_\n\n_*${hirogithub}*_\n\n_Nombre: *${api.login}*_\n\n_Seguidor@s: *${api.followers}*_\n\n_Siguiendo: *${api.following}*_\n\n_ID: *${api.id}*_\n\n_Bio: *${api.bio}*_\n\n_Repositorios: *${api.public_repos}*_\n\n${separadorKawaii}`
                                    foto_hiro_github = `${api.avatar_url}`
                                        var bUffEr = await getBuffer(foto_hiro_github)
                                            tanjiro.sendMessage(from, bUffEr, MessageType.image, {quoted: nezuko, caption: github_hiro})
                                                break
                    }
                        break

                case 'rnezuko-api': // Funcion Rnezuko-api
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            rerepositorio_nezuko_api = `${separadorComun}\n\n    _*💝 𝓝ε乙ⓤкㄖ-Ａ𝓅เ 🐠*_\n\n_Repositorio oficial de *Nezuko-Api*_\n\n_*${repositorio_nezuko_api}*_\n\n_Descripcion: *Nezuko-API es una api hecha con Javascript, NodeJs y Express! Nezuko-api es una api rest totalmente gratuita y abierta al publico! 🍣*_\n\n${separadorKawaii}`
                                foto_repositorio_nezuko_api = `https://i.ibb.co/tKCq15S/Nezuko.jpg`
                                    var nBuFfEr = await getBuffer(foto_repositorio_nezuko_api)
                                        tanjiro.sendMessage(from, nBuFfEr, MessageType.image, {quoted: nezuko, caption: rerepositorio_nezuko_api})
                                            break
                    }
                        break

                case 'rtanjiro-bot': // Funcion Rtanjiro-bot
                    if (esGrupoBaneado === true) {
                        console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                            break
                    } else if (esTanjiroOff === true) {
                        console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                            break
                    } else {
                        tanjiro.updatePresence(from, Presence.available)
                            rerepositorio_tanjiro_bot = `${separadorComun}\n\n     _*🎁 𝐓Ãᑎ𝒿Ɨ𝓡ㄖ-ᵇσｔ 🐻*_\n\n_Repositorio oficial de *Tanjiro-Bot*_\n\n_*${repositorio}*_\n\n_Descripcion: *Tanjiro-Bot es un bot de WhatsApp desarrollado en Javascript y NodeJs! 🛠🔥*_\n\n${separadorKawaii}`
                                foto_repositorio_tanjiro_bot = `https://i.ibb.co/vcGqWqq/ta.jpg`
                                    var tBuffer = await getBuffer(foto_repositorio_tanjiro_bot)
                                        tanjiro.sendMessage(from, tBuffer, MessageType.image, {quoted: nezuko, caption: rerepositorio_tanjiro_bot})
                                            break
                    }
                        break

/*################## 💰 Menu (2) 💰 ##################*/

/*################## 🍕 MineServer 🍕 ##################*/

                case 'minemotd': // Obtiene el Motd de el servidor de minecraft
                    case 'mine_motd':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${minecraft_activado}` !== 'true') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                    break
                        } else  reply(mensajes.espera)
                            api = await fetchJson(`https://api.minetools.eu/ping/${ip_minecraft}/${puerto_minecraft}`)
                                if (`${api.description}` === `undefined`) {
                                    reply(`${separadorComun}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _El servidor de ${minecraft_nombre} esta *apagado*! 🚫_\n\n             << ${nombreBot} >>\n${separadorComun}`)
                                } else {
                                    respuesta = `${separadorArriba}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _MOTD:_\n\n_${api.description}_\n\n     -> _MOTD de ${minecraft_nombre}!_ <-   \n\n             << ${nombreBot} >>\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                            break
                                }
                                    break

                case 'mineping': // Mide el ping del servidor
                    case 'mine_ping':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${minecraft_activado}` !== 'true') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                    break
                        } else  reply(mensajes.espera)
                            api = await fetchJson(`https://api.minetools.eu/ping/${ip_minecraft}/${puerto_minecraft}`)
                                if (`${api.description}` === `undefined`) {
                                    reply(`${separadorComun}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _El servidor de ${minecraft_nombre} esta *apagado*! 🚫_\n\n             << ${nombreBot} >>\n${separadorComun}`)
                                } else {
                                    respuesta = `${separadorArriba}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _Latencia: *${api.latency}*_\n\n     -> _Latencia de ${minecraft_nombre}!_ <-   \n\n             << ${nombreBot} >>\n${separadorKawaii}`
                                        tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                            break
                                }
                                    break
                
                case 'mineicon': // Obtiene el icono
                    case'mine_icon':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${minecraft_activado}` !== 'true') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                    break
                        } else  reply(mensajes.espera)
                            icon = await getBuffer(`https://api.minetools.eu/favicon/${ip_minecraft}/${puerto_minecraft}`)
                                if (`${api.description}` === `Couldn't ping server.`) {
                                    reply(`${separadorComun}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _El servidor de ${minecraft_nombre} esta *apagado*! 🚫_\n\n             << ${nombreBot} >>\n${separadorComun}`)
                                } else {
                                    respuesta = `      _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n   -> _Icono de ${minecraft_nombre}!_ <-   \n\n             << ${nombreBot} >>`
                                        tanjiro.sendMessage(from, icon, MessageType.image, {quoted: nezuko, caption: respuesta})
                                            break
                                }
                                    break

                case 'mineplayers': // Obtiene los jugadores maximos y los jugadores activos del servidor
                    case 'mineplayer':
                        case 'mine_players':
                            case 'mine_player':
                                if (esGrupoBaneado === true) {
                                    console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                        break
                                } else if (esTanjiroOff === true) {
                                    console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                        break
                                } else if (`${minecraft_activado}` !== 'true') {
                                    console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                        reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                            break
                                } else  reply(mensajes.espera)
                                    api = await fetchJson(`https://api.minetools.eu/ping/${ip_minecraft}/${puerto_minecraft}`)
                                        if (`${api.description}` === `undefined`) {
                                            reply(`${separadorComun}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _El servidor de ${minecraft_nombre} esta *apagado*! 🚫_\n\n             << ${nombreBot} >>\n${separadorComun}`)
                                        } else {
                                            respuesta = `${separadorArriba}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _Jugadores maximos: *${api.players.max}*_ \n\n${flecha} _Jugadores online: *${api.players.online}* / *${api.players.max}*_\n\n   -> _Jugadores de ${minecraft_nombre}!_ <-   \n\n                  << ${nombreBot} >>\n${separadorKawaii}`
                                                tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                                    break
                                        }
                                            break

                case 'mineversion': // Obtiene informacion acerca del servidor
                    case 'mine_version':
                        if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else reply(mensajes.espera)
                            api = await fetchJson(`https://api.minetools.eu/ping/${ip_minecraft}/${puerto_minecraft}`)
                                if (`${api.description}` === `undefined`) {
                                    reply(`${separadorComun}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _El servidor de ${minecraft_nombre} esta *apagado*! 🚫_\n\n             << ${nombreBot} >>\n${separadorComun}`)
                        } else if (`${minecraft_activado}` !== 'true') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} esta opcion esta apagada!`)
                                reply(`${separadorComun}\n\n_Esta opcion esta *desactivada*! ❌_\n\n${separadorKawaii}`)
                                    break
                        } else {
                                respuesta = `${separadorArriba}\n          _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_\n\n${flecha} _Version de minecraft: *${api.version.name}*_ \n\n${flecha} _Protocolo: *${api.version.protocol}*_\n\n   -> _Jugadores de ${minecraft_nombre}!_ <-   \n\n                  << ${nombreBot} >>\n${separadorKawaii}`
                                    tanjiro.sendMessage(from, respuesta, text, {quoted: nezuko})
                                        break
                            }
                                break

/*################## 🌌 Anime 🌌 ##################*/

                case 'neko':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://nekos.best/api/v1/nekos`)
                                                        nekobuffer = await getBuffer(api.url)
                                                            await tanjiro.sendMessage(from, nekobuffer, MessageType.image, {quoted: nezuko})
                                                                setTimeout ( () => {
                                                                    scespera.splice(from)
                                                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                }, `${ms_espera}`)
                                                            } else {
                                                                rimraf.sync('.npm')
                                                                    reply(mensajes.espera)
                                                                        api = await fetchJson(`https://nekos.best/api/v1/nekos`)
                                                                            nekobuffer = await getBuffer(api.url)
                                                                                await tanjiro.sendMessage(from, nekobuffer, MessageType.image, {quoted: nezuko})
                                                            }
                                                                break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                console.log(err)
                                                    break
                            }
                        }
                            break

                case 'waifu':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                                                        waifubuffer = await getBuffer(api.url)
                                                            await tanjiro.sendMessage(from, waifubuffer, image, {quoted: nezuko})
                                                                setTimeout ( () => {
                                                                    scespera.splice(from)
                                                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                }, `${ms_espera}`)
                                                            } else {
                                                                rimraf.sync('.npm')
                                                                    reply(mensajes.espera)
                                                                        api = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
                                                                            waifubuffer = await getBuffer(api.url)
                                                                                await tanjiro.sendMessage(from, waifubuffer, image, {quoted: nezuko})
                                                            }
                                                                break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'arandom':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    arandombuffer = await getBuffer(`https://pic.re/image`)
                                                        await tanjiro.sendMessage(from, arandombuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    arandombuffer = await getBuffer(`https://pic.re/image`)
                                                                        await tanjiro.sendMessage(from, arandombuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'awallpaper':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`http://api.nekos.fun:8080/api/wallpapers`)
                                                        awallpaperbuffer = await getBuffer(api.image)
                                                            await tanjiro.sendMessage(from, awallpaperbuffer, image, {quoted: nezuko})
                                                                setTimeout ( () => {
                                                                    scespera.splice(from)
                                                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                }, `${ms_espera}`)
                                                            } else {
                                                                rimraf.sync('.npm')
                                                                    reply(mensajes.espera)
                                                                        api = await fetchJson(`http://api.nekos.fun:8080/api/wallpapers`)
                                                                            awallpaperbuffer = await getBuffer(api.image)
                                                                                await tanjiro.sendMessage(from, awallpaperbuffer, image, {quoted: nezuko})
                                                            }
                                                                break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

/*################## 🍤 Animales 🍤 ##################*/

                case 'cat':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    catbuffer = await getBuffer(`https://cataas.com/cat`)
                                                        await tanjiro.sendMessage(from, catbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else { 
                                                            rimraf.sync('.npm') 
                                                                reply(mensajes.espera) 
                                                                    catbuffer = await getBuffer(`https://cataas.com/cat`)
                                                                        await tanjiro.sendMessage(from, catbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'cat2':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    catbuffer2 = await getBuffer(`https://cataas.com/cat/cute`)
                                                        await tanjiro.sendMessage(from, catbuffer2, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                        catbuffer2 = await getBuffer(`https://cataas.com/cat/cute`)
                                                                            await tanjiro.sendMessage(from, catbuffer2, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'cat3':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://aws.random.cat/meow`)
                                                        catbuffer3 = await getBuffer(api.file)
                                                            await tanjiro.sendMessage(from, catbuffer3, image, {quoted: nezuko})
                                                                setTimeout ( () => {
                                                                    scespera.splice(from)
                                                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                }, `${ms_espera}`)
                                                            } else {
                                                                rimraf.sync('.npm')
                                                                    reply(mensajes.espera)
                                                                        await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                                            api = await fetchJson(`https://aws.random.cat/meow`)
                                                                                catbuffer3 = await getBuffer(api.file)
                                                                                    await tanjiro.sendMessage(from, catbuffer3, image, {quoted: nezuko})
                                                            }
                                                                break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'httpcat':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else if (`${body.slice(9)}` < 9) {
                            reply(`${separadorComun}\n\n_Hey! Este status es muy corto! No puedo reconocer el status http! ❌_\n\n${separadorKawaii}`)
                                break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    httpcat = await getBuffer(`https://http.cat/${body.slice(9)}`)
                                                        await tanjiro.sendMessage(from, httpcat, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else { 
                                                            rimraf.sync('.npm') 
                                                                reply(mensajes.espera) 
                                                                    httpcat = await getBuffer(`https://http.cat/${body.slice(9)}`)
                                                                        await tanjiro.sendMessage(from, httpcat, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(`${separadorComun}\n\n_Hey! Este codigo http *no* existe! ❌_\n\n${separadorKawaii}`)
                                                break
                            }
                        }
                            break

                case 'catfact':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande el dato! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    catfact = await getBuffer(`https://cataas.com/cat/cute`)
                                                        api = await fetchJson(`https://catfact.ninja/fact`)
                                                            api2 = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${api.fact}&from=en&to=es`)
                                                                factext = `${separadorComun}\n\n_Datos sobre gatos!_\n\n${api2.translated_text}\n\n${separadorKawaii}`
                                                                    await tanjiro.sendMessage(from, catfact, image, {quoted: nezuko, caption: factext})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    catfact = await getBuffer(`https://cataas.com/cat/cute`)
                                                                        api = await fetchJson(`https://catfact.ninja/fact`)
                                                                            api2 = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${api.fact}&from=en&to=es`)
                                                                                factext = `${separadorComun}\n\n_Datos sobre gatos!_\n\n${api2.translated_text}\n\n${separadorKawaii}`
                                                                                    await tanjiro.sendMessage(from, catfact, image, {quoted: nezuko, caption: factext})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'randomcat':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    await tanjiro.sendMessage(from, { url: 'https://cataas.com/cat/gif' }, MessageType.image, {quoted: nezuko})
                                                        setTimeout ( () => {
                                                            scespera.splice(from)
                                                                fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                        }, `${ms_espera}`)
                                                    } else {
                                                        rimraf.sync('.npm')
                                                            reply(mensajes.espera)
                                                                await tanjiro.sendMessage(from, { url: 'https://cataas.com/cat/gif' }, MessageType.image, {quoted: nezuko})  
                                                    }
                                                        break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'catext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(8)}` < 8) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(8)}` > 25) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    textcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(8)}`)
                                                        await tanjiro.sendMessage(from, textcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    textcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(8)}`)
                                                                        await tanjiro.sendMessage(from, textcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'catext2':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(9)}` < 9) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(9)}` > 26) {
                            reply()
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    textcatbuffer2 = await getBuffer(`https://cataas.com/cat/cute/says/${body.slice(9)}`)
                                                        await tanjiro.sendMessage(from, textcatbuffer2, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    textcatbuffer2 = await getBuffer(`https://cataas.com/cat/cute/says/${body.slice(9)}`)
                                                                        await tanjiro.sendMessage(from, textcatbuffer2, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                break
                            }
                        }
                            break

                case 'whitecatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(13)}` < 13) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(13)}` > 29) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply()
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=white`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=white`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'blackcatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(13)}` < 13) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(13)}` > 29) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=black`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=black`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'yellowcatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(14)}` < 14) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(14)}` > 30) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=yellow`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=yellow`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'purplecatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(14)}` < 14) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(14)}` > 30) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=purple`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=purple`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'pinkcatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(12)}` < 12) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(12)}` > 28) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(12)}?size=50&color=pink`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(12)}?size=50&color=pink`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'orangecatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(14)}` < 14) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(14)}` > 30) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=orange`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(14)}?size=50&color=orange`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'greencatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(13)}` < 13) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(13)}` > 29) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=green`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(13)}?size=50&color=green`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'redcatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(11)}` < 11) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(11)}` > 27) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(11)}?size=50&color=red`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(11)}?size=50&color=red`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'graycatext':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (`${body.slice(12)}` < 12) {
                            reply(mensajes.error.corto)
                                break
                        } else if (`${body.slice(12)}` > 28) {
                            reply(mensajes.error.largo_2)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(12)}?size=50&color=gray`)
                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    customtextcatbuffer = await getBuffer(`https://cataas.com/cat/says/${body.slice(12)}?size=50&color=gray`)
                                                                        await tanjiro.sendMessage(from, customtextcatbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'dog':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://dog.ceo/api/breeds/image/random`)
                                                        dogbuffer = await getBuffer(api.message)
                                                            await tanjiro.sendMessage(from, dogbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    api = await fetchJson(`https://dog.ceo/api/breeds/image/random`)
                                                                        dogbuffer = await getBuffer(api.message)
                                                                            await tanjiro.sendMessage(from, dogbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'dog2':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://random.dog/woof.json`)
                                                        dog2buffer = await getBuffer(api.url)
                                                            await tanjiro.sendMessage(from, dog2buffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    api = await fetchJson(`https://random.dog/woof.json`)
                                                                        dog2buffer = await getBuffer(api.url)
                                                                            await tanjiro.sendMessage(from, dog2buffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'dog3':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    dog3buffer = await getBuffer(`https://place.dog/300/200`)
                                                        await tanjiro.sendMessage(from, dog3buffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    dog3buffer = await getBuffer(`https://place.dog/300/200`)
                                                                        await tanjiro.sendMessage(from, dog3buffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                case 'duck':
                    if (esGrupoBaneado === true) {
                            console.log(color('[ALERTA]', 'red'), `${groupMetadata.subject} es un grupo baneado!`)
                                break
                        } else if (esTanjiroOff === true) {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} Tanjiro esta apagado!`)
                                break
                        } else if (esGrupo === false && `${dm_activado}` === 'false') {
                            console.log(color('[ALERTA]', 'red'), `En ${groupMetadata.subject} las imagenes estan desactivadas!`)
                                reply(mensajes.solo.grupo)
                                    break
                        } else {
                            try {
                                if (esEspera) {
                                    reply(`${separadorComun}\n\n_Hey! Espera ${segundos_espera} segundos despues de que mande la imagen! ❌_\n\n${separadorKawaii}`)
                                } else if (`${cooldown_activado}` === 'true') {
                                    rimraf.sync('.npm')
                                        reply(mensajes.espera)
                                            await scespera.push(from)
                                                await fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                    api = await fetchJson(`https://random-d.uk/api/v2/random?type=jpg`)
                                                        duckbuffer = await getBuffer(api.url)
                                                            await tanjiro.sendMessage(from, duckbuffer, image, {quoted: nezuko})
                                                            setTimeout ( () => {
                                                                scespera.splice(from)
                                                                    fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                                            }, `${ms_espera}`)
                                                        } else {
                                                            rimraf.sync('.npm')
                                                                reply(mensajes.espera)
                                                                    api = await fetchJson(`https://random-d.uk/api/v2/random?type=jpg`)
                                                                        duckbuffer = await getBuffer(api.url)
                                                                            await tanjiro.sendMessage(from, duckbuffer, image, {quoted: nezuko})
                                                        }
                                                            break
                            } catch(err) {
                                rimraf.sync('.npm')
                                    scespera.splice(from)
                                        fs.writeFileSync('./db/grupos/espera/scespera.json', JSON.stringify(scespera)) // Anti bug
                                            reply(mensajes.error.peticiones)
                                                null;
                                                    break
                            }
                        }
                            break

                default:
                    if (esCmd && body !== undefined) {
                        console.log(color('[ALERTA]', 'red'), 'Comando no registrado de', color(sender.split('@')[0]))
                           reply(`${separadorComun}\n\n_*@${sender.split(`@s.whatsapp.net`)[0]}* Este comando *no* existe!_\n\n${separadorComun}`)
                    }
                }
            } catch (e) {
                null;
            }
        })
    }
starts()
} catch(err) {
    null;
    // Tu bot ha sido baneado
}}