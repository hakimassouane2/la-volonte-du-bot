import * as fs from 'fs-extra';
import ChatClient from 'twitch-chat-client';
import PubSubClient from 'twitch-pubsub-client';
import TwitchClient from 'twitch';
import checkTimers from './checkTimers';
import commandMap from './commandMap';
import genericNotifications from './Utils/genericNotifications';
import rewardMap from './rewardMap';
import { ApiClient } from 'twitch';
import { StaticAuthProvider } from 'twitch-auth';

const express = require('express')
const app = express()

const clientId = '';
const clientSecret = '';
const channel = "lavolontedude"

process.title = "La volonte du bot"
const pubSubClient = new PubSubClient();

app.listen(3000, async () => {
    console.log("Le bot est lancé sur le port 3000");

    const tokenData = JSON.parse(await fs.readFile('./tokens.json'));
    const twitchClient = TwitchClient.withCredentials(clientId, tokenData.accessToken, undefined, {
        clientSecret,
        refreshToken: tokenData.refreshToken,
        expiry: tokenData.expiryTimestamp === null ? null : new Date(tokenData.expiryTimestamp),
        onRefresh: async ({ accessToken, refreshToken, expiryDate }) => {
            const newTokenData = {
                accessToken,
                refreshToken,
                expiryTimestamp: expiryDate === null ? null : expiryDate.getTime()
            };
            await fs.writeFile('./tokens.json', JSON.stringify(newTokenData, null, 4), 'UTF-8')
        }
    });
    
    const chatClient = await ChatClient.forTwitchClient(twitchClient, {channels: [channel]});
    const { id } = await twitchClient.helix.users.getUserByName(channel);

    await chatClient.connect();
    await pubSubClient.registerUserListener(twitchClient);

    console.log('cvhat client => ', chatClient)
    
    // Event PubSub de reward
    pubSubClient.onRedemption(id, message => {
        let rewardTitle = message._data.data.redemption.rewardTitle;
        console.log(`La reward ${rewardTitle} vient d'être récupérée`);
        if (rewardMap[rewardTitle]) {
            rewardMap[rewardTitle](chatClient, message._data.data.redemption);
        } else {
            genericNotifications(message._data.data.redemption)
        }
    })

    // Event de chat
    chatClient.onPrivmsg((channel, user, message) => {
        // Handle commands
        if (message[0] === '!') {
            if (commandMap[message.toLowerCase()]) { 
                commandMap[message.toLowerCase()](chatClient, user, message);
            } else {
                chatClient.say(channel, `Désolé @${user} cette commande n'existe pas 😭 Utilise la commande !cmd pour obtenir la liste des commandes disponibles`);
            }
        } else {
            checkTimers(chatClient, false);
        }
    });

    // Set a timer to send automatic message to chat every 5 minutes
    setInterval(function(){ 
        checkTimers(chatClient, true);  
    }, 300000);
});