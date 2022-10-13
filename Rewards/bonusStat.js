import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

const statArray = [
  'de Force 💪',
  'de Déxtérité 🏃💨',
  'de Constitution 💖',
  "d'Intelligence 🧠",
  'de Sagesse 🧐',
  'de Charisme 😎'
]

function bonusStat(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const statRoll = statArray[Math.floor(Math.random() * statArray.length)]

    const chatMessage = `@${userRedeeming} vient d'appliquer un bonus ${statRoll} +${diceRoll} à ${userReceiving} !`
    const notifyMessage = `+${diceRoll} ${statRoll} pour ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default bonusStat