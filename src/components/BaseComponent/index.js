import {Component} from 'react';
//解决 在组件销毁后设置state，防止出现内存泄漏的情况
function injectUnmount (target){
    // 改装componentWillUnmount，销毁的时候记录一下
    let next = target.prototype.componentWillUnmount;
    target.prototype.componentWillUnmount = function () {
        if (next) next.call(this, ...arguments);
        this.unmount = true
    };
    // 对setState的改装，setState查看目前是否已经销毁
    let setState = target.prototype.setState;
    target.prototype.setState = function () {
        if ( this.unmount ) return ;
        setState.call(this, ...arguments)
    };
    return target;
}
class BaseComponent extends Component {
}
export default injectUnmount(BaseComponent);