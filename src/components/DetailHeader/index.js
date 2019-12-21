import React, {Component} from 'react';
import injectStyle from 'react-jss'
import PropTypes from 'prop-types';
import banner from "../../assets/banner.jpg"
import moment from "moment";
class DetailHeader extends Component {
    formatData = (data) => {
        return moment(data).format('YYYY年MM月DD日 HH:mm');
    };
    render() {
        let {classes,item} = this.props;
        return (
            <header style={{backgroundImage:`url(${banner})`,  backgroundSize: "cover"}} className={classes.header}>
                <div className={classes.titleName}>
                    <div className={classes.titleItem}><span className={classes.titleCategory}>{item.categoryName}</span></div>
                    <h1 className={classes.titleItem}>{item.title}</h1>
                    <div className={classes.titleItem}>{this.formatData(item.createTime)}</div>
                </div>
            </header>
        );
    }
}
DetailHeader.propTypes = {
    item: PropTypes.object
};
const styles = {
    header: {
        height:400,
        display:"flex",
        flexDirection:'row',
        justifyContent:'center'
    },
    titleName:{
        display:"flex",
        flexDirection:'column',
        justifyContent:'center'
    },
    titleItem:{
        margin:[10,0],
    },
    titleCategory:{
        padding: [0, 10],
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 999,
        textDecoration: "none"
    }
};
export default injectStyle(styles)(DetailHeader)
