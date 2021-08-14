const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎*ANJALI BOT*😎═════╗*\n           \n*⚜═Anjali═⚜*\n\n*owner *TOXIDE-SER* - http://Wa.me/+919048329892*\n* *\n🔰instagram:- https://youtube.com/channel/UCFvZBQ-IAKNKLLiyseXczzg*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: TOXIDE-SER*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Anjali Owner TOXIDE-SER═💥*\n\n*💘 https://github.com/TOXIDE-SER/Anjali*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════😎*ANJALI BOT*😎═════╗*\n           \n*⚜═Anjali═⚜*\n\n*owner *TOXIDE-SER* - http://Wa.me/+919048329892*\n* *\n🔰Youtube: https://youtube.com/channel/UCFvZBQ-IAKNKLLiyseXczzg*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: TOXIDE-SER*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Anjali Owner TOXIDE-SER═💥*\n\n*💘 https://github.com/TOXIDE-SER/Anjali*\n*     *\n💓Liyamol═Owner Saidali═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜yt link to set bot:- https://youtu.be/_D4ZYuUSXjs*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

