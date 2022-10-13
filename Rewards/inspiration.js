import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function inspiration(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,4,1,5);
    const chatMessage = `@${userRedeeming} vient de donner ${diceRoll} 🍀 point(s) d'inspiration à ${userReceiving}`
    const notifyMessage = `${diceRoll}🍀 points d'inspiration pour ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default inspiration