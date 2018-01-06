Merriweather|Cutive+Mono|Inconsolata|Monoton|Pacifico|Roboto+Slab

Default
Slab
Novel
Console
Gatsby
Pacifico

font-family: 'Merriweather', serif;
font-family: 'Roboto Slab', serif;
font-family: 'Cutive Mono', monospace;
font-family: 'Inconsolata', monospace;
font-family: 'Monoton', cursive;
font-family: 'Pacifico', cursive;

```js
class Layout extends React.Component {
  constructor(props){
    super(props);

    this.state = {currentKey: ''}
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    this.setState({currentKey: e.keyCode});
    if(e.keyCode === 27) {
      console.log('You just pressed Escape!');
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return(
      <h2>The last key you pressed has the keycode: {this.state.currentKey}</h2>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById('app'));
```
