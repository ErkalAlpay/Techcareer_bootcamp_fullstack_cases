// kullanıcı tarafından girilen bir kelimenin (prompt) let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
// S-11)Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)
// S-12) Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız). 

// S-13) Kullanıcıdan aldığımız isim soyisim (boşluk var) ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın) eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma


// C-1)
 let userData = prompt("lütfen bir şeyler yazınız");
// console.log(userData.length);

// C-2)
console.log(userData.trim().length);

// C-3)
console.log(userData.toLocaleLowerCase());

// C-4)
console.log(userData.toLocaleUpperCase());

// C-5)

console.log(userData.replace(userData.substring(0, userData.indexOf("")), "javascript"));

// C-6)

if (userData.startsWith("javascript")) {
    console.log("true");
}else console.log("false");

// C-7)

if (userData.endsWith("javascript")) {
    console.log("true");
}else console.log("false");

// C-8)

console.log(userData.charAt(0));

// C-9)

console.log(userData.concat("-javascript öğreniyorum"));

// C-10)

console.log(userData.substring(0,4));

// C-11)

let pozitifmi = (number) => {

    if (number < 0) {

        console.log("girdiğiniz sayı negatiftir");
        
    }else console.log("girdiğiniz sayı pozitiftir");

}   

pozitifmi(userData);

// C-12)

const oddEvenCalculator = function () {

    if (userData % 2 == 0) {//çift sayı
        console.log(userData + " çift sayıdır");
    } else {
        console.log(userData + " tek sayıdır");
    }
}

oddEvenCalculator(userData);



// C-13)

//Kaçıncı aralıkta boşluk olduğu bulunur
let a;
for (let index = 0; index < userData.length; index++) {
    if(userData.charAt(index) == " "){
    a = index;
    console.log(a);}
}
 
const maskeleme = () => {

    //ilk ismi alıyorum
    let ilkkisim = userData.substring(0,a);

    //boşluk sonrası girilen ismi alıyorum
    let soyisim= userData.substring(a+1,userData.length); 

    //isimlerin baş harfleri ile yeni değişken oluşturuyorum
    let maskeliIsim= ilkkisim.charAt(0);
    let maskeliSoyisim= soyisim.charAt(0);

    //döngü içinde isimlerin uzunluklarına göre "*" eklemler yapıyorum
    for (let index = 0; index < ilkkisim.length-1; index++) {
            maskeliIsim = maskeliIsim+"*";
    }

    for (let index = 0; index < soyisim.length-1; index++) {
        maskeliSoyisim = maskeliSoyisim+"*";
    }

    
    maskeliIsim = maskeliIsim.toLocaleUpperCase();
    maskeliSoyisim = maskeliSoyisim.toLocaleUpperCase();
    
    console.log(maskeliIsim + "" + maskeliSoyisim);


}
maskeleme();



