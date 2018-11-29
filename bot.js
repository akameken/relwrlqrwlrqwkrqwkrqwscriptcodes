const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready' , ready => {
client.user.setStatus("idle");
});
const fs = require('file-system')
const edwarddev = ["476503634411257858","389136174154907651"]
const prefix = "s!"

client.on('message' , message => {
     if (!edwarddev.includes(message.author.id)) return;
  const args = message.content.split(' ').slice(1).join(' ');
if(message.content.startsWith(prefix + "say" )) {
message.channel.send(`${args}`)

}});
client.on('message' , message => {
 var code = ''
 var ed = ''
 var filter = m => m.author.id === message.author.id;
if(message.content.startsWith(prefix + "js")) {
  message.delete(1)
  message.channel.send("**TYPE DESCRIPTION** :loudspeaker: ").then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
              msgS.delete()
                message.channel.send(`**TYPE THE CODE ** :printer: `).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        code = collected.first().content;
                        collected.first().delete();
                    msgS.delete()
                       message.channel.send(`**TYPE THE CODE CREATOR ID : **`).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        ed = collected.first().content;
                        collected.first().delete();
                    msgS.delete()
                      message.author.send("**تم نشر الكود بنجاح | :white_check_mark:**")
var room = client.channels.get("504712312565923861")

            
room.send("@everyone ; @here " + `

` + "```" +`js
${code}`+ "```" +`
**${name}**
**تم نشر الكود بواسطة : ${message.author}**
**صانع الكود : ** <@${ed}>
</ Script Codes >
-
`)
})})})})})})}});
client.on('message' , message => {
 var code = ''
 var ed = ''
 var filter = m => m.author.id === message.author.id;
if(message.content.startsWith(prefix + "codebybrowser")) {

  message.delete(2)
 const code = message.content.split(' ').slice(1).join(' ');
    if(!code) return message.channel.send('TYPE SOMETHING')
var room = client.channels.get("504712312565923861")

            
room.send("@everyone | @here " + `

` + "```" +`js
${code}`+ "```" +`**تم نشر هذا الكود من الموقع ولا يوجد خاصيات تتيح معلومات اكثر **
</ Script Codes >
-
`)
}});

client.on('guildMemberAdd' , member => {
var server = "504689375376834560"; 
var channel = "513407749032378391";
client.guilds.get(server).channels.get(channel).send("**Welcome to Script Codes** "+member)
});

client.on ("guildMemberAdd", member => {

   var role = member.guild.roles.find ("name", "Online members");
   member.addRole (role);

})

client.on ("guildMemberRemove", member => {

})

client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "<@474795206177456130>"){
message.channel.startTyping();
}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('#bc')) {
          if (!args[0]) {
message.channel.send("**Please type any message !**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);

});
  }
 
});

client.on('message' , message => {
  var prefix = "#"
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });

client.login(process.env.BOT_TOKEN);
