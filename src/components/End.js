import React, { Component } from 'react';
import utils from '../utils/utils';

class End extends Component {

  handleRetry = () => {
    this.props.reset();
  }

  render() {
    return (
      <div className="end" style={{
        display: utils.display(this.props.display)
      }}>
        <div style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10vmin",
          borderRadius: "3vmin"
        }}>
          <h1>Game Over</h1>
          <input placeholder="Enter your name!" ></input>
          <h2>HIGH SCORES</h2>
          <ol style={{
            backgroundColor: "#aaaaaa",
            width: "70%",
            height: "15vh",
            overflowY: "scroll"

          }}>
            <li>Adam 34349</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Adam 34349</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Adam 34349</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
            <li>Lucus 24332</li>
            <li>Kayda 23423</li>
          </ol>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      </div>
    );
  }
}

export default End;