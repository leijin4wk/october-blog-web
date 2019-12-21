import React, {Component} from 'react';
import injectStyle from 'react-jss'
import banner from "../../assets/banner.jpg"
import PropTypes from "prop-types";
class HomeHeader extends Component {
    render() {
        let {classes,item} = this.props;
        return (
            <header style={{backgroundImage:`url(${banner})`,  backgroundSize: "cover"}} className={classes.header}>
                <div className={classes.titleName}>
                    <h1 className={classes.titleItem}>{item.name}</h1>
                    <div className={classes.titleItem}>{item.description}</div>
                </div>
            </header>
        );
    }
}
HomeHeader.propTypes = {
    item: PropTypes.object
};
const styles = {
    header: {
        height:400,
        display:"flex",
        flexDirection:'row',
        justifyContent:'center'
    },
    titleName:{
        display:"flex",
        flexDirection:'column',
        justifyContent:'center'
    },
    titleItem:{
        margin:[10,0],
        textAlign:"center"
    }
};
export default injectStyle(styles)(HomeHeader)
