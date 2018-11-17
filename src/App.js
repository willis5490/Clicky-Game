import React,  { Component } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Upperbody from './Upperbody/Upperbody';
import './Body/Body.css';
import CharacterCard from "./CharacterCard/CharacterCard";
import characters from "./character.json";




class App extends Component  {
  state = {
    characters,
    clickedCharacters:[],
    score: 0,
    topScore: 0
    
  };  
  theShuffle = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;

      if (CharacterAlreadyClicked) {
        this.setState({
          characters: this.state.characters.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: [],
          score: 0,
          // topScore: 
        });
        alert("You lose. Play again?");
      }else {
        if (this.state.score >= this.state.topScore){
          this.setState(
            {
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: this.state.clickedCharacters.concat(
                currentCharacter
              ),
              
              score: this.state.score + 1,
              topScore:this.state.topScore +1
            
            },
          
            () => {
              if (this.state.score === 12) {
                alert("Yay! You Win!");
                this.setState({
                  characters: this.state.characters.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedCharacters: [],
                  score: 0,
                  topScore:this.state.topScore
                });
              }
            }
          );

        }else{
          this.setState(
            {
              characters: this.state.characters.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: this.state.clickedCharacters.concat(
                currentCharacter
              ),
              
              score: this.state.score + 1,
            
            },
          
            () => {
              if (this.state.score === 12) {
                alert("Yay! You Win!");
                this.setState({
                  characters: this.state.characters.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedCharacters: [],
                  score: 0
                });
              }
            }
          );
        }
       
      }

  }

  render() {
    return (
      <div>
      <Header
       score={this.state.score}
       topScore={this.state.topScore}
       >
       
      </Header>
      <Upperbody></Upperbody>
      
      <div className='uk-container bodyback'>
      <div className="uk-animation-scale-up">
        <ul className="uk-grid-large uk-child-width-1-2 uk-child-width-1-4@s uk-text-center uk-grid uk-flex-center"  >
        {this.state.characters.map(character => (
          <CharacterCard 
              id={character.id}
              name={character.name}
              image = {character.image}
              theShuffle={this.theShuffle}

          />
        ))}
        </ul>
      </div>
      </div>
      
      <Footer></Footer>
      </div>
    );
  }
 
}
export default App;
