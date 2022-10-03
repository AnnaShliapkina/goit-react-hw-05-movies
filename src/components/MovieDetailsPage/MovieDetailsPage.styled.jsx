import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  height: 30px;
  width: 90px;
  font-size: 16px;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid black;
`;
