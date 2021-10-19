#/bin/bash
# Si copias codigo da creditos! :3

####################### 💡 Variables/Constantes 💡 #######################

DIRECTORIO_SPIRALNODES='/home/container'

####################### ✨ Inicio ✨ #######################

    clear
    mdkir backup &> /dev/null
    mv db backup &> /dev/null

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

    git clone https://github.com/Hiro-Beet/Tanjiro-Bot.git &> /dev/null

    if [ $PWD != $DIRECTORIO_SPIRALNODES ]; then

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

    fi