import cmd from './chatCommands/cmd'
import campagne from './chatCommands/resume'
import discord from './chatCommands/socials/discord'
import prime from './chatCommands/prime'
import instagram from './chatCommands/socials/instagram'
import extension from './chatCommands/extension';
import youtube from './chatCommands/socials/youtube'

const listOfTexts = [cmd, prime, extension, instagram, discord, campagne, youtube];
let lastTimeStamp = new Date();
let messageCounter = 0;
let lastIndex = 0;

function checkTimers (client, channel, fromInterval) {
    const timeDiff = Math.abs(new Date() - lastTimeStamp);
    const elapsedTime = Math.floor((timeDiff/1000)/60);

    if (messageCounter >= 2 && elapsedTime >= 10) {
        console.log('10 minutes et 2 messages sont passés, une commande est lancé aléatoirement')
        listOfTexts[lastIndex](client, channel);
        
        if (lastIndex >= listOfTexts.length - 1) {
            lastIndex = 0;
        } else {
            lastIndex++;
        }

        messageCounter = 0;
        lastTimeStamp = new Date();
    } else if (fromInterval === false) {
        messageCounter++;
    }
}

export default checkTimers;