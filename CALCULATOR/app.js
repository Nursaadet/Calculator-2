const buttons=document.querySelector(".buttons")
const display=document.querySelector(".display")

// querySelector yöntemi ile css secimlerinin gucu kullanildigi icin daha karmasik olan element secimleri icin kullanilir. css deki elementleri js de degistirir

let buttonsarray = [
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "-",
    "=",
    "C",
];

// array = dizi

let values = [];
// bos deger
let cleanvalues;
for (let a=0;a<buttonsarray.length;a++) 
{
        let button = 
        document.createElement("button");
        // buton olusturuldu

        button.textContent = buttonsarray[a];
        // butona textContent verdi.Buttonsarrayda a nıncı elemanı buldu 

        // seçtiğimiz Html öğesinin içerisine metin ekleyebiliriz. Bunun için JavaScript’deki innerText veya textContent özelliklerini kullanıyoruz.

        buttons.appendChild(button);
        // containera yaptigi butonlari ekledi.

    }
    
    let calcbuttons =
    document.querySelectorAll(".buttons button");
    // buttons div inin icerisindeki butu buttonları al dendi.

    calcbuttons.forEach((item) => {
        item.addEventListener("click", (e) => {
            //? console.log(e.target.textContent);

            // her item icin eventlistener olusturuldu.click eventlistener ini aldı
            // click eventlistenerinden bir event aldi. yani hangi tusa basiyorsa onu ekranda gösterecek 

            calculateArray(e.target.textContent)
            // event olarak target sonra da text content aldi

        });

        // sayfadaki birden fazla olan elementlerin secimi icin kullanilir. birden fazla ayni class ismi olmasi gibi durumlarda kullanilir.

    });
        let calculateArray = (value) => {
            if(value === "C")
            {
                values=[]
                display.textContent = "0"
                return;
                // herhangi bir ilerleme kaydedilmedi.
        }

        if(value != "=")
        // eger value tuşuna basınca eşit degilse deger atmaya devam etsin
        {
            values.push(value);

            cleanvalues = values.join("");
            display.textContent = cleanvalues;
            // valuelerdeki "," degerinin yok olması icin
            
        }

        else
        // eger esit tusuna basarsa
        {
            let result = eval(cleanvalues);
            display.textContent = result;
            value = [];
            // valueyi sifirla

        }
    };

