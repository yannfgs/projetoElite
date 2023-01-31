var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Elite Aço - Home Page' });
});

router.get('/aboutUs', function (req, res) {
  res.render('aboutUs', { title: 'Elite Aço - Sobre nós' });
});

router.get('/assemblyVideos', function (req, res) {
  res.render('assemblyVideos', { title: 'Elite Aço - Vídeos de montagem' });
});

router.get('/categories', function (req, res) {
  res.render('categories', { title: 'Elite Aço - Categorias' });
});

router.get('/checkout', function (req, res) {
  res.render('checkout', { title: 'Elite Aço - Checkout' });
});

router.get('/error', function (req, res) {
  res.render('error', { title: 'Erro' });
});

router.get('/extendedWarranty', function (req, res) {
  res.render('extendedWarranty', { title: 'Elite Aço - Garantia Estendida' });
});

router.get('/favorites', function (req, res) {
  res.render('favorites', { title: 'Elite Aço - Favoritos' });
});

router.get('/helpCenter', function (req, res) {
  res.render('helpCenter', { title: 'Elite Aço - Central de Ajuda' });
});

router.get('/myAccount', function (req, res) {
  res.render('myAccount', { title: 'Elite Aço - Minha Conta' });
});

router.get('/myOrders', function (req, res) {
  res.render('myOrders', { title: 'Elite Aço - Meus Pedidos' });
});

router.get('/privacyPolicies', function (req, res) {
  res.render('privacyPolicies', { title: 'Elite Aço - Políticas de Privacidade' });
});

router.get('/product', function (req, res) {
  res.render('product', { title: 'Elite Aço - Produto' });
});

router.get('/registrationData', function (req, res) {
  res.render('registrationData', { title: 'Elite Aço - Dados de Registro' });
});

router.get('/shoppingCart', function (req, res) {
  res.render('shoppingCart', { title: 'Elite Aço - Carrinho de Compras' });
});

router.get('/store', function (req, res) {
  res.render('store', { title: 'Elite Aço - Loja' });
});

router.get('/technicalSupport', function (req, res) {
  res.render('technicalSupport', { title: 'Elite Aço - Suporte Técnico' });
});



module.exports = router;


