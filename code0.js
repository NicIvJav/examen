gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDBlackDecoratedButtonObjects1= [];
gdjs.MENUCode.GDBlackDecoratedButtonObjects2= [];
gdjs.MENUCode.GDFlag_9595BlueObjects1= [];
gdjs.MENUCode.GDFlag_9595BlueObjects2= [];


gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.MENUCode.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDBlackDecoratedButtonObjects1[k] = gdjs.MENUCode.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "escena1", false);
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.MENUCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.MENUCode.GDFlag_9595BlueObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.MENUCode.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.MENUCode.GDFlag_9595BlueObjects1.length = 0;
gdjs.MENUCode.GDFlag_9595BlueObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
