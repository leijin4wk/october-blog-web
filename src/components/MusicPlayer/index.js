import React, {Component} from 'react';
import injectStyle from 'react-jss'
import SongItem from "./SongItem";

class MusicPlayer extends Component {
    render() {
        let {classes} = this.props;
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
                    <SongItem/>
                    <hr/>
                    <SongItem/>
                    <hr/>
                </div>
                <div className={classes.player}>
                    <div className={classes.cover}><img width={100} src={"http://singerimg.kugou.com/uploadpic/softhead/400/20161226/20161226105135733.jpg"}/></div>
                    <div className={classes.process}>
                        <div className={classes.controlBtn}>a</div>
                        <div className={classes.processBox}>b</div>
                        <div className={classes.musicVol}>c</div>
                    </div>
                    <div className={classes.lyricList}> lyric</div>
                </div>
            </div>
        );
    }
}

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
    player: {
        width: "60%",
    },
    listTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: [10, 0]
    },
    cover:{
        display: "flex",
        justifyContent:"center"
    },
    process:{
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    lyricList:{
        display: "flex",
        justifyContent:"center"
    },
    controlBtn:{

    },
    processBox:{

    },
    musicVol:{

    },
};
export default injectStyle(styles)(MusicPlayer)
