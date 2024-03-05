let start = parseInt(prompt("la tua avventura inzia qui \n premi '1' per iniziare partita \n premi '2' per uscire dal gioco"));

while (start != 1 && start != 2) {
    start = parseInt(prompt("la tua avventura inzia qui \n premi '1' per iniziare partita \n premi '2' per uscire dal gioco"));
    
}

if (start == 1) {alert ("la tua avventura comincia qui");
let life = 3;
alert ('stai attraverdando un bosco per raggiungere il castello fai attenzione alle tue scelte hai solo 3 vite a disposizione');
let bivio = parseInt(prompt("ti trovi davanti un bivio a sinistra vedi una fitta boscaglia a destra c'e' meno vegetazione ma percepisci degli strani rumori \n premi '1' per andare a sinistra \n premi '2' per andare a destra"));
while (bivio != 1 && bivio != 2){bivio = parseInt(prompt("ti trovi davanti un bivio a sinistra vedi una fitta boscaglia a destra c'e' meno vegetazione ma percepisci degli strani rumori \n premi '1' per andare a sinistra \n premi '2' per andare a destra")); };

// scelta zona buia
if (bivio == 1) {alert("ti dirigi verso la zona piu buia in cui pero non senti rumori");
alert ("avanzi con cautela a causa della poca luce");

let nemico1 = parseInt(prompt("Il terreno sotto i tuoi piedi comincia a franare come reagisci?\n '1' ti guardi attorno e ti aggrappi ad una roccia sporgente mentre scivoli verso il vuoto \n '2' vedi una liana sporgersi verso di te e ti aggrappi con tutte le tue forze ad essa"));

while ( nemico1 != 1 && nemico1 != 2){nemico1 = parseInt(prompt("Il terreno sotto i tuoi piedi comincia a franare come reagisci?\n '1' ti guardi attorno e ti aggrappi ad una roccia sporgente mentre scivoli verso il vuoto \n '2' vedi una liana sporgersi verso di te e ti aggrappi con tutte le tue forze ad essa"));

}

if (nemico1 == 1) {alert("riesci a tirarti su con tutte le tue forze lhai scampata per questa volta");

} else if (nemico1 == 2) {alert("ti aggrappi alla liana ma non regge il tuo peso e si spezza facendoti ruzzolare rovinosamente giu la tua salute diminuisce di una unita'");
life = (life-1);



}
else {

};

// fiume
alert("continui ad avanzare nonostante tutto davanti a te un fiume ti blocca la strada")
let fiume = parseInt(prompt("stai pensando di attraversare il fiume a nuoto ma poco distante noti una vecchia barca. cone decidi di proseguire?\n '1' confidi nelle tue capacita e ti tuffi in acqua nuotando verso la riva \n '2' metti la barca in acqua e cominci a remare verso la riva opposta. "));

while (fiume != 1 && fiume != 2) {fiume = parseInt(prompt("stai pensando di attraversare il fiume a nuoto ma poco distante noti una vecchia barca. cone decidi di proseguire?\n '1' confidi nelle tue capacita e ti tuffi in acqua nuotando verso la riva \n '2' metti la barca in acqua e cominci a remare verso la riva opposta. "));

}
if (fiume == 1) {alert("la corrente e troppo forte e vieni trascinato dal fiume in piena la tua salute diminuisce di 2 unita' ");

life = (life - 2);

}else if (fiume == 2) {alert ("comincia a remare verso la riva nonostate imbarchi acqua non ti arrendi e raggiuingi la riva opposta");

}

else {

}

// riva
if (life >= 1) {alert ("non hai un attimo di tregua nemmeno il tempo di asciugarti che senti delle urla alle tue spalle");
let indigeni = parseInt(prompt("2 guerrieri armati di bastone ti cominciano ad avanzare verso di te sbraitando e agitando le loro mazze.\n '1' tenti la fuga sul sentiero davanti a te \n '2' li affronti armato del tuo coltello \n '3' ti tuffi in acqua preso dal panico "));
if (indigeni == 1) { alert("corri a perdifiato per il sentiero sentendo le urla alle tue spalle");

} else if (indigeni == 2) { alert("il coraggio non ti manca ,ma il tuo coltellino svizzero è inutile soccombi alle bastone e perdi 2 unita di salute");
life = (life - 2); 

}
else if (indigeni == 3) { alert("preso dal panico ti butti nel fiume, ma la corrente e troppo forte e perdi 3 unita di salute");
life = (life - 3);

} else {
    
}

}else if (life == 0 ) {alert ("Non hai piu salute . la tua avventura finisce qui puoi sempre riprovare");


// finale


}
else  {
    
};
if (life <= 0) {alert("Non hai piu salute . la tua avventura finisce qui puoi sempre riprovare");

}else if (life > 0) {alert(" Riesci anche stavolta a cavertela,riesci a fuggire ed in  lontananza vedi il al castello, nuove sfide ti aspettano adesso");

}
else {
    
}







// scelta zona illuminata
}else if (bivio == 2) {alert("vai verso la zona illuminata ma i rumori si fanno piu forti");
alert ("ti guardi intorno ma non riesci a capire chi o cosa provoca questi mugugni");
alert ("at un tratto senti un grosso boato alle tue spalle");
// cinghiale
let cinghiale = parseInt(prompt("un grosso cinghiale si staglia davanti a te \n '1' cominci a correre \n '2' cerchi di arrampicarti sull'albero \n '3' lo affronti con il tuo coltellino svizzero"));

while (cinghiale != 1 && cinghiale != 2 && cinghiale != 3 ) {cinghiale = parseInt(prompt("un grosso cinghiale si staglia davanti a te \n '1' cominci a correre \n '2' cerchi di arrampicarti sull'albero \n '3' lo affronti con il tuo coltellino svizzero"));

}
if (cinghiale == 1) {alert("corri a piu non posso ma il cinghiale ti raggiunge e ti trasvolge perdi 2 unita di salute")
life = (life - 2);

}else if (cinghiale == 2) {alert ("con fatica ti arrampichi e ti metti in salvo");

}else if (cinghiale == 3 ) {alert ("ferisci il cinghiale con il tuo coltellino ma lo rende ancora piu feroce e ti carica con tutta la forza perdi 3 unita di salute");
life = (life - 3);

}
else {

}

if (life <= 0) {alert("mi dispiace la tua avventura finisce qui");

} else if (life > 0) {alert ("non è da tutti sopravvire ad un cinghiale la tua avventura continua");


// sabbie mobili

let sabbie = parseInt(prompt("avanzi a fatica su questo terreno, anche se la luce illumina il tuo percorso ad un tratto ti senti i piedi sprofondare sei rimasto intrappolato nelle sabbie mobili \n '1' ti aggrappi alle liane che penzolano su di te e provi a tirarti su \n '2' ti agiti e provi a nuotare in questa melma \n '3' con movimenti lentissimi e cercando di galleggiare ti avvicini alla sponda"));

while (sabbie != 1 && sabbie != 2 && sabbie != 3 ) {sabbie = parseInt(prompt("avanzi a fatica su questo terreno, anche se la luce illumina il tuo percorso ad un tratto ti senti i piedi sprofondare sei rimasto intrappolato nelle sabbie mobili \n '1' ti aggrappi alle liane che penzolano su di te e provi a tirarti su \n '2' ti agiti e provi a nuotare in questa melma \n '3' con movimenti lentissimi e cercando di galleggiare ti avvicini alla sponda"));

}
if (sabbie == 1 ) {alert ("facendo forza sulle liane riesci a uscirne indenne e raggiungere la terra ferma");


}else if (sabbie == 2) {alert("piu ti muovi e piu vieni inghiottito perdi 3 unita di salute");
life = (life - 3 );


}else if (sabbie == 3 ) {alert("riesci a toccare il bordo della fossa ma un serpente ti morde non appena sali sulla terra ferma perdi 2 unita di salute");
life = (life - 2 );



} else {
}
if (life <= 0) {alert("mi dispiace la tua avventura finisce qui");
    
} else { (life > 0 ) (alert("malconcio segui il sentiero ed in lontananza vedi il castello bravo sei sopravvissuto"));
    
}










} else {
}





















}
else {



}



































} else  alert ("sara per la prossima volta");











