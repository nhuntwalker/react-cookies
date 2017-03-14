'use strict';

const HOURS = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var storeNames = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var storeIds = ['first-pike', 'sea-tac', 'sea-center', 'cap-hill', 'alki'];
var minCusts = [23, 3, 11, 20, 2];
var maxCusts = [65, 24, 38, 38, 16];
var avgCookies = [6.3, 1.2, 3.7, 2.3, 4.6];

var stores = [];

function Store(name, id, minCust, maxCust, avgCookies) {
  this.name = name;
  this.id = id;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  var sales;
  var calcRandomCust = () => {
    return Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
  };
  var calcCookieSales = () => {
    sales = [];
    this.total = 0;
    for (var i = 0; i < HOURS.length; i ++) {
      hourlySale = Math.floor(calcRandomCust() * this.avgCookies)
      sales.push(hourlySale);
      this.total += hourlySale;
    }
  };
  this.renderHTML = () => {
    calcCookieSales();
    var newDiv = document.createElement('div');
    newDiv.id = this.id;
    document.body.appendChild(newDiv);
    React.render(<NewSection sales={ sales } title={ this.name } total={ this.total }/>, newDiv); 
  };
  stores.push(this);
};


var NewSection = React.createClass({
  render() {
    return (
    <section id={ this.props.id }>
      <h2>{ this.props.title }</h2>
      <NewUl sales={ this.props.sales } total={ this.props.total }/>
    </section>);
  }
});

var NewUl = React.createClass({
  render() {
    var listItems = [];
    for (var i = 0; i < HOURS.length; i++) {
      listItems.push(<ListItem data={ HOURS[i] } sale={ this.props.sales[i] } key={ HOURS[i] }/>);
    };
    listItems.push(<ListItem data='Total' sale={ this.props.total } key='total'/>)
    return (<ul>
      { listItems }
    </ul>);
  }
});

var ListItem = React.createClass({
  render() {
    return (<li><strong>{ this.props.data }</strong>: { this.props.sale } cookies</li>);
  }
});


for (var i = 0; i < 5; i++) {
  var store = new Store(storeNames[i], storeIds[i], minCusts[i], maxCusts[i], avgCookies[i]);
  store.renderHTML();
}
