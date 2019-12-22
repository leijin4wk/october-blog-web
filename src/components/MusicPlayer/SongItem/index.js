import React, {Component} from 'react';
import injectStyle from 'react-jss'
import palyBtn from '../../../assets/play.png'

class SongItem extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.songItemStyle}>
                <div className={classes.songNameStyle}>
                    <span>成都</span><img width={40} src={palyBtn}/>
                </div>
                <div className={classes.songNameStyle}>
                    <span>赵雷</span>
                </div>
            </div>
        );
    }
}

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
