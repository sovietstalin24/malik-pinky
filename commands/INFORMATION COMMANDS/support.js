const {
	MessageEmbed
} = require("discord.js")
const config = require("../../config.json")
module.exports = {
	name: "support",
    category: "INFORMATION COMMANDS",
	aliases: [""],
	description: "Shows the support of this BoT",
	useage: "support",
	run: async (client, message, args) => {
			message.channel.send(new MessageEmbed()
				.setColor(config.colors.yes)
				.setTimestamp()
				
			
				
				
				.setDescription(`
**[ Link Server ](https://discord.gg/gpawkckUhX)**
			
`)
			)
			message.channel.send(new Discord.MessageEmbed()
				.setColor(config.colors.yes)
				
				.setDescription(`
		    Second Sponsor of This Bot is:
		    **MC-HOST24** THE BEST MC HOSTER
		    > MC-HOST24.de is sponsoring them with some monthly Money,
		    > Thanks to them, they able to host their Website and GAME SERVERS
		    > Our suggestion is, if you want to host games / Websites, then go to [mc-host24.de])
		    **What they are offering:**
		    > **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
		    > **>>** Cheap and fast Domains
		    > **>>** WEBHOSTING
		    > **>>** TEAMSPEAK SERVERS
		    > **>>** Linux & Windows Root Servers
		    [**Link Server:**](https://discord.gg/gpawkckUhX)
		   
		    [**__SPONSOR LINK!__**](https://discord.gg/gpawkckUhX)
		    `)
				.setImage("")
				
			)
	}
}
