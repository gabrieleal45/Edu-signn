
function buscar() {
  const termo = document.getElementById('busca').value.toLowerCase();
  const resultados = document.getElementById('resultados');
  resultados.innerHTML = '';

  const dados = [
    { nome: 'Dom Casmurro', link: 'public/pdf/dom-casmurro.pdf' },
    { nome: 'O Príncipe', link: 'public/pdf/o-principe.pdf' },
    { nome: 'Gramática de Português', link: 'public/pdf/gramatica-portugues.pdf' }
  ];

  const filtrados = dados.filter(d => d.nome.toLowerCase().includes(termo));
  if (filtrados.length === 0) {
    resultados.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  } else {
    filtrados.forEach(d => {
      const item = document.createElement('p');
      item.innerHTML = `<a href="${d.link}" target="_blank">${d.nome}</a>`;
      resultados.appendChild(item);
    });
  }
}
