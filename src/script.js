const names = ["Hamza", "Kerem", "Yasin", "Burak"];
const html = [<h2>Congragulations!</h2>, <h3>React is awesome</h3>];

//import React, { Component } from 'react';

// export default class HelloMessage extends Component {
//   render() {
//     return <div>Hello from Component</div>;
//   }
// }

class HelloMessage extends React.Component {
    render() {
      return (
        <div> <h1>Hello World!</h1>
        <HelloNames namesarr={names}/>
      </div>
        );
    }
  }
<HelloNames namesarr={names} />

function App() {
    return (<div><HelloMessage array={html}/> {html.map((item, index) => {
        return <p key={index}>{item}</p>;
      })} <h2>Hello from App Function</h2></div>
        )
}


class HelloNames extends React.Component {
    render() {
      return (
        <div> <ol>
        {names.map((name, index) => {
          return (
            <li
              key={index}
              className={
                index === 0
                  ? "first": index === 1
                  ? "second" : index === 2
                  ? "third": "second" }
            >
              {name}
            </li>
          );
        })}
      </ol> 
      </div>
      );
    }
  }


ReactDOM.render(
  <div>
    <div>
     
    <App/>
    </div>
    <div>
      
    </div>
  </div>,
  document.getElementById("root")
);
