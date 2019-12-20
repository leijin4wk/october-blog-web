import React, {Component} from 'react';
import injectStyle from 'react-jss'
import {connect} from 'react-redux';
import DetailHeader from '../../components/DetailHeader'
import Footer from '../../components/Footer'
import ReactMarkdown from 'react-markdown'
import {articleDetailActions} from "../../models/articleDetail/action";
import Navigation from "../../components/Navigation";
class ArticleDetailPage extends Component {
    componentDidMount() {
        let {params} = this.props.match;
        this.props.loadArticle(params);
    }
    render() {
        let {classes,articleItem} = this.props;
        return (
            <div className={classes.mainBackground}>
                <Navigation/>
                <DetailHeader item={articleItem}/>
                <div className={classes.mainContent}>
                    <ReactMarkdown source={articleItem.content} />
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
        articleItem:state.articleDetail.articleItem,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadArticle: (...args) =>{dispatch(articleDetailActions.loadData(...args))},
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(injectStyle(styles)(ArticleDetailPage))