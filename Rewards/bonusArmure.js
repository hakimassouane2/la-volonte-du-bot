import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function bonusArmure(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = weightedRandomDistrib(1,4,1,3);
    const chatMessage = `@${userRedeeming} vient d'offrir un bonus d'armure +${diceRoll}🛡️ à ${userReceiving} !`
    const notifyMessage = `+${diceRoll}🛡️ pour ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default bonusArmure