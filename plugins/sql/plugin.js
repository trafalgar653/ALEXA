const _0x2b8d9c=_0x2552;function _0x2552(_0x3a306c,_0x21e88b){const _0x523748=_0x5237();return _0x2552=function(_0x2552d5,_0x151b08){_0x2552d5=_0x2552d5-0x104;let _0x383a39=_0x523748[_0x2552d5];return _0x383a39;},_0x2552(_0x3a306c,_0x21e88b);}(function(_0x482866,_0x896d01){const _0x2fbe06=_0x2552,_0x3dc976=_0x482866();while(!![]){try{const _0x176aba=parseInt(_0x2fbe06(0x112))/0x1+-parseInt(_0x2fbe06(0x111))/0x2+parseInt(_0x2fbe06(0x10b))/0x3*(-parseInt(_0x2fbe06(0x10a))/0x4)+parseInt(_0x2fbe06(0x113))/0x5*(parseInt(_0x2fbe06(0x110))/0x6)+-parseInt(_0x2fbe06(0x105))/0x7+-parseInt(_0x2fbe06(0x10c))/0x8+parseInt(_0x2fbe06(0x107))/0x9*(parseInt(_0x2fbe06(0x10e))/0xa);if(_0x176aba===_0x896d01)break;else _0x3dc976['push'](_0x3dc976['shift']());}catch(_0x191344){_0x3dc976['push'](_0x3dc976['shift']());}}}(_0x5237,0xe8daa));const config=require(_0x2b8d9c(0x114)),{DataTypes}=require(_0x2b8d9c(0x10f)),PluginDB=config[_0x2b8d9c(0x116)]['define'](_0x2b8d9c(0x104),{'name':{'type':DataTypes['STRING'],'allowNull':![]},'url':{'type':DataTypes[_0x2b8d9c(0x10d)],'allowNull':![]}});function _0x5237(){const _0x200793=['1135885nmtTOE','../../config','length','DATABASE','Plugin','3197516UoQPSq','exports','15895314sbTmAL','findAll','create','1479440wvgUbw','12Ibhxqg','5626784TMHkwC','TEXT','20hddnqx','sequelize','6cGdYHQ','3659822gYMNYz','1663788yoVqEG'];_0x5237=function(){return _0x200793;};return _0x5237();}async function installPlugin(_0x5caccf,_0x3981f3){const _0x55969c=_0x2b8d9c;var _0x5e0d6f=await PluginDB[_0x55969c(0x108)]({'where':{'url':_0x5caccf}});return _0x5e0d6f[_0x55969c(0x115)]>=0x1?![]:await PluginDB[_0x55969c(0x109)]({'url':_0x5caccf,'name':_0x3981f3});}module[_0x2b8d9c(0x106)]={'PluginDB':PluginDB,'installPlugin':installPlugin};
