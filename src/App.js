import React, { Component } from 'react';


let defaultStyle = {
  color: 'darkgray'
}

let fakeServerData = {
    user: {
      name: 'Ozzie',
      playlists: [
        {
          name: 'My favorites',
          songs: [{name: 'Beat It', duration: 1345}, {name: 'Cannelloni Makaroni', duration: 1236}, {name:'Rosa helikopter', duration: 1345}]
        },
        {
          name: 'Discover Weekly',
          songs: [{name: 'Le Song', duration: 1345}, {name: 'The song', duration: 1345}, {name: 'Sangen', duration: 1345}]
        },
        {
          name: 'Another playlist',
          songs: [{name: '1999',duration: 1345}, {name:'Wanna Be Startin Something', duration: 1345}, {name: 'Girls', duration: 1345}]
        },
        {
          name: 'Top Songs',
          songs: [{name: 'Space Oddity',duration: 1345}, {name:'American Girl', duration: 1345}, {name:'Twist and Shout',duration: 1345}]
        },
      ]
    }
};

class PlayListCounter extends Component {
  render () {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists && this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render () {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render () {
    return (
      <div style={{defaultStyle}}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
    
  }

  render() {    
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
          <h1 style={{...defaultStyle, 'font-size' : '54px'}}>
            {this.state.serverData.user.name}'s playlist
          </h1>          
            <PlayListCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
          
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        </div> : <h1 style={defaultStyle}>'Loading...'</h1>
        }
      </div>
    );
  }
}

export default App;
