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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_27_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzksXG4gICAgICAgIDcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUndFQWJHZUlrWHAxd0xVY2hSK0FzaWJ4QkRsdmRMYzNPSEViRGZKdTRtND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDY2MDgxMzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFDN0QzMjg3MjNBNTVDQUQ0OUZDOUQ4MjNGNkQzOTNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjg3ODgzM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcwNjYwODEzMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODQ1MkVCNURCOUY4QUI1RDhFQ0RBQzEyOEUyNzE5MjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyODc4ODM1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpxLWFBenpTVGRXV3MwTUE5THFYVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjBhMDExYjItMmFiMC00NzlkLTgyMGEtZTE2MTI4OGQ3M2RhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDEyMCxcbiAgICAgIDEyMyxcbiAgICAgIDM4LFxuICAgICAgNTMsXG4gICAgICA4LFxuICAgICAgMTY1LFxuICAgICAgMTAwLFxuICAgICAgMTY4LFxuICAgICAgMTI2LFxuICAgICAgMjM4LFxuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgOTAsXG4gICAgICAxNDQsXG4gICAgICAyMSxcbiAgICAgIDU4LFxuICAgICAgMTU1LFxuICAgICAgMTE1LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTg2LFxuICAgICAgMjA2LFxuICAgICAgMTc3LFxuICAgICAgODMsXG4gICAgICAxOTYsXG4gICAgICAyMzIsXG4gICAgICAyMjAsXG4gICAgICA3MixcbiAgICAgIDIyMSxcbiAgICAgIDE2OSxcbiAgICAgIDE1NyxcbiAgICAgIDEwMSxcbiAgICAgIDEzNCxcbiAgICAgIDIsXG4gICAgICAxNTcsXG4gICAgICA2NCxcbiAgICAgIDEyOCxcbiAgICAgIDEyLFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkgxS0g1VDJXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjcwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2LzdiUUdFT2VXeExVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGNaalBaSkMyK09DTUk0MjZ4eFNKUkxCRFQzMXdtVkJnRXV0U1hZVWhpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnRnVkc3BwbGJmblFpSkZVMHlQYzJuSElscFJRVWdHRktSdWY4TGFjVW9TbHRDaTVPMUR1LzdtOG95T1REOTJ4MkwwRy8rV2tjTVFkNSt4cit4dUZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJiTnVyZWphQ2QvS1BiTGp5ZTNYMUFoOVRVRytQMk1mMTJzK1BOUmpicmRXNzcyRytyVnNRc3JvRGZhSGd0ZGhIMlBWRkQxNjRGRWNDSG14eGJ4NHBndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODc4ODI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGdYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZ1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyemhKY1QxS3FIOVNRcmlrRnViWEtLSVZmTEZ1M2NObFM2N20rVXQreHdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjE0NjY4NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg3ODgzMTIxNlwifSIKfQ=="  // PUT your SESSION_ID 


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
