   // Dados a serem enviados no corpo da solicitaÃ§Ã£o
   const requestData = {
    access_token: "XXXXX",
    clickid: "XXXXX",
    event_name: "EVENT_XXXXX",
    is_attributed: 1,
    mmpcode: "PL",
    pixelId: "XXXXX",
    pixelSdkVersion: "9.9.9",
    properties: {
    content_id: "XXXXX",
    content_type: "XXXXX",
    content_name: "XXXXX"
    },
    testFlag: false,
    third_party: "XXX",
    trackFlag: true // ou false
};


const example = document.getElementById("textoprincipalsptfy");
const descricao = document.getElementById("descricaoiniciospotify");
const img = document.getElementById("img");
const perg1 = document.getElementsByClassName("perg1");
const perg2 = document.getElementsByClassName("perg2");
const perg3 = document.getElementsByClassName("perg3");
const pag1 = document.getElementById("pag1");
const pag2 = document.getElementById("pag2");
const pag3 = document.getElementById("pag3");
const pag4 = document.getElementById("pag4");
const pag5 = document.getElementById("pag5");
const pag6 = document.getElementById("pag6");
const pag7 = document.getElementById("pag7");
const pag8 = document.getElementById("pag8");
const pag9 = document.getElementById("pag9");


// URL de destino da solicitaÃ§Ã£o
const url = "http://www.adsnebula.com/log/common/api";

// ConfiguraÃ§Ã£o da solicitaÃ§Ã£o
const requestOptions = {
    method: "POST",
    headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
    },
    body: JSON.stringify(requestData)
};

// Realiza a solicitaÃ§Ã£o usando a API Fetch
fetch(url, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erro na solicitaÃ§Ã£o:", error));



const inicioDiv = document.getElementById('inicio');
const saqueDiv = document.getElementById('saque');
const loginDiv = document.getElementById('login');
const bonusDiv = document.getElementById('bonus');


// FunÃ§Ã£o para definir um cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
}

// FunÃ§Ã£o para obter o valor de um cookie
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

let valor = parseFloat(getCookie('valor')) || 100.00;
const valorSpan = document.getElementById('valor');
const valorSpanSaque = document.getElementById('valor-saque');
const valorSpanMoney = document.getElementById('valor-money');

function atualizarValor() {
    valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
    valorSpanMoney.textContent = `R$ ${valor.toFixed(2)}`;
    setCookie('valor', valor.toFixed(2), 365); // Armazena o valor como um cookie vÃ¡lido por 1 ano
}

atualizarValor(); // Atualiza o valor inicial na caixa de valor

// Array com os valores desejados
const valoresDesejados = [33, 34, 47, 43, 52, 32, 32, 27, 30, 43];

// FunÃ§Ã£o para aumentar o valor
function aumentarValor() {
    // Se ainda houver valores no array
    if (valoresDesejados.length > 0) {
        // Retira o prÃ³ximo valor do array
        const valorIncremento = valoresDesejados.shift();

        // Adiciona o valor ao total
        valor += valorIncremento;

        // Atualiza e verifica o valor
        atualizarValor();
        verificarValor();
    }
}  





function mostrarPagina(pagina) {
  inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
  saqueDiv.style.display = pagina === 'saque' ? 'block' : 'none';
  loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
  bonusDiv.style.display = pagina === 'bonus' ? 'block' : 'none';
}

function trocarDiv(esconderId, mostrarId) {
  document.getElementById(esconderId).style.display = 'none';
  document.getElementById(mostrarId).style.display = 'block';
}

// Atualizar o valor exibido inicialmente
atualizarValor();




//--------------------------------- Ad 1 ---------------------------------


function showPopupB1() {
    document.getElementById('B1').disabled = true;
    document.getElementById('popupB1').style.display = 'block';
}

function closePopupB1() {
    document.getElementById('popupB1').style.display = 'none';
    document.getElementById('B1').disabled = true;
}   

