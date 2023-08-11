/// <reference path="./Lib/TypeScript/BABYLON.2.1.d.ts"/>



window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById("renderCanvas");

    var engine = new BABYLON.Engine(canvas, true);

    var scene = new BABYLON.Scene(engine, true);

    var camera = new BABYLON.ArcRotateCamera("camera", 1, 2, 20, new BABYLON.Vector3(0, 0, 0), scene);
    camera.useAutoRotationBehavior = true;
    camera.wheelPrecision = 100;
    camera.lowerRadiusLimit = 2 ;
    camera.upperRadiusLimit = 5 ;

    //camera.lowerRadiusLimit = 0 ;
    //camera.upperRadiusLimit = 50 ;
    //camera.panningSensibility = 0;
    //camera.minZ = 0.3 ;
    //camera.setTarget(ground);
    //camera.framingBehavior.radiusScale = 3;

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, 10), scene);



    

    /*var fish = BABYLON.SceneLoader.Append("./","Assets/Babylon/BR143.babylon",scene,function(meshes) {
        scene.createDefaultCameraOrLight(true,true,true);
    });*/

    //generate skybox
    var skybox = BABYLON.Mesh.CreateBox("skyBox", 100, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;
    skybox.infiniteDistance = true;

    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./HDRI/UnderWaterEnvironment.env", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skybox.rotation.y = -Math.PI / 2;

    //var reflectionTexture = new BABYLON.HDRCubeTexture("./HDRI/wooden_lounge_2k.hdr", scene,128, false, true, false, true);
    
    // Environment Texture
    //var hdrTexture = new BABYLON.HDRCubeTexture("../Jan-2022_WorkOut/HDRI/wooden_lounge_2k.hdr", scene, 512);  

    /* // Async call
     BABYLON.SceneLoader.Append("https://www.babylonjs.com/scenes/espilit/",
     "espilit.incremental.babylon", scene, function () {
         scene.activeCamera.attachControl(canvas, true);
     });*/

   // Async call
    /* var fish = BABYLON.SceneLoader.Append("","https://vedantu-otm-media.s3.ap-southeast-1.amazonaws.com/3D+content/BR143_R%26D.glb", scene, function () {
         scene.activeCamera.attachControl(canvas, true);
     });*/

     //Sounds
     /*var soundSprite = new BABYLON.Sound(
        "Violons",
        "/Sound/Forest.mp3",
        scene,
        null,
        { loop: true, autoplay: true, length: 9.200, offset: 14.000 }
      );*/

      // Load the sound and play it automatically once ready
    /*var music = new BABYLON.Sound("Music", "/Sound/Animals.wav", scene, null, {
        loop: true,
        autoplay: true
    });*/

    /*//space botton sound
    var gunshot = new BABYLON.Sound("gunshot", "/Sound/Animals.wav", scene);

    window.addEventListener("mousedown", function(evt) {
      // left click to fire
      if (evt.button === 0) {
        gunshot.play();
      }
    });
    
    window.addEventListener("keydown", function(evt) {
      // Press space key to fire
      if (evt.keyCode === 32) {
        gunshot.play();
      }
    });*/

   /*var fish = BABYLON.SceneLoader.ImportMesh("", "assets/", "BR143_Revamp_v3.glb", scene,
        function (newMeshes) {
            scene.createDefaultCameraOrLight(true, true, true);
            //camera.target = newMeshes[0];
        });*/

    /*var skin = BABYLON.SceneLoader.ImportMesh("","assets/","IB007_Revamp_04.glb", scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        //skin.scaling.x = 100;
        //skin.scaling.y = 100;
        //skin.scaling.z = 100;
        //skin.rotation.y = Math.PI;
    }); */
    
    
   

   
    /*var muscles = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","BR009.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, false, true);
    });*/

    /*var tendon = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","Tendon.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        tendon.linkWithMesh(muscles);
    });*/
    

    /*var ligaments = BABYLON.SceneLoader.ImportMesh("","assets/BR009/","Ligaments.glb",scene,function(newMeshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        ligaments.linkWithMesh(muscles);
    });*/

    //DynamicTexture
    /*var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 2, scene,false);
    outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
    outputplane.position = new BABYLON.Vector3(1, 0, 0);
    outputplane.scaling.x = -1;
    outputplane.scaling.y = -1;
    outputplane.scaling.z = -1;

    outputplane.scaling.y = 0.4;
    outputplane.scaling.x = 0.4;
    outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    outputplaneTexture.hasAlpha = true;
    outputplane.material.diffuseTexture = outputplaneTexture;
    outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    outputplane.material.backFaceCulling = false;
    outputplaneTexture.drawText("Cartilaginoius fishes", null, 200, "bold 60px sans-serif", "black");

    //DynamicTexture
    var outputplane = BABYLON.Mesh.CreatePlane("outputplane", 2, scene, false);
    outputplane.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    outputplane.material = new BABYLON.StandardMaterial("outputplane", scene);
    outputplane.position = new BABYLON.Vector3(0, 0, 0);
    //outputplane.scaling.x = -1;
    //outputplane.scaling.y = -1;
    //outputplane.scaling.z = -1;

    outputplane.scaling.y = 0.4;
    outputplane.scaling.x = 0.4;
    outputplaneTexture = new BABYLON.DynamicTexture("dynamic texture", 512, scene, true);
    outputplaneTexture.hasAlpha = true;
    outputplane.material.diffuseTexture = outputplaneTexture;
    outputplane.material.specularColor = new BABYLON.Color3(0, 0, 0);
    outputplane.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
    outputplane.material.backFaceCulling = false;
    outputplaneTexture.drawText("Ligaments", null, 200, "bold 60px sans-serif", "black");*/
    
    /*//LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(0.8, 4.4, 0);

    //LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(-1.4, 4.3, -0.1);
    lines.rotation = new BABYLON.Vector3(0,3.2,0);

    //LineCreate
    var lines = BABYLON.Mesh.CreateLines("lines", [
        new BABYLON.Vector3(-1, 0, 0),
        new BABYLON.Vector3(1, 0, 0),
        ], scene);
    lines.position = new BABYLON.Vector3(-1.4, 4.3, 0.1);
    lines.rotation = new BABYLON.Vector3(0,-3.2,0);*/
    
     /* // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
      var ground = BABYLON.Mesh.CreateGround("ground1", 100, 50, 2, scene);
      //camera.target = ground;

      // Move the sphere upward 1/2 its height
      ground.position.y = 1;
      ground.rotation.x = Math.PI/2;

      var mat = new BABYLON.StandardMaterial("mat", scene);

      var videoTexture = new BABYLON.VideoTexture("video", ["/Video/HeartAni.mp4"], scene, true, true);

      mat.diffuseTexture = videoTexture;
      ground.material = mat;
      mat.backFaceCulling= false;
      

      scene.onPointerUp = function () {
         videoTexture.video.play();
      }*/
    
     /*// GUI
     var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
     advancedTexture.idealWidth = 600;
     
     var rect1 = new BABYLON.GUI.Rectangle();
     rect1.width = 0.2;
     rect1.height = "40px";
     rect1.cornerRadius = 20;
     rect1.color = "Orange";
     rect1.thickness = 4;
     rect1.background = "green";
     advancedTexture.addControl(rect1);
     rect1.linkWithMesh(null);   
     rect1.linkOffsetY = -150;
 
     var label = new BABYLON.GUI.TextBlock();
     label.text = "Sphere";
     rect1.addControl(label);
 
     var target = new BABYLON.GUI.Ellipse();
     target.width = "40px";
     target.height = "40px";
     target.color = "Orange";
     target.thickness = 4;
     target.background = "green";
     advancedTexture.addControl(target);
     target.linkWithMesh(null);   
 
     var line = new BABYLON.GUI.Line();
     line.lineWidth = 4;
     line.color = "Orange";
     line.y2 = 20;
     line.linkOffsetY = -20;
     advancedTexture.addControl(line);
     line.linkWithMesh(null); 
     line.connectedControl = rect1; */


   // VR code
    var environment = scene.createDefaultEnvironment({
        createSkybox : false,
        skyboxSize : 150,
        skyboxColor : BABYLON.Color3.Blue(),
        createGround : true,
        groundSize :200,
        groundColor : BABYLON.Color3.Green(),
        enableGroundShadow: true,
        groundYBias: 2.8,
    });
    environment.setMainColor(BABYLON.Color3.FromHexString("#74b9ff"))
    var vrHelper =
        scene.createDefaultVRExperience({ createDeviceOrientationCamera: false, useXR: true });
    vrHelper.enableTeleportation({ floorMeshes: [environment.ground] });

    
    

    scene.activeCamera.attachControl(canvas);

    

    engine.runRenderLoop(function () {
        scene.render();
        
    });

    window.addEventListener("resize", function () {
        engine.resize();
    });
});