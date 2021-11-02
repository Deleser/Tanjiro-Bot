#/bin/bash
# Si copias codigo da creditos! :3
# Este script sirve para arreglar el error que salio el dia 02/11/21 debido a que la libreria no esta actualizada :3

####################### 💡 Variables/Constantes 💡 #######################

DIRECTORIO_SPIRALNODES='/home/container'
DIRECTORIO_TERMUX='/data/data/com.termux/files'

####################### ✨ Inicio ✨ #######################

    sleep 0.25

    clear

    sleep 0.25

    if [ $PWD != $DIRECTORIO_SPIRALNODES ]; then

    sleep 1

    echo -e "\e[\e[93m-39m[\e[39m] \e[95mAndroid\e[39m detectado, parcheando el error..."

    # cd /data/data/com.termux/files/home/Tanjiro-Bot/node_modules/@adiwajshing/baileys/lib/WAConnection/0.Base.js &> /dev/null
    sed -i 's/2123/3234/g' /data/data/com.termux/files/home/Tanjiro-Bot/node_modules/@adiwajshing/baileys/lib/WAConnection/0.Base.js &> /dev/null # Parcheado! ♥️

    echo -e "\e[\e[93m-39m[\e[39m] \e[92mSe ha parcheado el error!"

    else
    
    sleep 1

    echo -e "\e[\e[93m-39m[\e[39m] \e[95mAndroid\e[39m detectado, parcheando el error..."

    # /home/container/node_modules/@adiwajshing/baileys/lib/WAConnection/0.Base.js &> /dev/null
    sed -i 's/2123/3234/g' /home/container/node_modules/@adiwajshing/baileys/lib/WAConnection/0.Base.js &> /dev/null &> /dev/null # Parcheado! ♥️

    echo -e "\e[\e[93m-39m[\e[39m] \e[92mSe ha parcheado el error!"

    fi