// Carregando B1
    function showLoadingB1() {
        var button = document.getElementById("B1");
            showPopupB1();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB1();
                aumentarValor();
                trocarDiv('ad1', 'ad2');
            }, 4000); // 3 segundos
        }


//--------------------------------- Ad 2 ---------------------------------


function showPopupB2() {
    document.getElementById('popupB2').style.display = 'block';
    document.getElementById('B2').disabled = true;
}

function closePopupB2() {
    document.getElementById('popupB2').style.display = 'none';
    document.getElementById('B2').disabled = true;
}   

// Carregando B2
    function showLoadingB2() {
        var button = document.getElementById("B2");
            showPopupB2();
            playAudio();
            // Simulando um atraso de 3 segundos para o showPopup2()
            setTimeout(function () {
                closePopupB2();
                aumentarValor();
                trocarDiv('ad2', 'ad3');
            }, 4000); // 3 segundos
        }

    
//--------------------------------- Ad 3 ---------------------------------
async function hashURL(url) {
    const encoder = new TextEncoder();
    const data = encoder.encode(url);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
    // Converte o hash para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    return hashHex;
  }
  
  // Uso
  hashURL('avaliepremiad.online/cinemark').then(hash => {
    console.log('URL codificada:', hash);
  });

function showPopupB3() {
    document.getElementById('popupB3').style.display = 'block';
    document.getElementById('B3').disabled = true;
}

function closePopupB3() {
    document.getElementById('popupB3').style.display = 'none';
    document.getElementById('B3').disabled = true;
}   


    function showLoadingB3() {
        var button = document.getElementById("B3");
            showPopupB3();
            playAudio();
            setTimeout(function () {
                closePopupB3();
                aumentarValor();
                trocarDiv('ad3', 'ad4');
            }, 4000); 
        }

function redirect(){
    window.location.href = "https://go.tribopay.com/nxqvv"// URL para onde redirecionar;
}
//--------------------------------- Ad 4 ---------------------------------


function showPopupB4() {
    document.getElementById('popupB4').style.display = 'block';
    document.getElementById('B4').disabled = true;
}

function closePopupB4() {
    document.getElementById('popupB4').style.display = 'none';
    document.getElementById('B4').disabled = true;
}   


    function showLoadingB4() {
        var button = document.getElementById("B4");
            showPopupB4();
            playAudio();
            setTimeout(function () {
                closePopupB4();
                aumentarValor();
                trocarDiv('ad4', 'ad5');
            }, 4000); 
        }


//--------------------------------- Ad 5 ---------------------------------


function showPopupB5() {
    document.getElementById('popupB5').style.display = 'block';
    document.getElementById('B5').disabled = true;
}

function closePopupB5() {
    document.getElementById('popupB5').style.display = 'none';
    document.getElementById('B5').disabled = true;
}   


    function showLoadingB5() {
        var button = document.getElementById("B5");
            showPopupB5();
            playAudio();
            setTimeout(function () {
                closePopupB5();
                aumentarValor();
                trocarDiv('ad5', 'ad6');
            }, 4000);
        }

    
//--------------------------------- Ad 6 ---------------------------------


function showPopupB6() {
    document.getElementById('popupB6').style.display = 'block';
    document.getElementById('B6').disabled = true;
}

function closePopupB6() {
    document.getElementById('popupB6').style.display = 'none';
    document.getElementById('B6').disabled = true;
}   


    function showLoadingB6() {
        var button = document.getElementById("B6");
            showPopupB6();
            playAudio();
            setTimeout(function () {
                closePopupB6();
                aumentarValor();
                trocarDiv('ad6', 'ad7');
            }, 4000);
        }

//--------------------------------- Ad 7 ---------------------------------


function showPopupB7() {
    document.getElementById('popupB7').style.display = 'block';
    document.getElementById('B7').disabled = true;
}

function closePopupB7() {
    document.getElementById('popupB7').style.display = 'none';
    document.getElementById('B7').disabled = true;
}   


    function showLoadingB7() {
        var button = document.getElementById("B7");
            showPopupB7();
            playAudio();
            setTimeout(function () {
                closePopupB7();
                aumentarValor();
                trocarDiv('ad7', 'ad8');
            }, 4000);
        }


