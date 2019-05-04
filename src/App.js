import React, { Component } from "react";
import FriendCont from "./components/FriendCont";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Box from "./components/ImgCont";
import Deck from "./components/Chars";
import friendList from "./friends.json";

class App extends Component {

  
  state = {
    friendList,
    selected: [],
    score: 0,
    topScore: 0,
    status: ''
  };

 
  componentDidMount() {

    this.setState({ friendList: this.shuffle(friendList) })
  }

  
  
  selectedFriend = id => {

    
    this.setState({
      selected: this.state.selected.concat(id),
      friendList: this.shuffle(friendList)
    });

    
    const selected = this.state.selected.find(element => { return element === id });

    
    if (!selected) {

      //changes score state
      this.setState({ score: this.state.score + 1 });

      // this sets the topscore if the current score is higher than the prev top score
      this.setState({
        topScore: this.state.score >= this.state.topScore ? this.state.topScore + 1 : this.state.topScore
      });

      // cahnge status based on if the user is correct or not
      this.setState({ status: 'Nice Guess!' })

      console.log("score", this.state.score);

      // this checks if all cards were found
      if (this.state.score === 11) {

        this.setState({ status: 'Very nice, your memory is impresive!' })
      }
    }
    else {

      // handle wrong guesses
      this.setState({
        score: 0,
        selected: [],
        status: 'You allready cliked that one. Try again...'
      });
    
    }
  };

  // Shuffle funct
  shuffle = sourceArray => {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

         var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }
  
  render() {
    return (
      <FriendCont>
        <Header status={this.state.status || "Click an image to begin!"} score={this.state.score} topScore={this.state.topScore} />
        <Nav />
        <Box>
          {this.state.friendList.map(friend => (
            <Deck
              selectedFriend={this.selectedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Box>
      </FriendCont>
    );
  }
}

export default App;
