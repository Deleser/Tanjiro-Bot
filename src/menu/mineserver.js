var mine_server = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, miembrosMinimo, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft) => {
    return `
${separadorArriba}
╔             << ${nombreBot} >>                ╗
║                                                   ║
╠>      _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_      <╣
║                                                     
╠${flecha} _${prefijo}minemotd_
║                                                     
╠${flecha} _${prefijo}mineping_
║                                                     
╠${flecha} _${prefijo}mineicon_
║                                                     
╠${flecha} _${prefijo}mineplayers_
║                                                     
╠${flecha} _${prefijo}mineversion_
║                                                     
╠> _Powered by *SpiralNodes*_ </3
║
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

exports.mine_server = mine_server