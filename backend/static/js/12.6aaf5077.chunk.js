(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[12],{124:function(n,e,t){"use strict";t.r(e);var o,i=t(8),r=(t(0),t(9)),s=t(13),a=function(n){return function(n){return n.news}(n).articles},d=t(22),p=t(1),c=Object(d.a)((function(){return t.e(9).then(t.bind(null,118))})),l=r.b.div(o||(o=Object(i.a)(['\n  height: 650px;\n  width: 600px;\n  position: absolute;\n  top: -1300%;\n  left: -200%;\n  background-color: #4C4C4C;\n  padding: 2rem;\n  overflow-y: auto;\n  transition: opacity 0.2s linear;\n\n  &.hidden {\n    height: 0;\n    width: 0;\n    padding: 0;\n    opacity: 0;\n  }\n\n  @keyframes showWidget {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  .news {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem;\n  }\n\n\n  .news__post {\n    width: 95%;\n    height: 25rem;\n    background-color: black;\n    overflow: hidden;\n    position: relative;\n    transition: height 0.3s linear;\n\n    &:hover {\n      .news__post-image {\n        transform: scale(1.3);\n      }\n    }\n  }\n\n  .news__post:after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.9));\n\n  }\n\n  .news__post-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.5s linear;\n  }\n\n  .news__post-info {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    padding: 1.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    z-index: 222;\n\n  }\n\n  .news__post-date {\n    color: white;\n    margin-bottom: 0.8rem;\n    opacity: 0.6;\n  }\n  \n  .news__post-title {\n    font-size: 1.8rem;\n    font-weight: 700;\n  }\n\n  .news__post.active {\n    height: auto;\n\n    &:hover {\n      .news__post-image {\n        transform: scale(1);\n      }\n    }\n\n    .news__post-image {\n      height: 25rem;\n      transition: none;\n    }\n\n    .news__post-info {\n      position: relative;\n    }\n\n    .news__post-title {\n      border-bottom: 1px solid white;\n      margin-bottom: 1rem;\n      padding-bottom: 1rem;\n    }\n\n    .news__post-text {\n      opacity: 1;\n      height: 100%;\n      width: 100%;\n    }\n  }\n\n  .news__post-text {\n    opacity: 0;\n    height: 0;\n    width: 0;\n  }\n\n  .news__post-footer {\n    display: flex;\n    margin-top: 1rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .news__post-button {\n    color: white;\n    padding: 0.8rem 2rem;\n    background-color: #4B4843;\n    border: none;\n    border-radius: 20px;\n    margin-right: 1rem;\n    cursor: pointer;\n  }\n\n  .news__post-like {\n    color: white;\n    padding: 0 1.7rem 0.8rem;\n    background-color: #4B4843;\n    border: none;\n    border-radius: 20px;\n    margin-right: 1rem;\n    cursor: pointer;\n\n    span {\n      font-size: 2rem;\n    }\n\n    &:hover {\n      filter: brightness(110%);\n    }\n  }\n\n  @media (max-width: 823px) {\n    position: fixed;\n    width: 100%;\n    height: calc(100vh - 5rem);\n    top: 0;\n    left: 0;\n    .news__post-footer {\n      flex-direction: column;\n      width: 100%;\n      gap: 1rem;\n\n      > div {\n        width: 100%;\n      }\n    }\n\n    .news__post-like {\n      width: 100%;\n      padding: 0.5rem 0.7rem;\n\n      span {\n        font-size: 1.5rem;\n      }\n    }\n\n    .news__post-likes {\n      position: absolute;\n      top: 1rem;\n      right: 1rem;\n      background-color: black;\n      padding: 0.3rem 1rem;\n      border-radius: 5px;\n    }\n\n    .news__post-button {\n      width: 100%;\n    }\n  }\n\n'])));e.default=function(n){var e=n.isOpen,t=Object(s.c)(a);return Object(p.jsx)(l,{className:e?"":"hidden",children:Object(p.jsx)("div",{className:"news",children:t.map((function(n){return Object(p.jsx)(c,{article:n},n.id)}))})})}}}]);
//# sourceMappingURL=12.6aaf5077.chunk.js.map