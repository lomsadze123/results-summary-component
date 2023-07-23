import styled from 'styled-components';

const Header = () => {
    return (
        <Header1>
            <h1>Your Result</h1>
            <div>
                <h2>76</h2>
                <p>of 100</p>
            </div>
            <h3>Great</h3>
            <p>Your performance exceed 65% of the people conducting the test here!</p>
        </Header1>
    );
}

export default Header


const Header1 = styled.header`
    background: linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%);
    box-shadow: 0px 30px 60px 0px rgba(61, 108, 236, 0.15);
    text-align: center;
    padding: 2.4rem 5.7rem 4rem 5.8rem;
    border-radius: 0 0 3.2rem 3.2rem;
    h1 {
        font-size: 1.8rem;
        font-weight: 700;
        color: #CAC9FF;
    }
    h2 {
        font-size: 5.6rem;
        font-weight: 800;
        line-height: 7.2rem;
        color: #FFF;
    }
    p {
        color: #CAC9FF;
        font-size: 1.6rem;
        font-weight: 500;
        max-width: 26rem;
    }
    div p {
        font-weight: 700;
        opacity: .5168108344078064;
        width: 100%;
    }
    h3 {
        font-size: 2.4rem;
        font-weight: 700;
        color: #FFF;
        margin-bottom: .8rem;
    }
    div {
        padding: 2.5rem 3.9rem 4.3rem 3.8rem;
        border-radius: 50%;
        background: linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%);
        width: 14rem;
        height: 14rem;
        margin: 2.4rem auto;
    }

    @media (min-width: 736px) {
        padding: 3.8rem 5.4rem 5.5rem 5.4rem;
        border-radius: 3.2rem;
        p {
            max-width: 26rem;
            font-size: 1.8rem;
        }
        h1 {
            font-size: 2.4rem;
        }
        h2 {
            font-size: 7.2rem;
        }
        div {
            width: 20rem;
            height: 20rem;
            margin: 3.5rem auto 2.8rem auto;
            padding: 5.5rem 6rem 7.3rem 5.9rem;
        }
        h3 {
            margin-bottom: 1.4rem;
        }
    }
`