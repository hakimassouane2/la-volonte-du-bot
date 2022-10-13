import Roll from 'roll';
const diceRoller = new Roll();

function throwDiceCommand(client, channel, user, command) {
    const diceRoll = diceRoller.roll(command);

    client.say(channel, `@${user} a roll un ${diceRoll.result} 🎲`);
}

export default throwDiceCommand