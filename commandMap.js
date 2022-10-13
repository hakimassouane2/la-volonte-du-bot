import discord from './chatCommands/socials/discord';
import instagram from './chatCommands/socials/instagram';
import cmd from './chatCommands/cmd';
import prime from './chatCommands/prime';
import throwDiceCommand from './chatCommands/throwDiceCommand';
import youtube from './chatCommands/socials/youtube';
import extension from './chatCommands/extension';

const commandMap = {};
commandMap["cmd"] = cmd;
commandMap["d10"] = throwDiceCommand;
commandMap["d100"] = throwDiceCommand;
commandMap["d12"] = throwDiceCommand;
commandMap["d20"] = throwDiceCommand;
commandMap["d4"] = throwDiceCommand;
commandMap["d6"] = throwDiceCommand;
commandMap["d8"] = throwDiceCommand;
commandMap["discord"] = discord;
commandMap["instagram"] = instagram;
commandMap["extension"] = extension;
commandMap["prime"] = prime;
commandMap["youtube"] = youtube;

export default commandMap;

