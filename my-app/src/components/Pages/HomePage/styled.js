import styled from 'styled-components';

export const Div = styled.div `
width: 100%;
font-size: 13px;
text-align: left;
height: 16rem;
background-color: orange;
margin: 0 auto 5rem auto;
background-color: ${(props) => props.bg};
color: ${(props) => props.color};
@media only screen and (min-width: 1020px) and (max-width: 1200px) {
  width: 300px;
  font-size: 10px;
  margin: 0rem 0.7rem 0 0.7rem; 

}

@media only screen and (min-width: 768px) and (max-width: 1019px) {
  width: 400px;
  font-size: 10px;
  margin: 0rem 0.7rem 0 0.7rem; 

}

@media only screen and (min-width: 400px) and (max-width: 767px) {
  width: 250px;
  font-size: 10px;
  margin: 0rem 0.7rem 0 0.7rem; 

}

`;
//display: ${(props) => (props.size > 800 ? "block" : "none")};
export const H4 = styled.h4 `
font-size: 24px;
margin-bottom: 7rem;
margin-top: 0;
@media only screen and (min-width: 1020px) and (max-width: 1200px) {
font-size: 15px;
}

@media only screen and (min-width: 400px) and (max-width: 767px) {
  
  font-size: 12px;

}
`;

export const Button = styled.button `
background-color: ${(props) => props.bg};
border: none;
`;

export const Button2 = styled.button `
  background-color: white;
  width: ${props => props.size};
  position: absolute;
  left: 3rem;
  bottom: 0;
  border-radius: 1.5rem;
  border: none;
  padding: 9px 10px;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 4rem;
`;

export const Div2 = styled.div `
  background: url(${props => props.pic})
`;