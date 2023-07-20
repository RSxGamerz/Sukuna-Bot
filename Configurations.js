require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "918473959399";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://RSxGamerz:z9oT0BSgrhsaCqsK@cluster0.ngmg70x.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "abcxyz";
global.prefa = process.env.PREFIX || ".";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `𝐒𝐮𝐤𝐮𝐧𝐚'𝐬 𝐏𝐚𝐜𝐤`;
global.author = process.env.AUTHOR || "𝗯𝘆: 𝙏𝙚𝙖𝙢 𝙒𝙝𝙖𝙩𝙨 𝘽𝙤𝙩";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
