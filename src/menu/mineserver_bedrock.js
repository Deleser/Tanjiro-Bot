var mine_server_bedrock = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft) => {
    return `
${separadorArriba}
╔             << ${nombreBot} >>                ╗
║                                                   ║
╠>      _*👮  M͓̽i͓̽n͓̽e͓̽S͓̽e͓̽r͓̽v͓̽e͓̽r͓̽  🍩*_      <╣
║                                                     
╠${flecha} _${prefijo}minemotd_
║                                                     
╠${flecha} _${prefijo}mineplayers_
║                                                     
╠${flecha} _${prefijo}minemap_
║                                                     
╠${flecha} _${prefijo}mineid_
║                                                     
╠${flecha} _${prefijo}minemode_
║                                                     
╠${flecha} _${prefijo}mineversion_
║                                                     
╠> _Bedrock Server_
║                                                     
╠> _Powered by *SpiralNodes*_ </3
║
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

exports.mine_server_bedrock = mine_server_bedrock