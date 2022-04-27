import styled from 'styled-components';
import { FaPlay, FaYinYang } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: rgb(16,16,16);
    background: linear-gradient(180deg, rgba(16,16,16,1) 0%, rgba(80,26,26,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const HeroPictures = styled.div`
    position: absolute;
    width: max-width;
    height: 700px;
    overflow: hidden;
    justify-content: center;
`;

export const Diashow = styled.img`
    align-self: center;
    align-content: center;
    width: 1600px;
    height: 300px;
    justify-content: center;
    border-radius: 15px;

    @media screen and (max-width: 1816px) {
        width: 1400px;
    }

    @media screen and (max-width: 1500px) {
        width: 1000px;
    }

    @media screen and (max-width: 1000px) {
        width: 700px;
        height: 200px;
    }

    @media screen and (max-width: 700px) {
        width: 500px;
        height: 170px;
    }

    @media screen and (max-width: 600px) {
        width: 400px;
        height: 170px;
    }

    @media screen and (max-width: 480px) {
        width: 350px;
        height: 150px;
    }
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 100px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 50px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Play = styled(FaPlay)`
    margin-right: 8px;
    font-size: 20px;
`;

export const YinYang = styled(FaYinYang)`
    margin-right: 8px;
    font-size: 20px;
`;

export const ArrowLeft = styled(MdKeyboardArrowRight)`
    color: white;
    font-size: 90px;
    transform: translateY(-110px) translateX(70px) rotate(180deg);

    @media screen and (max-width: 1000px) {
        font-size: 80px;
    }

    @media screen and (max-width: 700px) {
        font-size: 70px;
    }

    @media screen and (max-width: 600px) {
        font-size: 50px;
    }
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    color: white;
    font-size: 90px;
    transform: translateY(-110px) translateX(-70px);

    @media screen and (max-width: 1579px) {
        transform: translateX(1420px) translateY(-200px);
    }

    @media screen and (max-width: 1500px) {
        transform: translateY(-110px) translateX(-70px);
    }

    @media screen and (max-width: 1179px) {
        transform: translateX(1020px) translateY(-200px);
    }

    @media screen and (max-width: 1000px) {
        font-size: 80px;
    }

    @media screen and (max-width: 700px) {
        font-size: 70px;
    }

    @media screen and (max-width: 600px) {
        font-size: 50px;
    }
`;