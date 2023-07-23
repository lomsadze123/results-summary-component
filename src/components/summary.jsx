import { styled } from "styled-components";
import objSummary from "./objSummary";

const Summary = () => {
    return (
        <Flex>
            <h2>Summary</h2>
            {objSummary.map(obj => {
                return <BgColor color={obj.color} about={obj.backgroundColor} key={obj.id}>
                        <div>
                            <img src={obj.icon} alt={obj.title} />
                            <h4>{obj.title}</h4>
                        </div>
                        <div>
                            <p>{obj.score}</p>
                            <p>{obj.outOf}</p>
                        </div>
                    </BgColor>
            })}
            <button>Continue</button>
        </Flex>
    );
}

export default Summary

const Flex = styled.main`
    padding: 0 3rem;
    & div {
        display: flex;
        justify-content: space-between;
    }
    div div:nth-child(2) {
        gap: .8rem;
    }
    img {
        width: 2rem;
        height: auto;
    }
    p {
        font-size: 1.6rem;
        font-weight: 700;
        color: #303B59;
    }
    p:nth-child(2) {
        opacity: .5;
    }
    h2 {
        color: #303B59;
        font-size: 1.8rem;
        font-weight: 700;
        padding: 2.4rem 0 .8rem 0;
    }
    button {
        background-color: #303B59;
        border: 0;
        padding: 1.7rem 12rem 1.6rem 12rem;
        border-radius: 12.8rem;
        margin-top: 2.4rem;
        font-size: 1.8rem;
        color: #FFF;
        font-weight: 700;
        width: 100%;
    }

    @media (min-width: 736px) {
        padding: 0 4rem;
        p {
            font-size: 1.8rem;
        }
        h2 {
            font-size: 2.4rem;
        }
        button {
            padding: 1.7rem 10.7rem 1.6rem 10.6rem;
        }
        & button:hover {
            background: linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);
            cursor: pointer;
        }
        div h4 {
            font-size: 1.8rem;
        }
    }
`
const BgColor = styled.div`
    padding: 1.7rem 1.6rem 1.9rem 1.6rem;
    background-color: ${props => props.about};
    border-radius: 1.2rem;
    margin-top: 1.6rem;
    h4 {
        color: ${props => props.color};
        margin-left: 1.2rem;
        font-size: 1.6rem;
        font-weight: 500;
    }
`