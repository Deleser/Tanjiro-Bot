#/bin/bash
# Si copias codigo da creditos! :3

####################### 💡 Variables/Constantes 💡 #######################

DIRECTORIO_SPIRALNODES='/home/container'

####################### ✨ Inicio ✨ #######################

    sleep 0.25

        clear

    sleep 1.5

echo -e "\e[93m     _______          \e[96m_ _            "
    sleep 0.25
echo -e "\e[93m    |__   __|        \e[96m(_|_)           "
    sleep 0.25
echo -e "\e[93m       | | __ _ _ __  \e[96m_ _ _ __ ___   "
    sleep 0.25
echo -e "\e[93m       | |/ _  | '_  \e[96m| | | '__/ _ \  "
    sleep 0.25
echo -e "\e[93m       | | (_| | | | \e[96m| | | | | (_) | "
    sleep 0.25
echo -e "\e[93m       |_|\__,_|_| |_\e[96m| |_|_|  \___/  "
    sleep 0.25
echo -e "\e[93m                    \e[96m_/ | "          
    sleep 0.25
echo -e "\e[93m                   \e[96m|__/  "
    sleep 0.25

    echo -e ""

    sleep 1.2

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Iniciando actualizacion de Tanjiro!"

    sleep 2.5

    clear

    sleep 1.2

echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Limpiando archivos locales..."

    sleep 1.25

echo -e "\e[92m* \e[39m[\e[93mDEBUG\e[39m] Creando carpeta de backup..."

    mdkir backup &> /dev/null
    
    sleep 1.25

echo -e "\e[92m* \e[39m[\e[93mDEBUG\e[39m] Guardando archivos importantes..."

    mv db backup &> /dev/null
    
    sleep 1.25

echo -e "\e[92m* \e[39m[\e[93mDEBUG\e[39m] Eliminando archivos completamente..."

    cd ${DIRECTORIO_SPIRALNODES}

    rm -rf .config &> /dev/null
    rm -rf .cache &> /dev/null
    rm -rf src &> /dev/null
    rm -rf config.json &> /dev/null
    rm -rf node_modules &> /dev/null
    rm -rf Tanjiro-MD &> /dev/null
    rm -rf .gitignore &> /dev/null
    rm -rf config.json &> /dev/null
    rm -rf index.js &> /dev/null
    rm -rf main.js &> /dev/null
    rm -rf package-lock.json &> /dev/null
    rm -rf package.json &> /dev/null
    rm -rf README.md &> /dev/null
    rm -rf LICENSE &> /dev/null

    sleep 1.25

echo -e "\e[92m* \e[39m[\e[93mDEBUG\e[39m] Instalando nueva actualizacion..."

    git clone https://github.com/Hiro-Beet/Tanjiro-Bot.git &> /dev/null

    if [ $PWD != $DIRECTORIO_SPIRALNODES ]; then

        sleep 1.5

            echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Hosteo local detectado! [\e[96mTERMUX\e[39m]"

                cd Tanjiro-Bot &> /dev/null
                rm -rf db &> /dev/null
                cd .. &> /dev/null
                mv Tanjiro-Bot backup &> /dev/null
                cd backup &> /dev/null
                mv db Tanjiro-Bot &> /dev/null
                cd /data/data/com.termux/files/home &> /dev/null
                rm -rf Tanjiro-Bot &> /dev/null
                mv Tanjiro-Bot /data/data/com.termux/files/home &> /dev/null
                cd Tanjiro-Bot &> /dev/null
                bash setup.sh &> /dev/null

        exit
    else 

        sleep 1.5

            echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] \e[95mSpiralNodes\e[39m!"

                cd Tanjiro-Bot &> /dev/null
                mv src /home/container &> /dev/null
                mv .gitignore /home/container &> /dev/null
                mv config.json /home/container &> /dev/null
                mv index.js /home/container &> /dev/null
                mv main.js /home/container &> /dev/null
                mv package.json /home/container &> /dev/null
                mv README.md /home/container &> /dev/null
                mv LICENSE /home/container &> /dev/null
                cd ${DIRECTORIO_SPIRALNODES}
                rm -rf Tanjiro-Bot &> /dev/null

                    echo -e "\e[92m* \e[39m[\e[94mINFO\e[39m] Hecho! Por favor, solo inicia tu server como lo harias normalmente. \e[95mSpiralNodes\e[39m!"

    fi

exit