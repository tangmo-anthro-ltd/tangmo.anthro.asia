import * as React from "react"
import { Container, Spinner } from "react-bootstrap"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import { Header } from "../../components/header"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default () => {
    const [messageNo, setMessageNo] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessageNo(messageNo > 3 ? 0 : messageNo + 1);
        }, 2000 + Math.random() * 7000);
        return () => clearTimeout(timer);
    }, [messageNo]);

    return (<>
        <Header title="DRAMA.anthro.ltd" />
        <main>
            <Container className="text-center" style={{ marginTop: "3rem" }}>
                <Spinner animation="border" role="status" style={{ height: "4rem", width: "4rem" }}/>
                <div style={{ marginTop: "1rem" }}><FormattedMessage id={`drama.result.r${messageNo}`} /></div>
                <Result><FormattedMessage id={'drama.result.r_surprise'} /></Result>
            </Container>
        </main>
    </>)
};

const Result = styled.p`
    margin-top: 2rem;
    animation: cssAnimation 10s forwards;
    animation-timing-function: ease;
    opacity: 0;
    @keyframes cssAnimation {
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
