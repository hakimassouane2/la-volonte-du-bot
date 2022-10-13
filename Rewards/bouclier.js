import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

function bouclier(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const diceRoll = (Math.floor(Math.random() * 10) + 1) + 5;
    const playerAffected = redemption.message ? `${redemption.message}` : "";
    const chatMessage = `@${userRedeeming} protège ${playerAffected} avec son bouclier 🛡️. Les dégats de la prochaine attaque sur ${playerAffected} seront réduits de ${diceRoll}`
    const notifyMessage = `🛡️ Prochains dégats sur ${playerAffected} réduits de ${diceRoll}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default bouclier