import React from "react";
import "./BulletList.css";

class BulletList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bullets: this.props.bullets,
    };
  }

  render() {
    const listElements = this.state.bullets.map((bulletPoint) => {
      const boldText = bulletPoint[0]
      const regText = bulletPoint[1]

      return(
        <li>
          <strong>{boldText}</strong>
          <p>{regText}</p>
        </li>
      )
    })

    return(
      <ul style={{textAlign: 'left'}}>
        {listElements}
      </ul>
    )
  }
}

export default BulletList;