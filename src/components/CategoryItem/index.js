import React, {Component} from 'react';
import injectStyle from 'react-jss'
import PropTypes from 'prop-types';

class CategoryItem extends Component {
    render() {
        let {classes,item} = this.props;
        return (
            <div className={classes.itemStyle} onClick={()=>{
                this.props.onClickItem(item.id)
            }}>
                {item.name}
            </div>
        );
    }
}

CategoryItem.propTypes = {
    item: PropTypes.object,
    onClickItem:PropTypes.func
};
const styles = {
    itemStyle: {
        lineHeight: "24px",
        margin: [10, 10],
        padding: [0, 10],
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 999,
        color: "#000000",
        textDecoration: "none",
        '&:hover': {
            color:"#0052ac",
            cursor:"pointer"
        }
    }
};
export default injectStyle(styles)(CategoryItem)
