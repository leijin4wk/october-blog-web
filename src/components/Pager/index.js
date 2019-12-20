import React, {Component} from 'react';
import injectStyle from 'react-jss';
import PropTypes from 'prop-types';
import nextImage from "../../assets/next.png"
import previousImage from "../../assets/previous.png"

class Pager extends Component {
    onClickPage = (value) => {
        this.props.onChangePage(value)
    };
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.pager}>
                <div className={classes.pagerItem} onClick={() => {
                    this.onClickPage(0)
                }}>
                    <img src={previousImage} width={60}></img></div>
                <div className={classes.pagerItem} onClick={() => {
                    this.onClickPage(1)
                }}><img src={nextImage} width={60}></img></div>
            </div>
        );
    }
}

Pager.propTypes = {
    pageNum: PropTypes.number,
    pageTotal: PropTypes.number,
    onChangePage: PropTypes.func
};
const styles = {
    pager: {
        display: "flex",
        justifyContent: "space-between",
        margin: [10, 20]
    },
    pagerItem: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#F5F5F5",
        '&:hover': {
            cursor: "pointer",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#a3a3a3"
        }
    }
};
Pager.propTypes = {
    item: PropTypes.object
};
export default injectStyle(styles)(Pager)