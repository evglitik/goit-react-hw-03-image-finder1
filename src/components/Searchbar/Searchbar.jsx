const { Component } = require('react');

export class Searchbar extends Component {
  state = {
    imagesRequest: '',
  };

    
    
    
  render() {
    return (
      <header >
        <form >
          <button type="submit" >
            <span >Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
