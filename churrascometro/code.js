let i = 0

function cowsound(){
   switch (i) {
    case 1 :
        let audio2 = document.getElementById('audio2')
        audio2.play()

    default:
        let audio1 = document.getElementById('audio1')
        audio1.play()
   }
   i ++;
}

