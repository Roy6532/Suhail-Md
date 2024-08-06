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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_07_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICA0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5LFxuICAgICAgICA2MixcbiAgICAgICAgOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzLFxuICAgICAgICA2MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTksXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA4NixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTc0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwielE1aXhRdnpvZGJ3cjJVVDdTdDFGUVc4QnZpblRqenNtbmVTTkZzbkMyYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDY2MDgxMzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwRDE0NkVBNkFFQTREMzVGRjZFMzA5QTM3NEFBMTU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjk1MzI2OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEV2hMQkdzV1FBRzdwQzFZaVZYazVnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmN2NkMTlhLWQ4NTMtNDdiMS05YmJlLTdhYmIwYTQ4MmY0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDI3LFxuICAgICAgMjIxLFxuICAgICAgMjI4LFxuICAgICAgMjQyLFxuICAgICAgNzMsXG4gICAgICAxNDYsXG4gICAgICAxNDAsXG4gICAgICAxMzEsXG4gICAgICAyMzYsXG4gICAgICAxODEsXG4gICAgICAyNTMsXG4gICAgICA1MyxcbiAgICAgIDE5NixcbiAgICAgIDgwLFxuICAgICAgMjQxLFxuICAgICAgMTYyLFxuICAgICAgMCxcbiAgICAgIDIxLFxuICAgICAgMjU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDE4OSxcbiAgICAgIDQ2LFxuICAgICAgNzcsXG4gICAgICAyMjEsXG4gICAgICAyMjgsXG4gICAgICA2OSxcbiAgICAgIDIyMCxcbiAgICAgIDIyOCxcbiAgICAgIDE0NixcbiAgICAgIDIzMCxcbiAgICAgIDIxMSxcbiAgICAgIDE4LFxuICAgICAgMTAxLFxuICAgICAgMjUyLFxuICAgICAgMjM4LFxuICAgICAgMTM2LFxuICAgICAgMjEyLFxuICAgICAgMTM1LFxuICAgICAgMTg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNKUVNBNzlFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDY2MDgxMzE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxNjk2OTkyODc0NzUxOjcxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B2LzdiUUdFS3JjeUxVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRGNaalBaSkMyK09DTUk0MjZ4eFNKUkxCRFQzMXdtVkJnRXV0U1hZVWhpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtemFiRUlmT29EVGdEM082dVV2RUNMRjd0bko4dHRRbHJNeEJlYklWZ1VBMGttQzEzVDF0SUk4L3l1QXowWHVxSFd2TmFlNE5mTitERlgrd1BrRVdBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHRVdvb2psVFBzT01ZYzFTZm1ZcFE3RnVjVDFiQ21VZGRzRHJnSm1BT3FsZXpPNmtRU3Z4aEE3ai9pL000bzlEdDlyNmJWWGZlai9veXQzVEFsS1NEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDY2MDgxMzE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTUzMjYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGdYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZ1guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyemhKY1QxS3FIOVNRcmlrRnViWEtLSVZmTEZ1M2NObFM2N20rVXQreHdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MjE0NjY4NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg3ODgzMTIxNlwifSIKfQ=="  // PUT your SESSION_ID 


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
