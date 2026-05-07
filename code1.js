gdjs.escena4Code = {};
gdjs.escena4Code.localVariables = [];
gdjs.escena4Code.idToCallbackMap = new Map();
gdjs.escena4Code.GDBlackDecoratedButtonObjects1= [];
gdjs.escena4Code.GDBlackDecoratedButtonObjects2= [];
gdjs.escena4Code.GDFlag_9595BlueObjects1= [];
gdjs.escena4Code.GDFlag_9595BlueObjects2= [];


gdjs.escena4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlackDecoratedButton"), gdjs.escena4Code.GDBlackDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.escena4Code.GDBlackDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.escena4Code.GDBlackDecoratedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.escena4Code.GDBlackDecoratedButtonObjects1[k] = gdjs.escena4Code.GDBlackDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.escena4Code.GDBlackDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.escena4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.escena4Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.escena4Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.escena4Code.GDFlag_9595BlueObjects1.length = 0;
gdjs.escena4Code.GDFlag_9595BlueObjects2.length = 0;

gdjs.escena4Code.eventsList0(runtimeScene);
gdjs.escena4Code.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.escena4Code.GDBlackDecoratedButtonObjects2.length = 0;
gdjs.escena4Code.GDFlag_9595BlueObjects1.length = 0;
gdjs.escena4Code.GDFlag_9595BlueObjects2.length = 0;


return;

}

gdjs['escena4Code'] = gdjs.escena4Code;
