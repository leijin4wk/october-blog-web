import React, {Component} from 'react';
import injectStyle from 'react-jss';
import {connect} from "react-redux";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import MusicPlayer from "../../components/MusicPlayer";
import {musicActions} from "../../models/music/action";
class MusicPage extends Component {
    constructor(props){
        super(props);
        this.state={
            titleObj:{
                name:"音乐",
                description:"cccc"

            }
        }
    }
    componentDidMount() {
        this.props.loadLikeMusicList({});

    }
    render() {
        let {classes,likeList,currentPlayItem} = this.props;
        return (
            <div className={classes.mainBackground}>
                <Navigation/>
                <HomeHeader item={this.state.titleObj}/>
                <div className={classes.mainContent}>
                    <MusicPlayer songList={likeList} currentPlayItem={currentPlayItem}/>
                </div>
                <Footer/>
            </div>
        );
    }
}
const styles = {
    mainBackground:{
        backgroundColor:"#F5F5F5"
    },
    mainContent: {
        margin: '60px auto 0 auto',
        minHeight:900,
    },
    '@media (min-width:1000px)': {
        mainContent: {
            width: "75%",
        }
    },
    '@media (max-width:1000px)': {
        mainContent: {
            alignContent: "flex-start"
        }
    },
};
const mapStateToProps = (state, ownProps) => {
    return {
        likeList: state.music.likeList,
        currentPlayItem: state.music.currentPlayItem,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadLikeMusicList:() => dispatch(musicActions.loadLikeList()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(injectStyle(styles)(MusicPage))
