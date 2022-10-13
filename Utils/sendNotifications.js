import path from 'path';
import notifier from 'node-notifier';
import fs from 'fs';

const saveDataMap = new Map();


function sendNotifications(redemption, message) {
    const userRedeeming = redemption.userDisplayName;
    const rewardTitle = redemption.rewardTitle;
    const rewardIconPath = path.join(__dirname, `../Rewards/Icons/${rewardTitle}.png`)

    if (!saveDataMap.get(rewardTitle)) {
        saveDataMap.set(rewardTitle, 1);
    } else {
        saveDataMap.set(rewardTitle, (saveDataMap.get(rewardTitle) + 1));
    }

    const file = fs.createWriteStream('../../Downloads/D&D/Stream ressources/Twitch/Channel points/Last session redeemed reward.txt');
    file.on('error', function(err) {
        console.err(`Error while writing file saveDataMap : ${err}`)
    });
    saveDataMap.forEach(function(element, index) { 
        file.write(`${index} => ${element}\n`); 
    });
    file.end();

    notifier.notify({
        icon: fs.existsSync(rewardIconPath) ? rewardIconPath : path.join(__dirname, `../Rewards/Icons/defaultIcon.png`),
        message,
        title: `${rewardTitle} par ${userRedeeming}`,
        sound: false, // Only Notification Center or Windows Toasters
        wait: true // Wait with callback, until user action is taken against notification, does not apply to Windows Toasters as they always wait or notify-send as it does not support the wait option
    })
}

export default sendNotifications