import React, {Component} from 'react';
import injectStyle from 'react-jss'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import moment from 'moment'

class ArticleItem extends Component {
    formatData = (data) => {
        return moment(data).format('YYYY-MM-DD HH:mm');
    };

    render() {
        let {classes, item} = this.props;
        return (
            <div className={classes.articleCard}>
                <div className={classes.articleTitle}>
                    <div><Link className={classes.hrefText}
                               to={"/article/" + item.id}><span>{item.title}</span></Link></div>
                </div>
                <div className={classes.articleContent}>
                    <p>{item.description}</p>
                </div>
                <div className={classes.articleTime}>
                    <div><span>{this.formatData(item.createTime)}</span></div>
                </div>
                <hr/>
            </div>
        );
    }
}

ArticleItem.propTypes = {
    item: PropTypes.object
};
const styles = {
    hrefText: {
        textDecoration: "none"
    },
    articleCard: {
        margin: [10, 10],
        display: "flex",
        flexDirection: "column"
    },
    articleMargin: {
        margin: [10, 10]
    },
    articleTitle: {
        margin: [10, 10],
        '& a': {
            color: "#000000",
            fontSize: "26px",
            lineHeight: 1.3,
            textDecoration: "none"
        },
        '& a:hover': {
            color: "#337ab7",
        },
    },
    articleContent: {
        margin: [10, 10],
        '& p': {
            color: "#a3a3a3",
        }
    },
    articleTime: {
        margin: [10, 10]
    },
};
export default injectStyle(styles)(ArticleItem)
