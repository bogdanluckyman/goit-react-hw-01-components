import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

ul {
    list-style: none;
}

table {
    background-color: #f2f2f2;
    border-collapse: collapse;
    border: 1px solid #333;
    border-collapse: collapse;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
}

table th, table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #333;
}

table th {
    background-color: tomato;
    color: #fff;
     font-weight: bold;
}

`;