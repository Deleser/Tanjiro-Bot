var menu_principal = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha) => {
    return `
${separadorArriba}
╔             << ${nombreBot} >>               ╗
║                                                   ║
╠> _*💥мＥ𝕟𝐮 ⓟяｉŇ𝔠Ꭵ卩άl♛*_ <╣
║                                                       
╠${flecha} _${prefijo}menu1_                                                               
║                                                   
╠${flecha} _${prefijo}menu2_    
║                                                     
╠> _Powered by *SpiralNodes*_ </3                              
║                                                   
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

var smenu_principal = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha) => {
    return ` 
${separadorArriba}
╔             << ${nombreBot} >>               ╗
║                                                   ║
╠> _*💥мＥ𝕟𝐮 ⓟяｉŇ𝔠Ꭵ卩άl♛*_ <╣
║                                                      
╠${flecha} _${prefijo}menu1_                                                               
║                                                   
╠${flecha} _${prefijo}menu2_
║
╠  _‼_ _Usa *${prefijo}staffmenu*_
║ _para abrir el menu de *staff*‼_
║                                                     
╠> _Powered by *SpiralNodes*_ </3
║                                                   
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

var omenu_principal = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha) => {
    return ` 
${separadorArriba}
╔             << ${nombreBot} >>               ╗
║                                                   ║
╠> _*💥мＥ𝕟𝐮 ⓟяｉŇ𝔠Ꭵ卩άl♛*_ <╣
║                                                      
╠${flecha} _${prefijo}menu1_                                                               
║                                                   
╠${flecha} _${prefijo}menu2_
║                                                   
╠${flecha} _${prefijo}ownermenu_
║                                                     
╠> _Powered by *SpiralNodes*_ </3
║
╠  _‼ Hola *${nombreOwner}* ‼_
║                                                   
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

var pmenu_principal = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha) => {
    return ` 
${separadorArriba}
╔             << ${nombreBot} >>               ╗
║                                                   ║
╠> _*💥мＥ𝕟𝐮 ⓟяｉŇ𝔠Ꭵ卩άl♛*_ <╣
║                                                      
╠${flecha} _${prefijo}menu1_                                                               
║                                                   
╠${flecha} _${prefijo}menu2_
║
╠>  _Felicidades, este grupo es_\n║ _premium_ ✅                                            
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

var p2menu_principal = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha) => {
    return ` 
${separadorArriba}
╔             << ${nombreBot} >>               ╗
║                                                   ║
╠> _*💥мＥ𝕟𝐮 ⓟяｉŇ𝔠Ꭵ卩άl♛*_ <╣
║                                                      
╠${flecha} _${prefijo}menu1_                                                               
║                                                   
╠${flecha} _${prefijo}menu2_
║
╠  _‼_ _Usa *${prefijo}staffmenu*_
║ _para abrir el menu de *staff*‼_
║
╠>  _Felicidades, este grupo es_\n║ _premium_ ✅                                            
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

module.exports = { menu_principal, smenu_principal, omenu_principal, pmenu_principal, p2menu_principal }