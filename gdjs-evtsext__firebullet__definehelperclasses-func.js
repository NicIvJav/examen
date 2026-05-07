
if (typeof gdjs.evtsExt__FireBullet__DefineHelperClasses !== "undefined") {
  gdjs.evtsExt__FireBullet__DefineHelperClasses.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__FireBullet__DefineHelperClasses = {};
gdjs.evtsExt__FireBullet__DefineHelperClasses.idToCallbackMap = new Map();


gdjs.evtsExt__FireBullet__DefineHelperClasses.userFunc0x988630 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//@ts-ignore
if (gdjs.__fireBulletExtension) {
    //@ts-ignore
    return;
}

class LocalBasis {
    forward = new THREE.Vector3();
    up = new THREE.Vector3();
    right = new THREE.Vector3();

    /**
     * @param offsetX {number}
     */
    getWorldOffsetX(offsetX, offsetY, offsetZ) {
        return offsetX * this.forward.x +
            offsetY * this.right.x +
            offsetZ * this.up.y;
    }

    /**
     * @param offsetY {number}
     */
    getWorldOffsetY(offsetX, offsetY, offsetZ) {
        return offsetX * this.forward.y +
            offsetY * this.right.y +
            offsetZ * this.up.y;
    }

    /**
     * @param offsetX {number}
     */
    getWorldOffsetZ(offsetX, offsetY, offsetZ) {
        return offsetX * this.forward.z +
            offsetY * this.right.z +
            offsetZ * this.up.z;
    }
}

class CameraLocalBasis extends LocalBasis {
    /** @type {gdjs.RuntimeObject} */
    object;
    rotationMatrix = new THREE.Matrix4();

    /**
     * @param object {gdjs.RuntimeObject}
     */
    constructor(object) {
        super();
        this.object = object;
    }

    update() {
        const layer = this.object.getInstanceContainer().getLayer(this.object.getLayer());
        const threeCamera = layer.getRenderer().getThreeCamera();
        this.rotationMatrix.makeRotationFromEuler(threeCamera.rotation);
        const elements = this.rotationMatrix.elements;

        this.forward.set(-elements[8], elements[9], -elements[10]);
        this.right.set(elements[0], -elements[1], elements[2]);
        this.up.crossVectors(this.forward, this.right);

        // Normalize them, just in case (they should generally be unit vectors).
        this.forward.normalize();
        this.right.normalize();
        this.up.normalize();
    }
}

class ObjectLocalBasis extends LocalBasis {
    /** @type {gdjs.RuntimeObject} */
    object;
    rotationMatrix = new THREE.Matrix4();

    /**
     * @param object {gdjs.RuntimeObject}
     */
    constructor(object) {
        super();
        this.object = object;
    }

    update() {
        const threeObject = this.object.get3DRendererObject();
        this.rotationMatrix.makeRotationFromEuler(threeObject.rotation);
        const elements = this.rotationMatrix.elements;

        this.forward.set(elements[0], elements[1], elements[2]);
        this.up.set(elements[8], elements[9], elements[10]);
        this.right.crossVectors(this.forward, this.up);

        // Normalize them, just in case (they should generally be unit vectors).
        this.forward.normalize();
        this.right.normalize();
        this.up.normalize();
    }
}

/**
 * It can be built the follow:
 * 
 * `objectDefaultRotation.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI/2);`
 * 
 * `objectDefaultRotation.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -Math.PI/2));`
 * 
 */
const objectDefaultRotation = new THREE.Quaternion(0.5, 0.5, -0.5, 0.5);

/**
 * @param {gdjs.RuntimeObject3D} object
 */
function rotateObjectToFaceSameWayAsCamera(object) {
    const layer = object.getInstanceContainer().getLayer(object.getLayer());
    const threeCamera = layer.getRenderer().getThreeCamera();
    const threeObject = object.get3DRendererObject();

    threeObject.rotation.copy(threeCamera.rotation);
    threeObject.rotation.z = -threeObject.rotation.z;
    threeObject.rotation.x = -threeObject.rotation.x;
    threeObject.quaternion.multiply(objectDefaultRotation);

    const {x, y, z } = threeObject.rotation;
    object.setAngle(gdjs.toDegrees(z));
    object.setRotationY(gdjs.toDegrees(y));
    object.setRotationX(gdjs.toDegrees(x));
}

//@ts-ignore
gdjs.__fireBulletExtension = {
    CameraLocalBasis,
    ObjectLocalBasis,
    rotateObjectToFaceSameWayAsCamera
};

};
gdjs.evtsExt__FireBullet__DefineHelperClasses.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__FireBullet__DefineHelperClasses.userFunc0x988630(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__FireBullet__DefineHelperClasses.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("FireBullet"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("FireBullet"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__FireBullet__DefineHelperClasses.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__FireBullet__DefineHelperClasses.registeredGdjsCallbacks = [];