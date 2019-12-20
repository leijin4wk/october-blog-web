import React, {Component} from 'react';
import injectStyle from 'react-jss'
import {connect} from 'react-redux';
import HomeHeader from '../../components/HomeHeader'
import Footer from '../../components/Footer'
import {indexActions} from "../../models/index/action"
import ArticleItem from "../../components/ArticleItem";
import CategoryItem from '../../components/CategoryItem'
import Navigation from "../../components/Navigation";
import Pager from "../../components/Pager";

class IndexPage extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    onClickCategoryItem=(categoryId)=>{
        console.log(categoryId);
    };
    onChangePage=(value)=>{

    };
    render() {
        let {classes, articleList, categoryList} = this.props;
        return (
            <div className={classes.mainBackground}>
                <Navigation/>
                <HomeHeader/>
                <div className={classes.mainWrap}>
                    <div className={classes.mainLeft}>
                        {
                            articleList.map(item => {
                                return <ArticleItem key={item.id} item={item}/>
                            })
                        }
                        <Pager pageNum={0} pageTotal={10} onChangePage={(value)=>{
                            this.onChangePage(value)
                        }}></Pager>
                    </div>
                    <div className={classes.mainRight}>
                        <section>
                            <h5 className={classes.titleName}>分类</h5>
                            <hr/>
                            <div className={classes.category}>
                                {
                                    categoryList.map(item => {
                                        return <CategoryItem key={item.id} item={item} onClickItem={this.onClickCategoryItem}/>
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.index.articleList,
        categoryList: state.index.categoryList
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadData: (...args) => dispatch(indexActions.loadData(...args)),
    }
};
const styles = {
    mainBackground:{
        backgroundColor:"#F5F5F5"
    },
    mainWrap: {
        margin: '60px auto 0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: 600,
    },
    mainLeft: {
        width: '70%',
        flexShrink: 0,
    },
    mainRight: {
        width: "20%",
        flexShrink: 0,
        height: 100,
        margin: [10, 10],
    },
    '@media (min-width:1000px)': {
        mainWrap: {
            width: "85%",
        }
    },
    '@media (max-width:1000px)': {
        mainWrap: {
            alignContent: "flex-start"
        },
        mainLeft: {
            width: "85%",
            margin: '0 auto',
        },
        mainRight: {
            width: "85%",
            margin: '0 auto'
        }
    },
    titleName: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 800,
        margin:[10,0]
    },
    category:{
        marginTop:10,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:"wrap"
    }

};
export default connect(mapStateToProps, mapDispatchToProps)(injectStyle(styles)(IndexPage))
