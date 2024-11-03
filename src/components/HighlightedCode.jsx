import hljs from "highlight.js/lib/core";
import { useEffect } from "react";
import javascript from "highlight.js/lib/languages/javascript";
//importing a CSS file is IMP for code highlighting to work!!!
import "../assets/github-dark.min.css";

const HighlightedCode = ({ codetxt }) => {
  //Higlight JS Block Start
  //Below Block just generate HTML for higlighting code
  hljs.registerLanguage("javascript", javascript);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  //Higlight JS Block End

  return <>{codetxt}</>;
};

export default HighlightedCode;
