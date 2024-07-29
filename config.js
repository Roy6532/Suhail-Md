const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_23_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICA4OCxcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm50NVRKQVVrUlF4RzI3ZUdTRGdUdGpUZ0hOdHlvazdDU2hpbzA1M1l3SVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU2NzA2NjA4MTMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERTI4RUZDMkE2NTdBRDI3MkY5OUE4NTg3NUY4MDU2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyNTk0MjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSHJkVHYxQWdUV0M1aTJCdEZlQjN2QVwiLFxuICBcInBob25lSWRcIjogXCIzNzM4ODBkNi0zMDFiLTRlZGEtODkzOC03ZTcxZTlkNjY4NTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIsXG4gICAgICAyMzAsXG4gICAgICA4OSxcbiAgICAgIDMyLFxuICAgICAgMTEzLFxuICAgICAgNzYsXG4gICAgICAxNTAsXG4gICAgICA2NSxcbiAgICAgIDExMSxcbiAgICAgIDEwOCxcbiAgICAgIDEzMCxcbiAgICAgIDgzLFxuICAgICAgMjE0LFxuICAgICAgMTQ1LFxuICAgICAgMTU3LFxuICAgICAgMjI0LFxuICAgICAgMjQ4LFxuICAgICAgMjE5LFxuICAgICAgMTc3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDEzOSxcbiAgICAgIDM1LFxuICAgICAgMTcxLFxuICAgICAgNjUsXG4gICAgICAxNjgsXG4gICAgICAyNDksXG4gICAgICAxODIsXG4gICAgICAyMjIsXG4gICAgICA2OCxcbiAgICAgIDg4LFxuICAgICAgMjQ4LFxuICAgICAgMTkwLFxuICAgICAgOTIsXG4gICAgICAyMTAsXG4gICAgICAxNjIsXG4gICAgICAxMDYsXG4gICAgICAyNTEsXG4gICAgICAzMixcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0OVhDSzJITFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzA2NjA4MTMxOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMTY5Njk5Mjg3NDc1MTo0MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLandpK29ERU5xdm5yVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9od3JPSmJaNnEvRFM1Qll6aUdqWW8yMEs1SjFjOXlLdC9zd3ZZU1JDQU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM2VaOHVWcGpRQkJtZmlWQjhodHU3cHV3aGVMQ2pKOVE2MW5JQ2tOdzdxa1B6Q3dXaEQvOFNnaGNJb0EzWnJDMFNibVlkNFA4dm5UNTNWWTBYYS9KRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUGJ3WGQ1TkxVNS9ha1pTR3NNZkREU1JEa1E2VVN3UnYxb0xhNVZyclFwR0dKd2kvelQvY2p0amlUdE1PTlBkNG1rRkRETWpFM3hmZ054NXZleSs5aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA2NjA4MTMxOjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNTk0MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJFQUFBZ3pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQkVBQUFnei5qc29uIjogIntcImtleURhdGFcIjpcIk5raTBaUjQ5N2Q4UkRRbDBQNkhGUUlZNjNQd2xnRS9TQmR4SDY3a3B4REE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNzc5OTA3NSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDY0NDIyOTczXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ROY",
  packname: process.env.PACK_NAME || "ROY",
  botname : process.env.BOT_NAME  || "ROY-BOT",
  ownername:process.env.OWNER_NAME|| "ROY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
