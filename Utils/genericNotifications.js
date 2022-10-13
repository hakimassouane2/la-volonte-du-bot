import sendNotifications from '../Utils/sendNotifications';

function genericNotifications(redemption) {
    const messageToWriteInChat = redemption.message ? `Pour ${redemption.message}` : "Pour le groupe entier";

    sendNotifications(redemption, messageToWriteInChat);
}

export default genericNotifications