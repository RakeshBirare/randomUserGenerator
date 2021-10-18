import React from "react";
import { Card,CardBody, CardTitle, CardText } from "reactstrap";
import{FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa";


const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" 
                className="rounded-circle img-thumbnail border-danger" 
                src={details.picture?.large} />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pe-2">{details.name?.title}</span>
                        <span className="pe-2">{details.name?.first}</span>
                        <span className="pe-2">{details.name?.last}</span>
                   
                    </h1>
                </CardTitle>
                <CardText>
                    <h5>{details.email}</h5>
                    <h5 className="ms-2"><span><FaPhone /></span><span className="ps-2">{details.phone}</span></h5>
                    <p><b>Is From : {details.location?.city}</b></p>
                    
                    
                </CardText>
            </CardBody>
        </Card> 
    )
}

export default MyCard;