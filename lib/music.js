function Chord() {this.root = 0; this.quality = ""};
function Scales() {this.input = [];};

// C minor diatonic series of 7th chord
// Root Min 7, W Halfdim, H Maj7, W Min7, W Dom7, W Halfdim, H Dom7, (then W to root)
//
// C major scale triads
// ROOT Maj, W min, W min, H Maj, W Maj7, W min, W dim, (then H to root again)
//
// TODO: find a smart way to notify this and create the scales... what did I already do?
// https://github.com/tonaljs/tonal
// https://github.com/LesserChance/chord-library

Chord.prototype.fromText = function(input) {
    // Process input and split into note and quality
}

Scales.prototype.findFromInput = function() {
    try {
        // this.input;

    }
    catch(e) {
        alert("Failed to save: " + e);
    }
};