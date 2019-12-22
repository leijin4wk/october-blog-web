import React, {Component} from 'react';
import injectStyle from 'react-jss'
import palyBtn from '../../../assets/play.png'
import PropTypes from "prop-types";

class SongItem extends Component {
    render() {
        let {classes,songItem} = this.props;
        return (
            <div className={classes.songItemStyle}>
                <div className={classes.songNameStyle}>
                    <span>{songItem.name}</span><img width={40} alt={"a"} src={palyBtn}/>
                </div>
                <div className={classes.songNameStyle}>
                    <span>{songItem.arName}</span>
                </div>
            </div>
        );
    }
}
SongItem.propTypes = {
    songItem: PropTypes.object
};
const styles = {
    songItemStyle: {
        display: "flex",
        justifyContent: "space-around",
        margin:[5,0]
    },
    songNameStyle:{
        width:"60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    }
};
export default injectStyle(styles)(SongItem)
