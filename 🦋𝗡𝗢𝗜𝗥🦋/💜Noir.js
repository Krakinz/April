const os = require("os");
require("dotenv").config();
const { join } = require("path");
const express = require("express");
const { readdirSync } = require("fs");
const { Client, Collection } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
const ռօɨʀքʟǟʏɛʀ = new Client({ disableEveryone: false });
const { ռօɨʀӄɛռ, ռօɨʀʄɨӼ, ռօɨʀքʊʀɢɛʀ } = require("./noirtem/noir_env.js");
const ռօɨʀֆɛʀʋɛʀ = express();
const PORT = process.env.PORT || 3000;
ռօɨʀֆɛʀʋɛʀ.listen(PORT);
ռօɨʀքʟǟʏɛʀ.login(ռօɨʀӄɛռ);
ռօɨʀքʟǟʏɛʀ.prefix = ռօɨʀʄɨӼ;
ռօɨʀքʟǟʏɛʀ.queue = new Map();
ռօɨʀքʟǟʏɛʀ.commands = new Collection();
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
const NoirEngineOil = new Collection();
const { MessageEmbed } = require("./ӄʀǟӄɨռʐʟǟɮ/src");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const commandFiles = readdirSync(join(__dirname, "ռօɨʀɦʊɮ")).filter((file) =>
  file.endsWith("_ɴᴏɪʀᴇʟᴍx.js")
);
for (const file of commandFiles) {
  const command = require(join(__dirname, "ռօɨʀɦʊɮ", `${file}`));
  ռօɨʀքʟǟʏɛʀ.commands.set(command.name, command);
}
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
try {
  ռօɨʀքʟǟʏɛʀ.on("warn", (ɴᴏɪʀ_WARN) => console.log(ɴᴏɪʀ_WARN));
  ռօɨʀքʟǟʏɛʀ.on("error", console.error);
  ռօɨʀքʟǟʏɛʀ.on("ready", () => {
    ռօɨʀքʟǟʏɛʀ.user.setActivity(`💜 ${ռօɨʀʄɨӼ}noir | ${ռօɨʀʄɨӼ}play`, {
      type: "WATCHING",
    });
    console.log(`
~~~~~~~~~~~~~~~~~~~~~~~>  𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳 <~~~~~~~~~~~~~~~~~~~~~~~
🔱Bot-Name:~~> ${ռօɨʀքʟǟʏɛʀ.user.username}
🔱Bot-Os:~~> ${os.platform().toUpperCase()}
🔱Bot-Port:~~> ${PORT}
~~~~~~~~~~~~~~~~~~~~~~~>  𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳 <~~~~~~~~~~~~~~~~~~~~~~~
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation
Everyone is permitted to 𝗰𝗼𝗽𝘆 𝗮𝗻𝗱 𝗱𝗶𝘀𝘁𝗿𝗶𝗯𝘂𝘁𝗲 verbatim copies
of this license document, 𝗯𝘂𝘁 𝗰𝗵𝗮𝗻𝗴𝗶𝗻𝗴 𝗶𝘁 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱.
𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳
Discord Music YouTube player
has been licensed under GNU General Public License
𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
~~~~~~~~~~~~~~~~~~~~~~~>  𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳 <~~~~~~~~~~~~~~~~~~~~~~~`);
  });
} catch (ErrorNoir) {
  console.error(ErrorNoir);
}
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================
try {
  ռօɨʀքʟǟʏɛʀ.on(`guildCreate`, (guild) => {
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === `text` &&
        channel.permissionsFor(guild.me).has(`SEND_MESSAGES`)
    );
    guild.channels
      .create("🔱Krakinz", {
        type: "category",
        permissionOverwrites: [
          { id: guild.id, deny: ["VIEW_CHANNEL"] },
          { id: guild.id, allow: ["VIEW_CHANNEL"] },
        ],
      })
      .then((parent) => {
        guild.channels
          .create("💜noir", {
            type: "text",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              {
                id: guild.id,
                allow: [
                  "VIEW_CHANNEL",
                  "SEND_MESSAGES",
                  "READ_MESSAGE_HISTORY",
                ],
              },
            ],
          })
          .catch(console.error);
        guild.channels
          .create("🎤noir", {
            type: "voice",
            parent,
            permissionOverwrites: [
              {
                id: guild.id,
                deny: [
                  "MANAGE_ROLES",
                  "MANAGE_NICKNAMES",
                  "MANAGE_CHANNELS",
                  "KICK_MEMBERS",
                  "BAN_MEMBERS",
                ],
              },
              { id: guild.id, allow: ["VIEW_CHANNEL"] },
            ],
          })
          .catch(console.error);
      });
    channel.send("@everyone");
    channel
      .send(
        new MessageEmbed()
          .setColor("#6272a4")
          .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(
            `
𝗗𝗲𝗮𝗿: @everyone
=========⚜️=========

ᴀ channel ɴᴀᴍᴇ **💜Noir** inside **🔱Krakinz** has been successfully created.
Please use the channel for any **ɴᴏɪʀ💜ᴘʟᴀʏᴇʀ** commands..`
          )
      )
      .catch(console.error);
    channel
      .send(
        new MessageEmbed()
          .setColor("#6272a4")
          .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(`❤️‍🔥 **Hey there MUSIC lovers !**
I got you all covered with direct music streaming from ʏᴏᴜᴛᴜʙᴇ to discord voice channel.
Please use the channel **💜Noir** for any **ɴᴏɪʀ_ᴘʟᴀʏᴇʀ** commands.

:candy:**ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅ** 
*Please use* = **${ռօɨʀʄɨӼ}noir**  | **${ռօɨʀʄɨӼ}play** | **${ռօɨʀʄɨӼ}help** *to know more.*

:star:**ɴᴏᴛᴇ to** @everyone:
ᴀ channel ɴᴀᴍᴇ **💜Noir** inside **🔱Krakinz** has been successfully created.
Please use only that channel for any **ɴᴏɪʀ_ᴘʟᴀʏᴇʀ** commands..`)
      )
      .catch(console.error);
    return;
  });
} catch (ErrorNoir) {
  console.error(ErrorNoir);
}
// =============================================================================================================================
//
//
// GNU GENERAL PUBLIC LICENSE
// Version 3, 29 June 2007
// 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
//
//
// =============================================================================================================================

