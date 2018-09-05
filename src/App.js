import React, {Component} from 'react';
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      avatar:'',
      alt:'',
    }
  }
  generate(){
    var alt = this.refs.img.value;
    var random = Math.floor(Math.random() * 4) + 1;
    var url = `https://robohash.org/${alt}?set=set${random}/`;

    this.setState({avatar:url})
  }
  render() {
    return (
      <div className="container">
      <center>
        <h1 className='Head'>Coba Buat Avatar Kamu!</h1>
        <div className="form-group">
          <input ref='img' className="form-control rounded" type="text" 
          placeholder="Ketik nama kamu disini..."/>
          <br/><br/>
          <button onClick={()=>{this.generate()}} 
          className="btn btn-primary">
          Buat Avatar</button>
        </div>
        <div><img src={this.state.avatar} class='img img-thumbnail' alt={this.img}/></div>
        </center>
      </div>
    );
  }
}

export default App;
