const Discord = require('discord.js');
const {prefix,token}=require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');

});
client.on('message',message=>{
console.log(message.content);

//checking any mention in message
check=message.isMemberMentioned(message.member);
console.log(check)
    if(check){
        var mentionedUserId=message.mentions.users.first().id;
         if(mentionedUserId==326160579691806721){
            message.delete();
            // Reply to a message
            message.reply('Hi this is me  Lapzap Bot.I will be playing PUBG LITE around 9:00AM ')
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .catch(console.error);
           

         }

    }else{
        //for other command
        //deathx  command reply all dealth x member as mentioned in message
        // sovin : 436891637080391691, ocen 524962252109905942
        if(message.content.charAt(0)=='%'){
                console.log("% mentioned");
                message.delete();

                if(message.content=='%deathx'){
                     // Reply to a message
                    
              msg=`${client.users.get("436891637080391691")} ${ client.users.get("524962252109905942")}\n\n let\'s Play PUBG LITE`;

              embed=new Discord.RichEmbed()
                    .setTitle("Deathx Assemble")
                    .setDescription(msg)
                    .setImage("https://cdn.discordapp.com/attachments/538318861565427712/546246616290557952/pubg-hope-maxi-poster-1.156.jpg")
                    .setFooter("This message is sent By Lapzap BOT")
                    .setColor("#ff6f00")
                    .setTimestamp(new Date())                    
                    message.channel.send(embed);
            
                }else if((message.content=='%help')){
                    embed=new Discord.RichEmbed()
                    .setTitle("Lapzap Bot Commands List:")
                    .setDescription("1.   %deathx: To assemble Deathx Team member \t\t \n\n"
                    +"2.   %help: show list of Commands\t\t \n\n  ")
                    .setThumbnail("https://cdn.discordapp.com/attachments/538318861565427712/538320096633028608/deathx.jpg")
                    .setFooter("This message is sent By Lapzap BOT")
                    .setColor("#ff6f00")
                    
                    message.channel.send(embed);
                }

        }


        
    }

 
});
   
client.login(token);