"use strict";var React=require("react"),PureRenderMixin=require("react-addons-pure-render-mixin"),hljs=window.hljs,h=React.createElement,CodeBlock=React.createClass({displayName:"CodeBlock",mixins:[PureRenderMixin],propTypes:{literal:React.PropTypes.string,language:React.PropTypes.string},componentDidMount:function(){this.highlightCode()},componentDidUpdate:function(){this.highlightCode()},highlightCode:function(){hljs.highlightBlock(this.refs.code)},render:function(){return h("pre",null,h("code",{ref:"code",className:this.props.language},this.props.literal))}});module.exports=React.createFactory(CodeBlock);