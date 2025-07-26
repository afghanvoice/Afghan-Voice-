// Afghan Voice - Gateway Ping Tester
const exec = require('child_process').exec;

const gatewayIP = '165.22.109.195';

exec(`ping -c 4 ${gatewayIP}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error pinging gateway: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`⚠️ stderr: ${stderr}`);
        return;
    }
    console.log(`✅ Gateway response:\n${stdout}`);
});
