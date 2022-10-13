import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function rollTable(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const userReceiving = redemption.message;
    const diceRoll = Math.floor(Math.random() * 100) + 1;
    const playerAffected = redemption.message ? `pour ${redemption.message}` : "";
    const chatMessage = `@${userRedeeming} a roll un ${diceRoll} sur la table de ${redemption.rewardTitle} ${playerAffected} 🎲`
    const notifyMessage = `🎲 ${diceRoll} sur la table de ${redemption.rewardTitle}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default rollTable