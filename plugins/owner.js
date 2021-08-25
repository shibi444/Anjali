const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════🔥ANJALI BOT🔥═════╗*\n           \n*⚜═ANJALI═⚜*\n\n*owner TOXIDE-SER - http://Wa.me/+919048329892*\n* *\n🔰YOU TUBE:-https://youtube.com/channel/UCFvZBQ-IAKNKLLiyseXczzg *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷CREATOR: TOXIDE-SER*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═ANJALI OWNER TOXIDE-SER═💥*\n\n*💘 https://github.com/TOXIDE-SER/Anjali*\n*     *\nMY BOT 2═OWNER MEIR═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜YOU TUBE LINK HOW TO SETUP BOT:- https://youtu.be/5LwU-lDC0-I*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*╔═════🔥ANJALI BOT🔥═════╗*\n           \n*⚜═ANJALI BOT═⚜*\n\n*owner TOXIDE-SER - http://Wa.me/+919048329892*\n* *\n🔰MY YOUTUBE CHANNEL: https://youtube.com/channel/UCFvZBQ-IAKNKLLiyseXczzg*            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷CREATOR: TOXIDE-SER*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═ANJALI_BOT OWNER TOXIDE-SER═💥*\n\n*💘 https://github.com/TOXIDE-SER/Anjali*\n*     *\n💓MY BOT 2═MEIR SEEN AAYI═*\n\n*⚜https://github.com/saidalisaid2/LiyaMol*    *\n\n⚜YOUTUBE LINK TO SET MY BOT:- https://youtu.be/5LwU-lDC0-I*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
