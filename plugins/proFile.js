function _0x4f4a(_0xd5b19f,_0x1b71fe){const _0x2a86db=_0x2a86();return _0x4f4a=function(_0x4f4ac9,_0x581904){_0x4f4ac9=_0x4f4ac9-0x10a;let _0x3b40cf=_0x2a86db[_0x4f4ac9];return _0x3b40cf;},_0x4f4a(_0xd5b19f,_0x1b71fe);}const _0x610623=_0x4f4a;(function(_0x2551f2,_0x4f9891){const _0xb1e6a7=_0x4f4a,_0x357f04=_0x2551f2();while(!![]){try{const _0x2825a2=-parseInt(_0xb1e6a7(0x123))/0x1*(-parseInt(_0xb1e6a7(0x137))/0x2)+parseInt(_0xb1e6a7(0x10c))/0x3+-parseInt(_0xb1e6a7(0x10f))/0x4*(-parseInt(_0xb1e6a7(0x143))/0x5)+-parseInt(_0xb1e6a7(0x114))/0x6+parseInt(_0xb1e6a7(0x11f))/0x7+-parseInt(_0xb1e6a7(0x149))/0x8+-parseInt(_0xb1e6a7(0x134))/0x9*(parseInt(_0xb1e6a7(0x142))/0xa);if(_0x2825a2===_0x4f9891)break;else _0x357f04['push'](_0x357f04['shift']());}catch(_0x49ee8a){_0x357f04['push'](_0x357f04['shift']());}}}(_0x2a86,0xd53d5));const Amazone=require(_0x610623(0x116)),{MessageType}=require(_0x610623(0x13f)),Config=require(_0x610623(0x141)),fs=require('fs'),Language=require(_0x610623(0x120)),Lang=Language['getString'](_0x610623(0x10e));Amazone[_0x610623(0x13a)]({'pattern':_0x610623(0x135),'fromMe':!![],'dontAddCommandList':!![],'desc':Lang[_0x610623(0x145)],'onlyGroup':!![]},async(_0x3ae13b,_0x19601e)=>{const _0x31b23d=_0x610623;Config['KICKMEMSG']==_0x31b23d(0x13c)?(await _0x3ae13b[_0x31b23d(0x118)][_0x31b23d(0x12a)](_0x3ae13b['jid'],Lang[_0x31b23d(0x140)],MessageType['text']),await _0x3ae13b['client'][_0x31b23d(0x147)](_0x3ae13b[_0x31b23d(0x11b)])):(await _0x3ae13b[_0x31b23d(0x118)]['sendMessage'](_0x3ae13b[_0x31b23d(0x11b)],Config[_0x31b23d(0x10b)],MessageType['text']),await _0x3ae13b['client']['groupLeave'](_0x3ae13b[_0x31b23d(0x11b)]));}),Amazone[_0x610623(0x13a)]({'pattern':_0x610623(0x127),'fromMe':!![],'dontAddCommandList':!![],'desc':Lang[_0x610623(0x128)]},async(_0x12a6ab,_0x2ccc8e)=>{const _0x4ed11c=_0x610623;if(!_0x12a6ab[_0x4ed11c(0x132)]||!_0x12a6ab['reply_message'][_0x4ed11c(0x130)])return await _0x12a6ab[_0x4ed11c(0x118)][_0x4ed11c(0x12a)](_0x12a6ab[_0x4ed11c(0x11b)],Lang[_0x4ed11c(0x12d)],MessageType[_0x4ed11c(0x113)]);var _0x4ffd06=await _0x12a6ab[_0x4ed11c(0x118)][_0x4ed11c(0x12a)](_0x12a6ab[_0x4ed11c(0x11b)],Lang['PPING'],MessageType[_0x4ed11c(0x113)]),_0x36e3bd=await _0x12a6ab[_0x4ed11c(0x118)][_0x4ed11c(0x12f)]({'key':{'remoteJid':_0x12a6ab[_0x4ed11c(0x132)][_0x4ed11c(0x11b)],'id':_0x12a6ab['reply_message']['id']},'message':_0x12a6ab[_0x4ed11c(0x132)][_0x4ed11c(0x12b)]['quotedMessage']});await _0x12a6ab[_0x4ed11c(0x118)][_0x4ed11c(0x112)](_0x12a6ab[_0x4ed11c(0x118)][_0x4ed11c(0x11c)]['jid'],fs[_0x4ed11c(0x146)](_0x36e3bd)),await _0x12a6ab[_0x4ed11c(0x118)]['deleteMessage'](_0x12a6ab[_0x4ed11c(0x11b)],{'id':_0x4ffd06[_0x4ed11c(0x125)]['id'],'remoteJid':_0x12a6ab[_0x4ed11c(0x11b)],'fromMe':!![]});}),Amazone[_0x610623(0x13a)]({'pattern':_0x610623(0x131),'fromMe':!![],'dontAddCommandList':!![],'desc':Lang['BLOCK_DESC']},async(_0x4f7e12,_0x213825)=>{const _0x284200=_0x610623;if(Config[_0x284200(0x144)]==_0x284200(0x13c)){if(_0x4f7e12[_0x284200(0x132)]!==![])await _0x4f7e12['client']['sendMessage'](_0x4f7e12[_0x284200(0x11b)],'@'+_0x4f7e12[_0x284200(0x132)][_0x284200(0x11b)][_0x284200(0x13e)]('@')[0x0]+_0x284200(0x126)+Lang[_0x284200(0x121)]+_0x284200(0x12c),MessageType[_0x284200(0x113)],{'quotedMessage':_0x4f7e12[_0x284200(0x132)][_0x284200(0x12b)],'contextInfo':{'mentionedJid':[_0x4f7e12[_0x284200(0x132)][_0x284200(0x11b)][_0x284200(0x12e)]('c.us',_0x284200(0x10d))]}}),await _0x4f7e12[_0x284200(0x118)][_0x284200(0x136)](_0x4f7e12['reply_message'][_0x284200(0x11b)],_0x284200(0x11d));else{if(_0x4f7e12[_0x284200(0x122)]!==![])_0x4f7e12[_0x284200(0x122)][_0x284200(0x138)](async _0x2b163b=>{const _0x282b44=_0x284200;await _0x4f7e12['client'][_0x282b44(0x12a)](_0x4f7e12['jid'],'@'+_0x2b163b[_0x282b44(0x13e)]('@')[0x0]+_0x282b44(0x126)+Lang[_0x282b44(0x121)]+_0x282b44(0x12c),MessageType[_0x282b44(0x113)],{'previewType':0x0,'contextInfo':{'mentionedJid':[_0x2b163b[_0x282b44(0x12e)](_0x282b44(0x10a),'s.whatsapp.net')]}}),await _0x4f7e12[_0x282b44(0x118)][_0x282b44(0x136)](_0x2b163b,_0x282b44(0x11d));});else!_0x4f7e12[_0x284200(0x11b)][_0x284200(0x11a)]('-')?(await _0x4f7e12[_0x284200(0x118)][_0x284200(0x12a)](_0x4f7e12[_0x284200(0x11b)],'*'+Lang[_0x284200(0x124)]+'*',MessageType['text']),await _0x4f7e12[_0x284200(0x118)][_0x284200(0x136)](_0x4f7e12[_0x284200(0x11b)],_0x284200(0x11d))):await _0x4f7e12[_0x284200(0x118)][_0x284200(0x12a)](_0x4f7e12[_0x284200(0x11b)],'*'+Lang['NEED_USER']+'*',MessageType[_0x284200(0x113)]);}}else{if(_0x4f7e12[_0x284200(0x132)]!==![])await _0x4f7e12['client']['sendMessage'](_0x4f7e12['jid'],'@'+_0x4f7e12[_0x284200(0x132)][_0x284200(0x11b)][_0x284200(0x13e)]('@')[0x0]+Config['BLOCKMSG'],MessageType[_0x284200(0x113)],{'quotedMessage':_0x4f7e12[_0x284200(0x132)]['data'],'contextInfo':{'mentionedJid':[_0x4f7e12['reply_message']['jid']['replace'](_0x284200(0x10a),_0x284200(0x10d))]}}),await _0x4f7e12[_0x284200(0x118)][_0x284200(0x136)](_0x4f7e12[_0x284200(0x132)][_0x284200(0x11b)],_0x284200(0x11d));else{if(_0x4f7e12[_0x284200(0x122)]!==![])_0x4f7e12[_0x284200(0x122)]['map'](async _0x5957a6=>{const _0x51efbd=_0x284200;await _0x4f7e12[_0x51efbd(0x118)][_0x51efbd(0x12a)](_0x4f7e12[_0x51efbd(0x11b)],'@'+_0x5957a6[_0x51efbd(0x13e)]('@')[0x0]+Config['BLOCKMSG'],MessageType['text'],{'previewType':0x0,'contextInfo':{'mentionedJid':[_0x5957a6[_0x51efbd(0x12e)](_0x51efbd(0x10a),_0x51efbd(0x10d))]}}),await _0x4f7e12[_0x51efbd(0x118)][_0x51efbd(0x136)](_0x5957a6,_0x51efbd(0x11d));});else!_0x4f7e12[_0x284200(0x11b)][_0x284200(0x11a)]('-')?(await _0x4f7e12['client'][_0x284200(0x12a)](_0x4f7e12[_0x284200(0x11b)],'*'+Lang[_0x284200(0x124)]+'*',MessageType[_0x284200(0x113)]),await _0x4f7e12[_0x284200(0x118)][_0x284200(0x136)](_0x4f7e12[_0x284200(0x11b)],'add')):await _0x4f7e12['client'][_0x284200(0x12a)](_0x4f7e12[_0x284200(0x11b)],'*'+Lang['NEED_USER']+'*',MessageType[_0x284200(0x113)]);}}}),Amazone['addCommand']({'pattern':'unblock\x20?(.*)','fromMe':!![],'dontAddCommandList':!![],'desc':Lang['UNBLOCK_DESC']},async(_0x17828a,_0x167909)=>{const _0x162316=_0x610623;if(Config[_0x162316(0x11e)]=='default'){if(_0x17828a[_0x162316(0x132)]!==![])await _0x17828a[_0x162316(0x118)][_0x162316(0x136)](_0x17828a[_0x162316(0x132)][_0x162316(0x11b)],'remove'),await _0x17828a[_0x162316(0x118)][_0x162316(0x12a)](_0x17828a[_0x162316(0x11b)],'@'+_0x17828a[_0x162316(0x132)][_0x162316(0x11b)][_0x162316(0x13e)]('@')[0x0]+_0x162316(0x126)+Lang['UNBLOCKED']+_0x162316(0x12c),MessageType['text'],{'quotedMessage':_0x17828a[_0x162316(0x132)]['data'],'contextInfo':{'mentionedJid':[_0x17828a[_0x162316(0x132)][_0x162316(0x11b)][_0x162316(0x12e)](_0x162316(0x10a),_0x162316(0x10d))]}});else{if(_0x17828a[_0x162316(0x122)]!==![])_0x17828a[_0x162316(0x122)][_0x162316(0x138)](async _0x4c0ce0=>{const _0xad1290=_0x162316;await _0x17828a['client']['blockUser'](_0x4c0ce0,_0xad1290(0x111)),await _0x17828a[_0xad1290(0x118)][_0xad1290(0x12a)](_0x17828a['jid'],'@'+_0x4c0ce0['split']('@')[0x0]+'```,\x20'+Lang[_0xad1290(0x115)]+_0xad1290(0x12c),MessageType[_0xad1290(0x113)],{'contextInfo':{'mentionedJid':[_0x4c0ce0[_0xad1290(0x12e)](_0xad1290(0x10a),'s.whatsapp.net')]}});});else!_0x17828a[_0x162316(0x11b)][_0x162316(0x11a)]('-')?(await _0x17828a['client']['blockUser'](_0x17828a['jid'],_0x162316(0x111)),await _0x17828a[_0x162316(0x118)]['sendMessage'](_0x17828a[_0x162316(0x11b)],'*'+Lang[_0x162316(0x133)]+'*',MessageType[_0x162316(0x113)])):await _0x17828a[_0x162316(0x118)][_0x162316(0x12a)](_0x17828a['jid'],'*'+Lang[_0x162316(0x117)]+'*',MessageType[_0x162316(0x113)]);}}else{if(_0x17828a[_0x162316(0x132)]!==![])await _0x17828a['client'][_0x162316(0x136)](_0x17828a[_0x162316(0x132)][_0x162316(0x11b)],'remove'),await _0x17828a[_0x162316(0x118)]['sendMessage'](_0x17828a['jid'],'@'+_0x17828a[_0x162316(0x132)][_0x162316(0x11b)][_0x162316(0x13e)]('@')[0x0]+Config[_0x162316(0x11e)],MessageType[_0x162316(0x113)],{'quotedMessage':_0x17828a[_0x162316(0x132)][_0x162316(0x12b)],'contextInfo':{'mentionedJid':[_0x17828a['reply_message'][_0x162316(0x11b)]['replace']('c.us',_0x162316(0x10d))]}});else{if(_0x17828a[_0x162316(0x122)]!==![])_0x17828a[_0x162316(0x122)]['map'](async _0x520a4e=>{const _0x28ca1c=_0x162316;await _0x17828a[_0x28ca1c(0x118)][_0x28ca1c(0x136)](_0x520a4e,_0x28ca1c(0x111)),await _0x17828a[_0x28ca1c(0x118)]['sendMessage'](_0x17828a['jid'],'@'+_0x520a4e[_0x28ca1c(0x13e)]('@')[0x0]+Config['UNBLOCKMSG'],MessageType['text'],{'contextInfo':{'mentionedJid':[_0x520a4e[_0x28ca1c(0x12e)](_0x28ca1c(0x10a),_0x28ca1c(0x10d))]}});});else!_0x17828a[_0x162316(0x11b)][_0x162316(0x11a)]('-')?(await _0x17828a[_0x162316(0x118)]['blockUser'](_0x17828a[_0x162316(0x11b)],_0x162316(0x111)),await _0x17828a[_0x162316(0x118)][_0x162316(0x12a)](_0x17828a[_0x162316(0x11b)],'*'+Lang[_0x162316(0x133)]+'*',MessageType[_0x162316(0x113)])):await _0x17828a[_0x162316(0x118)][_0x162316(0x12a)](_0x17828a['jid'],'*'+Lang['NEED_USER']+'*',MessageType['text']);}}});if(Config[_0x610623(0x139)]==_0x610623(0x148))Amazone[_0x610623(0x13a)]({'pattern':'jid\x20?(.*)','fromMe':!![],'desc':Lang[_0x610623(0x119)]},async(_0x4c14b2,_0x466552)=>{const _0x3ba68f=_0x610623;if(_0x4c14b2[_0x3ba68f(0x132)]!==![])await _0x4c14b2[_0x3ba68f(0x118)][_0x3ba68f(0x12a)](_0x4c14b2[_0x3ba68f(0x11b)],Lang[_0x3ba68f(0x13b)]['format'](_0x4c14b2[_0x3ba68f(0x132)]['jid'][_0x3ba68f(0x13e)]('@')[0x0],_0x4c14b2[_0x3ba68f(0x132)][_0x3ba68f(0x11b)]),MessageType[_0x3ba68f(0x113)],{'quotedMessage':_0x4c14b2[_0x3ba68f(0x132)][_0x3ba68f(0x12b)],'contextInfo':{'mentionedJid':[_0x4c14b2[_0x3ba68f(0x132)][_0x3ba68f(0x11b)][_0x3ba68f(0x12e)]('c.us',_0x3ba68f(0x10d))]}});else _0x4c14b2['mention']!==![]?_0x4c14b2[_0x3ba68f(0x122)][_0x3ba68f(0x138)](async _0x5bc019=>{const _0x3b26ed=_0x3ba68f;await _0x4c14b2[_0x3b26ed(0x118)]['sendMessage'](_0x4c14b2[_0x3b26ed(0x11b)],Lang[_0x3b26ed(0x13b)][_0x3b26ed(0x13d)](_0x5bc019[_0x3b26ed(0x13e)]('@')[0x0],_0x5bc019),MessageType[_0x3b26ed(0x113)],{'contextInfo':{'mentionedJid':[_0x5bc019[_0x3b26ed(0x12e)]('c.us',_0x3b26ed(0x10d))]}});}):await _0x4c14b2[_0x3ba68f(0x118)][_0x3ba68f(0x12a)](_0x4c14b2[_0x3ba68f(0x11b)],Lang[_0x3ba68f(0x110)][_0x3ba68f(0x13d)](_0x4c14b2['jid']),MessageType[_0x3ba68f(0x113)]);});else Config[_0x610623(0x139)]==_0x610623(0x129)&&Amazone[_0x610623(0x13a)]({'pattern':'jid\x20?(.*)','fromMe':![],'desc':Lang[_0x610623(0x119)]},async(_0x3f7af1,_0x14fa19)=>{const _0x39f539=_0x610623;if(_0x3f7af1[_0x39f539(0x132)]!==![])await _0x3f7af1[_0x39f539(0x118)][_0x39f539(0x12a)](_0x3f7af1[_0x39f539(0x11b)],Lang['JID'][_0x39f539(0x13d)](_0x3f7af1[_0x39f539(0x132)][_0x39f539(0x11b)]['split']('@')[0x0],_0x3f7af1['reply_message'][_0x39f539(0x11b)]),MessageType[_0x39f539(0x113)],{'quotedMessage':_0x3f7af1[_0x39f539(0x132)][_0x39f539(0x12b)],'contextInfo':{'mentionedJid':[_0x3f7af1[_0x39f539(0x132)]['jid'][_0x39f539(0x12e)]('c.us',_0x39f539(0x10d))]}});else _0x3f7af1[_0x39f539(0x122)]!==![]?_0x3f7af1[_0x39f539(0x122)][_0x39f539(0x138)](async _0x273593=>{const _0x172b7a=_0x39f539;await _0x3f7af1[_0x172b7a(0x118)]['sendMessage'](_0x3f7af1[_0x172b7a(0x11b)],Lang[_0x172b7a(0x13b)][_0x172b7a(0x13d)](_0x273593[_0x172b7a(0x13e)]('@')[0x0],_0x273593),MessageType[_0x172b7a(0x113)],{'contextInfo':{'mentionedJid':[_0x273593[_0x172b7a(0x12e)]('c.us','s.whatsapp.net')]}});}):await _0x3f7af1[_0x39f539(0x118)][_0x39f539(0x12a)](_0x3f7af1[_0x39f539(0x11b)],Lang[_0x39f539(0x110)][_0x39f539(0x13d)](_0x3f7af1['jid']),MessageType[_0x39f539(0x113)]);});function _0x2a86(){const _0x68c0a=['../events','NEED_USER','client','JID_DESC','includes','jid','user','add','UNBLOCKMSG','4687991CCiOnx','../language','BLOCKED','mention','1587441ltIKCy','BLOCKED_UPPER','key','```,\x20','pp$','PP_DESC','public','sendMessage','data','!```','NEED_PHOTO','replace','downloadAndSaveMediaMessage','image','block\x20?(.*)','reply_message','UNBLOCKED_UPPER','27441EAoyYT','leave$','blockUser','2Qkecbd','map','WORKTYPE','addCommand','JID','default','format','split','@adiwajshing/baileys','KICKME','../config','6520jkCQik','3528730fgORxG','BLOCKMSG','KICKME_DESC','readFileSync','groupLeave','private','2129368ctrzjc','c.us','KICKMEMSG','2820201RMkNIr','s.whatsapp.net','profile','8yWvUkI','JID_CHAT','remove','updateProfilePicture','text','8886990idqhDW','UNBLOCKED'];_0x2a86=function(){return _0x68c0a;};return _0x2a86();}
