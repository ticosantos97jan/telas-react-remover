import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Col, Row,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './App.css';


const Article = (props) => {
  return (
    <div className="corpo ">
      <Jumbotron  fluid="col-auto"  className="jum bg-dark col-auto">
      
        <Container fluid="col-auto"   className="cont bg-dark col-auto">
        
        <div>
          <CardBody fluid="col-auto" className="card-body bg-info  col-auto">
        <Form className="form  " type="card" action="/removeproduto" method="POST">
    
      <FormGroup>
        <Label for ="Code"> Insira o Código do produto que dejesa remover:</Label>
        <Input className="input " type="text" name="code" id="code" placeholder="Insira o código"/>
      </FormGroup>
      <Button className="button col-sm">Remover</Button>
    </Form>

     </CardBody>





        </div>
       
        </Container>
        
        </Jumbotron>
  </div>
  );
};

export default Article;