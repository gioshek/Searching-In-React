import React from "react";
import Search from "./components/Search";
import ScreenSizes from "./components/ScreenSizes";

const libraries = [
  { name: 'Backbone.js', url: 'http://backbonejs.ru/' },
  { name: 'AngularJS', url: 'https://angularjs.org/' },
  { name: 'jQuery', url: 'http://jquery.com/' },
  { name: 'Prototype', url: 'http://www.prototypejs.org/' },
  { name: 'React', url: 'http://facebook.github.io/react/' },
  { name: 'Ember', url: 'http://emberjs.com/' },
  { name: 'Knockout.js', url: 'http://knockoutjs.com/' },
  { name: 'Dojo', url: 'http://dojotoolkit.org/' },
  { name: 'Mootools', url: 'http://mootools.net/' },
  { name: 'Underscore', url: 'http://underscorejs.ru/' },
  { name: 'Lodash', url: 'http://lodash.com/' },
  { name: 'Moment', url: 'http://momentjs.com/' },
  { name: 'Express', url: 'http://expressjs.com/' },
  { name: 'Koa', url: 'http://koajs.com/' },
]; 

class App extends React.Component {
  render() {
    return(<div>
      <ScreenSizes />
      <main>
       <Search items={libraries} />
      </main>
    </div>)
  }
}

export default App;