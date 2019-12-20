import {Link} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import React, {Component} from 'react';
import injectStyle from 'react-jss'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navTransform: {
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        if (scrollTop > 120) {
            this.setState({
                navTransform: {
                    transform: "translateY(-60px)",
                    transitionProperty: "transform",
                    transitionDuration: "1s",
                    transitionTimingFunction: "ease",
                    transitionDelay: "0s"
                }
            })
        }else if(scrollTop < 120){
            this.setState({
                navTransform: {
                    transform: "translateY(0)",
                    transitionProperty: "transform",
                    transitionDuration: "1s",
                    transitionTimingFunction: "ease",
                    transitionDelay: "0s"
                }
            })
        }
    };

    render() {
        let {classes} = this.props;
        console.log({...this.state.navTransform});
        return (
            <nav className={classes.nav} style={{...this.state.navTransform}}>
                <LoadingBar/>
                <div className={classes.bar}>
                    <div className={classes.logo}>
                        <a href="/" className="luxbar-brand">Oct</a>
                    </div>
                    <ul className={classes.barMenu}>
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/">归档</Link></li>
                        <li><Link to="/">关于</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

const styles = {
    nav: {
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    bar: {
        display: "flex",
        backgroundColor: "#4d9897",
        justifyContent: "space-between",
        flexDirection: "row",
        '& a': {
            fontSize: "20px",
            color: "#FFFFFF",
            lineHeight: "60px",
            fontWeight: 800,
            textDecoration: "none"
        }
    },
    logo: {
        margin: [0, 10]
    },
    barMenu: {
        listStyle: "none",
        '& li': {
            display: "inline",
            margin: [0, 10]
        }
    }
};

export default injectStyle(styles)(Navigation)
