import React, {Component} from 'react';
import injectStyle from 'react-jss'
import banner from "../../assets/banner1.jpg"
class HomeHeader extends Component {
    render() {
        let {classes} = this.props;
        return (
            <header style={{backgroundImage:`url(${banner})`,  backgroundSize: "cover"}} className={classes.header}>
                <div className={classes.titleName}>
                    <h1 className={classes.titleItem}>TTTTTT</h1>
                    <div className={classes.titleItem}>aaaaa</div>
                </div>
            </header>
        );
    }
}
const styles = {
    header: {
        marginTop:60,
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
        textAlign:"center"
    }
};
export default injectStyle(styles)(HomeHeader)