//--------------------------------- Ad 8 ---------------------------------




//--------------------------------- Ad 9 ---------------------------------

function showLoadingB9() {
    var button = document.getElementById("B9");
        document.getElementById('popupB9').style.display = 'block';
        playAudio();
        setTimeout(function () {
            document.getElementById('popupB9').style.display = 'none';
            aumentarValor();
            aumentarValor();
            trocarDiv('ad9', 'ad10');
        }, 4000);
    }



//--------------------------------- Ad 10 ---------------------------------


    function showLoadingB10() {
        var button = document.getElementById("B10");
            document.getElementById('popupB10').style.display = 'block';
            playAudio();
            setTimeout(function () {
                document.getElementById('popupB10').style.display = 'none';
                aumentarValor();
                trocarDiv('ad10', 'ad11');
            }, 4000);
        }


//---------------------------- BotÃ£o chave PIX ---------------------------
 
 
let activeButton = null;

function toggleButton(buttonNumber) {
  const buttons = document.querySelectorAll('.square-button');

  if (activeButton !== null) {
   buttons[activeButton - 1].classList.remove('active');
  }

  if (activeButton === buttonNumber) {
    activeButton = null;
  } else {
    buttons[buttonNumber - 1].classList.add('active');
    activeButton = buttonNumber;
  }
} 
 
 
    
    
    
    
    
    
    

// Popup SAQUE

function showPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}  

// Popup LIMITE DIÃRIO

function showPopupL() {
  document.getElementById('popupL').style.display = 'block';
}

function closePopupL() {
  document.getElementById('popupL').style.display = 'none';
}  



// POPUP Limite diÃ¡rio quando bate X valor
function verificarValor() {
    if (valor >= 470 && valor < 475) {
        // Popup para valor >= 1362.60 e < 2725.20
        showPopupL();
    } else if (valor >= 940 && valor < 950) {
        // Popup para valor >= 2725.20 e < 4087.8
        showPopupL();
    } else if (valor >= 1400) {
        // Popup para valor >= 4087.8
        showPopupL();
    }
    
}




function fecharPopupEAgendarReaparecimento() {
    var popupButtonContainer = document.querySelector(".popup-buttonL-container");
    popupButtonContainer.style.display = "none"; // Oculta o botÃ£o

    // Define um temporizador para mostrar o botÃ£o apÃ³s 10 segundos
    setTimeout(function() {
        popupButtonContainer.style.display = "block";
    }, 86400000); // 24 horas

    // Aqui vocÃª tambÃ©m deve adicionar a funÃ§Ã£o para fechar o popup
    closePopupL();
}

// Chama a funÃ§Ã£o para mostrar o botÃ£o apÃ³s 10 segundos (10000 milissegundos)
setTimeout(function() {
    var botaoContainer = document.querySelector(".popup-buttonL-container");
    botaoContainer.style.display = "block";
}, 86400000); // 24 horas


// Script botÃ£o login
function showLoading() {
  var button = document.getElementById("prosseguir-button");
  button.disabled = true; // Desabilitar o botÃ£o enquanto a animaÃ§Ã£o ocorre

  button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

  // Simulando um atraso de 3 segundos para a animaÃ§Ã£o
  setTimeout(function() {
    // Redirecionar apÃ³s o atraso
    mostrarPagina('inicio');
  }, 2000); // 2 segundos
}




function formatarValor(input) {
  // Remove todos os caracteres nÃ£o numÃ©ricos
  var valor = input.value.replace(/[^0-9]/g, '');
  
  // Divide o valor em parte inteira e decimal
  var parteInteira = valor.slice(0, -2);
  var centavos = valor.slice(-2);
  
  // Reconstroi o valor formatado
  input.value = parteInteira + '.' + centavos;
}

