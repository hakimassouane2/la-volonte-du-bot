import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function luckPoints(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,6,1,4);
    const chatMessage = `@${userRedeeming} just gave ${diceRoll} 🍀 luck point(s) to ${userReceiving}`
    const notifyMessage = `${diceRoll}🍀 luck points for ${userReceiving}`;

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default luckPoints