gdjs.GAME_32OVERCode = {};
gdjs.GAME_32OVERCode.localVariables = [];
gdjs.GAME_32OVERCode.idToCallbackMap = new Map();
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1= [];
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2= [];
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects1= [];
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects2= [];


gdjs.GAME_32OVERCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[k] = gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GAME_32OVERCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects2.length = 0;

gdjs.GAME_32OVERCode.eventsList0(runtimeScene);
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.GAME_32OVERCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.GAME_32OVERCode.GDFlag_9595BlueObjects2.length = 0;


return;

}

gdjs['GAME_32OVERCode'] = gdjs.GAME_32OVERCode;
