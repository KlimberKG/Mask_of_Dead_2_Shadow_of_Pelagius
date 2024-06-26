 /*:
 * @plugindesc Упрощение работы с переключателями, локальными переключателями и переменными.
 * @author VarVarKa
*/

function gS (sw){
	return $gameSwitches.value(sw);
}

function gSs (num,value=1){
	if (value==1) {sw=true}
	if (value!=1) {sw=false}
	$gameSwitches.setValue(num, sw);
}

function gV (num){
	return $gameVariables.value(num);
}

function gVs (num,value){
	$gameVariables.setValue(num, value);
}

function sS (ev,letter=0,map=0){
	if (map==0) {map=$gameMap.mapId()}
	if (letter==0) {sw='A'}
	if (letter==1) {sw='B'}
	if (letter==2) {sw='C'}
	if (letter==3) {sw='D'}
	return $gameSelfSwitches.value([map,ev,sw]);
}

function sSs (ev,letter=0,value=1,map=0){
	if (map==0) {map=$gameMap.mapId()}
	if (letter==0) {sw='A'}
	if (letter==1) {sw='B'}
	if (letter==2) {sw='C'}
	if (letter==3) {sw='D'}
	if (value==1) {v=true}
	if (value!=1) {v=false}
	$gameSelfSwitches.setValue([map,ev,sw],v);
}

function mix(arr) {
  for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
  return arr;
}

function cE(ce){
	$gameTemp.reserveCommonEvent(ce)
}

/* Ещё одно упрощение) */
function tev(e=0){
    if (e==-1) return $gamePlayer
    if (e==0) e=$gameMap._interpreter._eventId
	return $gameMap.event(e)
}

function is_enemy(e){
	var t=$gameMap.eventIdXy(e.x,e.y), id=e._eventId, d
	if (t)
		var mt=tev(t).event().meta
		if (mt.en) {
			if (e.event().meta.exp) gVs(17,1)
			else if (e.event().meta.mag) gVs(17,2)
			sSs(t) 
			sSs(id,3)
		}
}