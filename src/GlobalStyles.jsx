import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalCSS = createGlobalStyle`
:root {
  --main-bg-color: #0a0a0a;
  --second-bg-color: #1a1a1a;
  --accent-color: #d3e97a;
  --weak-accent-color: #d3e97a25;
  --white-color: #ffffff;
  --gray-color: #c7c7c7;
  --small-glow-shadow:  
                  0 0 5px var(--accent-color);
  --small-inset-glow-shadow:  
                  inset 0 0 5px var(--accent-color);
  --glow-shadow:  0 0 5px var(--accent-color),
                  0 0 10px var(--accent-color),
                  0 0 20px var(--accent-color),
                  0 0 40px var(--accent-color),
                  0 0 80px var(--accent-color);
  --hover-shadow: 0 0 5px var(--white-color), 
                  0 0 10px var(--white-color),
                  0 0 20px var(--white-color), 
                  0 0 40px var(--white-color),
                  0 0 80px var(--white-color);

  --mobile: 420px;
  --tablet: 768px;
  --desktop: 1440px;
}

body {
  background-color: var(--main-bg-color);

  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);

  @media screen and (min-width: 768px) {    
  font-size: 18px;
  line-height: 1.5;
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  font-family: inherit;
}

input {
  font-family: inherit;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

`;