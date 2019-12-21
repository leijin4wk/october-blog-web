import {Link} from "react-router-dom";
import LoadingBar from "react-redux-loading-bar";
import React from 'react';
import BaseComponent from '../BaseComponent'
import injectStyle from 'react-jss'
import oct from "../../assets/oct.png"
class Navigation extends BaseComponent {
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
        return (
            <nav className={classes.nav} style={{...this.state.navTransform}}>
                <div className={classes.bar}>
                    <div className={classes.logo}>
                        <Link to={"/"} className="luxbar-brand">
                            <img alt={"logo"} src={oct} height={60}></img>
                        </Link>
                    </div>
                    <ul className={classes.barMenu}>
                        <li><Link to="/">主页</Link></li>
                        <li><Link to="/music">音乐</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>
                </div>
                <LoadingBar/>
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
        backgroundColor: "#F5F5DC",
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
