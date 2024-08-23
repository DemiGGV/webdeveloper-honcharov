import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalCSS = createGlobalStyle`
:root {
  --main-bg-color: #0a0a0a;
  --second-bg-color: #1a1a1a;
  --accent-color: #d3e97a;
  --warning-color: #ff5100;
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

html {
  scrollbar-gutter: stable;
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

.ModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
    outline: none;
    border: none;
    box-shadow: none;
}

.ModalContent {
    max-width: calc(100vw - 48px);
    max-height: calc(100dvh - 24px);
    padding: 4px 15px 15px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    overflow: auto;
    background-color: var(--second-bg-color);

    @media screen and (max-height: 530px) and (orientation: landscape){
      overflow: scroll;
    }
    
    @media screen and (min-width: 420px) {
      max-width: 400px;
    };
    
    @media screen and (min-width: 768px) {
      max-width: 550px;
    };
  }
`;
