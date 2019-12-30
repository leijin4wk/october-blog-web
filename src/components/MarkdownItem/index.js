import React, {Component} from 'react';
import injectStyle from "react-jss";
import marked from 'marked'
import highlight from "highlight.js";
import 'highlight.js/styles/school-book.css';
import PropTypes from "prop-types";
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
        return highlight.highlightAuto(code).value;
    }
});
class MarkdownItem extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let articleContent="";
        if (this.props.articleContent) {
            articleContent= marked(this.props.articleContent);
        }
        return <div dangerouslySetInnerHTML={{__html:articleContent}} />
    }
}
MarkdownItem.propTypes = {
    articleContent: PropTypes.string,
};
const styles = {};
export default injectStyle(styles)(MarkdownItem)