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
client.login('MTM0MjI3MDgyMzMzNTA2NzcyOA.G-6zSl.ujxV5N9D13I1CdHct-o0wGHGC4481IKHRewT58');
