import React from 'react';
import ReactDOM from 'react-dom';

const HOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, id, minCust, maxCust, avgCookies) {
  this.name = name;
  this.id = id;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.sales;
  var calcRandomCust = () => {
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  };
  var calcCookieSales = () => {
    this.sales = [];
    this.total = 0;
    for (var i = 0; i < HOURS.length; i ++) {
      let hourlySale = Math.floor(calcRandomCust() * this.avgCookies)
      this.sales.push(hourlySale);
      this.total += hourlySale;
    }
  };
  // this.renderHTML = () => {
  //   calcCookieSales();
  //   var newDiv = document.createElement('div');
  //   newDiv.id = this.id;
  //   document.body.appendChild(newDiv);
  //   ReactDOM.render(<NewSection sales={ sales } title={ this.name } total={ this.total }/>, newDiv); 
  // };
  this.createTableRow = () => {
    calcCookieSales();
    let tds = [<td>{ this.name }</td>];
    this.sales.map((sale) => {
      tds.push(<td>{ sale }</td>);
    });
    tds.push(<td>{ this.total }</td>)
    return (
      <tr>{ tds }</tr>
    );
  };
};

var HeadRow = React.createClass({
  render() {
    let rowData = [<th>Location</th>];
    HOURS.map(( hour ) => { rowData.push(<th>{ hour }</th>) });
    rowData.push(<th>Totals</th>);
    return (<tr>{ rowData }</tr>);
  }
});

var TotalsRow = React.createClass({
  render() {
    let rowData = [<th>Hourly Totals</th>];
    this.props.totals.map((amt) => { rowData.push(<td>{ amt }</td>) });
    return (<tr>{ rowData }</tr>);
  }
});

var Table = React.createClass({
  render(){
    let storeRows = [];
    let totals = HOURS.map((hour) => { return 0 });
    totals.push(0)
    for (var i = 0; i < this.props.names.length; i++) {
      let store = new Store(this.props.names[i],
                            this.props.ids[i],
                            this.props.minCusts[i],
                            this.props.maxCusts[i],
                            this.props.avgCookies[i]);
      storeRows.push(store.createTableRow());
      for (var j = 0; j < HOURS.length; j++) {
        totals[j] += store.sales[j];
      }
      totals[j] += store.total;
    }
    return (
      <table id='data-table'>
        <HeadRow />
        { storeRows }
        <TotalsRow totals={ totals } />
      </table>
    );
  }
});

export default Table;
