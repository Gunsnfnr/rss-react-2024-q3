import React from 'react';
import './EmptyResult.css';

interface Props {
  searchQuery: string;
}

export default class EmptyResult extends React.Component<Props> {
  getLastSearch(): string {
    const lastSearch: string | null = localStorage.getItem('gunsnfnr.swQuery');
    if (lastSearch) {
      return lastSearch;
    }
    return '';
  }

  render() {
    return (
      <div className="empty">
        <div>
          Nothing was found for the search term &quot;
          {this.props.searchQuery ? this.props.searchQuery : this.getLastSearch()}&quot;.
        </div>
        <div>Don&apos;t forget, we are looking for Star Wars characters o_0</div>
      </div>
    );
  }
}
