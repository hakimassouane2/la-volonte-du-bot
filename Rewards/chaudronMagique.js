import sendMsgToChat from '../Utils/sendMsgToChat';
import sendNotifications from '../Utils/sendNotifications';
import weightedRandomDistrib from '../Utils/weightedRandomDistrib';

const potionTable = [
    "Potion d'escalade",
    "Potion de soins",
    "Huile d'insaisissabilité",
    "Potion d'agrandissement",
    "Potion d'amitié avec les animaux",
    "Potion de résistance",
    "Potion de respiration aquatique",
    "Potion de soins majeurs",
    "Potion de force de géant des collines",
    "Potion de souffle de feu",
    "Élixir de santé",
    "Huile éthérée",
    "Potion d'héroïsme",
    "Potion d'invulnérabilité",
    "Potion de clairvoyance",
    "Potion de forme gazeuse",
    "Potion de soins supérieurs",
    "Potion de force de géant des pierres",
    "Potion de lecture des pensées",
    "Potion de rétrécissement",
    "Potion de force de géant du feu",
    "Huile d'affûtage",
    "Potion d'invisibilité",
    "Potion de longévité",
    "Potion de vitalité",
    "Potion de soins suprêmes",
    "Potion de force de géant des nuages",
    "Potion de vitesse",
    "Potion de vol",
    "Potion de force de géant des tempêtes",
]

const poisonTable = [
    "du Curare",
    "du Erwurg",
    "de l'Extrait de sanvert",
    "de la Fleur voilée",
    "du Piedlent",
    "du Sang d'assassin",
    "du Sérum de vérité",
    "du Venin de vipère à tête noire",
    "de l'Ajonc à feuilles bleues",
    "de l'Arbre à poison",
    "du Bluluka",
    "de la Caresse de sorcière",
    "de l'Envie du désert",
    "de l'Enzyme de triple-fleur",
    "du Fluna",
    "du Jatropha curcas",
    "du Mucus de charognard rampant",
    "du Poison d'ettercap",
    "du Poison de crapaud géant",
    "du Poison drow",
    "de la Poudre d'assonne",
    "du Venin de serpent",
    "du Belladone",
    "du Bralia",
    "du Caustar",
    "de l'Herbe aux loups",
    "de la Malice",
    "de la Teinture pale",
    "du Venin d'araignée-loup géante",
    "dernier verre",
    "de l'Entolome zébré",
    "de l'Essence éthérée",
    "du Garaban",
    "de l'Herbe du diable",
    "de la Mandragore",
    "de la Pâte de malyss",
    "du Pollen de cybella",
    "du Sang de troll",
    "du Venin d'araignée géante",
    "du Venin de guêpe géante",
    "du Venin de mille-pattes géant",
    "de l'Amnésite",
    "de la Cendres de liche",
    "du Diffenbache",
    "de l'Huile de taggit",
    "de l'Illumination du moissonneur",
    "du Jalwun jiwin",
    "des Larmes de drider",
    "du Murfa",
    "du Nibon",
    "de l'Opia",
    "du Quarigan",
    "du Rhododendron",
    "des Spores d'ascomoïde",
    "du Ténébreux vireux",
    "de la Tormentille",
    "du Vin argenté",
    "de l'Arsenic",
    "du Baiser de sorcière",
    "du Doshenkana",
    "de la Fumées d'othur",
    "de l'Huile noire",
    "de l'Illusion de Lomat",
    "du Sombre serpent",
    "du Terrinave",
    "de la Cendres d'ungol",
    "du Cyanure",
    "du Emloc",
    "du Gaz des marais",
    "du Marchand de sable",
    "du Nitharite",
    "de l'Oeil du basilic",
    "du Rêve d'Ya",
    "de la Salive de goule",
    "du Torpeur",
    "de la Toxine d'aspic",
    "du Uropygus",
    "du Kintal de mage",
    "du Souffle du désert",
    "du Thrum",
    "du Coulabine",
    "de l'Essence d'ombre",
    "de la Gomme de jaraba",
    "de la Poudre de lotus jaune",
    "de la Poudre de lotus noir",
    "du Sirop de rêve",
    "du Ubon",
    "du Ajida",
    "de la Queue de scorpion royal",
    "du Venin de scorpion géant",
    "du Poison de wiverne",
    "du Sang des venins",
    "des Larmes de minuit",
    "du Droon",
    "du Mortelame",
    "de la Brume de folie",
    "du Poison de ver pourpre",
    "de la Bile de dragon vert",
    "de la Toxine d'oeil tueur",
    "de l'Extrait de lotus noir",
]

function chaudronMagique(chatClient, redemption) {
    const userRedeeming = redemption.userDisplayName;
    const diceRollTable = Math.floor(Math.random() * 2) + 1;
    const playerAffected = redemption.message ? `sur ${redemption.message}` : "";

    let potionRoll = 0;
    let chatMessage = '';
    let notifyMessage = '';

    if (diceRollTable === 1) {
        potionRoll = weightedRandomDistrib(0,potionTable.length,potionTable.length/2,10);
        chatMessage = `@${userRedeeming} a laissé s'échapper une ${potionTable[potionRoll]} du chaudron magique, qui se déverse ${playerAffected} 🧪`
        notifyMessage = `🎲 ${potionTable[potionRoll]} ${playerAffected}`;
    } else {
        potionRoll = weightedRandomDistrib(0,poisonTable.length,poisonTable.length/2,10);
        chatMessage = `@${userRedeeming} a laissé s'échapper ${poisonTable[potionRoll]} du chaudron magique, qui se déverse ${playerAffected} 🧪`
        notifyMessage = `🎲 ${poisonTable[potionRoll]} ${playerAffected}`;
    }
    
    sendMsgToChat(chatClient, chatMessage);
    sendNotifications(redemption, notifyMessage);
}

export default chaudronMagique