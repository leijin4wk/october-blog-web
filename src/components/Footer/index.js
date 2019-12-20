import React, {Component} from 'react';
import injectStyle from 'react-jss'
import githubLogo from "../../assets/github-logo.svg"
class Footer extends Component {
    render() {
        let {classes} = this.props;
        return (
            <footer className={classes.footer}>
                <div>
                    <div className={classes.logoImage}>
                        <a target={"_blank"} href={"https://github.com/leijin4wk"}><img alt={"logo"} src={githubLogo} width={53}/></a>
                    </div>
                    <p className={classes.copyRight}>
                        Copyright &copy; octlr.com 2019
                    </p>
                </div>
            </footer>
        );
    }
}

const styles = {

    footer:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        marginTop:30
    },
    logoImage: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        margin:[10,0]
    },
    copyRight:{
        margin:[30,0]
    }
};
export default injectStyle(styles)(Footer)
