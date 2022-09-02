import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'service/api';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    request: 'cat',
    images: [],
    page: 1,
    isLoader: false,
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      try {
        const result = await getImages(this.state.request, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...result],
        }));
      } catch (err) {
        console.log(err);
      } finally {
        console.log('yeach');
      }
    }
  }

  handleFormSubmit = request => {
    this.setState({ request });
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} />
        <Button handleClick={this.handleLoadMore} />
      </>
    );
  }
}
