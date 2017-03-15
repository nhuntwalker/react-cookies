import Store from './app';

var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeIds = ['first-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];
var minCusts = [23, 3, 11, 20, 2];
var maxCusts = [65, 24, 38, 38, 16];
var avgCookies = [6.3, 1.2, 3.7, 2.3, 4.6];

for (var i = 0; i < 5; i++) {
  var store = new Store(storeNames[i], storeIds[i], minCusts[i], maxCusts[i], avgCookies[i]);
  store.renderHTML();
}
