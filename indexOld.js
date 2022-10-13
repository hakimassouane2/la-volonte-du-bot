import { RefreshingAuthProvider } from '@twurple/auth';
import { ChatClient } from '@twurple/chat';
import { PubSubClient } from '@twurple/pubsub';
import { promises as fs } from 'fs';

import rewardMap from './rewardMap';
import genericNotifications from './Utils/genericNotifications';
import commandMap from './commandMap';
import checkTimers from './checkTimers';

async function main() {
    console.log('Le bot est lancé')
	const clientId = '';
	const clientSecret = '';
	const tokenData = JSON.parse(await fs.readFile('./tokens.json', 'UTF-8'));
	const authProvider = new RefreshingAuthProvider(
		{
			clientId,
			clientSecret,
			onRefresh: async newTokenData => await fs.writeFile('./tokens.json', JSON.stringify(newTokenData, null, 4), 'UTF-8')
		},
		tokenData
	);

	const chatClient = new ChatClient({ authProvider, channels: ['lavolontedude'] });
	await chatClient.connect();

    const pubSubClient = new PubSubClient();
    const userId = await pubSubClient.registerUserListener(authProvider);

    console.log('Le bot est initialisé')

    pubSubClient.onRedemption(userId, (message) => {
        const rewardTitle = message.rewardTitle
        console.log(`La reward  ${rewardTitle} vient d\'etre récupéré par ${message.userDisplayName}`)
        

        if (rewardMap[rewardTitle]) {
            rewardMap[rewardTitle](chatClient, message);
        } else {
            genericNotifications(message)
        }
    });

	chatClient.onMessage((channel, user, message) => {
        if (!(message[0] === '!')) {
            checkTimers(chatClient, channel, false);
            return ;
        }

        const args = message.slice(1).split(' ');
        const command = args.shift().toLowerCase();

        if (commandMap[command]) {
            console.log('Une commande vient d\'etre utilisé')
            commandMap[command](chatClient, channel, user, command);
        } else {
            chatClient.say(channel, `Désolé @${user} cette commande n'existe pas 😭 Utilise la commande !cmd pour obtenir la liste des commandes disponibles`);
        }
	});

    // Set a timer to send automatic message to chat every 5 minutes
    setInterval(function(){ 
        checkTimers(chatClient, true);  
    }, 300000);
}

main();