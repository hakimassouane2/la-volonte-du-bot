import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';

const elementsTable = [
    'Acier',
    'Acide',
    'Arcane',
    'Bois',
    'Boue',
    'Explosion',
    'Foudre',
    'Feu',
    'Froid',
    'Glace',
    'Lave',
    'Magnetisme',
    'Poison',
    'Tenebre',
    'Terre',
    'Tonnerre',
    'Vapeur',
    'Vent',
]

function dechainementDesElements(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const selectedElement = elementsTable[Math.floor(Math.random() * elementsTable.length)];
    const playerAffected = redemption.message ? `sur ${redemption.message}` : "";

    let chatMessage = '';
    let notifyMessage = '';

    if (selectedElement === 'Acier') {
        chatMessage = `@${userRedeeming} déchaîne l'élément  ${playerAffected} et tente de rendre mou l'acier 🗡️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Acide') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de l'acide  ${playerAffected} et tente de lui envoyer un jet d'acide 🧪`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Arcane') {
        chatMessage = `@${userRedeeming} déchaîne l'élément des arcanes  ${playerAffected} et tente de produire une explosion arcanique 🧙`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Bois') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du bois  ${playerAffected} et tente de l'enraciner 🌳`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Boue') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la boue ${playerAffected} et tente de l'embourber 🥾`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Explosion') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de l'explosion  ${playerAffected} et tente de tout faire péter 💥`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Foudre') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la foudre  ${playerAffected} et tente de le foudroyer ⚡`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Feu') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du feu  ${playerAffected} et tente de diriger un météore de feu dans sa direction ☄️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Froid') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du froid  ${playerAffected} et tente de lever les brumes enneigées 🌫️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Glace') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la glace  ${playerAffected} et tente de refroidir l'atmosphère 🧊`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Lave') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la lave  ${playerAffected} et tente de créer un torrent de lave 🌋`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Magnétisme') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du magnétisme  ${playerAffected} et tente de maitriser le magnétisme 🧲`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Poison') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du poison ${playerAffected} et tente d'envoyer son serpent le mordre 🐍`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Ténèbre') {
        chatMessage = `@${userRedeeming} déchaîne l'élément des ténèbres  ${playerAffected} et tente d'assombrir son avenir 🕶️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Terre') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la terre  ${playerAffected} et tente de faire trembler la terre 🌎`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Tonnerre') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du tonnerre  ${playerAffected} et tente de faire gronder le tonnerre ⛈️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Vapeur') {
        chatMessage = `@${userRedeeming} déchaîne l'élément de la vapeur ${playerAffected} et tente de faire monter la chaleur ♨️`
        notifyMessage = `🎲 Test`;
    }
    if (selectedElement === 'Vent') {
        chatMessage = `@${userRedeeming} déchaîne l'élément du vent ${playerAffected} et tente de faire souffler l'ouragan 💨`
        notifyMessage = `🎲 Test`;
    }

    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default dechainementDesElements