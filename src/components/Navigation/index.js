import LoadingBar from "react-redux-loading-bar";
import React from 'react';
import BaseComponent from '../BaseComponent'
import {withRouter} from 'react-router-dom' //引入withRouter
import injectStyle from 'react-jss'
import logo from "../../assets/logo.png"

class Navigation extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            navTransform: {}
        }
    }
    onClickLink=(value)=>{
        this.props.history.replace(value);
    };
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
        } else if (scrollTop < 120) {
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
                <LoadingBar style={{backgroundColor: '#1D7FD8', height: '3px'}}/>
                <div className={classes.bar}>
                    <div className={classes.logo} onClick={() => {
                        this.onClickLink("/")
                    }}>
                        <img className={classes.logoHover} alt={"logo"} src={logo} height={45}></img>
                    </div>
                    <ul className={classes.barMenu}>
                        <li><span onClick={() => {
                            this.onClickLink("/")
                        }} className={classes.linkHover}>主页</span></li>
                        <li><span onClick={() => {
                            this.onClickLink("/music")
                        }} className={classes.linkHover}>音乐</span></li>
                        <li><span onClick={() => {
                            this.onClickLink("/about")
                        }} className={classes.linkHover}>关于</span></li>
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
        justifyContent: "space-between",
        flexDirection: "row",
        '& span': {
            fontSize: "20px",
            color: "#1D7FD8",
            lineHeight: "60px",
            fontWeight: 800
        }
    },
    logo: {
        margin: [5, 10]
    },
    barMenu: {
        listStyle: "none",
        '& li': {
            display: "inline",
            margin: [0, 5]
        }
    },
    logoHover: {
        '&:hover': {
            cursor: "pointer"
        }
    },

    linkHover: {
        padding: [0, 10],
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "transparent",
        '&:hover': {
            cursor: "pointer",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#a3a3a3"
        }
    }
};

export default withRouter(injectStyle(styles)(Navigation))
