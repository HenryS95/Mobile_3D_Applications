// Wireframe
function wireframe(model) {

    var e = document.getElementById(model);
    e.runtime.togglePoints(true);
    e.runtime.togglePoints(true);
}

// Camera adapted from the live feedback site coke can

function frontCamera(model) {
    document.getElementById(model+'__frontCamera').setAttribute('set_bind', 'true');
}

function bottomCamera(model) {
    document.getElementById(model+'__bottomCamera').setAttribute('set_bind', 'true');
}

function topCamera(model) {
    document.getElementById(model+'__topCamera').setAttribute('set_bind', 'true');
}



// Lighting developed with information from ben's kitchen and the X3DOM tutorials

function headLighting(model){
    if(document.getElementById(model+'__headLighting').getAttribute('headlight') == 'false'){
        document.getElementById(model+'__headLighting').setAttribute('headlight', 'true');
    } else {
        document.getElementById(model+'__headLighting').setAttribute('headlight', 'false');
    }
}

function leftLight(model){
    if(document.getElementById(model+'__leftLight-LIGHT').getAttribute('on')=='false'){
        document.getElementById(model+'__leftLight-LIGHT').setAttribute('on', 'true');
    } else {
        document.getElementById(model+'__leftLight-LIGHT').setAttribute('on', 'false');
    }
}

function rightLight(model){
    if(document.getElementById(model+'__rightLight-LIGHT').getAttribute('on')=='false'){
        document.getElementById(model+'__rightLight-LIGHT').setAttribute('on', 'true');
    } else {
        document.getElementById(model+'__rightLight-LIGHT').setAttribute('on', 'false');
    }
}

function frontLight(model){
    if(document.getElementById(model+'__frontLight-LIGHT').getAttribute('on')=='false'){
        document.getElementById(model+'__frontLight-LIGHT').setAttribute('on', 'true');
    } else {
        document.getElementById(model+'__frontLight-LIGHT').setAttribute('on', 'false');
    }
}

function backLight(model){
    if(document.getElementById(model+'__backLight-LIGHT').getAttribute('on')=='false'){
        document.getElementById(model+'__backLight-LIGHT').setAttribute('on', 'true');
    } else {
        document.getElementById(model+'__backLight-LIGHT').setAttribute('on', 'false');
    }
}


//set all lights to default option 
function defaultLighting(model){
    document.getElementById(model+'__backLight-LIGHT').setAttribute('on','true');
    document.getElementById(model+'__frontLight-LIGHT').setAttribute('on','true');
    document.getElementById(model+'__rightLight-LIGHT').setAttribute('on','true');
    document.getElementById(model+'__leftLight-LIGHT').setAttribute('on','true');
    document.getElementById(model+'__headLighting').setAttribute('headlight','true');
    
}

// Animation developed with information from ben's kitchen and the X3DOM tutorials

var enabled = false;
function animation(model) {
    enabled = !enabled;

    if (model == 'smartWater') {
        document.getElementById(model+'__Timer').setAttribute('enabled', enabled);
        document.getElementById(model+'__ROTKEY_SMART_WATER_OBJ').setAttribute('enabled', enabled);
 
    } else {
        document.getElementById(model+'__Animate').setAttribute('enabled', enabled);
        if(document.getElementById(model+'__Animate').getAttribute('enabled') == 'false'){
            document.getElementById(model+'__topCamera').setAttribute('set_bind', 'true');
        } else {
            document.getElementById(model+'__animationCamera').setAttribute('set_bind', 'true');
        }
    }
}

var isenabled = false;
function animateSchweppes(){

    isenabled = !isenabled;
    document.getElementById('schweppesTonic__ROTKEY_Schweppes_Tonic').setAttribute('enabled', isenabled);
    document.getElementById('schweppesTonic__Timer').setAttribute('enabled', isenabled);
    if (isenabled == true) {
    } else {
    }
}


var enabl = false;
function animateappletiser() {
    enabl = !enabl;

    document.getElementById('appletiser__ROTKEY_SMART_WATER_OBJ').setAttribute('enabled', enabl);
    document.getElementById('appletiser__Timer').setAttribute('enabled', enabl);
    if (enabl == true) {
    } else {
    }
}
