//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5NV29BZko5dUx0cjh1WFBGWjA3MnBtV3dRZFp5Z3l3K0xDdWZFV3JVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidW14R0Q1RmMvdGFHNCtCdlpjZEVrcEIvM0ZERGU5N3RLYVUzc1hobFlqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Qmc4Unl3VlZPelV3SWNMSjRWNDJ5ZytreXNXQnpmU21LUUlBTTZKVzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOSG5KLytVOGlPdW9DSjZSbGNzeFRHT213SC84c0VweTRTTERmT3NuMENjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKTENKKzF2VVl4TDF6TnltK0FPajNRa05xY3NiSVNPdTNnVDg0T1hMMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY5MFRjNDN1U1o5NWVNYmNyS0wvcDBOeFREY2xvT05IUTFrcXlQeGhYenM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk5Vc0NDVjk3bWFJUU9jZEo5NjZ5Tnl5S0JqZ1lGdlFoa2NlaER3ckZXaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWRhUmhlTnRzeVJTUHFweFVOd2Vyci9yaHBZcXo5UlNOZXpITDg5eXd5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQyNHdsQkJ1TmpUd21RZFdJV1JqNjRxU2NYWEdNeHMyM0R3STZlc2liQklWclVtbTVVTkdBQlBrRDRhYkhBWEI2R3FvVWtYbzFkVUNRdjFKNWZvN2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiI3LzhlRmVSN0h5czJZeTJPclE1WCtuNzVOdXNOd3JHOW1abWNHQ0xIZy9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg3NzI1MTkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJFOUIwOEQ1NDM1OUE0NUM1Mzc1NTFDQjcwRTJFQjMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTE2OTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg3NzI1MTkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE2NjEwMDVDMDJDRjkyMUI0MzQ1ODUxRTlBMEYxN0VFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTE2OTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzg3NzI1MTkwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJBQ0YxNDhERjQzQTQxMUY2MUQ2MkVCQTYyQkJENjRCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMwNTE2OTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkM4ZGF5NkttVFRHdm5vZU1tamtKTUEiLCJwaG9uZUlkIjoiODM4MzI4ODEtMGUyMy00YmJkLWI3YTAtNjRiM2ZjZDVmNmE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZmdmtXR0ovdkxaOHhlY0ZmKzEyRTdXdVlNST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSTUJHb3VnNDlyRXE5ajJ3K25nTXpiM0RoL2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUZOSlNXQ1kiLCJtZSI6eyJpZCI6Ijk0Nzg3NzI1MTkwOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZvPCdmoEuX/CdmbzwnZmw8J2Zu/CdmbjwnZm08J2ZtF/wnZmx8J2ZvvCdmoMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0llMHNwNENFSi9kenJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9MazJwOTR6WUlMS2pTd0F0Z0s1eWt4aVlBemFLaDQzdG5EYzNvVEhwU1k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkRXSDNGK1Jya1R4ck9WalRuQ05EVW1Nd1lBY2Y1aVV2SGd2bTM3SWIvdDRESEdpeGFqRDFBMDNXdUZLY3NsRXpGU1MxbkRmV2lGRUp2ZWkxNG1DeERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1cmI5dzdhL2Z1YzJVTG13NnIzYzlMOTBzdm5BQ2Q3dmdFbFZVYmFLTUFaSGRUbms2NWxKNlNEOFdrWGxYTzN2SnZZSFZ4NFB4OGJ0UlRWYjVuV3VnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg3NzI1MTkwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGk1TnFmZU0yQ0N5bzBzQUxZQ3VjcE1ZbUFNMmlvZU43WnczTjZFeDZVbSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzA1MTY5MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMMzIifQ== "
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
