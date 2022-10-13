import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

const encounterLevel = {
    1: 'Facile',
    2: 'Moyenne',
    3: 'Difficile',
    4: 'Mortelle'
};

const easyEncounterQuotes = [
    "Ésperons que ce soit une partie de plaisir 😁",
    "Quelques bruits bizzare se font entendre au loin... 🔊",
    "Ce sera une balade de santé pour nos aventuriers 🚶‍"
]

const mediumEncounterQuotes = [
    "Aiguisez vos lames aventuriers 🗡️",
    "Il faut rester pret à toute éventualité ici 👀",
]

const hardEncounterQuotes = [
    "Des rencontres comme du poivre : corsées... 🧂",
    "Il va falloir une bonne paire de dagues, ou bien d'autre chose 🍒",
]

const deadlyEncounterQuotes = [
    "Souvent la mort nous guette a chaque coin de rue 💀",
    "Paix à vos âmes 🙏",
    "Opération carnage ammorcé 💂‍♂️",
    "Starf 👹",
    "Tous aux abris 🏃‍♂️🏃‍♀️"
]

const encounterQuotes = {
    'Facile': easyEncounterQuotes,
    'Moyenne': mediumEncounterQuotes,
    'Difficile': hardEncounterQuotes,
    'Mortelle': deadlyEncounterQuotes
}

function attaqueEnnemies(chatClient, redemption) {
    const diceRoll = weightedRandomDistrib(1,5,2,5);
    const encounterLvlPicked = encounterLevel[diceRoll];
    const targetArray = encounterQuotes[encounterLvlPicked];
    const randomQuote = targetArray[Math.floor(Math.random() * targetArray.length)];

    const chatMessage = `Le sort en est jeté, ${randomQuote}`
    const notifyMessage = `Rencontre de niveau ${encounterLvlPicked}`;
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default attaqueEnnemies