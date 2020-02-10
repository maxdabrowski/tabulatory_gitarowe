import React from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";


class App extends React.Component {

  state = {
    valueInput: "",
    valueSelect: "",
    tabSongs: [],
    onload: 0
  };

  //obsługa zmiany wartości w input type=text
  handleInputChange = e => {
    this.setState({
      valueInput: e.target.value
    });
  };

  //obsługa zmiany warotści w select
  handleSelectChange = e => {
    this.setState({
      valueSelect: e.target.value
    });
  };

  //obsługa kliknięcia przycisku "wyszukaj"
  handleFormSubmit = e => {
    e.preventDefault();
    const ApiRequest = `https://www.songsterr.com/a/ra/songs.json?pattern=${this.state.valueInput}`;
  
    //pobieranie danych 
    fetch(ApiRequest)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("bład wyszukiwania");
      })
      .then(response => response.json())
      .then(data => { 

        //filtrowanie pobranych danych po wartości valueSelect
        let selectedTab =[];
        if(this.state.valueSelect!==""){
        data.forEach(el =>{
            if(el.tabTypes.includes(this.state.valueSelect)){
              selectedTab.push(el)
            }
        })        
        }else{
          selectedTab = data;
        } 
        this.setState({
          tabSongs: selectedTab, 
          valueInput: "",
          onload: 1
        });
      })
      .catch( err => {
        console.log(err)
        this.setState(prevState => ({
          tabSongs: prevState.value
        }));
      });
  };

  render() {
    return (
      <div className="app">
        <Header/>
        <Form
          valueInput={this.state.valueInput}
          changeInput={this.handleInputChange}   
          changeSelect={this.handleSelectChange} 
          submit={this.handleFormSubmit}               
        />
        <Result 
          tabSongs={this.state.tabSongs}
          onload={this.state.onload}
        />
      </div>
    );
  }
}
export default App;
