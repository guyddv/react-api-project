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
    const url = `https://fakerapi.it/api/v1/persons?_quantity=5`;

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
      <NewSingleData key={item.id} item={item} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Random Name</h2>
        <ol>{this.renderData()}</ol>
      </div>
    );
  }
}

export default RandomData;
