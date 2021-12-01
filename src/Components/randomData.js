import React, { Component } from "react";
import NewSingleData from "./newSingleData";

class RandomData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randdata: [],
    };
  }

  componentDidMount() {
    const url = `https://fakerapi.it/api/v1/persons`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          randdata: data.data,
        });
      })
      .catch((error) => console.log(error));
  }

  renderData() {
    return this.state.randdata.map((item) => (
      <NewSingleData key={item.email} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <ol>{this.renderData()}</ol>
      </div>
    );
  }
}

export default RandomData;
