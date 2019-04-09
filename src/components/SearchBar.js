import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Tên người triệu hồi</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
