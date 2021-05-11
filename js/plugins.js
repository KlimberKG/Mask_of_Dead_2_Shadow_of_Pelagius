// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"10","screenWidth":"924","screenHeight":"724","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"TitleCommandPosition","status":true,"description":"Changes the position of the title command window.","parameters":{"Offset X":"-188","Offset Y":"95","Width":"540","Background":"0"}},
{"name":"ATB_WIP","status":true,"description":"ATB.","parameters":{"base":"200.00000","divider":"20.00000","atb_x":"Graphics.boxWidth - 64","hud_x":"Graphics.width - (2 - id % 2 ) * 250","hud_y":"Graphics.height - (2 - Math.floor(id / 2)) * 125 - 20"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.31 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"924","Screen Height":"724","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"330","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Map Optimization---":"","Refresh Update HP":"true","Refresh Update MP":"true","Refresh Update TP":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.18 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"Закончить","Remove Text":"Убрать","Remove Icon":"16","Empty Text":"<Ничего>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.30 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Восстановить","Add State":"+Состояние","Add Buff":"+Усиление","Remove State":"-Состояние","Remove Buff":"-Усиление","Maximum Icons":"4","Use Command":"Использовать %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"Загрузить","Save Command":"Сохранить","Delete Command":"Удалить","---Help Window---":"","Select Help":"Выберите слот для файла.","Load Help":"Загружает данные из сохраненной игры.","Save Help":"Сохраняет текущий прогресс в вашей игре.","Delete Help":"Удаляет все данные из этого файла сохранения.","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"60","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"Это сохранение для другой игры.","Empty Game Text":"Пусто","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, empty, empty, empty","Data Column 3":"empty, empty, empty, empty","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"Время игры:","Save Count":"Всего сохранений:","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"Вы хотите загрузить этот файл сохранения?","Save Confirmation":"true","Save Text":"Вы хотите перезаписать этот файл сохранения?","Delete Confirmation":"true","Delete Text":"Вы хотите удалить этот файл сохранения?","Confirm Yes":"Да","Confirm No":"Нет"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.02 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"Задачи","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\",\\\"failed\\\",\\\"all\\\"]\",\"Available Text\":\"\\\\i[192]Доступные (%1)\",\"Completed Text\":\"\\\\i[191]Завершенные (%1)\",\"Failed Text\":\"\\\\i[194]Проваленные (%1)\",\"All Text\":\"\\\\i[189]Все задачи (%1)\",\"Cancel Text\":\"\\\\i[161]Закрыть\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]Main Quests\\\",\\\"\\\\\\\\c[4]Side Quests\\\",\\\"\\\\\\\\c[3]Character Quests\\\",\\\"\\\\\\\\c[5]Tutorial Quests\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]Read Quest\",\"Cancel\":\"\\\\i[16]Cancel\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]Задачи\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"Welcome to the \\\\\\\\c[4]Quest Journal\\\\\\\\c[0].\\\\n\\\\nHere, you can review over the\\\\nvarious quests given to you by \\\\npeople from all over the world.\\\"\",\"Quest Data Format\":\"\\\"\\\\\\\\{%1\\\\\\\\}\\\\n\\\\\\\\c[4]Сложность:\\\\\\\\c[0] %2\\\\n\\\\\\\\c[4]От кого:\\\\\\\\c[0] %3\\\\n\\\\\\\\c[4]Местоположение:\\\\\\\\c[0] %4\\\\n\\\\n\\\\\\\\c[4]Описание:\\\\\\\\c[0]\\\\n%5\\\\n\\\\n\\\\\\\\c[4]Цели:\\\\\\\\c[0]\\\\n%6\\\\n\\\\n\\\\\\\\c[4]Награда:\\\\\\\\c[0]\\\\n%7\\\\n\\\\n%8\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]Цена ошибки\",\"Type\":\"Side Quests\",\"Difficulty\":\"Легко\",\"From\":\"Литгер\",\"Location\":\"Склад Расходников\",\"Description\":\"[\\\"\\\\\\\"Литгер по неосторожности продал Дереку \\\\\\\\nвзрывной слиток, вместо слитка жизни \\\\\\\\n(они по цвету очень похожи). \\\\\\\\nИз-за чего Литгер теперь должен оплатить \\\\\\\\nущерб в размере 6-и слитков здоровья.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Найти 6 слитков жизни.\\\\\\\"\\\",\\\"\\\\\\\"Отдать слитки Литгеру.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\" - 25% стоимости всех рассходников. \\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"{\"Title\":\"\\\\i[87]Небрежность кладовщика\",\"Type\":\"Side Quests\",\"Difficulty\":\"Легко\",\"From\":\"Дерек\",\"Location\":\"Склад со снаряжением\",\"Description\":\"[\\\"\\\\\\\"Дерек, перебирая слитки в своей комнате, \\\\\\\\nслучайно задел взрывной слиток и потерял \\\\\\\\nбольшую часть своего имущества, вместе с\\\\\\\\nлицом.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"Заставить Литгера компенсировать ущерб\\\\\\\\nДереку.\\\\\\\"\\\",\\\"\\\\\\\"Поговорить с Дереком.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"15 % скидка на броню и оружие.\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[]\"}","Quest 3":"{\"Title\":\"\\\\i[87]Век живи, век учись, сын!\",\"Type\":\"Side Quests\",\"Difficulty\":\"Просто\",\"From\":\"Сидрин Рури\",\"Location\":\"Арена\",\"Description\":\"[\\\"\\\\\\\"Риом перед лекцией решил посетить арену, где\\\\\\\\nпрактиковался в фехтовании Сидрин Рури, его\\\\\\\\nотец.\\\\\\\\nПоприветствовав сына, Сидрин предложил ему\\\\\\\\nпровести полноценный спарринг.\\\\\\\\nЕсли Риом согласится, то отец ему в награду\\\\\\\\nвыдаст пиритовый меч.\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]1. \\\\\\\\\\\\\\\\c[0]Сразиться с Сидрином.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]2. \\\\\\\\\\\\\\\\c[0]Выиграть 1-й раунд. \\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]3. \\\\\\\\\\\\\\\\c[0]Выиграть 2-й раунд. \\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\",\\\"3\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[188]Пиритовый сплав х2\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[97]Пиритовый меч.\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\",\\\"2\\\"]\",\"Subtext\":\"[]\"}","Quest 4":"{\"Title\":\"\\\\i[87]Пропавший помощник\",\"Type\":\"Side Quests\",\"Difficulty\":\"Непросто\",\"From\":\"Ирей\",\"Location\":\"Лекционный зал Ирея\",\"Description\":\"[\\\"\\\\\\\"Ирей готов простить Риома за его грубость.\\\\\\\\nВзамен юный жнец должен помочь Вероломгеру\\\\\\\\nс поиском его помощника, Вейлера.\\\\\\\\nЖнец помогал Ирею с презентациями\\\\\\\\nисследований и локациями, а в скором\\\\\\\\nвремени он пропал.\\\\\\\\n\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]1. \\\\\\\\\\\\\\\\c[0]Найти зацепку в архиве.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]1.1 \\\\\\\\\\\\\\\\c[0]Проверить личную комнату Вейлера в\\\\\\\\nВосточном районе.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]2. \\\\\\\\\\\\\\\\c[0]Поговорить с Зедом.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]3. \\\\\\\\\\\\\\\\c[0]Спуститься в подземный комплекс.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]4. \\\\\\\\\\\\\\\\c[0]Найти жнеца в подземном комплексе.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]5. \\\\\\\\\\\\\\\\c[0]Покинуть комплекс (жнец должен выжить).\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]6. \\\\\\\\\\\\\\\\c[0]Доложить обо всем Ирею.\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\",\\\"2\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"Благодарность Ирея.\\\\\\\"\\\",\\\"\\\\\\\"Усиливающие устройство.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[176]Слиток жизни х2\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[177]Слиток магии\\\\\\\"\\\",\\\"\\\\\\\"3500 \\\\\\\\\\\\\\\\g\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[]\"}","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_RegionEvents","status":true,"description":"v1.03 Make it so that whenever players step on certain\nRegion ID's, the game will play certain common events.","parameters":{"---Regions 1 to 20---":"","Region 1":"0","Region 2":"0","Region 3":"0","Region 4":"0","Region 5":"0","Region 6":"0","Region 7":"0","Region 8":"0","Region 9":"0","Region 10":"0","Region 11":"0","Region 12":"0","Region 13":"0","Region 14":"0","Region 15":"0","Region 16":"0","Region 17":"0","Region 18":"0","Region 19":"0","Region 20":"0","---Regions 21 to 40---":"","Region 21":"0","Region 22":"0","Region 23":"0","Region 24":"0","Region 25":"0","Region 26":"0","Region 27":"0","Region 28":"0","Region 29":"0","Region 30":"0","Region 31":"0","Region 32":"0","Region 33":"0","Region 34":"0","Region 35":"0","Region 36":"0","Region 37":"0","Region 38":"0","Region 39":"0","Region 40":"0","---Regions 41 to 60---":"","Region 41":"0","Region 42":"0","Region 43":"0","Region 44":"0","Region 45":"0","Region 46":"0","Region 47":"0","Region 48":"0","Region 49":"0","Region 50":"0","Region 51":"0","Region 52":"0","Region 53":"0","Region 54":"0","Region 55":"0","Region 56":"0","Region 57":"0","Region 58":"0","Region 59":"0","Region 60":"0","---Regions 61 to 80---":"","Region 61":"0","Region 62":"0","Region 63":"0","Region 64":"0","Region 65":"0","Region 66":"0","Region 67":"0","Region 68":"0","Region 69":"0","Region 70":"0","Region 71":"0","Region 72":"0","Region 73":"0","Region 74":"0","Region 75":"0","Region 76":"0","Region 77":"0","Region 78":"0","Region 79":"0","Region 80":"0","---Regions 81 to 100---":"","Region 81":"0","Region 82":"0","Region 83":"0","Region 84":"0","Region 85":"0","Region 86":"0","Region 87":"0","Region 88":"0","Region 89":"0","Region 90":"0","Region 91":"0","Region 92":"0","Region 93":"0","Region 94":"0","Region 95":"0","Region 96":"0","Region 97":"0","Region 98":"0","Region 99":"0","Region 100":"0","---Regions 101 to 120---":"","Region 101":"0","Region 102":"0","Region 103":"0","Region 104":"0","Region 105":"0","Region 106":"0","Region 107":"0","Region 108":"0","Region 109":"0","Region 110":"0","Region 111":"0","Region 112":"0","Region 113":"0","Region 114":"0","Region 115":"0","Region 116":"0","Region 117":"0","Region 118":"0","Region 119":"0","Region 120":"0","---Regions 121 to 140---":"","Region 121":"0","Region 122":"0","Region 123":"0","Region 124":"0","Region 125":"0","Region 126":"0","Region 127":"0","Region 128":"0","Region 129":"0","Region 130":"0","Region 131":"0","Region 132":"0","Region 133":"0","Region 134":"0","Region 135":"0","Region 136":"0","Region 137":"0","Region 138":"0","Region 139":"0","Region 140":"0","---Regions 141 to 160---":"","Region 141":"0","Region 142":"0","Region 143":"0","Region 144":"0","Region 145":"0","Region 146":"0","Region 147":"0","Region 148":"0","Region 149":"0","Region 150":"0","Region 151":"0","Region 152":"0","Region 153":"0","Region 154":"0","Region 155":"0","Region 156":"0","Region 157":"0","Region 158":"0","Region 159":"0","Region 160":"0","---Regions 161 to 180---":"","Region 161":"0","Region 162":"0","Region 163":"0","Region 164":"0","Region 165":"0","Region 166":"0","Region 167":"0","Region 168":"0","Region 169":"0","Region 170":"0","Region 171":"0","Region 172":"0","Region 173":"0","Region 174":"0","Region 175":"0","Region 176":"0","Region 177":"0","Region 178":"0","Region 179":"0","Region 180":"0","---Regions 181 to 200---":"","Region 181":"0","Region 182":"0","Region 183":"0","Region 184":"0","Region 185":"0","Region 186":"0","Region 187":"0","Region 188":"0","Region 189":"0","Region 190":"0","Region 191":"0","Region 192":"0","Region 193":"0","Region 194":"0","Region 195":"0","Region 196":"0","Region 197":"0","Region 198":"0","Region 199":"0","Region 200":"0","---Regions 201 to 220---":"","Region 201":"0","Region 202":"0","Region 203":"0","Region 204":"0","Region 205":"0","Region 206":"0","Region 207":"0","Region 208":"0","Region 209":"0","Region 210":"0","Region 211":"0","Region 212":"0","Region 213":"0","Region 214":"0","Region 215":"0","Region 216":"0","Region 217":"0","Region 218":"0","Region 219":"0","Region 220":"0","---Regions 221 to 240---":"","Region 221":"0","Region 222":"0","Region 223":"0","Region 224":"0","Region 225":"0","Region 226":"0","Region 227":"0","Region 228":"0","Region 229":"0","Region 230":"0","Region 231":"0","Region 232":"0","Region 233":"0","Region 234":"0","Region 235":"0","Region 236":"0","Region 237":"0","Region 238":"0","Region 239":"0","Region 240":"0","---Regions 241 to 255---":"","Region 241":"0","Region 242":"0","Region 243":"0","Region 244":"0","Region 245":"0","Region 246":"0","Region 247":"0","Region 248":"0","Region 249":"0","Region 250":"0","Region 251":"0","Region 252":"0","Region 253":"0","Region 254":"0","Region 255":"0"}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.04 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"YEP_ExtraParamFormula","status":true,"description":"v1.04 Control the formulas of the extra parameters for\nHIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, and TRG.","parameters":{"HIT Formula":"(base + plus) * rate + flat","EVA Formula":"(base + plus) * rate + flat","CRI Formula":"(base + plus) * rate + flat","CEV Formula":"(base + plus) * rate + flat","MEV Formula":"(base + plus) * rate + flat","MRF Formula":"(base + plus) * rate + flat","CNT Formula":"(base + plus) * rate + flat","HRG Formula":"(base + plus) * rate + flat","MRG Formula":"(base + plus) * rate + flat","TRG Formula":"(base + plus) * rate + flat"}},
{"name":"YEP_ItemSynthesis","status":true,"description":"v1.11 Players can now craft their own items in-game\nthrough an item synthesis system.","parameters":{"---General---":"","Synthesis Command":"Созидатель","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Command Window---":"","Item Command":"Создать предмет","Weapon Command":"Создать оружие","Armor Command":"Создать доспех","Finish Command":"Готово","Text Alignment":"center","---Status Window---":"","Collected Recipes":"Собранные рецепты","Crafted Items":"Созданные предметы","Crafted Weapons":"Изготовленное оружие","Crafted Armors":"Изготовленные доспехи","---List Window---":"","Equipped Recipes":"true","Mask Unknown":"false","Mask Text":"?","Mask Italic":"true","Mask Help Text":"Этот предмет еще не синтезирован.","Ingredients Text":"Ингредиенты","Amount Text":"Количество","Amount Format":"false","Quantity Text Size":"20","---Sound---":"","Default SE":"Door1","Default Volume":"50","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ItemUpgradeSlots","status":true,"description":"v1.10 (Requires YEP_ItemCore.js) Allows independent items to\nbe upgradeable and gain better stats.","parameters":{"Default Slots":"3","Slot Variance":"1","Upgrade Command":"Улучшить %1","Show Only":"true","Slots Available":"Доступные слоты","Show Slot Upgrades":"true","Slot Upgrade Format":"\\}Slot%1: %2\\{","Default Sound":"Parry"}},
{"name":"YEP_X_EquipCustomize","status":true,"description":"v1.02 (Requires YEP_ItemCore && YEP_EquipCore.js)\nAdds a 'Customize' command to the Equip menu.","parameters":{"Command Name":"Оборудовать","Default Enable":"true"}},
{"name":"SelfSwitcher","status":true,"description":"Этот плагин позволит манипулировать локальными переключателями на других картах","parameters":{}},
{"name":"SwitchesAndVariables","status":true,"description":"Упрощение работы с переключателями, локальными переключателями и переменными.","parameters":{}},
{"name":"BlockMove","status":true,"description":"","parameters":{}},
{"name":"SRD_FullscreenToggleOption","status":true,"description":"Adds a Fullscreen Toggle to the Options Window","parameters":{"Option Name":"Fullscreen","Position":"Middle","Default Value":"true","Persist Default?":"true"}},
{"name":"YuryolStealth","status":true,"description":"Стелс (зрение событий)","parameters":{"circle":"true"}},
{"name":"TerraxLighting","status":true,"description":"v1.5.1 Creates an extra layer that darkens a map and adds lightsources!","parameters":{"Player radius":"0","Add to options":"No","Option menu entry":"Lighting effects","Reset Lights":"No","Save DaynightHours":"0","Save DaynightMinutes":"0","Save DaynightSeconds":"0","Flashlight offset":"1","Screensize X":"924","Screensize Y":"724","Kill Switch":"No"}},
{"name":"MOG_AnimatedText","status":true,"description":"(v1.3) Apresenta multiplos textos animados.","parameters":{"Letter Space X-Axis":"0","Letter Space Y-Axis":"0"}},
{"name":"MOG_TreasurePopup","status":true,"description":"(v1.1) Apresenta o ícone e o nome do tesouro ganho.","parameters":{"Duration":"15","Fade Speed":"5","X - Axis":"0","Y - Axis":"-32","Random Movement":"false","X Speed":"0","Y Speed":"1","Font Size":"16","Icon Scale":"0.60","Treasure Space Y-Axis":"20","Zoom Effect":"false","Gold Popup":"true","Gold Icon Index":"163"}},
{"name":"YEP_BattleAICore","status":false,"description":"v1.15 This plugin allows you to structure battle A.I.\npatterns with more control.","parameters":{"Dynamic Actions":"true","Dynamic Turn Count":"false","Element Testing":"true","Default AI Level":"80"}},
{"name":"YEP_BuffsStatesCore","status":false,"description":"v1.16 Alter the basic mechanics behind buffs and states\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"Stealth","status":true,"description":"Stealth","parameters":{}}
];
