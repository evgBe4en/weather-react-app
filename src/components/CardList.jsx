import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: "acs",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      orderBy: event.target.value,
    });
  }

  render() {
    let sortCitiesList = this.props.citiesList.sort();
    if (this.state.orderBy === "desc") {
      sortCitiesList.reverse();
    }

    return (
      <>
        <select
          className="select styleCard"
          value={this.state.orderBy}
          onChange={this.handleOnChange}
        >
          <option value="acs">By name asc</option>
          <option value="desc">By name desc</option>
        </select>
        <div className="cardList">
          {sortCitiesList.map((city) => (
            <Card key={city} city={city} />
          ))}
        </div>
      </>
    );
  }
}

export default CardList;
