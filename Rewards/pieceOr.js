import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

function pieceOr(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const actionType = redemption.rewardTitle === "Larcin" ? "chapparder" : "donner"
    const diceRoll = weightedRandomDistrib(1,100,35,5);
    const chatMessage = `@${userRedeeming} vient de ${actionType} ${diceRoll} 📀 (PO) à ${userReceiving}`
    const notifyMessage = `${diceRoll} 📀 (PO) ${actionType} à ${userReceiving}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default pieceOr