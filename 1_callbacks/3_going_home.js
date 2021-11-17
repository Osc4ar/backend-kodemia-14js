// Una accion que no sabemos cuando terminara exactamente
function irACasa(callback) {
    console.log('camino a casa...');
    console.log('llegue a casa');

    // veamos que es callback
    console.log(callback);
    if (callback !== undefined) {
        callback();
    } else {
        console.log('y no hizo nada');
    }
}

function avisar() {
    console.log('ya llegue');
}

function dormir() {
    console.log('a mimir');
}

// Como irian a casa y luego avisarian?
irACasa(avisar);

// Como dormir y luego ir a casa?
dormir();
irACasa();