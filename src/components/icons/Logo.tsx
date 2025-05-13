import styled from 'styled-components';

const StyledSVG = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${({ theme }) => theme.text}; // Կպոխի ըստ թեմայի
  transition: fill 0.3s ease;
`;

const Logo = () => {
    return (
        <StyledSVG viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" />
        </StyledSVG>
    );
};

export default Logo;
