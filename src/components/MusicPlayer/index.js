import React, {Component} from 'react';
import injectStyle from 'react-jss'
import SongItem from "./SongItem";
import songbg from "../../assets/songbg.png";
import {getLyricArr} from "../../utils/stringUtil"
import PropTypes from "prop-types";

class MusicPlayer extends Component {
    constructor(props) {
        super(props);
        this.musicAudio = React.createRef();
        this.musicLyric=React.createRef();
        this.state={
            lyricArr:[]
        }
    }

    onClickPlayMusic = (item) => {
        let musicAudio = this.musicAudio.current;
        this.props.onPlayMusic({
            id: item.id, callback: (musicInfo) => {
                musicAudio.onplaying = null;  //  清除audio标签绑定的事件
                musicAudio.src = musicInfo.songUrl;
                if (musicAudio.paused) {
                    musicAudio.play();
                } else {
                    musicAudio.pause();
                }
                //歌词
                let result = getLyricArr(musicInfo.lyric);
                this.setState({
                    lyricArr:result
                },()=>{
                   let lyricsLiArr=this.musicLyric.current.getElementsByTagName('div');
                    setInterval(function(){
                        if (lyricsLiArr) {
                            for (let i = 0, len = lyricsLiArr.length-1; i < len; i++) {
                                let curT = lyricsLiArr[i].getAttribute('data-time');
                                let nexT = lyricsLiArr[i+1].getAttribute('data-time');
                                let curtTime = musicAudio.currentTime;
                                if ((curtTime > curT) && (curtTime < nexT)) {
                                    lyricsLiArr[i].className = 'active';
                                } else {
                                    lyricsLiArr[i].className = '';
                                }
                            }
                        }
                    }, 300);
                })
            }
        });
        this.props.onSelectMusic({currentPlayItem:item})
    };

    render() {
        let {classes, songList, currentPlayItem} = this.props;
        let {lyricArr} =this.state;
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
                        songList.map(item => {
                            return <SongItem key={item.id} onClickPlay={()=>this.onClickPlayMusic(item)} songItem={item}/>
                        })
                    }
                </div>
                <div className={classes.player}>
                    <div className={classes.cover}>
                        <div className={classes.imgContainer}
                             style={{backgroundImage: `url(${songbg})`, backgroundSize: " 100% 100%"}}>
                            <div className={classes.imgWrapper}>
                                <img className={classes.imageStyle} alt={"歌手"}
                                     src={currentPlayItem.picUrl + "?param=100y100"}/>
                            </div>
                        </div>
                    </div>
                    <div className={classes.process}>
                        <div className={classes.controlBtn}>
                            <div>上一曲</div>
                            <div onClick={() => this.onClickPlayMusic(currentPlayItem)}>播放</div>
                            <div>下一曲</div>
                        </div>
                    </div>
                    <audio ref={this.musicAudio}/>
                    <div ref={this.musicLyric} className={classes.lyricList}>
                        {
                            lyricArr.map(item=>{
                                return <div className={classes.lyricItem} key={item[0]} data-time={item[0]}> {item[1]}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

MusicPlayer.propTypes = {
    songList: PropTypes.array,
    currentPlayItem: PropTypes.object,
    onPlayMusic: PropTypes.func,
    onSelectMusic:PropTypes.func
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
        objectFit: "none",
        borderWidth: 5,
        borderStyle: "solid",
        borderRadius: "50%",
        borderColor: "blue"
    },
    '@keyframes rotation': {
        from: {
            transform: "rotate(0deg)",
            WebkitTransform: "rotate(0deg)"
        },
        to: {
            transform: "rotate(359deg)",
            WebkitTransform: "rotate(359deg)"
        }
    },
    imgWrapper: {
        animationName: "$rotation",
        animationDuration: "30s",
        animationTimingFunction: "linear",
        animationDelay: "1s",
        animationIterationCount: "infinite",
    },
    process: {
        display: "flex",
        justifyContent: "center",
    },
    controlBtn: {
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        margin: [10, 0]
    },
    lyricList: {
        display: "flex",
        flexDirection:'column',
        justifyContent: "center"
    },
    lyricItem:{
        textAlign: "center"
    }
};
export default injectStyle(styles)(MusicPlayer)
