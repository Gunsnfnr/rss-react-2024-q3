import React from 'react';
import Results from '../Results/Results';
import EmptyResult from '../EmptyResult/EmptyResult';
import './Search.css';
import ErrorButton from '../ErrorButton/ErrorButton';

export interface SearchPeopleResults {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

interface ReturnedData {
  results: SearchPeopleResults[];
}

export default class Search extends React.Component {
  state: {
    userInput: string;
    searchResults: SearchPeopleResults[] | null;
    loading: boolean;
  } = {
    userInput: '',
    searchResults: null,
    loading: true,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  handleClick: () => Promise<void> = async () => {
    this.setState({
      loading: true,
      userInput: this.state.userInput.trim(),
    });
    localStorage.setItem('gunsnfnr.swQuery', this.state.userInput.trim());
    await this.sendQuery(this.state.userInput.trim());
  };

  sendQuery: (searchString: string) => Promise<void> = async (searchString) => {
    await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
      .then((resp: Response) => {
        if (resp.status === 200) return resp.json();
      })
      .then((data: ReturnedData) => {
        this.setState({
          loading: false,
        });
        if (data.results.length > 0) {
          this.setState({
            searchResults: data.results,
          });
        } else {
          this.setState({
            searchResults: [],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render(): React.ReactNode {
    return (
      <>
        <div className="search">
          <input className="input-field" type="text" value={this.state.userInput} onChange={this.handleChange} />
          <button
            type="button"
            onClick={() => {
              const handler = async () => {
                await this.handleClick();
              };
              handler().catch(() => {});
            }}
          >
            Search
          </button>
          <ErrorButton />
        </div>
        <section className="results">
          {this.state.loading && <div className="loading">Loading...</div>}
          {!this.state.loading &&
            Array.isArray(this.state.searchResults) &&
            (this.state.searchResults.length > 0 ? (
              <Results searchResults={this.state.searchResults} />
            ) : (
              <EmptyResult searchQuery={this.state.userInput} />
            ))}
        </section>
      </>
    );
  }

  async componentDidMount() {
    const lastSearch: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (lastSearch) {
      await this.sendQuery(lastSearch);
      this.setState({
        userInput: lastSearch,
      });
    } else await this.sendQuery('');
  }
}
