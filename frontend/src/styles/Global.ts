import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root{
        --color-gradient: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    }

    html{
        min-height: 100vh;
        background: #1e1f28;
    }

    body{
        background: #1e1f28;
        color: #ffffff;
    }
    p{
        white-space: pre-line;
    }
    textarea{
        resize: none;
    }
`