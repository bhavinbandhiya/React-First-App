import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth",
    };
    console.log("Hey I'm fromConstructor");
  }

  componentDidMount(){
    this.setState({planet: "Jupiter"});
  }

// static getDerivedFromProps(prop,state){
//   console.log("Hey I'm from drived state from props");
//   return {planet:"jupiter"};
// }

shouldComponentUpdate(nextProp, nextState){
  console.log({
    nextProp,
    nextState,
  });
  return true;
}

getSnapshotBeforeUpdate(prevProp, prevState){
  console.log({prevProp, prevState});
  return true;
}

componentDidUpdate(){
  console.log(this.state);
}

  render() {
    console.log("Hey I'm from render()");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}

export default User;
