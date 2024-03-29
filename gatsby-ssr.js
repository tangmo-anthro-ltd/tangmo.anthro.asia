const React = require('react');
const { Helmet } = require('react-helmet');

exports.onRenderBody = (
  { setHeadComponents, setHtmlAttributes, setBodyAttributes, setPreBodyComponents, setPostBodyComponents },
  pluginOptions
) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
  setPreBodyComponents([]);
  setPostBodyComponents([]);
};
