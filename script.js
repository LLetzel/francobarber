function abrirPagamento(servico, preco, qr) {
  document.getElementById('servico').innerText = servico;
  document.getElementById('preco').innerText = preco;
  document.getElementById('qrcode').src = qr;
  document.getElementById('modal').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}