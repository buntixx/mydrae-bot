const { Client, GatewayIntentBits } = require('discord.js');

// Crée une instance du client Discord avec les intents nécessaires
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Quand le bot est prêt
client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

// Exemple d’événement : répondre à un message spécifique
client.on('messageCreate', message => {
  if (message.content === '!quoi') {
    message.channel.send('Feur !');
  }
});

// Connecter le bot à Discord avec votre token
client.login('***');
