const { Client, GatewayIntentBits, IntentsBitField } = require('discord.js');
const axios = require('axios');
const client = new Client({ intents: [GatewayIntentBits.Guilds, IntentsBitField.Flags.DirectMessages] });
const { token } = require('./config.json');


const url = 'https://www.mujkaktus.cz/chces-pridat';
const userID = '511139469320257577';
let previousContent = '';

async function checkWebsite() {
    try {
        const response = await axios.get(url);
        const currentContent = response.data;
        
        if (currentContent !== previousContent && previousContent !== '') {
            client.users.send(userID, 'Website changed!');
        }

        previousContent = currentContent;
    } catch (error) {
        console.error('Error fetching website:', error.message);
    }
}

client.once('ready', () => {
    console.log(`Ready!`);
    client.users.send(userID, 'I\'m ready!');
    setInterval(checkWebsite, 60000); // 60000ms = 1min
});

client.login(token);