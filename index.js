const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

    client.user.setActivity('Deathx Protocol', {
        type: 'Playing'
    });

   
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'general-chat');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    console.log("new user");
     console.log(`$(member.guild.name)`);
    embed = new Discord.RichEmbed()
                .setAuthor("Welcome to"+ `$(event.guild.name)`)
                .setTitle("Please be sure to read our rules carefully thanks")
                .setDescription("Please enjoy your stay"+ `$(event.user.mention)`)
                .setFooter("This message is sent By Lapzap BOT")
                .setColor("#2ecc71")
                .setTimestamp()
                channel.send(embed);

    

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
              //message.author.send("hello wolrd");
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
            .setAuthor(message.author.username,message.author.avatarURL)
            .setTitle("Deathx Assemble")
            .setDescription(msg)
            .setImage("https://i.ibb.co/vQmssBf/deathx-assemble.jpg")
            .setFooter("This message is sent By Lapzap BOT")
            .setColor("#00a6d2")
                .setTimestamp(new Date())
            message.channel.send(embed);
        } else if ((message.content.includes('%help'))) {
            embed = new Discord.RichEmbed()
                .setTitle("Lapzap Bot Commands List:")
                .setDescription("1. %deathx: To assemble Deathx Team member \t\t \n\n" +
                    "2. %help: show list of Commands\t\t \n\n ")
                .setThumbnail("https://cdn.discordapp.com/attachments/538318861565427712/538320096633028608/deathx.jpg")
                .setFooter("This message is sent By Lapzap BOT")
                .setColor("#00a6d2")
            message.channel.send(embed);
        }else if((message.content.includes('%send'))){
            //message.delete();
              console.log("send command");
            var data=message.content.slice(5);
            var headingIndex=data.search('-h');
            var bodyIndex=data.search('-m');
            var imageIndex=data.search('-img');
            var headingData=data.slice(headingIndex+2,bodyIndex);
            var bodyData=data.slice(bodyIndex+2,imageIndex);
            if(imageIndex!=-1){
            var imagesrc=data.slice(imageIndex+4);
             }

           if(headingIndex!=-1 && bodyIndex!=-1){
               // -h -m not found then no reply message
            embed = new Discord.RichEmbed()
                .setTitle(headingData)
                .setDescription(bodyData)
                .setFooter("This message is sent By Lapzap BOT")
                .setColor("#00a6d2")
                .setThumbnail("https://cdn.discordapp.com/app-icons/546184203570774017/5a239b585729c099ea72d642c189baeb.png")
                .setImage(imagesrc)
                .setTimestamp()
                message.channel.send(embed);
           }

        }
    }
}

client.login(process.env.BOT_TOKEN);
