const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

    client.user.setActivity('Deathx Protocol', {
        type: 'Playing'
    });
});

// client.on('voiceStateUpdate', (oldMember, newMember) => {
//     let newUserChannel = newMember.voiceChannel;
//     let oldUserChannel = oldMember.voiceChannel;
//     if (oldUserChannel === undefined && newUserChannel !== undefined) {
//         // User Joins a voice channel
//         console.log("user join a voice channel");
//         var mems = newUserChannel.members;
//         for (let [snowflake, guildMember] of mems) {
//             console.log('user id: ' + guildMember.user.id);
//         }
//         newUserChannel.join().then(connection => {
//             console.log("Successfully connected.");
//             // const dispatcher = connection.playFile('song.mp3');
//         });
//     } else if (newUserChannel === undefined) {
//         // User leaves a voice channel
//         console.log("user learbes a voice channel");
//         oldUserChannel.leave();
//     }
// });
client.on('message', message => {
    //getting message from client
    if (message.author.bot) return; //stopping bot to respond to its message
    //checking any mention in message
    let check = message.mentions.users.first();
    console.log("check"+check);
    if (typeof check !== 'undefined'){
              console.log("author name:",message.author.username);
              message.author.send("hello wolrd");
        // var Count;
        // for (Count in client.users.array()) {
        //     var User = client.users.array()[Count];
        //    // console.log("user id",User.id,"name: ",User.username);
        // }
        // Reply to a message
        //different respond
        botReplytoLapzap(message);
    } else {
       
        botReplayToCommand(message);
    }
});

function botReplytoLapzap(message) {
    console.log("bot reply called");
    var mentionedUserId = message.mentions.users.first().id;
    if (mentionedUserId == 326160579691806721) {

        var reply;
        console.log(message.content);
        if (message.content.includes("pubg")) {
            console.log("pubg text found in message");
            reply = ' :wave: Hi this is me Lapzap Bot. Your message has been send to Lapzap, wait for reply. Have nice day';
        } else {
            reply = "Hi this is me Lapzap Bot.Please leave your message";
        }
        message.reply(reply)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);
        
    }
}

function botReplayToCommand(message) {
    //commands start with %
    //commands are %help, %deathx
    if (message.content.charAt(0) == '%') {
        console.log("% mentioned");
        message.delete();
        if (message.content == '%deathx') {
            // Reply to a message
            msg = `${client.users.get("399078227898925076")}${client.users.get("436891637080391691")} ${client.users.get("524962252109905942")}    \n\n let\'s Play PUBG LITE`;
            embed = new Discord.RichEmbed()
                .setTitle("Deathx Assemble")
                .setDescription(msg)
                .setImage("https://cdn.discordapp.com/attachments/538318861565427712/546246616290557952/pubg-hope-maxi-poster-1.156.jpg")
                .setFooter("This message is sent By Lapzap BOT")
                .setColor("#ff6f00")
                .setTimestamp(new Date())
            message.channel.send(embed);
        } else if ((message.content == '%help')) {
            embed = new Discord.RichEmbed()
                .setTitle("Lapzap Bot Commands List:")
                .setDescription("1. %deathx: To assemble Deathx Team member \t\t \n\n" +
                    "2. %help: show list of Commands\t\t \n\n ")
                .setThumbnail("https://cdn.discordapp.com/attachments/538318861565427712/538320096633028608/deathx.jpg")
                .setFooter("This message is sent By Lapzap BOT")
                .setColor("#ff6f00")
            message.channel.send(embed);
        }
    }
}

client.login(process.env.BOT_TOKEN);
