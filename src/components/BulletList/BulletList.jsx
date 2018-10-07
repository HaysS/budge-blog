import React from "react";
import "./BulletList.css";

class BulletList extends React.Component {
  constructor(props) {
    super(props);
  }

  createListElements(bullets) {
    const listElements = bullets.map((bulletPoint) => {
      const boldText = bulletPoint[0]
      const regText = bulletPoint[1]

      return(
        <li>
          <strong>{boldText}</strong>
          <p>{regText}</p>
        </li>
      )
    })

    return listElements
  }

  render() {
    return(
      <ul style={{textAlign: 'left'}}>
        {this.createListElements(this.props.bullets)}
      </ul>
    )
  }
}

export default BulletList;