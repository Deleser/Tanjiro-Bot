var menu_owner = (nombreBot, owner, nombreOwner, prefijo, creditosDefault, nezuko_api, separadorArriba, separadorKawaii, separadorAbajo, flecha, repositorio, hirogithub, puerto_minecraft, ip_minecraft) => {
    return `
${separadorArriba}
╔            << ${nombreBot} >>                ╗
║                                                  ║
╠>   _*♛ мｅ𝕟Ｕ ｏ𝐰𝓝𝒆𝐑 🎉*_   <╣
║                                 
╠> << Premium On/Off >> 
║                   
╠${flecha} _${prefijo}premium on_
║                   
╠${flecha} _${prefijo}premium off_
║                                 
╠> << Ban Grupo On/Off >>
║                   
╠${flecha} _${prefijo}bangroup on_
║                   
╠${flecha} _${prefijo}bangroup on_
║                                 
╠> << Power >>
║                   
╠${flecha} _${prefijo}power off_
║                   
╠${flecha} _${prefijo}power restart_
║                                 
╠> << Anuncios >>
║                   
╠${flecha} _${prefijo}anunciar + [Anuncio]_
║                                 
╠> << Tools >>
║                   
╠${flecha} _${prefijo}block + [Usuario]_
║                   
╠${flecha} _${prefijo}unblock + [Usuario]_
║                   
╠${flecha} _${prefijo}newgroup + [Nombre]_
║                   
╠${flecha} _${prefijo}promoteall_
║                   
╠${flecha} _${prefijo}demoteall_
║                                 
╠> << Tools Importantes >>
║                   
╠${flecha} _${prefijo}update_
║                   
╠${flecha} _${prefijo}terminal + [Comando]_
║                                                     
╠> _Powered by *SpiralNodes*_ </3                   
║                                                   
╚             << ${nombreBot} >>               
${separadorAbajo}`
}

exports.menu_owner = menu_owner