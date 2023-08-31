
function insert(num) {
    var display = document.getElementById('display');
    display.value += num;
  }
  
  function igual() {
    var display = document.getElementById('display');
    var expressao = display.value;
    if(expressao) {
      display.value = eval(expressao);
    }
  }
  
  function limpar() {
    var display = document.getElementById('display');
    display.value = '';
  }
  
  function voltar() {
    var display = document.getElementById('display');
    var expressao = display.value;
    display.value = expressao.substring(0,expressao.length-1);
  }
  
  function mudasinal() {
    var display = document.getElementById('display');
    display.value = display.value * -1;
  }