//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/hb58io.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27849730363";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/x1gvh2.jpg";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU5ZbGlHTzRxSlZTL2xtNlgvSzNCaFNjeVhNRi9adXdVazV0clNKMzhrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE50V0VTbE4yNGplMWtPakx0VjgwUng3Z3BOUE5xeFZNTmtNRXZNdS9GOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjBiSnRlYkMzTUVRNDBiaS9UVzFUcllSU1g4SjllOFU0cWZ0NnlDdkVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3bllQZkJqZG85SFFNaDN4bXArbXBtd0tyR1VsWSttL2MrNzFsV0dEQlJjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtEdEMrQzNLNFZ5THBGakcyamJiYmlVTXpCLzZDZ2UvR3Ixb01JaHdEWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlhSGRHQ092d0Q3OWx6cEIyRzFXUmVGcEFIQmxGY01nc05yYi9CWXE2RlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZzTXdMaCtJVXFONS84MWhIY3N2eUs2aEs2TWdxVmVmVXhxc2xzWFoxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFFYOEpEZE9IK3RnZFFJenY4WWtieWZZWnFTQ3JXYnBvTEQxcDhvK1BHQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9xdjJ5S2ZZWHJFa2ppOFZiOS9nY2pXTmVZV0huck1HdXZvZHFGVkNpcldBOHlzd1FwZXpwdFU2MGpHbXhCSDdEUjFIZ0xqMW5Ja1VLRWQ4UzZDU2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJ2emp1cUxaQ0hReUk2eVYwSnRzT0xBcFJ4emtjRFQ1MzVHL1Z3emZXbUdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmY1RkRlVwOFFzMmhtWmRKT3hDTVpBIiwicGhvbmVJZCI6ImM1ZGIzNmJlLWFkYTMtNDA0Yy1iMjdkLWZmNjNmODcxOGY1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXRjZlc2szT1J5TzErRTFUbEF0enYvUUdpSE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXJUUEhUMjJIakEwR1lyRWZzdlNSOFJvSld3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdSUEVXRkVEIiwibWUiOnsiaWQiOiIyNzg0OTczMDM2MzozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUGg1TDhIRU15aHJia0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJiZXVaQ2pYOXdZcFFNNWxmL29wVG96d2RHSkUybU9HdUpFSDBqY0xYQldBPSIsImFjY291bnRTaWduYXR1cmUiOiJGUmp2MHQrbkVhMlltWG9mTnE5YzA4WEhlOTdPSkNLMU5UQklibHlYTUVBc3RwV25peklQSDB3b3dRUjZRZC9wcDJnc3BtakZ5SDNobldpVlZWd21Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZmlzQ0RGcENQRWFGSUhoeXpIME8vckJBdmZieVJrM1hMWEkxS0wxdzFlNEx1SU5Qd3hVeCtDUHlmdVcveFkzVGVHd1hBWVFhVVYvY0lBZEJST2xiaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzg0OTczMDM2MzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlczcm1RbzEvY0dLVURPWlgvNktVNk04SFJpUk5wamhyaVJCOUkzQzF3VmcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA4OTE5OTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2o0In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`hi, I'm Chucky...do you wanna fuck 🙂? ™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || " c y l e e ",
  botname: process.env.BOT_NAME || "chucky2.0",
  ownername: process.env.OWNER_NAME || "cyleeXchucky❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