ռօɨʀքʟǟʏɛʀ.on("message", async (message) => {
  if (message.author.bot) {
    return;
  }
  if (!message.guild) {
    message.react("❌");
    message.react("🔥");
    message.reply(
      new MessageEmbed()
        .setColor("#E0D268")
        .setTitle("⚠️Warning⚠️")
        .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
        .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
        .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
        .setDescription(`
**User:** ${message.author}
=========⚜️=========

𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳
🔆-𝘔𝘶𝘴𝘪𝘤 𝘉𝘰𝘵 𝘧𝘰𝘳 𝘋𝘪𝘴𝘤𝘰𝘳𝘥 𝘸𝘪𝘵𝘩 𝘠𝘰𝘶𝘛𝘶𝘣𝘦_𝘋𝘭, 𝘣𝘶𝘪𝘭𝘵 𝘸𝘪𝘵𝘩 𝘋𝘪𝘴𝘤𝘰𝘳𝘥.𝘫𝘴


• You are currently in a **DMChannel** and so you have been **restricted** using any **Noir 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀**
• Add me in your channel and then all commands will be automatically accepted.
🔰- https://github.com/HypeVoidSoul/Noir`)
    );

    return;
  }
  // =============================================================================================================================
  //
  //
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  //
  //
  // =============================================================================================================================
  const prefixRegex = new RegExp(
    `^(<@!?${ռօɨʀքʟǟʏɛʀ.user.id}>|${escapeRegex(ռօɨʀʄɨӼ)})\\s*`
  );

  if (!prefixRegex.test(message.content)) {
    return;
  }
  // =============================================================================================================================
  //
  //
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  //
  //
  // =============================================================================================================================
  const [matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    ռօɨʀքʟǟʏɛʀ.commands.get(commandName) ||
    ռօɨʀքʟǟʏɛʀ.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );
  if (!command) {
    return;
  }

  if (!NoirEngineOil.has(command.name)) {
    NoirEngineOil.set(command.name, new Collection());
  }
  // =============================================================================================================================
  //
  //
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  //
  //
  // =============================================================================================================================
  const now = Date.now();
  const timestamps = NoirEngineOil.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      message.react("❌");
      message.react("🔥");
      message.channel
        .send(
          new MessageEmbed()
            .setColor("#E0D268")
            .setTitle("⚠️Warning⚠️")
            .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
            .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
            .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
            .setDescription(`
**User:** ${message.author}
=========⚜️=========

Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the '${
            command.name
          }' command.      `)
        )
        .catch(console.error);
      return;
    }
  }
  // =============================================================================================================================
  //
  //
  // GNU GENERAL PUBLIC LICENSE
  // Version 3, 29 June 2007
  // 𝐂𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 (𝐂) 𝟐𝟎𝟐𝟏 𝗞𝗿𝗮𝗸𝗶𝗻𝘇 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗟𝗮𝗯 | 𝗞𝗿𝗮𝗸𝗶𝗻𝘇𝗕𝗼𝘁
  //
  //
  // =============================================================================================================================
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.react("❌");
    message.react("🔥");
    message.channel
      .send(
        new MessageEmbed()
          .setColor("#E0D268")
          .setTitle("⚠️Warning⚠️")
          .setAuthor(`𝐍𝐨𝐢𝐫💜𝐛𝐲🔱𝐊𝐫𝐚𝐤𝐢𝐧𝐳`)
          .setImage(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setThumbnail(`https://i.postimg.cc/fTKfYqx0/Noir-Player.jpg`)
          .setFooter("🔰𝗟𝗶𝗰𝗲𝗻𝘀𝗲: GNU(C)2021 Krakinz & KrakinzLab")
          .setDescription(
            `
**User:** ${message.author}
=========⚜️=========

There was an error executing that command.`
          )
      )
      .catch(console.error)
      .then((message) => {
        message.delete({ timeout: `${ռօɨʀքʊʀɢɛʀ}` });
        return;
      });
  }
});
