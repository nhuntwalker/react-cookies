import React from 'react';
import ReactDOM from 'react-dom';
import Table from './app';


var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeIds = ['first-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];
var minCusts = [23, 3, 11, 20, 2];
var maxCusts = [65, 24, 38, 38, 16];
var avgCookies = [6.3, 1.2, 3.7, 2.3, 4.6];

let props = {
    names: storeNames,
    ids: storeIds,
    minCusts: minCusts,
    maxCusts: maxCusts,
    avgCookies: avgCookies
}

ReactDOM.render(<Table {...props} />, document.body);