function verificarCampos() {
    var email = document.getElementById("email").value;
    var emailValido = /\S+@\S+\.\S+/;

    if (email === "") {
        alert("Insira seu e-mail para logar!");
    } else if (!emailValido.test(email)) {
        alert("Insira um e-mail vÃ¡lido!");
    } else {
        // Se o campo estiver preenchido e for um e-mail vÃ¡lido, redireciona para a prÃ³xima pÃ¡gina
        showLoading();
    }
}


function showPopupInicio() {
    document.getElementById('popupinicio').style.display = 'block';
  }

function closePopupInicio() {
    document.getElementById('popupinicio').style.display = 'none';
}


function in1() {
    closePopupInicio();
    showPopupInicio2();

        // Agendar a exibiÃ§Ã£o do prÃ³ximo apÃ³s 5 segundos
        setTimeout(function() {
            closePopupInicio2();
            showPopupInicio3();
        }, 10000);
}    









function showPopupVideo() {
    document.getElementById('popupvideo').style.display = 'block';
  }

function closePopupVideo() {
    document.getElementById('popupvideo').style.display = 'none';
}

function video() {
    closePopup();
    showPopupVideo();
}   




      
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle("active");
  
    const allQuestions = document.querySelectorAll(".question");
    allQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== question) {
        otherQuestion.nextElementSibling.classList.remove("active");
      }
    });
  }
  

  function playAudio() {
    var audio = new Audio("https://www.avaliepremiad.online/media/dinheiro.mp3");
    console.log(audio);
    audio.play().then(() => {
        console.log("Áudio tocando");
    }).catch(error => {
        console.log("Erro ao tentar tocar o áudio: ", error);
    });
}

function showPopupB8() {
    document.getElementById('popupB8').style.display = 'block';
    document.getElementById('meuBotao').disabled = true;
}

function closePopupB8() {
    document.getElementById('popupB8').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao').disabled = true;
}  

function showPopupB9() {
    document.getElementById('popupB9').style.display = 'block';
    document.getElementById('meuBotao2').disabled = true;
}

function closePopupB9() {
    document.getElementById('popupB9').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao2').disabled = true;
}  

function showPopupB10() {
    document.getElementById('popupB10').style.display = 'block';
    document.getElementById('meuBotao3').disabled = true;
}

function closePopupB10() {
    document.getElementById('popupB10').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao3').disabled = true;
}  

function showPopupB11() {
    document.getElementById('popupB11').style.display = 'block';
    document.getElementById('meuBotao4').disabled = true;
}

function closePopupB11() {
    document.getElementById('popupB11').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao4').disabled = true;
}  

function showPopupB12() {
    document.getElementById('popupB12').style.display = 'block';
    document.getElementById('meuBotao5').disabled = true;
}

function closePopupB12() {
    document.getElementById('popupB12').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao5').disabled = true;
}  

function showPopupB13() {
    document.getElementById('popupB13').style.display = 'block';
    document.getElementById('meuBotao6').disabled = true;
}

function closePopupB13() {
    document.getElementById('popupB13').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao6').disabled = true;
}  

function showPopupB14() {
    document.getElementById('popupB14').style.display = 'block';
    document.getElementById('meuBotao7').disabled = true;
}

function closePopupB14() {
    document.getElementById('popupB14').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao7').disabled = true;
}  

function showPopupB15() {
    document.getElementById('popupB15').style.display = 'block';
    document.getElementById('meuBotao8').disabled = true;
}

function closePopupB15() {
    document.getElementById('popupB15').style.display = 'none'; // Corrigido para 'popupB8'
    document.getElementById('meuBotao8').disabled = true;
}  


function showLoadingB8() {
    var button = document.getElementById("meuBotao");
    playAudio();
    showPopupB8();
    
    
    setTimeout(function() {
        closePopupB8(); 
        trocarDiv("pag1", "pag2");
        window.scrollTo(0, 10);
    }, 2000);
   
}


function showLoadingB9() {
    var button = document.getElementById("meuBotao2");
    playAudio();
    showPopupB9();
    
    
    setTimeout(function() {
        closePopupB9(); 
        trocarDiv("pag2", "pag3");
        window.scrollTo(0, 10);
    }, 2000);
}

