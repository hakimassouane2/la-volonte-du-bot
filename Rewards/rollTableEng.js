import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function rollTableEng(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    const playerAffected = redemption.message ? `for ${redemption.message}` : "";
    const chatMessage = `@${userRedeeming} rolled a ${diceRoll} on the ${redemption.rewardTitle} table ${playerAffected} 🎲`
    const notifyMessage = `🎲 ${diceRoll} on the ${redemption.rewardTitle} table`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default rollTableEng