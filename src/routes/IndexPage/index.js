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
    constructor(props){
        super(props);
        this.state={
           titleObj:{
               name:"雷金的博客",
               description:"记录点滴，见证成长"

           }
        }
    }
    componentDidMount() {
        this.props.loadData({});
    }

    onClickCategoryItem=(categoryId)=>{
        this.props.loadData({categoryId:categoryId,pageNum:0});
    };
    onChangePage=(pageNum)=>{
        this.props.loadData({pageNum:pageNum,categoryId:""});
    };
    render() {
        let {classes, articleList, categoryList,pageNum,totalPages,total} = this.props;
        return (
            <div className={classes.mainBackground}>
                <Navigation/>
                <HomeHeader item={this.state.titleObj}/>
                <div className={classes.mainWrap}>
                    <div className={classes.mainLeft}>
                        {
                            articleList.map(item => {
                                return <ArticleItem key={item.id} item={item}/>
                            })
                        }
                        <Pager pageNum={pageNum} totalPages={totalPages} total={total} onChangePage={(value)=>{
                            this.onChangePage(value)
                        }}/>
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
        categoryList: state.index.categoryList,
        pageNum: state.index.pageNum,
        pageSize:state.index.pageSize,
        categoryId:state.index.categoryId,
        totalPages:state.index.totalPages,
        total:state.index.total,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadData: (...args) => dispatch(indexActions.loadData(...args))
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
