const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6281392842481@s.whatsapp.net"]
global.nomerOwner = "6281392842481"
global.nomorOwner = ['6281392842481']
global.namaDeveloper = "Yui Store"
global.namaBot = "Yui Botz"
global.packname = ""
global.author = "Yui Store"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv1 = "*Assalamu'alaikum, Save Yui Store*/n*Back? Sebut Nama*"
global.tekspushkonv2 = ""
global.tekspushkonv3 = ""

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

/*

Thanks To By IrulLz Dev (Gausah Di Ganti Hargai Gua!!)
Di Jalankan Dan Di Fix Oleh IrulLz Dev & Namamu
Ubah Nomor Owner?
Ganti Di File ./owner.json

*/