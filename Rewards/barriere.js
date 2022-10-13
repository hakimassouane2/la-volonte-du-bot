import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function barriere(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const diceRoll = (Math.floor(Math.random() * 4) + 1) + 4;
    const playerAffected = redemption.message ? `${redemption.message}` : "";
    const chatMessage = `@${userRedeeming} octroie ${diceRoll} PV temporaires à ${playerAffected} 💚`
    const notifyMessage = `💚 ${diceRoll} PV temporaires pour ${playerAffected}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default barriere