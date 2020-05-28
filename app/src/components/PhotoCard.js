import React from "react";
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

const PhotoCard = props => {   
  const imageURL = props.pod.url;
  return (
    <div>
      <Card>
      {imageURL && <CardImg top width="100%" src={props.pod.url} alt="Card image cap" /> }
        <CardBody>
          <CardTitle>{props.pod.title}</CardTitle>
          <CardText>{props.pod.explanation}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default PhotoCard;
