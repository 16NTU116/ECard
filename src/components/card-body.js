import React, { Component } from 'react';
import Avatar from "../Images/avatar.png";
import CardSkills from './card-skills';
import { connect } from 'react-redux';

class CardBody extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div>
                    <img src={Avatar} style={styles.img} alt="AvatarPhoto" />
                    <h3 style={styles.h3}>{
                        this.props.employees.length > 0 ? this.props.employees[this.props.index].name : ""
                    }</h3>
                </div>
                <p style={styles.p}>{
                    this.props.employees.length > 0 ? this.props.employees[this.props.index].discription : ""
                }</p>
                <CardSkills index={this.props.index} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.SkillReducer.employees,
  });

export default connect(mapStateToProps, null)(CardBody);

const styles = {
    img: {
        borderRadius: "50%",
        height: "140px"
    },
    container : {
        display : "flex",
    },
    h3 : {
        textAlign : "center"
    },
    p : {
        marginTop : "30px",
        marginLeft : "40px"
    }
}