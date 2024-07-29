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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_48_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgNixcbiAgICAgICAgMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDkyLFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzksXG4gICAgICAgIDcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxUbnVsdGhwNEF2aG9Oc3F5T3NVNHhITUtPakZJaTVHV0x1VFJwdWozbXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJveGlEbU03Uk11NlQ1X1VhU2FfMndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDRmZmM5YzAtMjY5My00NDMwLWE5NmMtYzRmZmMwYjkwYzI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDIxOSxcbiAgICAgIDU3LFxuICAgICAgMjUyLFxuICAgICAgMTcsXG4gICAgICAxMTYsXG4gICAgICA4MSxcbiAgICAgIDM5LFxuICAgICAgMjA3LFxuICAgICAgMTQzLFxuICAgICAgMjExLFxuICAgICAgMTUxLFxuICAgICAgMTU0LFxuICAgICAgOSxcbiAgICAgIDEzNSxcbiAgICAgIDExOSxcbiAgICAgIDIyNCxcbiAgICAgIDExNSxcbiAgICAgIDUxLFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEwMCxcbiAgICAgIDIwMCxcbiAgICAgIDUsXG4gICAgICA4OSxcbiAgICAgIDE3NyxcbiAgICAgIDYsXG4gICAgICAxMjksXG4gICAgICAxNTEsXG4gICAgICAxMjksXG4gICAgICAyNixcbiAgICAgIDIyNCxcbiAgICAgIDIzOSxcbiAgICAgIDIyOCxcbiAgICAgIDQ0LFxuICAgICAgNzgsXG4gICAgICAxNTAsXG4gICAgICA0LFxuICAgICAgMTc2LFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRTTUUxMzZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjM5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmd2krb0RFTlhObTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL2h3ck9KYlo2cS9EUzVCWXppR2pZbzIwSzVKMWM5eUt0L3N3dllTUkNBTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3Y2I4and6WmpHRGhvMExCcHgvby96SjJHNEh1V0xlTmhUWG9KV0owNDROTjJRZWNicmh2WGVMRXNwMW5NR2pHYks4LzEzY0o1RUdQNTVQV1RGVjdEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLVHd1aGV0RGNuZzVqN3VTbTE4K3E0NDk2clg0NGJkelM4bGR1VnhMV1FLYmdiRmFDTk1DVnNSRTN4OEk2NUNjYU94a2dkMlNtUStINkcxTkZ2VGFoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIxNDEwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQkVBQUFnelwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCRUFBQWd6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTmtpMFpSNDk3ZDhSRFFsMFA2SEZRSVk2M1B3bGdFL1NCZHhINjdrcHhEQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDI3Nzk5MDc1LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwNjQ0MjI5NzNcIn0iCn0="  // PUT your SESSION_ID 


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
