import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 200;
            const shouldShow = scrollY > threshold;
            setShowScrollButton(shouldShow);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <ScrollButton show={showScrollButton} onClick={scrollToTop}>↑</ScrollButton>
    );
};

export default ScrollToTopButton;

const ScrollButton = styled.button`
    position: fixed;
    height: 48px;
    width:48px;
    right: 20px;
    bottom: 20px;
    display: ${props => props.show ? 'inline' : 'none'}; /* showScrollButton 값에 따라 동적으로 설정 */
    background-color:white;
    color: Black;
    border: 1px solid #CCCCCC;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 900;
    z-index: 999;
    box-shadow: rgba(63, 71, 77, 0.25) 0px 2px 10px;
`;