function showLoadingB10() {
    var button = document.getElementById("meuBotao3");
    playAudio();
    showPopupB10();
    
    
    setTimeout(function() {
        closePopupB10(); 
        trocarDiv("pag3", "pag4");
        window.scrollTo(0, 10);
    }, 2000);
}
  
function showLoadingB11() {
    var button = document.getElementById("meuBotao4");
    playAudio();
    showPopupB11();
    
    
    setTimeout(function() {
        closePopupB11(); 
        trocarDiv("pag4", "pag5");
        window.scrollTo(0, 10);
    }, 2000);
}

function showLoadingB12() {
    var button = document.getElementById("meuBotao5");
    playAudio();
    showPopupB12();
    
    
    setTimeout(function() {
        closePopupB12(); 
        trocarDiv("pag5", "pag6");
        window.scrollTo(0, 10);
    }, 2000);
}

function showLoadingB13() {
    var button = document.getElementById("meuBotao6");
    playAudio();
    showPopupB13();
    
    
    setTimeout(function() {
        closePopupB13(); 
        trocarDiv("pag6", "pag7");
        window.scrollTo(0, 10);
    }, 2000);
    
}

function showLoadingB14() {
    var button = document.getElementById("meuBotao7");
    playAudio();
    showPopupB14();
    
    
    setTimeout(function() {
        closePopupB14(); 
        trocarDiv("pag7", "pag8");
        window.scrollTo(0, 10);
    }, 2000);
}

function showLoadingB15() {
    var button = document.getElementById("meuBotao8");
    playAudio();
    showPopupB15();
    
    
    setTimeout(function() {
        closePopupB15(); 
        trocarDiv("pag8", "pag9");
        window.scrollTo(0, 10);
    }, 2000);
}
  
  // ----------------- TESTE ANUNCIO 1 -----------------

  document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.rating-container');
  
    containers.forEach(function (container) {
      const buttons = container.querySelectorAll('.rating-button');
  
      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          // Remove a classe 'active' apenas do conjunto de botÃµes dentro do mesmo container
          buttons.forEach(function (btn) {
            btn.classList.remove('active');
          });
  
          // Adiciona a classe 'active' apenas ao botÃ£o clicado
          button.classList.add('active');
        });
      });
    });
  });
  
  

  // function toggleCard(clickedElement) {
//     const allCards = document.querySelectorAll('.card__grade');
//     allCards.forEach(card => {
//         card.classList.remove('active');
//     });

//     clickedElement.classList.add('active');
// }

function toggleCard(clickedElement) {
    const allCards = document.querySelectorAll('.card__grade');
    
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Adicione um switch para lidar com diferentes ações
    switch (clickedElement.id) {
        case 'card__grade1':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade2':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade3':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-regular fa-star', '#7e7e7e');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade4':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-regular fa-star', '#7e7e7e');
            break;
        case 'card__grade5':
            updateStars('star1', 'fa-solid fa-star active', '#ffd700');
            updateStars('star2', 'fa-solid fa-star active', '#ffd700');
            updateStars('star3', 'fa-solid fa-star active', '#ffd700');
            updateStars('star4', 'fa-solid fa-star active', '#ffd700');
            updateStars('star5', 'fa-solid fa-star active', '#ffd700');
            break;
        // Adicione mais casos conforme necessário
        default:
            // Ação padrão, se nenhum caso corresponder
            console.log("Nenhum caso correspondente");
    }
}

function updateStars(elementId, className, color) {
    const starElement = document.getElementById(elementId);
    if (starElement) {
        starElement.className = className;
        starElement.style.color = color; // Adiciona a cor amarela
    } else {
        console.error("Elemento não encontrado com ID: " + elementId);
    }
}

// Adicione um evento de clique aos elementos que deseja controlar
const cards = document.querySelectorAll('.card__grade');

cards.forEach(card => {
    card.addEventListener('click', function() {
        toggleCard(this); // "this" se refere ao elemento clicado
    });
});