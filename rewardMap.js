import armorBonus from './Rewards/armorBonus';
import armorPenalty from './Rewards/armorPenalty';
import attackBonus from './Rewards/attackBonus';
import attackPenalty from './Rewards/attackPenalty';
import attaqueEnnemies from './Rewards/attaqueEnnemies';
import barrier from './Rewards/barrier';
import barriere from './Rewards/barriere';
import bonusArmure from './Rewards/bonusArmure';
import bonusAttaque from './Rewards/bonusAttaque';
import bonusStat from './Rewards/bonusStat';
import bouclier from './Rewards/bouclier';
import chaudronMagique from './Rewards/chaudronMagique';
import dechainementDesElements from './Rewards/dechainementDesElements';
import luckPoints from './Rewards/luckPoints';
import malusArmure from './Rewards/malusArmure';
import malusAttaque from './Rewards/malusAttaque';
import malusStat from './Rewards/malusStat';
import pieceOr from './Rewards/pieceOr';
import inspiration from './Rewards/inspiration';
import rollTable from './Rewards/rollTable';
import rollTableEng from './Rewards/rollTableEng'
import statBonus from './Rewards/statBonus';
import statPenalty from './Rewards/statPenalty';

const rewardMap = {};

// Liste Française

rewardMap["Attaque d'ennemies"] = attaqueEnnemies;
rewardMap["Barrière"] = barriere;
rewardMap["Bonus d'armure"] = bonusArmure;
rewardMap["Bonus d'attaque"] = bonusAttaque;
rewardMap["Bonus de stat"] = bonusStat;
rewardMap["Bouclier"] = bouclier;
rewardMap["Chaudron magique"] = chaudronMagique;
rewardMap["Déchaînement des éléments"] = dechainementDesElements;
rewardMap["Larcin"] = pieceOr;
rewardMap["Magie sauvage"] = rollTable;
rewardMap["Malus d'armure"] = malusArmure;
rewardMap["Malus d'attaque"] = malusAttaque;
rewardMap["Malus de stat"] = malusStat;
rewardMap["Inspiration"] = inspiration;
rewardMap["Rencontre aléatoire"] = rollTable;
rewardMap["Trouvaille de pièce d'or"] = pieceOr;

// Liste Anglaise
rewardMap["AC penalty (01H00)"] = armorPenalty;
rewardMap["Attack bonus (01H00)"] = attackBonus;
rewardMap["Attack penalty (01H00)"] = attackPenalty;
rewardMap["Barrier (01H00)"] = barrier;
rewardMap["Bonus AC (01H00)"] = armorBonus;
rewardMap["Luck points"] = luckPoints;
rewardMap["Stat bonus (01H00)"] = statBonus;
rewardMap["Stat penalty (01H00)"] = statPenalty;
rewardMap["Wild magic"] = rollTableEng;

export default rewardMap;
