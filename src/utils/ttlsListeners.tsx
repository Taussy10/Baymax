import Tts from "react-native-tts"


// for android if TTS engine(installed by default) is not installed on phone by chance
export const initializeTtsListeners = async () =>{
    // Due to any problem(API call slow from gemini) it can take time to initalze
    // so use getInitSatus and async
   Tts.getInitStatus().then( (e) =>{
    console.log("AL OK TTS");
    console.log(e);
    
    
   },
(err) =>{
    if (err.code === 'no_engine') {
        console.log("No Engine");
        
        Tts.requestInstallEngine()

        
    }
}
)

// How to get differnet voices
// const voices  = await Tts.voices()
// console.log(voices);

// Tts.setDefaultRate(0.3 , true)
// for Iphone
Tts.setIgnoreSilentSwitch('ignore')
// Tts.setDefaultPitch(0.7)


Tts.addEventListener('tts-start', (e) => {
    console.log('TTS Started' , e);
    
})

Tts.addEventListener('tts-progress', (e) => {
    console.log('TTS progress' , e);
    
})

Tts.addEventListener('tts-finish', (e) => {
    console.log('TTS finished' , e);
    
})

Tts.addEventListener('tts-cancel', (e) => {
    console.log('TTS canceled' , e);
    
})

}