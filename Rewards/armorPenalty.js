import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function armorPenalty(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} just applied a -${diceRoll}🛡️ armor penalty to ${userReceiving} !`
    const notifyMessage = `-${diceRoll}🛡️ for ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default armorPenalty