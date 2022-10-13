import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

const statArray = [
    'Strength 💪',
    'Dexterity 🏃💨',
    'Constitution 💖',
    'intelligence 🧠',
    'Wisdom 🧐',
    'Charisma 😎'
]

function statBonus(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const statRoll = statArray[Math.floor(Math.random() * statArray.length)]

    const chatMessage = `@${userRedeeming} just applied a +${diceRoll} ${statRoll} bonus to ${userReceiving} !`
    const notifyMessage = `+${diceRoll} ${statRoll} for ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default statBonus