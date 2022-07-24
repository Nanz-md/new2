let handler = async m => m.reply(`
            .✵.GRUP Izumi.✵.

            https://chat.whatsapp.com
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
