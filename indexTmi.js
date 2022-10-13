import checkTimers from './checkTimers';
import commandMap from './commandMap';
import genericNotifications from './Utils/genericNotifications';
import rewardMap from './rewardMap';
import rewardIdToNameMap from './rewardIdToNameMap';
const tmi = require('tmi.js');

const express = require('express')
const app = express()
const channel = 'lavolontedude'
const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'LaVolonteDuDe',
		password: ''
	},
	channels: [ 'LaVolonteDuDe' ]
});

client.connect().catch(console.error);

app.listen(3000, async () => {
    console.log("Le bot est lancé sur le port 3000");

    client.on('message', (channel, tags, message, self) => {
        // if it's a reward
        if (tags['custom-reward-id']) {
            const rewardTitle = rewardIdToNameMap[tags['custom-reward-id']]

            // if rewards exist in DB
            if (rewardTitle) {
                
                const redemption = {
                    user: {
                        display_name: tags.username
                    },
                    user_input: message,
                    reward: {
                        title: rewardTitle
                    }
                };

                if (rewardMap[rewardTitle]) {
                    rewardMap[rewardTitle](client, redemption);
                } else {
                    genericNotifications(redemption)
                }
            } else {
                client.say(channel, `404 reward not found`);
            }
        } else /* If it's a command */ {
            if(self || !message.startsWith('!')) {
                checkTimers(client, channel, false);
                return ;
            };

            const args = message.slice(1).split(' ');
	        const command = args.shift().toLowerCase();

            if (commandMap[command]) {
                commandMap[command](client, channel, tags.username, command);
            } else {
                client.say(channel, `Désolé @${tags.username} cette commande n'existe pas 😭 Utilise la commande !cmd pour obtenir la liste des commandes disponibles`);
            }
        }
    });

    client.on('redeem', (channel, username, rewardType, tags, message) => {
        const rewardTitle = rewardIdToNameMap[tags['custom-reward-id']]
    });

    // Set a timer to send automatic message to chat every 5 minutes
    setInterval(function(){ 
        checkTimers(client, channel, true);  
    }, 300000);
});