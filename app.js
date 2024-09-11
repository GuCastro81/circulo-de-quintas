// Seleciona a seção onde os resultados serão exibidos
const resultados = document.getElementById('resultadosPesquisa');

// Função para criar um item de resultado
function criarItemResultado(acorde, textoBusca = '') {
  const item = document.createElement('div');
  item.classList.add('item-resultado');

  // Realça o acorde e conexões correspondentes à busca
  const acordeRealcado = destaqueTermo(acorde.acorde, textoBusca);
  const conexoesRealcadas = destaqueTermo(acorde.conexoes, textoBusca);

  // Adiciona o conteúdo HTML do item
  item.innerHTML = `
    <h2>${acordeRealcado}</h2>
    <p class="descricao-meta">
      Conexões<br>
      Acordes: ${conexoesRealcadas}<br>
      Camelot: ${acorde.camelot}<br>
      Open keys: ${acorde.openKeys}
    </p>
    <a href="https://diccionariodeacordes.com/pt" target="_blank">Dicionário de Acordes</a>
  `;

  return item;
}

// Função para destacar o termo pesquisado
function destaqueTermo(texto, termo) {
  if (!termo) return texto;
  const regex = new RegExp(`(${termo})`, 'gi');
  return texto.replace(regex, '<span class="destaque">$1</span>'); // Destaca o termo
}

// Seleciona o campo de entrada e o botão
const acordeInput = document.getElementById('acordeInput');
const buscarBtn = document.getElementById('buscarBtn');

// Adiciona um evento de clique ao botão
buscarBtn.addEventListener('click', () => {
    const acorde = acordeInput.value.trim(); // Remove espaços em branco
    buscarAcordes(acorde);
});

// Adiciona um evento de pressionar tecla ao campo de entrada
acordeInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão do Enter (se houver)
        const acorde = acordeInput.value.trim(); // Remove espaços em branco
        buscarAcordes(acorde);
    }
});

// Função para buscar acordes com base no texto inserido
function buscarAcordes(texto) {
  const textoBusca = texto.toLowerCase();

  const resultadosFiltrados = acordes.filter(acorde => {
    // Verifica se o texto de busca corresponde ao acorde ou se está nas conexões
    return acorde.acorde.toLowerCase() === textoBusca;
  });

  limparResultados();

  if (resultadosFiltrados.length === 0) {
    resultados.innerHTML = '<p class="sem-resultados">Nenhum acorde encontrado.</p>';
  } else {
    resultadosFiltrados.forEach(acorde => {
      const item = criarItemResultado(acorde, textoBusca);
      resultados.appendChild(item);
    });
  }
}// Função para buscar acordes com base no texto inserido
// Função para buscar acordes com base no texto inserido
function buscarAcordes(texto) {
  const textoBusca = texto.toLowerCase();

  const resultadosFiltrados = acordes.filter(acorde => {
      // Verifica se o texto de busca corresponde ao acorde ou se está nas conexões
      return acorde.acorde.toLowerCase() === textoBusca;
  });

  limparResultados();

  if (resultadosFiltrados.length === 0) {
      resultados.innerHTML = '<p class="sem-resultados">Nenhum acorde encontrado.</p>';
      resultados.style.display = 'block'; // Exibe a caixa de resultados mesmo sem itens
  } else {
      resultadosFiltrados.forEach(acorde => {
          const item = criarItemResultado(acorde, textoBusca);
          resultados.appendChild(item);
      });
      resultados.style.display = 'block'; // Exibe a caixa de resultados com itens
  }
}

// Função para limpar os resultados e ocultar a caixa de resultados
function limparResultados() {
  resultados.innerHTML = '';
  resultados.style.display = 'none'; // Oculta a caixa de resultados ao limpar
}
