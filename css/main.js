import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontFamily": "\"Roboto\",sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%",
        "fontSize": 13,
        "WebkitTapHighlightColor": "transparent",
        "fontWeight": "300",
        "width": "100%",
        "height": "100%",
        "background": "#fff",
        "textShadow": "1px 1px 1px rgba(0,0,0,0.004)",
        "textRendering": "optimizeLegibility !important",
        "WebkitFontSmoothing": "antialiased !important",
        "MozOsxFontSmoothing": "grayscale !important"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "\"Roboto\",sans-serif",
        "fontSize": 13,
        "lineHeight": 1.42857,
        "color": "#333",
        "backgroundColor": "#fff",
        "fontWeight": "300",
        "width": "100%",
        "height": "100%",
        "background": "#fff",
        "textShadow": "1px 1px 1px rgba(0,0,0,0.004)",
        "textRendering": "optimizeLegibility !important",
        "WebkitFontSmoothing": "antialiased !important",
        "MozOsxFontSmoothing": "grayscale !important"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "footer": {
        "display": "block",
        "paddingTop": 40,
        "paddingRight": 52,
        "paddingBottom": 13,
        "paddingLeft": 52,
        "borderTop": "1px solid #e7e7e7",
        "backgroundColor": "#fcfcfc"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block",
        "position": "relative",
        "overflow": "hidden",
        "minHeight": 350,
        "paddingTop": 50,
        "paddingBottom": 60,
        "textAlign": "center"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "color": "#03a9f4",
        "textDecoration": "none"
    },
    "a:active": {
        "outline": 0,
        "color": "#60ccfd",
        "textDecoration": "none"
    },
    "a:hover": {
        "outline": 0,
        "color": "#60ccfd",
        "textDecoration": "none"
    },
    "abbr[title]": {
        "borderBottom": "1px dotted #777",
        "cursor": "help"
    },
    "b": {
        "fontWeight": "500"
    },
    "strong": {
        "fontWeight": "500"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 79.625,
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "display": "block"
    },
    "mark": {
        "background": "#ff0",
        "color": "#000",
        "backgroundColor": "#fcf8e3",
        "paddingTop": 0.2,
        "paddingRight": 0.2,
        "paddingBottom": 0.2,
        "paddingLeft": 0.2
    },
    "small": {
        "fontSize": "85%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": -0.25
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": -0.5
    },
    "img": {
        "border": 0,
        "verticalAlign": "middle"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 0,
        "marginTop": 20,
        "marginBottom": 20,
        "border": 0,
        "borderTop": "1px solid #eee"
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "Menlo,Monaco,Consolas,\"Courier New\",monospace",
        "fontSize": 13,
        "display": "block",
        "paddingTop": 9.5,
        "paddingRight": 9.5,
        "paddingBottom": 9.5,
        "paddingLeft": 9.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "lineHeight": 1.42857,
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "color": "#333",
        "backgroundColor": "#f5f5f5",
        "border": "1px solid #ccc",
        "borderRadius": 4
    },
    "code": {
        "fontFamily": "Menlo,Monaco,Consolas,\"Courier New\",monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#c7254e",
        "backgroundColor": "#f9f2f4",
        "borderRadius": 4
    },
    "kbd": {
        "fontFamily": "Menlo,Monaco,Consolas,\"Courier New\",monospace",
        "fontSize": "90%",
        "paddingTop": 2,
        "paddingRight": 4,
        "paddingBottom": 2,
        "paddingLeft": 4,
        "color": "#fff",
        "backgroundColor": "#333",
        "borderRadius": 3,
        "boxShadow": "inset 0 -1px 0 rgba(0,0,0,0.25)"
    },
    "samp": {
        "fontFamily": "Menlo,Monaco,Consolas,\"Courier New\",monospace",
        "fontSize": 1
    },
    "button": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "inherit",
        "fontFamily": "inherit",
        "fontSize": "inherit"
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "fontFamily": "inherit",
        "fontSize": "inherit",
        "lineHeight": "inherit"
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": "1px \\9",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal"
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "none",
        "boxSizing": "border-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minWidth": 0
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "block",
        "width": "100%",
        "marginBottom": 20,
        "fontSize": 21,
        "lineHeight": "inherit",
        "color": "#333",
        "borderBottom": "1px solid #e5e5e5"
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "boxSizing": "border-box"
    },
    "*:before": {
        "boxSizing": "border-box"
    },
    "*:after": {
        "boxSizing": "border-box"
    },
    "a:focus": {
        "color": "#60ccfd",
        "textDecoration": "none",
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "img-responsive": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "img-rounded": {
        "borderRadius": 6
    },
    "img-thumbnail": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "lineHeight": 1.42857,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "all 0.2s ease-in-out",
        "transition": "all 0.2s ease-in-out",
        "display": "inline-block",
        "maxWidth": "100%",
        "height": "auto"
    },
    "img-circle": {
        "borderRadius": "50%"
    },
    "sr-only": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "border": 0
    },
    "sr-only-focusable:active": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "sr-only-focusable:focus": {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "clip": "auto"
    },
    "h2": {
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 76.375,
        "display": "block"
    },
    "h3": {
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 20,
        "marginBottom": 10,
        "fontSize": 65,
        "display": "block"
    },
    "h4": {
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 40.625,
        "display": "block"
    },
    "h5": {
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 29.9,
        "display": "block"
    },
    "h6": {
        "fontFamily": "inherit",
        "fontWeight": "100",
        "lineHeight": 1.1,
        "color": "inherit",
        "marginTop": 10,
        "marginBottom": 10,
        "fontSize": 24.375,
        "display": "block"
    },
    "h1 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h2 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h3 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "65%"
    },
    "h4 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h5 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "h6 small": {
        "fontWeight": "normal",
        "lineHeight": 1,
        "color": "#777",
        "fontSize": "75%"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "fontSize": 15,
        "fontWeight": "300",
        "lineHeight": 23
    },
    "lead": {
        "marginBottom": 20,
        "fontSize": 16,
        "fontWeight": "300",
        "lineHeight": 1.4
    },
    "text-left": {
        "textAlign": "left"
    },
    "text-right": {
        "textAlign": "right"
    },
    "text-center": {
        "textAlign": "center"
    },
    "text-justify": {
        "textAlign": "justify"
    },
    "text-nowrap": {
        "whiteSpace": "nowrap"
    },
    "text-lowercase": {
        "textTransform": "lowercase"
    },
    "text-uppercase": {
        "textTransform": "uppercase"
    },
    "text-capitalize": {
        "textTransform": "capitalize"
    },
    "text-muted": {
        "color": "#777"
    },
    "text-primary": {
        "color": "#337ab7"
    },
    "atext-primary:hover": {
        "color": "#286090"
    },
    "text-success": {
        "color": "#3c763d"
    },
    "atext-success:hover": {
        "color": "#2b542c"
    },
    "text-info": {
        "color": "#31708f"
    },
    "atext-info:hover": {
        "color": "#245269"
    },
    "text-warning": {
        "color": "#8a6d3b"
    },
    "atext-warning:hover": {
        "color": "#66512c"
    },
    "text-danger": {
        "color": "#a94442"
    },
    "atext-danger:hover": {
        "color": "#843534"
    },
    "bg-primary": {
        "color": "#fff",
        "backgroundColor": "#337ab7"
    },
    "abg-primary:hover": {
        "backgroundColor": "#286090"
    },
    "bg-success": {
        "backgroundColor": "#dff0d8"
    },
    "abg-success:hover": {
        "backgroundColor": "#c1e2b3"
    },
    "bg-info": {
        "backgroundColor": "#d9edf7"
    },
    "abg-info:hover": {
        "backgroundColor": "#afd9ee"
    },
    "bg-warning": {
        "backgroundColor": "#fcf8e3"
    },
    "abg-warning:hover": {
        "backgroundColor": "#f7ecb5"
    },
    "bg-danger": {
        "backgroundColor": "#f2dede"
    },
    "abg-danger:hover": {
        "backgroundColor": "#e4b9b9"
    },
    "page-header": {
        "paddingBottom": 9,
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "borderBottom": "1px solid #eee"
    },
    "ul": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ol": {
        "marginTop": 0,
        "marginBottom": 10
    },
    "ul ul": {
        "marginBottom": 0
    },
    "ul ol": {
        "marginBottom": 0
    },
    "ol ul": {
        "marginBottom": 0
    },
    "ol ol": {
        "marginBottom": 0
    },
    "list-unstyled": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "list-inline": {
        "paddingLeft": 0,
        "listStyle": "none",
        "marginLeft": -5
    },
    "list-inline>li": {
        "display": "inline-block",
        "paddingLeft": 5,
        "paddingRight": 5
    },
    "dl": {
        "marginTop": 0,
        "marginBottom": 20
    },
    "dt": {
        "lineHeight": 1.42857,
        "fontWeight": "bold"
    },
    "dd": {
        "lineHeight": 1.42857,
        "marginLeft": 0
    },
    "dl-horizontal dd:before": {
        "content": " ",
        "display": "table"
    },
    "dl-horizontal dd:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "abbr[data-original-title]": {
        "cursor": "help",
        "borderBottom": "1px dotted #777"
    },
    "initialism": {
        "fontSize": "90%",
        "textTransform": "uppercase"
    },
    "blockquote": {
        "paddingTop": 10,
        "paddingRight": 20,
        "paddingBottom": 10,
        "paddingLeft": 20,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 17.5,
        "borderLeft": "5px solid #eee"
    },
    "blockquote p:last-child": {
        "marginBottom": 0
    },
    "blockquote ul:last-child": {
        "marginBottom": 0
    },
    "blockquote ol:last-child": {
        "marginBottom": 0
    },
    "blockquote footer": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857,
        "color": "#777"
    },
    "blockquote small": {
        "display": "block",
        "fontSize": "80%",
        "lineHeight": 1.42857,
        "color": "#777"
    },
    "blockquote footer:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote small:before": {
        "content": "'\\2014 \\00A0'"
    },
    "blockquote-reverse": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eee",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquotepull-right": {
        "paddingRight": 15,
        "paddingLeft": 0,
        "borderRight": "5px solid #eee",
        "borderLeft": 0,
        "textAlign": "right"
    },
    "blockquote-reverse footer:before": {
        "content": "''"
    },
    "blockquote-reverse small:before": {
        "content": "''"
    },
    "blockquotepull-right footer:before": {
        "content": "''"
    },
    "blockquotepull-right small:before": {
        "content": "''"
    },
    "blockquote-reverse footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquote-reverse small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right footer:after": {
        "content": "'\\00A0 \\2014'"
    },
    "blockquotepull-right small:after": {
        "content": "'\\00A0 \\2014'"
    },
    "address": {
        "marginBottom": 20,
        "fontStyle": "normal",
        "lineHeight": 1.42857
    },
    "kbd kbd": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "100%",
        "fontWeight": "bold",
        "boxShadow": "none"
    },
    "pre code": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "inherit",
        "color": "inherit",
        "whiteSpace": "pre-wrap",
        "backgroundColor": "transparent",
        "borderRadius": 0
    },
    "pre-scrollable": {
        "maxHeight": 340,
        "overflowY": "scroll"
    },
    "container": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container:before": {
        "content": " ",
        "display": "table"
    },
    "container:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "container-fluid": {
        "marginRight": "auto",
        "marginLeft": "auto",
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "container-fluid:before": {
        "content": " ",
        "display": "table"
    },
    "container-fluid:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "row": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "row:before": {
        "content": " ",
        "display": "table"
    },
    "row:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "8.33333%"
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "16.66667%"
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "25%"
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "33.33333%"
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "41.66667%"
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "50%"
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "58.33333%"
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "66.66667%"
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "75%"
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "83.33333%"
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "91.66667%"
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15,
        "float": "left",
        "width": "100%"
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingLeft": 15,
        "paddingRight": 15
    },
    "col-xs-pull-0": {
        "right": "auto"
    },
    "col-xs-pull-1": {
        "right": "8.33333%"
    },
    "col-xs-pull-2": {
        "right": "16.66667%"
    },
    "col-xs-pull-3": {
        "right": "25%"
    },
    "col-xs-pull-4": {
        "right": "33.33333%"
    },
    "col-xs-pull-5": {
        "right": "41.66667%"
    },
    "col-xs-pull-6": {
        "right": "50%"
    },
    "col-xs-pull-7": {
        "right": "58.33333%"
    },
    "col-xs-pull-8": {
        "right": "66.66667%"
    },
    "col-xs-pull-9": {
        "right": "75%"
    },
    "col-xs-pull-10": {
        "right": "83.33333%"
    },
    "col-xs-pull-11": {
        "right": "91.66667%"
    },
    "col-xs-pull-12": {
        "right": "100%"
    },
    "col-xs-push-0": {
        "left": "auto"
    },
    "col-xs-push-1": {
        "left": "8.33333%"
    },
    "col-xs-push-2": {
        "left": "16.66667%"
    },
    "col-xs-push-3": {
        "left": "25%"
    },
    "col-xs-push-4": {
        "left": "33.33333%"
    },
    "col-xs-push-5": {
        "left": "41.66667%"
    },
    "col-xs-push-6": {
        "left": "50%"
    },
    "col-xs-push-7": {
        "left": "58.33333%"
    },
    "col-xs-push-8": {
        "left": "66.66667%"
    },
    "col-xs-push-9": {
        "left": "75%"
    },
    "col-xs-push-10": {
        "left": "83.33333%"
    },
    "col-xs-push-11": {
        "left": "91.66667%"
    },
    "col-xs-push-12": {
        "left": "100%"
    },
    "col-xs-offset-0": {
        "marginLeft": "0%"
    },
    "col-xs-offset-1": {
        "marginLeft": "8.33333%"
    },
    "col-xs-offset-2": {
        "marginLeft": "16.66667%"
    },
    "col-xs-offset-3": {
        "marginLeft": "25%"
    },
    "col-xs-offset-4": {
        "marginLeft": "33.33333%"
    },
    "col-xs-offset-5": {
        "marginLeft": "41.66667%"
    },
    "col-xs-offset-6": {
        "marginLeft": "50%"
    },
    "col-xs-offset-7": {
        "marginLeft": "58.33333%"
    },
    "col-xs-offset-8": {
        "marginLeft": "66.66667%"
    },
    "col-xs-offset-9": {
        "marginLeft": "75%"
    },
    "col-xs-offset-10": {
        "marginLeft": "83.33333%"
    },
    "col-xs-offset-11": {
        "marginLeft": "91.66667%"
    },
    "col-xs-offset-12": {
        "marginLeft": "100%"
    },
    "label": {
        "display": "inline-block",
        "maxWidth": "100%",
        "marginBottom": 5,
        "fontWeight": "bold"
    },
    "input[type=\"file\"]": {
        "display": "block"
    },
    "input[type=\"range\"]": {
        "display": "block",
        "width": "100%"
    },
    "select[multiple]": {
        "height": "auto"
    },
    "select[size]": {
        "height": "auto"
    },
    "input[type=\"file\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"radio\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "input[type=\"checkbox\"]:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "output": {
        "display": "block",
        "paddingTop": 7,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#555"
    },
    "form-control": {
        "display": "block",
        "width": "100%",
        "height": 34,
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "color": "#555",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "border": "1px solid #ccc",
        "borderRadius": 4,
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "WebkitTransition": "border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s",
        "transition": "border-color ease-in-out 0.15s,box-shadow ease-in-out 0.15s"
    },
    "form-control:focus": {
        "borderColor": "#66afe9",
        "outline": 0,
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(102,175,233,0.6)"
    },
    "form-control::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#999"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#999"
    },
    "form-control[disabled]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee",
        "opacity": 1
    },
    "form-control[readonly]": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee",
        "opacity": 1
    },
    "fieldset[disabled] form-control": {
        "cursor": "not-allowed",
        "backgroundColor": "#eee",
        "opacity": 1
    },
    "textareaform-control": {
        "height": "auto"
    },
    "form-group": {
        "marginBottom": 15
    },
    "radio": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "checkbox": {
        "position": "relative",
        "display": "block",
        "marginTop": 10,
        "marginBottom": 10
    },
    "radio label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "checkbox label": {
        "minHeight": 20,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "radio input[type=\"radio\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "radio-inline input[type=\"radio\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "checkbox input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "checkbox-inline input[type=\"checkbox\"]": {
        "position": "absolute",
        "marginLeft": -20,
        "marginTop": "4px \\9"
    },
    "radio+radio": {
        "marginTop": -5
    },
    "checkbox+checkbox": {
        "marginTop": -5
    },
    "radio-inline": {
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "checkbox-inline": {
        "display": "inline-block",
        "paddingLeft": 20,
        "marginBottom": 0,
        "verticalAlign": "middle",
        "fontWeight": "normal",
        "cursor": "pointer"
    },
    "radio-inline+radio-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "checkbox-inline+checkbox-inline": {
        "marginTop": 0,
        "marginLeft": 10
    },
    "input[type=\"radio\"][disabled]": {
        "cursor": "not-allowed"
    },
    "input[type=\"radio\"]disabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=\"radio\"]": {
        "cursor": "not-allowed"
    },
    "input[type=\"checkbox\"][disabled]": {
        "cursor": "not-allowed"
    },
    "input[type=\"checkbox\"]disabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] input[type=\"checkbox\"]": {
        "cursor": "not-allowed"
    },
    "radio-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio-inline": {
        "cursor": "not-allowed"
    },
    "checkbox-inlinedisabled": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox-inline": {
        "cursor": "not-allowed"
    },
    "radiodisabled label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] radio label": {
        "cursor": "not-allowed"
    },
    "checkboxdisabled label": {
        "cursor": "not-allowed"
    },
    "fieldset[disabled] checkbox label": {
        "cursor": "not-allowed"
    },
    "form-control-static": {
        "paddingTop": 7,
        "paddingBottom": 7,
        "marginBottom": 0
    },
    "form-control-staticinput-lg": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "form-control-staticinput-sm": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "input-sm": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "selectinput-sm": {
        "height": 30,
        "lineHeight": 30
    },
    "textareainput-sm": {
        "height": "auto"
    },
    "select[multiple]input-sm": {
        "height": "auto"
    },
    "form-group-sm form-control": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "form-group-sm selectform-control": {
        "height": 30,
        "lineHeight": 30
    },
    "form-group-sm textareaform-control": {
        "height": "auto"
    },
    "form-group-sm select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-sm form-control-static": {
        "height": 30,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5
    },
    "input-lg": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33333,
        "borderRadius": 6
    },
    "selectinput-lg": {
        "height": 46,
        "lineHeight": 46
    },
    "textareainput-lg": {
        "height": "auto"
    },
    "select[multiple]input-lg": {
        "height": "auto"
    },
    "form-group-lg form-control": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33333,
        "borderRadius": 6
    },
    "form-group-lg selectform-control": {
        "height": 46,
        "lineHeight": 46
    },
    "form-group-lg textareaform-control": {
        "height": "auto"
    },
    "form-group-lg select[multiple]form-control": {
        "height": "auto"
    },
    "form-group-lg form-control-static": {
        "height": 46,
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33333
    },
    "has-feedback": {
        "position": "relative"
    },
    "has-feedback form-control": {
        "paddingRight": 42.5
    },
    "form-control-feedback": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "zIndex": 2,
        "display": "block",
        "width": 34,
        "height": 34,
        "lineHeight": 34,
        "textAlign": "center",
        "pointerEvents": "none"
    },
    "input-lg+form-control-feedback": {
        "width": 46,
        "height": 46,
        "lineHeight": 46
    },
    "input-sm+form-control-feedback": {
        "width": 30,
        "height": 30,
        "lineHeight": 30
    },
    "has-success help-block": {
        "color": "#3c763d"
    },
    "has-success control-label": {
        "color": "#3c763d"
    },
    "has-success radio": {
        "color": "#3c763d"
    },
    "has-success checkbox": {
        "color": "#3c763d"
    },
    "has-success radio-inline": {
        "color": "#3c763d"
    },
    "has-success checkbox-inline": {
        "color": "#3c763d"
    },
    "has-successradio label": {
        "color": "#3c763d"
    },
    "has-successcheckbox label": {
        "color": "#3c763d"
    },
    "has-successradio-inline label": {
        "color": "#3c763d"
    },
    "has-successcheckbox-inline label": {
        "color": "#3c763d"
    },
    "has-success form-control": {
        "borderColor": "#3c763d",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-success form-control:focus": {
        "borderColor": "#2b542c",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #67b168"
    },
    "has-success input-group-addon": {
        "color": "#3c763d",
        "borderColor": "#3c763d",
        "backgroundColor": "#dff0d8"
    },
    "has-success form-control-feedback": {
        "color": "#3c763d"
    },
    "has-warning help-block": {
        "color": "#8a6d3b"
    },
    "has-warning control-label": {
        "color": "#8a6d3b"
    },
    "has-warning radio": {
        "color": "#8a6d3b"
    },
    "has-warning checkbox": {
        "color": "#8a6d3b"
    },
    "has-warning radio-inline": {
        "color": "#8a6d3b"
    },
    "has-warning checkbox-inline": {
        "color": "#8a6d3b"
    },
    "has-warningradio label": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox label": {
        "color": "#8a6d3b"
    },
    "has-warningradio-inline label": {
        "color": "#8a6d3b"
    },
    "has-warningcheckbox-inline label": {
        "color": "#8a6d3b"
    },
    "has-warning form-control": {
        "borderColor": "#8a6d3b",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-warning form-control:focus": {
        "borderColor": "#66512c",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #c0a16b"
    },
    "has-warning input-group-addon": {
        "color": "#8a6d3b",
        "borderColor": "#8a6d3b",
        "backgroundColor": "#fcf8e3"
    },
    "has-warning form-control-feedback": {
        "color": "#8a6d3b"
    },
    "has-error help-block": {
        "color": "#a94442"
    },
    "has-error control-label": {
        "color": "#a94442"
    },
    "has-error radio": {
        "color": "#a94442"
    },
    "has-error checkbox": {
        "color": "#a94442"
    },
    "has-error radio-inline": {
        "color": "#a94442"
    },
    "has-error checkbox-inline": {
        "color": "#a94442"
    },
    "has-errorradio label": {
        "color": "#a94442"
    },
    "has-errorcheckbox label": {
        "color": "#a94442"
    },
    "has-errorradio-inline label": {
        "color": "#a94442"
    },
    "has-errorcheckbox-inline label": {
        "color": "#a94442"
    },
    "has-error form-control": {
        "borderColor": "#a94442",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "has-error form-control:focus": {
        "borderColor": "#843534",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #ce8483"
    },
    "has-error input-group-addon": {
        "color": "#a94442",
        "borderColor": "#a94442",
        "backgroundColor": "#f2dede"
    },
    "has-error form-control-feedback": {
        "color": "#a94442"
    },
    "has-feedback label ~ form-control-feedback": {
        "top": 25
    },
    "has-feedback labelsr-only ~ form-control-feedback": {
        "top": 0
    },
    "help-block": {
        "display": "block",
        "marginTop": 5,
        "marginBottom": 10,
        "color": "#737373"
    },
    "form-horizontal radio": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7,
        "minHeight": 27
    },
    "form-horizontal checkbox": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7,
        "minHeight": 27
    },
    "form-horizontal radio-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7
    },
    "form-horizontal checkbox-inline": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 7
    },
    "form-horizontal form-group": {
        "marginLeft": -15,
        "marginRight": -15
    },
    "form-horizontal form-group:before": {
        "content": " ",
        "display": "table"
    },
    "form-horizontal form-group:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "form-horizontal has-feedback form-control-feedback": {
        "right": 15
    },
    "btn": {
        "display": "inline-block",
        "marginBottom": 0,
        "fontWeight": "500",
        "textAlign": "center",
        "verticalAlign": "middle",
        "MsTouchAction": "manipulation",
        "touchAction": "manipulation",
        "cursor": "pointer",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "whiteSpace": "nowrap",
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "lineHeight": 1.42857,
        "borderRadius": 4,
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "WebkitTransition": "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "transition": "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    },
    "btn:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#333",
        "textDecoration": "none"
    },
    "btnfocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2,
        "color": "#333",
        "textDecoration": "none"
    },
    "btn:active:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:activefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactive:focus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btnactivefocus": {
        "outline": "5px auto -webkit-focus-ring-color",
        "outlineOffset": -2
    },
    "btn:hover": {
        "color": "#333",
        "textDecoration": "none"
    },
    "btn:active": {
        "outline": 0,
        "backgroundImage": "none",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btnactive": {
        "outline": 0,
        "backgroundImage": "none",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "btndisabled": {
        "cursor": "not-allowed",
        "pointerEvents": "none",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "boxShadow": "none"
    },
    "btn[disabled]": {
        "cursor": "not-allowed",
        "pointerEvents": "none",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn": {
        "cursor": "not-allowed",
        "pointerEvents": "none",
        "opacity": 0.65,
        "filter": "alpha(opacity=65)",
        "boxShadow": "none"
    },
    "btn-default": {
        "color": "#333",
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default:hover": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "btn-default:focus": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "btn-defaultfocus": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "btn-default:active": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-defaultactive": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "open>btn-defaultdropdown-toggle": {
        "color": "#333",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad",
        "backgroundImage": "none"
    },
    "btn-defaultdisabled": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabledfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabled:active": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-defaultdisabledactive": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]:active": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default[disabled]active": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:hover": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:focus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-defaultfocus": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-default:active": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "fieldset[disabled] btn-defaultactive": {
        "backgroundColor": "#fff",
        "borderColor": "#ccc"
    },
    "btn-default badge": {
        "color": "#fff",
        "backgroundColor": "#333"
    },
    "btn-primary": {
        "color": "#fff !important",
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "textTransform": "uppercase",
        "border": 0,
        "background": "#4285f4 !important"
    },
    "btn-primary:hover": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "outline": "none",
        "background": "#3266d5"
    },
    "btn-primary:focus": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "outline": "none",
        "background": "#3266d5"
    },
    "btn-primaryfocus": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74"
    },
    "btn-primary:active": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none",
        "outline": "none",
        "background": "#3266d5"
    },
    "btn-primaryactive": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none",
        "outline": "none",
        "background": "#3266d5"
    },
    "open>btn-primarydropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#286090",
        "borderColor": "#204d74",
        "backgroundImage": "none"
    },
    "btn-primarydisabled": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabled:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabled:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabledfocus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabled:active": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primarydisabledactive": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]:active": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary[disabled]active": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary:hover": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary:focus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primaryfocus": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primary:active": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "fieldset[disabled] btn-primaryactive": {
        "backgroundColor": "#337ab7",
        "borderColor": "#2e6da4"
    },
    "btn-primary badge": {
        "color": "#337ab7",
        "backgroundColor": "#fff"
    },
    "btn-success": {
        "color": "#fff",
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success:hover": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439"
    },
    "btn-success:focus": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439"
    },
    "btn-successfocus": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439"
    },
    "btn-success:active": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "btn-successactive": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "open>btn-successdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#449d44",
        "borderColor": "#398439",
        "backgroundImage": "none"
    },
    "btn-successdisabled": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabled:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabled:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabledfocus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabled:active": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-successdisabledactive": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]:active": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success[disabled]active": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success:hover": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success:focus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-successfocus": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-success:active": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "fieldset[disabled] btn-successactive": {
        "backgroundColor": "#5cb85c",
        "borderColor": "#4cae4c"
    },
    "btn-success badge": {
        "color": "#5cb85c",
        "backgroundColor": "#fff"
    },
    "btn-info": {
        "color": "#fff",
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info:hover": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc"
    },
    "btn-info:focus": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc"
    },
    "btn-infofocus": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc"
    },
    "btn-info:active": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "btn-infoactive": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "open>btn-infodropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#31b0d5",
        "borderColor": "#269abc",
        "backgroundImage": "none"
    },
    "btn-infodisabled": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabled:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabled:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabledfocus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabled:active": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-infodisabledactive": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]:active": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info[disabled]active": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info:hover": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info:focus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-infofocus": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-info:active": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "fieldset[disabled] btn-infoactive": {
        "backgroundColor": "#5bc0de",
        "borderColor": "#46b8da"
    },
    "btn-info badge": {
        "color": "#5bc0de",
        "backgroundColor": "#fff"
    },
    "btn-warning": {
        "color": "#fff",
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning:hover": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512"
    },
    "btn-warning:focus": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512"
    },
    "btn-warningfocus": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512"
    },
    "btn-warning:active": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "btn-warningactive": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "open>btn-warningdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#ec971f",
        "borderColor": "#d58512",
        "backgroundImage": "none"
    },
    "btn-warningdisabled": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabled:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabled:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabledfocus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabled:active": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warningdisabledactive": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]:active": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning[disabled]active": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning:hover": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning:focus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warningfocus": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warning:active": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "fieldset[disabled] btn-warningactive": {
        "backgroundColor": "#f0ad4e",
        "borderColor": "#eea236"
    },
    "btn-warning badge": {
        "color": "#f0ad4e",
        "backgroundColor": "#fff"
    },
    "btn-danger": {
        "color": "#fff",
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger:hover": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925"
    },
    "btn-danger:focus": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925"
    },
    "btn-dangerfocus": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925"
    },
    "btn-danger:active": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "btn-dangeractive": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "open>btn-dangerdropdown-toggle": {
        "color": "#fff",
        "backgroundColor": "#c9302c",
        "borderColor": "#ac2925",
        "backgroundImage": "none"
    },
    "btn-dangerdisabled": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabled:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabled:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabledfocus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabled:active": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-dangerdisabledactive": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]:active": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger[disabled]active": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger:hover": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger:focus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-dangerfocus": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-danger:active": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "fieldset[disabled] btn-dangeractive": {
        "backgroundColor": "#d9534f",
        "borderColor": "#d43f3a"
    },
    "btn-danger badge": {
        "color": "#d9534f",
        "backgroundColor": "#fff"
    },
    "btn-link": {
        "color": "#03a9f4",
        "fontWeight": "normal",
        "borderRadius": 0,
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-link:active": {
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "borderColor": "transparent"
    },
    "btn-linkactive": {
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btn-link[disabled]": {
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "fieldset[disabled] btn-link": {
        "backgroundColor": "transparent",
        "boxShadow": "none"
    },
    "btn-link:hover": {
        "borderColor": "transparent",
        "color": "#0275a8",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link:focus": {
        "borderColor": "transparent",
        "color": "#0275a8",
        "textDecoration": "underline",
        "backgroundColor": "transparent"
    },
    "btn-link[disabled]:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-link[disabled]:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:hover": {
        "color": "#777",
        "textDecoration": "none"
    },
    "fieldset[disabled] btn-link:focus": {
        "color": "#777",
        "textDecoration": "none"
    },
    "btn-lg": {
        "paddingTop": 10,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 18,
        "lineHeight": 1.33333,
        "borderRadius": 6
    },
    "btn-sm": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-xs": {
        "paddingTop": 1,
        "paddingRight": 5,
        "paddingBottom": 1,
        "paddingLeft": 5,
        "fontSize": 12,
        "lineHeight": 1.5,
        "borderRadius": 3
    },
    "btn-block": {
        "display": "block",
        "width": "100%"
    },
    "btn-block+btn-block": {
        "marginTop": 5
    },
    "input[type=\"submit\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"reset\"]btn-block": {
        "width": "100%"
    },
    "input[type=\"button\"]btn-block": {
        "width": "100%"
    },
    "fade": {
        "opacity": 0,
        "WebkitTransition": "opacity 0.15s linear",
        "transition": "opacity 0.15s linear"
    },
    "fadein": {
        "opacity": 1
    },
    "collapse": {
        "display": "none",
        "visibility": "hidden"
    },
    "collapsein": {
        "display": "block",
        "visibility": "visible"
    },
    "trcollapsein": {
        "display": "table-row"
    },
    "tbodycollapsein": {
        "display": "table-row-group"
    },
    "collapsing": {
        "position": "relative",
        "height": 0,
        "overflow": "hidden",
        "WebkitTransitionProperty": "height,visibility",
        "transitionProperty": "height,visibility",
        "WebkitTransitionDuration": "0.35s",
        "transitionDuration": "0.35s",
        "WebkitTransitionTimingFunction": "ease",
        "transitionTimingFunction": "ease"
    },
    "jumbotron": {
        "paddingTop": 30,
        "paddingRight": 15,
        "paddingBottom": 30,
        "paddingLeft": 15,
        "marginBottom": 0,
        "color": "#fff",
        "backgroundColor": "#eee",
        "position": "relative",
        "left": 26,
        "marginTop": 200,
        "marginRight": 0,
        "marginLeft": 0,
        "background": 0
    },
    "jumbotron h1": {
        "color": "inherit"
    },
    "jumbotron p": {
        "marginBottom": 15,
        "fontSize": 21,
        "fontWeight": "200"
    },
    "jumbotron>hr": {
        "borderTopColor": "#d5d5d5"
    },
    "container jumbotron": {
        "borderRadius": 6
    },
    "container-fluid jumbotron": {
        "borderRadius": 6
    },
    "jumbotron container": {
        "maxWidth": "100%"
    },
    "thumbnail": {
        "display": "block",
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "marginBottom": 20,
        "lineHeight": 1.42857,
        "backgroundColor": "#fff",
        "border": "1px solid #ddd",
        "borderRadius": 4,
        "WebkitTransition": "border 0.2s ease-in-out",
        "transition": "border 0.2s ease-in-out"
    },
    "thumbnail>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail a>img": {
        "display": "block",
        "maxWidth": "100%",
        "height": "auto",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "thumbnail caption": {
        "paddingTop": 9,
        "paddingRight": 9,
        "paddingBottom": 9,
        "paddingLeft": 9,
        "color": "#333"
    },
    "athumbnail:hover": {
        "borderColor": "#03a9f4"
    },
    "athumbnail:focus": {
        "borderColor": "#03a9f4"
    },
    "athumbnailactive": {
        "borderColor": "#03a9f4"
    },
    "media": {
        "marginTop": 15,
        "zoom": 1,
        "overflow": "hidden"
    },
    "media:first-child": {
        "marginTop": 0
    },
    "media-body": {
        "zoom": 1,
        "overflow": "hidden",
        "width": 10000,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media-object": {
        "display": "block"
    },
    "media-right": {
        "paddingLeft": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-right": {
        "paddingLeft": 10
    },
    "media-left": {
        "paddingRight": 10,
        "display": "table-cell",
        "verticalAlign": "top"
    },
    "media>pull-left": {
        "paddingRight": 10
    },
    "media-middle": {
        "verticalAlign": "middle"
    },
    "media-bottom": {
        "verticalAlign": "bottom"
    },
    "media-heading": {
        "marginTop": 0,
        "marginBottom": 5
    },
    "media-list": {
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "embed-responsive": {
        "position": "relative",
        "display": "block",
        "height": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden"
    },
    "embed-responsive embed-responsive-item": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive iframe": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive embed": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive object": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsive video": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "height": "100%",
        "width": "100%",
        "border": 0
    },
    "embed-responsiveembed-responsive-16by9": {
        "paddingBottom": "56.25%"
    },
    "embed-responsiveembed-responsive-4by3": {
        "paddingBottom": "75%"
    },
    "close": {
        "float": "right",
        "fontSize": 21,
        "fontWeight": "bold",
        "lineHeight": 1,
        "color": "#000",
        "textShadow": "0 1px 0 #fff",
        "opacity": 0.2,
        "filter": "alpha(opacity=20)"
    },
    "close:hover": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "close:focus": {
        "color": "#000",
        "textDecoration": "none",
        "cursor": "pointer",
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "buttonclose": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "cursor": "pointer",
        "background": "transparent",
        "border": 0,
        "WebkitAppearance": "none"
    },
    "modal-open": {
        "overflow": "hidden"
    },
    "modal": {
        "display": "none",
        "overflow": "hidden",
        "position": "fixed",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "zIndex": 1050,
        "WebkitOverflowScrolling": "touch",
        "outline": 0
    },
    "modalfade modal-dialog": {
        "WebkitTransform": "translate(0, -25%)",
        "MsTransform": "translate(0, -25%)",
        "transform": "translate(0, -25%)",
        "WebkitTransition": "-webkit-transform 0.3s ease-out",
        "transition": "transform 0.3s ease-out"
    },
    "modalin modal-dialog": {
        "WebkitTransform": "translate(0, 0)",
        "MsTransform": "translate(0, 0)",
        "transform": "translate(0, 0)"
    },
    "modal-open modal": {
        "overflowX": "hidden",
        "overflowY": "auto"
    },
    "modal-dialog": {
        "position": "relative",
        "width": "auto",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "modal-content": {
        "position": "relative",
        "backgroundColor": "#fff",
        "border": "1px solid rgba(0,0,0,0.2)",
        "borderRadius": 4,
        "boxShadow": "0 5px 15px rgba(0,0,0,0.3)",
        "backgroundClip": "padding-box",
        "outline": 0
    },
    "modal-backdrop": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "left": 0,
        "backgroundColor": "#000",
        "bottom": 0,
        "zIndex": 1040
    },
    "modal-backdropfade": {
        "opacity": 0,
        "filter": "alpha(opacity=0)"
    },
    "modal-backdropin": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "modal-header": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "borderBottom": "1px solid #e5e5e5",
        "minHeight": 16.42857
    },
    "modal-header close": {
        "marginTop": -2
    },
    "modal-title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 1.42857
    },
    "modal-body": {
        "position": "relative",
        "paddingTop": 16,
        "paddingRight": 31,
        "paddingBottom": 16,
        "paddingLeft": 31,
        "color": "#757575"
    },
    "modal-footer": {
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "textAlign": "right",
        "borderTop": "1px solid #e5e5e5"
    },
    "modal-footer:before": {
        "content": " ",
        "display": "table"
    },
    "modal-footer:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "modal-footer btn+btn": {
        "marginLeft": 5,
        "marginBottom": 0
    },
    "modal-footer btn-group btn+btn": {
        "marginLeft": -1
    },
    "modal-footer btn-block+btn-block": {
        "marginLeft": 0
    },
    "modal-scrollbar-measure": {
        "position": "absolute",
        "top": -9999,
        "width": 50,
        "height": 50,
        "overflow": "scroll"
    },
    "clearfix:before": {
        "content": " ",
        "display": "table"
    },
    "clearfix:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "center-block": {
        "display": "block",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "pull-right": {
        "float": "right !important"
    },
    "pull-left": {
        "float": "left !important"
    },
    "hide": {
        "display": "none !important"
    },
    "show": {
        "display": "block !important"
    },
    "invisible": {
        "visibility": "hidden"
    },
    "text-hide": {
        "font": "0/0 a",
        "color": "transparent",
        "textShadow": "none",
        "backgroundColor": "transparent",
        "border": 0
    },
    "hidden": {
        "display": "none !important",
        "visibility": "hidden !important"
    },
    "affix": {
        "position": "fixed"
    },
    "@-ms-viewport": {
        "width": "device-width"
    },
    "visible-xs": {
        "display": "none !important"
    },
    "visible-sm": {
        "display": "none !important"
    },
    "visible-md": {
        "display": "none !important"
    },
    "visible-lg": {
        "display": "none !important"
    },
    "visible-xs-block": {
        "display": "none !important"
    },
    "visible-xs-inline": {
        "display": "none !important"
    },
    "visible-xs-inline-block": {
        "display": "none !important"
    },
    "visible-sm-block": {
        "display": "none !important"
    },
    "visible-sm-inline": {
        "display": "none !important"
    },
    "visible-sm-inline-block": {
        "display": "none !important"
    },
    "visible-md-block": {
        "display": "none !important"
    },
    "visible-md-inline": {
        "display": "none !important"
    },
    "visible-md-inline-block": {
        "display": "none !important"
    },
    "visible-lg-block": {
        "display": "none !important"
    },
    "visible-lg-inline": {
        "display": "none !important"
    },
    "visible-lg-inline-block": {
        "display": "none !important"
    },
    "visible-print": {
        "display": "none !important"
    },
    "visible-print-block": {
        "display": "none !important"
    },
    "visible-print-inline": {
        "display": "none !important"
    },
    "visible-print-inline-block": {
        "display": "none !important"
    },
    "fadeIn": {
        "WebkitAnimationName": "fadeIn",
        "animationName": "fadeIn"
    },
    "fadeInDown": {
        "WebkitAnimationName": "fadeInDown",
        "animationName": "fadeInDown"
    },
    "fadeInLeft": {
        "WebkitAnimationName": "fadeInLeft",
        "animationName": "fadeInLeft"
    },
    "fadeInRight": {
        "WebkitAnimationName": "fadeInRight",
        "animationName": "fadeInRight"
    },
    "fadeInUp": {
        "WebkitAnimationName": "fadeInUp",
        "animationName": "fadeInUp"
    },
    "waves-effect": {
        "position": "relative",
        "cursor": "pointer",
        "display": "inline-block",
        "overflow": "hidden",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "WebkitTapHighlightColor": "transparent",
        "WebkitTransition": "all 0.3s ease-out",
        "transition": "all 0.3s ease-out"
    },
    "waves-effect waves-ripple": {
        "position": "absolute",
        "borderRadius": "50%",
        "width": 100,
        "height": 100,
        "marginTop": -50,
        "marginLeft": -50,
        "opacity": 0,
        "background": "radial-gradient(rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.3) 40%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.5) 60%,rgba(255,255,255,0) 70%)",
        "WebkitTransition": "all 0.5s ease-out",
        "transition": "all 0.5s ease-out",
        "WebkitTransitionProperty": "-webkit-transform, opacity",
        "transitionProperty": "transform, opacity",
        "WebkitTransform": "scale(0)",
        "MsTransform": "scale(0)",
        "transform": "scale(0)",
        "pointerEvents": "none"
    },
    "waves-effectwaves-light waves-ripple": {
        "background": "radial-gradient(rgba(255,255,255,0.2) 0%,rgba(255,255,255,0.3) 40%,rgba(255,255,255,0.4) 50%,rgba(255,255,255,0.5) 60%,rgba(255,255,255,0) 70%)"
    },
    "waves-effectwaves-classic waves-ripple": {
        "background": "rgba(0,0,0,0.2)"
    },
    "waves-effectwaves-classicwaves-light waves-ripple": {
        "background": "rgba(255,255,255,0.4)"
    },
    "waves-notransition": {
        "WebkitTransition": "none !important",
        "transition": "none !important"
    },
    "waves-button": {
        "WebkitTransform": "translateZ(0)",
        "MsTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitMaskImage": "-webkit-radial-gradient(circle, #fff 100%, #000 100%)",
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "border": "none",
        "outline": "none",
        "color": "inherit",
        "backgroundColor": "transparent",
        "fontSize": 1,
        "lineHeight": 1,
        "textAlign": "center",
        "textDecoration": "none",
        "zIndex": 1,
        "paddingTop": 0.85,
        "paddingRight": 1.1,
        "paddingBottom": 0.85,
        "paddingLeft": 1.1,
        "borderRadius": 0.2
    },
    "waves-circle": {
        "WebkitTransform": "translateZ(0)",
        "MsTransform": "translateZ(0)",
        "transform": "translateZ(0)",
        "WebkitMaskImage": "-webkit-radial-gradient(circle, #fff 100%, #000 100%)",
        "textAlign": "center",
        "width": 2.5,
        "height": 2.5,
        "lineHeight": 2.5,
        "borderRadius": "50%"
    },
    "waves-button:hover": {
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "border": "none",
        "outline": "none",
        "color": "inherit",
        "backgroundColor": "transparent",
        "fontSize": 1,
        "lineHeight": 1,
        "textAlign": "center",
        "textDecoration": "none",
        "zIndex": 1
    },
    "waves-button:visited": {
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "border": "none",
        "outline": "none",
        "color": "inherit",
        "backgroundColor": "transparent",
        "fontSize": 1,
        "lineHeight": 1,
        "textAlign": "center",
        "textDecoration": "none",
        "zIndex": 1
    },
    "waves-button-input": {
        "whiteSpace": "nowrap",
        "verticalAlign": "middle",
        "cursor": "pointer",
        "border": "none",
        "outline": "none",
        "color": "inherit",
        "backgroundColor": "transparent",
        "fontSize": 1,
        "lineHeight": 1,
        "textAlign": "center",
        "textDecoration": "none",
        "zIndex": 1,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0.85,
        "paddingRight": 1.1,
        "paddingBottom": 0.85,
        "paddingLeft": 1.1
    },
    "waves-input-wrapper": {
        "borderRadius": 0.2,
        "verticalAlign": "bottom"
    },
    "waves-input-wrapperwaves-button": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "waves-input-wrapper waves-button-input": {
        "position": "relative",
        "top": 0,
        "left": 0,
        "zIndex": 1
    },
    "waves-float": {
        "WebkitMaskImage": "none",
        "boxShadow": "0px 1px 1.5px 1px rgba(0,0,0,0.12)"
    },
    "waves-float:active": {
        "boxShadow": "0px 8px 20px 1px rgba(0,0,0,0.3)"
    },
    "waves-block": {
        "display": "block"
    },
    "awaves-effect waves-ripple": {
        "zIndex": -1
    },
    "section h3": {
        "marginBottom": 50
    },
    "i": {
        "fontStyle": "normal"
    },
    "time": {
        "display": "block"
    },
    "st-content": {
        "height": "100%",
        "position": "relative"
    },
    "st-container": {
        "height": "100%",
        "position": "relative"
    },
    "st-pusher": {
        "height": "100%",
        "position": "relative",
        "zIndex": 99,
        "left": 0,
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "st-content-inner": {
        "position": "relative"
    },
    "st-pusher::after": {
        "position": "fixed",
        "top": 0,
        "right": 0,
        "width": 0,
        "height": 0,
        "content": "''",
        "WebkitTransition": "opacity .5s, width .1s .5s, height .1s .5s",
        "transition": "opacity .5s, width .1s .5s, height .1s .5s",
        "opacity": 0,
        "background": "rgba(0,0,0,0.2)"
    },
    "st-menu-open st-pusher::after": {
        "zIndex": 100,
        "width": "100%",
        "height": "100%",
        "WebkitTransition": "opacity .5s",
        "transition": "opacity .5s",
        "opacity": 1
    },
    "preloader": {
        "position": "fixed",
        "zIndex": 9999,
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "backgroundColor": "#fff"
    },
    "loader-gplus": {
        "display": "inline-block",
        "position": "absolute",
        "top": "calc(50% - 20px)",
        "left": "calc(50% - 20px)",
        "width": 40,
        "height": 40,
        "overflow": "hidden",
        "borderRadius": 20,
        "WebkitAnimation": "base 3s steps(1) 0s infinite",
        "animation": "base 3s steps(1) 0s infinite"
    },
    "loader-gplus::before": {
        "content": "' '",
        "display": "block",
        "width": "50%",
        "height": "100%",
        "overflow": "hidden",
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "zIndex": 2,
        "borderRadius": "0 20px 20px 0",
        "WebkitTransformOrigin": "0 50%",
        "MsTransformOrigin": "0 50%",
        "transformOrigin": "0 50%",
        "WebkitTransformStyle": "preserve-3d",
        "transformStyle": "preserve-3d",
        "WebkitAnimation": "flip 3s linear 0s infinite",
        "animation": "flip 3s linear 0s infinite"
    },
    "loader-gplus::after": {
        "content": "' '",
        "display": "block",
        "width": "50%",
        "height": "100%",
        "overflow": "hidden",
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "zIndex": 1,
        "borderRadius": "0 20px 20px 0",
        "WebkitTransformOrigin": "0 50%",
        "MsTransformOrigin": "0 50%",
        "transformOrigin": "0 50%",
        "WebkitAnimation": "reveal 3s steps(1) 0s infinite",
        "animation": "reveal 3s steps(1) 0s infinite"
    },
    "social-links li": {
        "marginRight": 4,
        "display": "inline-block"
    },
    "content-wrapper": {
        "position": "relative",
        "zIndex": 1,
        "height": "100%"
    },
    "bordered": {
        "display": "inline-block",
        "color": "rgba(255,255,255,0.6)",
        "border": "1px solid rgba(255,255,255,0.6)",
        "borderRadius": 0
    },
    "bordereddark-border": {
        "color": "rgba(51,51,51,0.6)",
        "borderColor": "rgba(51,51,51,0.6)"
    },
    "colored": {
        "color": "#4285f4",
        "fill": "#4285f4"
    },
    "image-section": {
        "color": "#fff",
        "fontWeight": "100",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center !important",
        "backgroundSize": "cover !important"
    },
    "image-sectionparallax": {
        "boxShadow": "inset 0 0 12px 3px rgba(0,0,0,0.75)"
    },
    "image-sectionstandart-height": {
        "minHeight": 500
    },
    "bottom-section-link": {
        "textTransform": "uppercase",
        "paddingTop": 7,
        "paddingRight": 17,
        "paddingBottom": 7,
        "paddingLeft": 17
    },
    "card": {
        "position": "relative",
        "overflow": "hidden",
        "height": "100%",
        "marginBottom": 10,
        "paddingTop": 24,
        "paddingRight": 24,
        "paddingBottom": 50,
        "paddingLeft": 24,
        "borderRadius": 4,
        "background": "#fff",
        "boxShadow": "0 1px 7px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.15)"
    },
    "same-height": {
        "marginBottom": 15
    },
    "slider": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "overlay": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0
    },
    "overlaysolid-overlay": {
        "background": "rgba(37,32,31,0.8)"
    },
    "overlaywhite-solid": {
        "background": "rgba(255,255,255,0.9)"
    },
    "overlaygradient-overlay": {
        "background": "linear-gradient(to bottom, rgba(0,0,0,0.32) 0%,rgba(0,0,0,0) 32%,rgba(0,0,0,0.64) 100%)"
    },
    "col-centered": {
        "float": "none",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "cols-centered": {
        "display": "inline-block",
        "float": "none !important",
        "marginRight": -4,
        "textAlign": "left"
    },
    "hiding": {
        "opacity": 0
    },
    "visible": {
        "opacity": 1
    },
    "flow-img": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%",
        "backgroundPosition": "center center",
        "backgroundSize": "cover"
    },
    "typed-cursor": {
        "fontWeight": "100",
        "WebkitAnimation": "blink .7s infinite",
        "animation": "blink .7s infinite",
        "opacity": 1
    },
    "animated": {
        "WebkitAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animatedhinge": {
        "WebkitAnimationDuration": "2s",
        "animationDuration": "2s"
    },
    "appear-animation": {
        "WebkitTransitionTimingFunction": "ease-out",
        "transitionTimingFunction": "ease-out",
        "WebkitTransform": "scale(0)",
        "MsTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "appear-animationvisible": {
        "WebkitTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "flexbox-wrapper": {
        "display": "flex"
    },
    "flexbox-item-height": {
        "WebkitBoxFlex": 1,
        "WebkitFlex": 1,
        "MsFlex": 1,
        "flex": 1
    },
    "reset-padding": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "logo": {
        "backgroundImage": "url(\"../img/sprites/logos.png\")",
        "backgroundRepeat": "no-repeat"
    },
    "logologo-dark": {
        "backgroundPosition": "0 -1px"
    },
    "logologo-gray": {
        "backgroundPosition": "0 -63px"
    },
    "logologo-light": {
        "backgroundPosition": "0 -127px"
    },
    "icon": {
        "display": "inline-block",
        "width": 16,
        "height": 16,
        "cursor": "pointer",
        "fill": "#8b8b8b",
        "WebkitTransition": "all .5s",
        "transition": "all .5s"
    },
    "icon-vk:hover": {
        "fill": "#4c75a3"
    },
    "icon-rss:hover": {
        "fill": "#f99638"
    },
    "icon-site:hover": {
        "fill": "#ba620b"
    },
    "icon-email:hover": {
        "fill": "#e34c41"
    },
    "icon-skype:hover": {
        "fill": "#01aef2"
    },
    "icon-github:hover": {
        "fill": "#464646"
    },
    "icon-twitter:hover": {
        "fill": "#1bb2e9"
    },
    "icon-youtube:hover": {
        "fill": "#cc181e"
    },
    "icon-facebook:hover": {
        "fill": "#3c599b"
    },
    "icon-pinterest:hover": {
        "fill": "#ed0103"
    },
    "icon-linkedin:hover": {
        "fill": "#017eb4"
    },
    "icon-direction:hover": {
        "fill": "#3a84df"
    },
    "icon-google-plus:hover": {
        "fill": "#ce352c"
    },
    "icon-stack-overflow:hover": {
        "fill": "#ef7c02"
    },
    "top-header": {
        "position": "fixed",
        "zIndex": 500,
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 45,
        "paddingBottom": 0,
        "paddingLeft": 45
    },
    "top-headerafter-scroll": {
        "paddingTop": 0,
        "boxShadow": "0 0 5px rgba(0,0,0,0.2),0 1px 0 rgba(255,255,255,0.15)"
    },
    "top-headerafter-scroll overlay": {
        "opacity": 1
    },
    "top-header overlay": {
        "opacity": 0,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "logo-header": {
        "display": "block",
        "WebkitTransform": "translateY(20px)",
        "MsTransform": "translateY(20px)",
        "transform": "translateY(20px)",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "top-headerafter-scroll logo-header": {
        "WebkitTransform": "translateY(1px)",
        "MsTransform": "translateY(1px)",
        "transform": "translateY(1px)"
    },
    "logo-header logo": {
        "display": "inline-block",
        "float": "left",
        "width": 185,
        "height": 60,
        "marginRight": 20,
        "WebkitTransform": "scale(0.7)",
        "MsTransform": "scale(0.7)",
        "transform": "scale(0.7)",
        "verticalAlign": "middle"
    },
    "logo-navbar": {
        "width": 185,
        "height": 60,
        "marginTop": 8,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": -10,
        "WebkitTransform": "scale(0.6)",
        "MsTransform": "scale(0.6)",
        "transform": "scale(0.6)",
        "verticalAlign": "middle"
    },
    "st-menu-open nav": {
        "WebkitTransform": "translate(0)",
        "MsTransform": "translate(0)",
        "transform": "translate(0)"
    },
    "nav ul": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "textAlign": "left",
        "WebkitTransform": "translateY(40px)",
        "MsTransform": "translateY(40px)",
        "transform": "translateY(40px)",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "top-headerafter-scroll nav ul": {
        "WebkitTransform": "translateY(20px)",
        "MsTransform": "translateY(20px)",
        "transform": "translateY(20px)"
    },
    "nav li": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "verticalAlign": "middle"
    },
    "nav li a": {
        "fontSize": 13,
        "fontWeight": "300",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "textTransform": "uppercase",
        "color": "#fff"
    },
    "nav li acurrent": {
        "textDecoration": "none",
        "color": "#cfcfcf"
    },
    "nav li a:hover": {
        "textDecoration": "none",
        "color": "#cfcfcf"
    },
    "top-headerafter-scroll nav li a": {
        "color": "rgba(0,0,0,0.5)"
    },
    "top-headerafter-scroll nav li acurrent": {
        "color": "rgba(0,0,0,0.8)"
    },
    "top-headerafter-scroll nav li a:hover": {
        "color": "rgba(0,0,0,0.8)"
    },
    "right-nav-button": {
        "marginTop": 11,
        "marginRight": 11,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "opacity": 1,
        "display": "block"
    },
    "right-nav-button:nth-of-type(1)": {
        "marginRight": 65
    },
    "right-nav-button a": {
        "fontSize": 11.7
    },
    "right-nav-buttonright-nav-button-hidden": {
        "opacity": 0,
        "WebkitTransform": "translateY(-50px)",
        "MsTransform": "translateY(-50px)",
        "transform": "translateY(-50px)"
    },
    "icon-menu": {
        "width": 20,
        "height": 20,
        "fill": "#e6e6e6"
    },
    "top-headerafter-scroll icon-menu": {
        "fill": "#464646"
    },
    "menu-trigger": {
        "float": "right",
        "WebkitTransform": "translateY(20px)",
        "MsTransform": "translateY(20px)",
        "transform": "translateY(20px)",
        "right": 45,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "bottom-navlinks": {
        "position": "absolute",
        "bottom": 26
    },
    "bottom-navlinks-small": {
        "position": "relative",
        "bottom": 26,
        "marginTop": "75px !important"
    },
    "top-section-hero": {
        "width": "100%",
        "height": "100%",
        "paddingTop": 0
    },
    "top-section-hero jumbotron": {
        "position": "relative",
        "top": "50%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "left": 0,
        "WebkitTransform": "translateY(-60%)",
        "MsTransform": "translateY(-60%)",
        "transform": "translateY(-60%)"
    },
    "top-section-hero jumbotron p": {
        "fontSize": 26,
        "fontWeight": "100",
        "marginBottom": 15
    },
    "top-section-hero jumbotron btn": {
        "marginTop": 0,
        "marginRight": 3,
        "marginBottom": 0,
        "marginLeft": 3
    },
    "typeout-fallback": {
        "display": "none"
    },
    "explore": {
        "marginLeft": -16,
        "position": "absolute",
        "bottom": -25,
        "left": "50%",
        "WebkitAnimation": "callToAction 3.5s linear 0s infinite",
        "animation": "callToAction 3.5s linear 0s infinite"
    },
    "icon-arrow-down": {
        "width": 32,
        "height": 32,
        "fill": "#e6e6e6"
    },
    "top-section": {
        "position": "relative",
        "minHeight": 400,
        "paddingTop": 0,
        "background": "#03a9f4"
    },
    "top-section gradient-overlay": {
        "opacity": 0
    },
    "top-sectionenable-overlay gradient-overlay": {
        "opacity": 1
    },
    "about-details img": {
        "width": 128
    },
    "about-details p": {
        "marginTop": 10
    },
    "statistic stat": {
        "fontSize": 100,
        "color": "#03a9f4"
    },
    "statistic stat-info": {
        "fontSize": 23
    },
    "statistic hr": {
        "width": 20,
        "borderTop": "1px solid #03a9f4"
    },
    "statistic small": {
        "fontSize": 15
    },
    "latest-news post": {
        "marginBottom": 40
    },
    "rockstar-speakers name": {
        "fontSize": 26,
        "lineHeight": 1.1,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "rockstar-speakers sub": {
        "fontSize": 18.2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "color": "#03a9f4"
    },
    "rockstar-speaker": {
        "paddingBottom": 13
    },
    "rockstar-speaker-img": {
        "width": 140,
        "height": 140,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "pricing-col": {
        "overflow": "hidden",
        "marginBottom": 26,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": 16,
        "fontWeight": "100",
        "textAlign": "center",
        "border": "1px #ddd solid",
        "borderRight": "none"
    },
    "pricing-col:last-child": {
        "borderRight": "1px #ddd solid",
        "borderLeft": "none"
    },
    "pricing-colpricing-col-featured": {
        "top": -27
    },
    "pricing-colpricing-col-featured:not(:first-child)": {
        "marginLeft": 0,
        "border": "solid 1px #4285f4"
    },
    "pricing-colpricing-col-featured pricing-ribbon": {
        "background": "#4285f4"
    },
    "pricing-colpricing-col-featured title": {
        "marginBottom": 33
    },
    "pricing-colpricing-col-featured price": {
        "marginBottom": 30,
        "color": "#4285f4"
    },
    "pricing-colpricing-col-featured pricing-content": {
        "paddingTop": 2
    },
    "pricing-colpricing-col-featured button": {
        "marginTop": 45,
        "background": "#4285f4"
    },
    "pricing-colpricing-col-featured button:hover": {
        "background": "#3266d5"
    },
    "pricing-colpricing-col-featured buttondisabled:hover": {
        "background": "#4285f4"
    },
    "pricing-col title": {
        "fontSize": 32,
        "fontWeight": "100",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "background": "#f2f2f2"
    },
    "pricing-col price": {
        "marginTop": 30,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 26,
        "paddingRight": 0,
        "paddingBottom": 26,
        "paddingLeft": 0,
        "fontSize": 65,
        "fontWeight": "100",
        "color": "#000"
    },
    "pricing-col currency": {
        "fontSize": 32
    },
    "pricing-col button": {
        "fontSize": 32,
        "display": "block",
        "marginTop": 30,
        "paddingTop": 7,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "color": "#fff",
        "background": "#333",
        "fontWeight": "100",
        "textDecoration": "none"
    },
    "pricing-col button:hover": {
        "background": "#4d4d4d"
    },
    "pricing-col buttondisabled:hover": {
        "background": "#333"
    },
    "pricing-col buttonfallback": {
        "fontSize": 18,
        "lineHeight": 1.4
    },
    "pricing-col pricing-ribbon": {
        "position": "absolute",
        "top": 10,
        "right": -45,
        "paddingTop": 5,
        "paddingRight": 50,
        "paddingBottom": 5,
        "paddingLeft": 50,
        "WebkitTransform": "rotate(45deg)",
        "MsTransform": "rotate(45deg)",
        "transform": "rotate(45deg)",
        "color": "#fff",
        "background": "#333"
    },
    "pricing-content": {
        "fontWeight": "300"
    },
    "pricing-content ul": {
        "width": "80%",
        "marginTop": 16,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "pricing-content li": {
        "paddingTop": 16,
        "paddingRight": 0,
        "paddingBottom": 16,
        "paddingLeft": 0,
        "listStyle": "none",
        "borderBottom": "solid 1px #ddd"
    },
    "pricing-content li:last-child": {
        "borderBottom": "none"
    },
    "tickets-2 ticket-text": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 32,
        "fontWeight": "100",
        "lineHeight": 39
    },
    "tickets-2 price": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 32,
        "fontWeight": "100",
        "lineHeight": 39
    },
    "tickets-2 title": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 32,
        "fontWeight": "100",
        "lineHeight": 39,
        "paddingLeft": 10,
        "textAlign": "left"
    },
    "tickets-2 ticket-additional-text": {
        "marginTop": 3,
        "display": "block",
        "fontSize": 12,
        "lineHeight": 13
    },
    "tickets-2 ticket-additional-info": {
        "marginTop": 3,
        "display": "block",
        "fontSize": 12,
        "lineHeight": 13,
        "paddingLeft": 10,
        "textAlign": "left"
    },
    "tickets-2 ticket-fallback": {
        "paddingTop": 2,
        "lineHeight": 1.2
    },
    "tickets-2 ticket-sold-out": {
        "fontSize": 18,
        "paddingTop": 10
    },
    "tickets-2 tickets-info": {
        "fontSize": 16
    },
    "tickets-table": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "border": "1px solid rgba(51,51,51,0.6)",
        "maxWidth": 850
    },
    "tickets-row": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "borderBottom": "1px dashed rgba(51,51,51,0.6)"
    },
    "tickets-row:last-child": {
        "border": "none"
    },
    "location-map": {
        "fontWeight": "100",
        "paddingTop": 172,
        "paddingRight": 0,
        "paddingBottom": 172,
        "paddingLeft": 0
    },
    "location-map h3": {
        "marginBottom": 0
    },
    "location-description": {
        "minWidth": 400,
        "paddingTop": 20,
        "paddingRight": 50,
        "paddingBottom": 20,
        "paddingLeft": 50,
        "background": "#fff"
    },
    "location-description icon-direction": {
        "width": 32,
        "height": 32,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "location-description ul": {
        "marginTop": 26,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "location-description li": {
        "fontSize": 21,
        "marginBottom": 9
    },
    "location-description time": {
        "display": "inline-block"
    },
    "canvas-map": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "width": "100%",
        "height": 700
    },
    "venue-col": {
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "venue-col:last-child": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "venue-elem-wrapper": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 5,
        "paddingLeft": 0
    },
    "venue-elem": {
        "overflow": "hidden",
        "textAlign": "left",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "venue-big-elem": {
        "height": 610
    },
    "venue-small-elem": {
        "height": 200
    },
    "venue-text": {
        "paddingTop": 30,
        "paddingRight": 20,
        "paddingBottom": 30,
        "paddingLeft": 20,
        "color": "#fff",
        "background": "#03a9f4"
    },
    "venue-text h5": {
        "marginTop": 0
    },
    "venue-text p": {
        "fontSize": 17
    },
    "twitter-feed h3": {
        "marginBottom": 10
    },
    "twitter-feed icon": {
        "width": 64,
        "height": 64,
        "fill": "#fff"
    },
    "tweets": {
        "maxWidth": 850,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "tweet": {
        "height": 130,
        "WebkitTransition": "all 0.5s",
        "transition": "all 0.5s"
    },
    "tweethidden-tweet": {
        "opacity": 0,
        "WebkitTransform": "translateY(180px)",
        "MsTransform": "translateY(180px)",
        "transform": "translateY(180px)"
    },
    "tweet p": {
        "fontWeight": "100"
    },
    "tweet-text": {
        "fontSize": 26,
        "lineHeight": 1.3
    },
    "tweet-meta": {
        "fontSize": 20
    },
    "partners h5": {
        "marginTop": 30
    },
    "partners list-inline": {
        "marginBottom": 65
    },
    "partners list-inline li": {
        "width": "16%",
        "maxWidth": 180,
        "marginTop": 13,
        "marginRight": 7,
        "marginBottom": 13,
        "marginLeft": 7
    },
    "partners img": {
        "width": "100%",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitFilter": "grayscale(1)",
        "filter": "grayscale(1)"
    },
    "partners img:hover": {
        "WebkitFilter": "grayscale(0)",
        "filter": "grayscale(0)"
    },
    "subscribe email": {
        "width": "100%",
        "height": 53,
        "marginBottom": 16,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "subscribe button": {
        "width": "100%",
        "height": 53,
        "marginBottom": 16,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "subscribe email input": {
        "width": "100%",
        "height": "100%",
        "outline": "none",
        "fontSize": 16
    },
    "subscribe button input": {
        "width": "100%",
        "height": "100%",
        "outline": "none",
        "fontSize": 16,
        "textTransform": "uppercase"
    },
    "mc-field-group": {
        "paddingRight": 3
    },
    "mc-submit-group": {
        "paddingLeft": 3
    },
    "subscribe-info": {
        "fontWeight": "100"
    },
    "footer h5": {
        "fontSize": 18
    },
    "footer ul": {
        "marginTop": 13,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "footer li": {
        "marginBottom": 9,
        "listStyleType": "none"
    },
    "footer a": {
        "color": "#8b8b8b"
    },
    "footer a:hover": {
        "textDecoration": "underline"
    },
    "footer social-links": {
        "marginBottom": 0
    },
    "footer copyright": {
        "fontSize": 13,
        "lineHeight": 1.3,
        "marginTop": 10
    },
    "logo-footer": {
        "width": 185,
        "height": 60,
        "marginTop": -13,
        "marginRight": -13,
        "marginBottom": 0,
        "marginLeft": -13,
        "WebkitTransform": "scale(0.65)",
        "MsTransform": "scale(0.65)",
        "transform": "scale(0.65)"
    },
    "blog h3": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "post-section": {
        "paddingTop": 20
    },
    "post": {
        "maxWidth": 750,
        "marginBottom": 52
    },
    "post li": {
        "fontSize": 15,
        "lineHeight": 26
    },
    "post-header": {
        "height": 20,
        "marginTop": 20,
        "fontSize": 14
    },
    "post-header published": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "500"
    },
    "post-header publish-date": {
        "color": "#656565"
    },
    "post-header share": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "right"
    },
    "post-header social-links li": {
        "marginLeft": 4
    },
    "post-body": {
        "marginTop": 19
    },
    "post-body h4": {
        "marginTop": 40
    },
    "post-body iframe": {
        "display": "block",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 16,
        "marginLeft": 0
    },
    "post-body img": {
        "display": "block",
        "marginTop": 16,
        "marginRight": 0,
        "marginBottom": 16,
        "marginLeft": 0
    },
    "page-navigation": {
        "marginBottom": 40,
        "fontWeight": "500"
    },
    "comments": {
        "marginTop": 26
    },
    "pagination": {
        "fontSize": 14,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "pagination page-number": {
        "marginTop": 0,
        "marginRight": 7,
        "marginBottom": 0,
        "marginLeft": 7
    },
    "find-way": {
        "minHeight": 600
    },
    "find-way h3": {
        "position": "absolute",
        "top": -26,
        "left": 52,
        "color": "#fff"
    },
    "map-card": {
        "fontSize": 16,
        "fontWeight": "400",
        "top": 450,
        "left": 50,
        "overflow": "hidden",
        "height": 56,
        "paddingTop": 18,
        "paddingRight": 16,
        "paddingBottom": 18,
        "paddingLeft": 16,
        "WebkitTransition": "all 0.25s cubic-bezier(0.19, 1, 0.22, 1)",
        "transition": "all 0.25s cubic-bezier(0.19, 1, 0.22, 1)",
        "color": "#717171",
        "borderRadius": 2,
        "background": "#fff",
        "boxShadow": "1px 1px 2px rgba(0,0,0,0.2)"
    },
    "location-active map-card": {
        "WebkitTransform": "translateY(-135px)",
        "MsTransform": "translateY(-135px)",
        "transform": "translateY(-135px)"
    },
    "map-card location-input-icon": {
        "float": "right",
        "marginRight": 3,
        "WebkitTransform": "translateY(3px)",
        "MsTransform": "translateY(3px)",
        "transform": "translateY(3px)",
        "fill": "#717171"
    },
    "map-card icon-geolocation": {
        "float": "right",
        "marginRight": 3,
        "WebkitTransform": "translateY(3px)",
        "MsTransform": "translateY(3px)",
        "transform": "translateY(3px)",
        "fill": "#717171"
    },
    "map-card icon-cross": {
        "float": "right",
        "marginRight": 3,
        "WebkitTransform": "translateY(3px)",
        "MsTransform": "translateY(3px)",
        "transform": "translateY(3px)",
        "fill": "#717171",
        "width": 19,
        "height": 19
    },
    "location-active map-card icon-geolocation": {
        "WebkitTransform": "translateY(-70px)",
        "MsTransform": "translateY(-70px)",
        "transform": "translateY(-70px)"
    },
    "map-card view-on-map": {
        "fontSize": 14,
        "marginBottom": 5
    },
    "location-input": {
        "width": "85%",
        "marginTop": -3,
        "paddingTop": 1,
        "paddingRight": 4,
        "paddingBottom": 1,
        "paddingLeft": 4,
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "border": "none",
        "outline": "none"
    },
    "location-active location-input": {
        "WebkitTransform": "translateY(-70px)",
        "MsTransform": "translateY(-70px)",
        "transform": "translateY(-70px)"
    },
    "location-result": {
        "WebkitTransition": "all 0.25s ease-in-out",
        "transition": "all 0.25s ease-in-out",
        "WebkitTransform": "translateY(70px)",
        "MsTransform": "translateY(70px)",
        "transform": "translateY(70px)"
    },
    "location-active location-result": {
        "WebkitTransform": "translateY(-24px)",
        "MsTransform": "translateY(-24px)",
        "transform": "translateY(-24px)"
    },
    "location-result result-name": {
        "color": "#333"
    },
    "location-details": {
        "clear": "both",
        "height": "100%",
        "paddingTop": 8,
        "paddingRight": 18,
        "paddingBottom": 15,
        "paddingLeft": 18,
        "WebkitTransition": "all 0.25s ease-in-out",
        "transition": "all 0.25s ease-in-out",
        "WebkitTransform": "translateY(140px)",
        "MsTransform": "translateY(140px)",
        "transform": "translateY(140px)"
    },
    "location-active location-details": {
        "WebkitTransform": "translateY(-125px)",
        "MsTransform": "translateY(-125px)",
        "transform": "translateY(-125px)"
    },
    "location-details ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "location-details li": {
        "fontWeight": "400",
        "lineHeight": 50,
        "textTransform": "uppercase",
        "color": "#333",
        "borderBottom": "1px solid #e7e7e7"
    },
    "location-details li:last-child": {
        "borderBottom": "none"
    },
    "location-details icon": {
        "position": "relative",
        "top": 3,
        "marginRight": 7,
        "fill": "#333"
    },
    "location-details select": {
        "marginLeft": -5,
        "color": "#333",
        "border": "none",
        "outline": "none"
    },
    "detailed-result": {
        "fontSize": 17,
        "textTransform": "none",
        "color": "#717171"
    },
    "direction-details": {
        "display": "inline-block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "color": "#757575"
    },
    "direction-details card": {
        "WebkitTransform": "translateY(-125px)",
        "MsTransform": "translateY(-125px)",
        "transform": "translateY(-125px)"
    },
    "direction-details card ul": {
        "fontSize": 17,
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "direction-details questions": {
        "WebkitTransform": "translateY(-100px)",
        "MsTransform": "translateY(-100px)",
        "transform": "translateY(-100px)"
    },
    "direction-details h4": {
        "fontSize": 31,
        "fontWeight": "300",
        "color": "initial"
    },
    "direction-details h5": {
        "fontSize": 20,
        "fontWeight": "300",
        "color": "initial"
    },
    "direction-details p": {
        "fontSize": 17
    },
    "list-with-description li": {
        "marginBottom": 20
    },
    "list-with-description a": {
        "display": "block"
    },
    "team h3": {
        "marginBottom": 26
    },
    "team h4": {
        "marginTop": 50,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "textAlign": "center"
    },
    "zoe-effect": {
        "marginBottom": 26,
        "height": 250,
        "cursor": "pointer",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "boxShadow": "0 1px 7px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.15)"
    },
    "zoe-effect:hover": {
        "boxShadow": "0 1px 7px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.35)"
    },
    "zoe-effect:hover figure": {
        "backgroundPosition": "center left",
        "backgroundSize": "105%"
    },
    "zoe-effect:hover figure overlay": {
        "background": "rgba(0,0,0,0.3)"
    },
    "zoe-effect:hover h2": {
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "color": "#3c4a50"
    },
    "zoe-effect:hover figcaption": {
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "color": "#3c4a50"
    },
    "zoe-effect:hover figcaption>a": {
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "color": "#3c4a50"
    },
    "zoe-effect:hover figcaption>a:nth-child(5)": {
        "WebkitTransitionDelay": ".1s",
        "transitionDelay": ".1s"
    },
    "zoe-effect:hover figcaption>a:nth-child(4)": {
        "WebkitTransitionDelay": ".15s",
        "transitionDelay": ".15s"
    },
    "zoe-effect:hover figcaption>a:nth-child(3)": {
        "WebkitTransitionDelay": ".2s",
        "transitionDelay": ".2s"
    },
    "zoe-effect:hover figcaption>a:nth-child(2)": {
        "WebkitTransitionDelay": ".25s",
        "transitionDelay": ".25s"
    },
    "zoe-effect:hover bio": {
        "WebkitTransform": "translateY(-70%)",
        "MsTransform": "translateY(-70%)",
        "transform": "translateY(-70%)",
        "opacity": 1
    },
    "zoe-effect figure": {
        "overflow": "hidden",
        "width": "100.3%",
        "height": "100%",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "backgroundPosition": -30,
        "backgroundSize": "115%"
    },
    "zoe-effect figure overlay": {
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "background": "transparent"
    },
    "zoe-effect figcaption": {
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 50,
        "paddingTop": 13,
        "paddingRight": 13,
        "paddingBottom": 13,
        "paddingLeft": 13,
        "zIndex": 2,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitTransform": "translateY(100%)",
        "MsTransform": "translateY(100%)",
        "transform": "translateY(100%)",
        "color": "#3c4a50",
        "background": "#fff"
    },
    "zoe-effect figcaption h2": {
        "fontSize": 16,
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "wordSpacing": -2,
        "textTransform": "uppercase",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitTransform": "translateY(-250%)",
        "MsTransform": "translateY(-250%)",
        "transform": "translateY(-250%)",
        "WebkitTransitionDelay": ".05s",
        "transitionDelay": ".05s",
        "color": "#fff"
    },
    "zoe-effect figcaption h2 span": {
        "fontWeight": "500"
    },
    "zoe-effect figcaption>div": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitTransform": "translateY(-5px)",
        "MsTransform": "translateY(-5px)",
        "transform": "translateY(-5px)"
    },
    "zoe-effect figcaption>a": {
        "float": "right",
        "marginLeft": 4,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitTransform": "translateY(200%)",
        "MsTransform": "translateY(200%)",
        "transform": "translateY(200%)"
    },
    "zoe-effect figcaption position": {
        "fontSize": 12,
        "display": "-webkit-box",
        "overflow": "hidden",
        "height": 14,
        "textOverflow": "ellipsis",
        "WebkitLineClamp": 1,
        "WebkitBoxOrient": "vertical"
    },
    "zoe-effect bio": {
        "fontSize": 14,
        "lineHeight": 1.3,
        "position": "relative",
        "top": "50%",
        "left": 0,
        "paddingTop": 1.4,
        "paddingRight": 1.4,
        "paddingBottom": 1.4,
        "paddingLeft": 1.4,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "opacity": 0,
        "color": "#fff",
        "background": "none",
        "display": "-webkit-box",
        "overflow": "hidden",
        "height": 93,
        "textOverflow": "ellipsis",
        "WebkitLineClamp": 5,
        "WebkitBoxOrient": "vertical"
    },
    "lily-effect": {
        "marginBottom": 26,
        "cursor": "pointer",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "boxShadow": "0 1px 7px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.15)"
    },
    "lily-effect:hover": {
        "boxShadow": "0 1px 7px rgba(0,0,0,0.06),0 1px 3px rgba(0,0,0,0.35)"
    },
    "lily-effect:hover figure": {
        "backgroundPosition": "center left",
        "backgroundSize": "105%"
    },
    "lily-effect:hover figcaption h2": {
        "WebkitTransform": "translateY(-30px)",
        "MsTransform": "translateY(-30px)",
        "transform": "translateY(-30px)"
    },
    "lily-effect:hover figcaption position": {
        "WebkitTransform": "translateY(-30px)",
        "MsTransform": "translateY(-30px)",
        "transform": "translateY(-30px)",
        "lineHeight": 1,
        "marginTop": 8,
        "WebkitTransitionDelay": ".05s",
        "transitionDelay": ".05s",
        "WebkitTransitionDuration": ".35s",
        "transitionDuration": ".35s"
    },
    "lily-effect:hover overlay": {
        "background": "rgba(0,0,0,0.3)"
    },
    "lily-effect figure": {
        "overflow": "hidden",
        "width": "100%",
        "height": "100%",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "backgroundPosition": -30,
        "backgroundSize": "115%"
    },
    "lily-effect figcaption": {
        "fontSize": 16,
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": "50%",
        "paddingTop": 32,
        "paddingRight": 16,
        "paddingBottom": 32,
        "paddingLeft": 16,
        "textTransform": "uppercase",
        "color": "#fff"
    },
    "lily-effect figcaption h2": {
        "fontSize": 20,
        "lineHeight": 1,
        "fontWeight": "300",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "WebkitTransform": "translateY(-10px)",
        "MsTransform": "translateY(-10px)",
        "transform": "translateY(-10px)",
        "wordSpacing": -2
    },
    "lily-effect figcaption h2 span": {
        "fontWeight": "600",
        "display": "block"
    },
    "lily-effect figcaption position": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 11,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "letterSpacing": 1,
        "color": "rgba(255,255,255,0.9)",
        "WebkitTransform": "translateY(20px)",
        "MsTransform": "translateY(20px)",
        "transform": "translateY(20px)"
    },
    "lily-effect overlay": {
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "background": "transparent"
    },
    "lily-effect lily-head": {
        "height": 200
    },
    "lily-effect lily-bottom": {
        "clear": "both",
        "height": 80,
        "paddingTop": 16,
        "paddingRight": 14,
        "paddingBottom": 9,
        "paddingLeft": 14,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "borderBottom": "2px solid #fff",
        "background": "#fff"
    },
    "lily-effect lily-bottom h2": {
        "fontSize": 21,
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "lily-effect lily-bottom title": {
        "fontSize": 16,
        "lineHeight": 1.5,
        "display": "-webkit-box",
        "overflow": "hidden",
        "height": 50,
        "textOverflow": "ellipsis",
        "WebkitLineClamp": 2,
        "WebkitBoxOrient": "vertical"
    },
    "lily-effect lily-bottom slider-next-item": {
        "position": "absolute",
        "right": 25,
        "bottom": 30
    },
    "ribbon-wrapper": {
        "position": "absolute",
        "zIndex": 5,
        "right": 0,
        "marginTop": 10,
        "listStyle": "none"
    },
    "ribbon-wrapper li": {
        "overflow": "hidden",
        "marginBottom": 5
    },
    "ribbon-wrapper li:nth-child(3) abbr": {
        "WebkitTransitionDelay": ".1s",
        "transitionDelay": ".1s"
    },
    "ribbon-wrapper li:nth-child(3) full-title": {
        "WebkitTransitionDelay": ".1s",
        "transitionDelay": ".1s"
    },
    "ribbon-wrapper li:nth-child(2) abbr": {
        "WebkitTransitionDelay": ".15s",
        "transitionDelay": ".15s"
    },
    "ribbon-wrapper li:nth-child(2) full-title": {
        "WebkitTransitionDelay": ".15s",
        "transitionDelay": ".15s"
    },
    "ribbon-wrapper gdg": {
        "borderRight": "4px solid #427fed"
    },
    "ribbon-wrapper gdgw": {
        "borderRight": "4px solid #ed2c82"
    },
    "ribbon-wrapper gde": {
        "borderRight": "4px solid #db4437"
    },
    "ribbon-wrapper wt": {
        "borderRight": "4px solid #72e1b3"
    },
    "ribbon-wrapper ribbon": {
        "fontSize": 13,
        "fontWeight": "300",
        "lineHeight": 22,
        "display": "inline-block",
        "float": "right",
        "minWidth": 44,
        "height": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 7,
        "paddingBottom": 0,
        "paddingLeft": 7,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "textAlign": "left",
        "wordWrap": "normal",
        "color": "#999",
        "backgroundColor": "#fff",
        "boxShadow": "0 0 20px rgba(0,0,0,0.2)"
    },
    "ribbon-activator:hover ribbon-wrapper abbr": {
        "WebkitTransform": "translateX(100%)",
        "MsTransform": "translateX(100%)",
        "transform": "translateX(100%)"
    },
    "ribbon-wrapper full-title": {
        "clear": "both",
        "marginTop": -22,
        "WebkitTransform": "translateX(100%)",
        "MsTransform": "translateX(100%)",
        "transform": "translateX(100%)"
    },
    "ribbon-activator:hover ribbon-wrapper full-title": {
        "WebkitTransform": "translateX(0)",
        "MsTransform": "translateX(0)",
        "transform": "translateX(0)"
    },
    "modal icon-cross": {
        "width": 19,
        "height": 19,
        "outline": "none",
        "fill": "#212121"
    },
    "modal close-mask": {
        "position": "absolute",
        "width": 19,
        "height": 19,
        "marginTop": -19
    },
    "modal h4": {
        "fontSize": 35,
        "fontWeight": "300",
        "color": "#212121"
    },
    "people-modal theme-metadata": {
        "fontSize": 14,
        "marginRight": 10
    },
    "people-modal theme-metadata caption": {
        "color": "#212121"
    },
    "people-modal theme-video": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "people-modal theme-description": {
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "people-modal theme-presentation": {
        "fontSize": 15
    },
    "people-modal people-details row": {
        "marginTop": 20
    },
    "people-modal people-details people-img": {
        "width": 100,
        "height": 100,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "people-modal people-details details": {
        "paddingLeft": 30
    },
    "people-modal people-details name": {
        "marginBottom": 9,
        "fontSize": 17,
        "fontWeight": "500",
        "color": "#212121"
    },
    "people-modal people-details position": {
        "fontWeight": "300",
        "color": "#757575"
    },
    "people-modal people-details social": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "people-modal people-details social li": {
        "display": "inline-block",
        "paddingRight": 3
    },
    "modal-ribbon-wrapper": {
        "marginBottom": 5
    },
    "modal-ribbon-wrapper modal-ribbon": {
        "marginRight": 7,
        "fontSize": 14
    },
    "schedule ul": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 15
    },
    "schedule li": {
        "fontSize": 16,
        "marginBottom": 5
    },
    "schedule speaker-img": {
        "width": 40,
        "height": 40,
        "border": "2px solid #fff",
        "position": "absolute",
        "boxShadow": "0 1px 0 rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.2)"
    },
    "schedule speaker-name": {
        "lineHeight": 28,
        "marginLeft": 48
    },
    "schedule speaker-position": {
        "color": "#555",
        "display": "block",
        "lineHeight": 1,
        "fontSize": 12,
        "marginTop": -5
    },
    "schedule-table": {
        "marginBottom": 90
    },
    "schedule-table-heading": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "textAlign": "left"
    },
    "timeslot": {
        "background": "#fff",
        "borderTop": "1px solid #e7e7e7",
        "borderLeft": "1px solid #e7e7e7"
    },
    "timeslot:last-child": {
        "borderBottom": "1px solid #e7e7e7"
    },
    "track-header": {
        "zIndex": 10,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "track-headersticky": {
        "boxShadow": "0 0 5px rgba(0,0,0,0.2),0 1px 0 rgba(255,255,255,0.15)"
    },
    "track-header-label": {
        "position": "absolute",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 20,
        "paddingLeft": 15,
        "width": 100,
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 25,
        "lineHeight": 1
    },
    "timeslot-label": {
        "position": "relative",
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 20,
        "paddingLeft": 15,
        "width": 100,
        "textAlign": "left",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 40,
        "lineHeight": 1,
        "float": "left",
        "display": "block",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "fontWeight": "100"
    },
    "track-header-label span": {
        "fontSize": 20
    },
    "timeslot-label span": {
        "fontSize": 20
    },
    "time-element": {
        "position": "relative",
        "height": "100%"
    },
    "timeslot-elements": {
        "overflow": "hidden",
        "marginLeft": 100,
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "slot-title": {
        "fontSize": 22,
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingRight": 20
    },
    "track-header-title": {
        "fontSize": 22,
        "fontWeight": "300",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingRight": 20
    },
    "track-header-slot": {
        "paddingTop": 10,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "textAlign": "left",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "borderRight": "1px solid #e7e7e7",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "slot": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "left",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s",
        "borderRight": "1px solid #e7e7e7",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "cursor": "pointer"
    },
    "track-header-slot:first-child": {
        "borderLeft": "1px solid #e7e7e7"
    },
    "slot:first-child": {
        "borderLeft": "1px solid #e7e7e7"
    },
    "slotblank-col": {
        "cursor": "default"
    },
    "slotservice-slot": {
        "cursor": "default"
    },
    "color-line": {
        "height": 5,
        "position": "absolute",
        "display": "block",
        "width": "100%",
        "top": 0,
        "background": "#ccc"
    },
    "slot-content": {
        "paddingTop": 20,
        "paddingRight": 15,
        "paddingBottom": 30,
        "paddingLeft": 15,
        "minHeight": 120,
        "background": "#fff",
        "WebkitTransform": "translateY(0)",
        "MsTransform": "translateY(0)",
        "transform": "translateY(0)",
        "WebkitTransition": "all 0.3s",
        "transition": "all 0.3s"
    },
    "slot-content:hover": {
        "WebkitTransform": "translateY(5px)",
        "MsTransform": "translateY(5px)",
        "transform": "translateY(5px)"
    },
    "slot-language": {
        "position": "absolute",
        "fontSize": 11,
        "right": 15,
        "top": 20
    },
    "service-description": {
        "marginTop": 15
    },
    "hackathon-row": {
        "marginBottom": 90
    },
    "hackathon-rowfloat-right hackathon-img-wrapper": {
        "float": "right"
    },
    "hackathon-rowfloat-right hackathon-details": {
        "textAlign": "right",
        "marginLeft": 0,
        "marginRight": 300
    },
    "hackathon-img-wrapper": {
        "float": "left"
    },
    "hackathon-img-wrapper img": {
        "maxWidth": 250,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "hackathon-details": {
        "textAlign": "left",
        "marginLeft": 300
    },
    "hackathon-details p": {
        "fontSize": 16
    },
    "judge": {
        "marginBottom": 45
    },
    "judge name": {
        "marginTop": 8,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0,
        "fontSize": 25
    },
    "judge company": {
        "marginTop": 6,
        "display": "block",
        "fontSize": 18,
        "lineHeight": 1.1
    },
    "judge-img": {
        "width": 140,
        "height": 140,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "border": "3px solid #fff",
        "boxShadow": "0 3px 0 rgba(0,0,0,0.15),0 3px 4px rgba(0,0,0,0.2)"
    },
    "prizes h3": {
        "marginBottom": 20
    },
    "prize": {
        "marginTop": 50
    },
    "prize:nth-child(3)": {
        "marginTop": 0
    },
    "prize-img-wrapper img": {
        "maxWidth": 250,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "hackathon-location": {
        "paddingTop": 20,
        "paddingRight": 50,
        "paddingBottom": 20,
        "paddingLeft": 50,
        "height": 450
    },
    "hackathon-location canvas-map": {
        "height": 480
    },
    "hackathon-location location-description": {
        "fontSize": 15,
        "paddingTop": 18,
        "paddingRight": 16,
        "paddingBottom": 22,
        "paddingLeft": 16,
        "overflow": "hidden",
        "boxShadow": "1px 1px 2px rgba(0,0,0,0.2)"
    },
    "hackathon-location location-name": {
        "marginTop": 0,
        "fontSize": 18,
        "fontWeight": "500"
    },
    "hackathon-location location-address": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "hackathon-location hackathon-time time": {
        "color": "#03a9f4"
    },
    "hackathon-location view-on-map": {
        "marginTop": 8,
        "display": "block"
    }
});