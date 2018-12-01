const Discord = require("discord.js")
const client = new Discord.Client()

let prefix = "t?";

client.on('ready', function() {
    console.log("je suis prêt !")
    client.user.setActivity(`${prefix}add <bot-id>`, {type: 2})
})

client.on('message', async message => {
    if(message.content.startsWith(prefix + "add")) {
        message.delete(message.author)
        let args = message.content.split(" ").slice(1);
        let id = args.join(" ")
        if (!id){
            return message.reply("Merci de mettre l'**ID** de votre bot.")};
            let Super = client.channels.get('516309436571189250');
    let Embed = new Discord.RichEmbed()
    .setTitle("<a:typing:507488467270500352> INVITATION")
    .addField(`Invitation demander par:`, `${message.author} (${message.author.username}) ID: ${message.author.id}`)
    .addField(`ID du Bot:`, id)
    .addField(`Invite du Bot:`, `[Cliquer Ici pour l'invite](https://discordapp.com/oauth2/authorize?client_id=${id}&scope=bot&permissions=0)`)
    .setColor("RANDOM")
    .setFooter(`By: ๖̶̶̶ζ͜͡Sky Line - [𝐂𝐨𝐝𝐞]#1160`)
    .setTimestamp();
    Super.send(Embed);
    message.reply(`<a:typing:507488467270500352> votre bot va être vérifié! Vous serez normalement MP si il est accépté.`) .then(xnxx => {xnxx.delete(5000)})
    }

    if(message.content.startsWith(prefix + "by")) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            if(message.channel.guild){
        var mpMember = message.mentions.members.first();
        if(!mpMember) return message.reply("Veuillez mentionner un utilisateur");
        message.reply(`Message bien envoyé à ${mpMember}`)
                message.delete(message.author)
                const mp = client.users.get(mpMember)
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setAuthor(message.member.user.tag, message.member.user.avatarURL)
                .addField(`<a:success:507492479881314314> Bot ajouté`, "Ton bot a bien été ajouté!")
                .setFooter("Tawako Server's")
                .setTimestamp()
                message.mentions.members.first().send(embed)
    }
            }else{
                message.reply("tu n'as pas la permission !")
            }
        }
        if(message.content.startsWith(prefix + "bn")) {
            if (message.member.hasPermission("ADMINISTRATOR")) {
                if(message.channel.guild){
            var mpMember = message.mentions.members.first();
            if(!mpMember) return message.reply("Veuillez mentionner un utilisateur");
            message.reply(`Message bien envoyé à ${mpMember}`)
                    message.delete(message.author)
                    const mp = client.users.get(mpMember)
                    let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setAuthor(message.member.user.tag, message.member.user.avatarURL)
                    .addField(`<:no:507489580631588864> Bot refusé`, "Ton bot a été refusé!")
                    .setFooter("Tawako Server's")
                    .setTimestamp()
                    message.mentions.members.first().send(embed)
        }
                }else{
                    message.reply("tu n'as pas la permission !")
                }
            }
    })
    client.login(process.env.TOKEN)
