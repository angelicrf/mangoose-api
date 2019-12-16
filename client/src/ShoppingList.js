import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {getItem,deleteItem} from "./actions/itemAction";
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItem();
    }
  onDeleteClick = (id) =>{
    this.props.deleteItem(id);
  };

  render(){

        const {items} = this.props.item;
        return(
            <Container>

                <ListGroup>
                    <TransitionGroup className={"shopping-list"}>
                        {items.map(({id,name}) => (
                            <CSSTransition key={id} timeout={500}>
                                <ListGroupItem>
                                    <Button className="remove-btn" color ="danger" size="sm"
                                            onClick={this.onDeleteClick.bind(this,id)}>&times;
                                    </Button>


                                    {name}</ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>


            );
    }
}
ShoppingList.propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
    item: state.item
});
export  default connect (mapStateToProps,{getItem,deleteItem})(ShoppingList);