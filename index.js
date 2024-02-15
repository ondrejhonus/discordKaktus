const { Client, GatewayIntentBits, IntentsBitField } = require('discord.js');
const axios = require('axios');
const client = new Client({ intents: [GatewayIntentBits.Guilds, IntentsBitField.Flags.DirectMessages] });
const { token } = require('./config.json');

const userID = 'YOUR_USER_ID'; // Enter your user ID that you get from developer mode in Discord
const delayEveryMinutes = 30; // Enter the delay in minutes

const url = 'https://www.mujkaktus.cz/chces-pridat';
let previousContent = '';

async function checkWebsite() {
    try {
        const response = await axios.get(url);
        const currentContent = response.data;
        
        if (currentContent !== previousContent && previousContent !== '') {
            client.users.send(userID, 'Website changed!');
        }
        else {
            console.log('No changes :(');
        }

        previousContent = currentContent;
    } catch (error) {
        console.error('Error fetching website:', error.message);
    }
}

client.once('ready', () => {
    console.log(`Ready!`);
    client.users.send(userID, 'I\'m ready!');
    setInterval(checkWebsite, delayEveryMinutes * 60000); // 60000ms = 1min
});

client.login(token);