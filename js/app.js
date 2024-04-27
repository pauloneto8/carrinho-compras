let valorTotal = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let totalProduto = quantidade * valorUnitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} R$ ${valorUnitario} - Total: <span class="texto-azul">R$ ${totalProduto}</span>
  </section>`;
    
    valorTotal = valorTotal+totalProduto;
    let valorCarrinho = document.getElementById('valor-total');
    valorCarrinho.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
  valorTotal = 0;
  document.getElementById('valor-total').textContent = 'R$ 0'
  document.getElementById('quantidade').value = 1;
  document.getElementById('lista-produtos').innerHTML = '';
}