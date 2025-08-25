import styled from "styled-components";

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 8px 18px;
    border: 2px solid;
    border-color: transparent;
    font-size: 13px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 500;
    color: #fff;
    box-shadow: 0 0 0 1px #fff;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .animated-button svg {
    position: absolute;
    width: 18px;
    fill: #fff;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .animated-button .arr-1 {
    right: 10px;
  }
  .animated-button .arr-2 {
    left: -25%;
  }
  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-8px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .animated-button:hover {
    box-shadow: 0 0 0 8px transparent;
    color: #000;
    border-radius: 12px;
  }
  .animated-button:hover .arr-1 {
    right: -25%;
  }
  .animated-button:hover .arr-2 {
    left: 10px;
  }
  .animated-button:hover .text {
    transform: translateX(8px);
  }
  .animated-button:hover svg {
    fill: #000;
  }
  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 2px #fff;
  }
  .animated-button:hover .circle {
    width: 120px;
    height: 120px;
    opacity: 1;
  }
`;

export default StyledWrapper;
