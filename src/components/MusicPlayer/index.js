import React, {Component} from 'react';
import injectStyle from 'react-jss'
import SongItem from "./SongItem";
import songbg from "../../assets/songbg.png";
import PropTypes from "prop-types";

class MusicPlayer extends Component {
    render() {
        let {classes,songList,currentPlayItem} = this.props;
        return (
            <div className={classes.mainPanel}>
                <div className={classes.musicListStyle}>
                    <div className={classes.listTitle}>
                        <div>
                            <span>歌曲</span>
                        </div>
                        <div>
                            <span>歌手</span>
                        </div>
                    </div>
                    <hr/>
                    {
                        songList.map(item=>{
                           return  <SongItem key={item.id} songItem={item}/>
                        })
                    }
                </div>
                <div className={classes.player}>
                    <div className={classes.cover}>
                        <div className={classes.imgContainer}
                             style={{backgroundImage: `url(${songbg})`, backgroundSize: " 100% 100%"}}>
                            <div className={classes.imgWrapper}>
                                <img className={classes.imageStyle} alt={"歌手"}
                                     src={currentPlayItem.picUrl+"?param=200y200"}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.process}>
                        <div className={classes.controlBtn}>
                            <div>上一曲</div>
                            <div>播放</div>
                            <div>下一曲</div>
                        </div>
                    </div>
                    <div className={classes.lyricList}> lyric</div>
                </div>
            </div>
        );
    }
}
MusicPlayer.propTypes = {
    songList: PropTypes.array,
    currentPlayItem:PropTypes.object,
};
const styles = {
    mainPanel: {
        width: "100%",
        minHeight: 800,
        display: "flex",
    },
    musicListStyle: {
        width: "40%",
        "& li": {
            listStyleType: "none"
        }
    },
    listTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: [10, 0]
    },
    player: {
        width: "60%",
    },
    cover: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    imgContainer: {
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: "50%",
        borderColor: "blue",
        display: "flex",
        width: 240,
        height: 240,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: "50%",
        borderColor: "blue"
    },
    '@keyframes rotation': {
        from: {
            transform: "rotate(0deg)",
            WebkitTransform:"rotate(0deg)"
        },
        to: {
            transform: "rotate(359deg)",
            WebkitTransform:"rotate(359deg)"
        }
    },
    imgWrapper: {
        animationName:"$rotation",
        animationDuration:"30s",
        animationTimingFunction:"linear",
        animationDelay:"1s",
        animationIterationCount:"infinite",
    },
    process:{
        display: "flex",
        justifyContent: "center",
    },
    controlBtn: {
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        margin: [10,0]
    },
    lyricList: {
        display: "flex",
        justifyContent: "center"
    }
};
export default injectStyle(styles)(MusicPlayer)
