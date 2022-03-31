import * as React from "react"
import { Container, Spinner } from "react-bootstrap"
import { FormattedMessage } from "gatsby-plugin-react-intl"
import { Header } from "../../components/header"
import { useEffect, useState } from "react"

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
            </Container>
        </main>
    </>)
};
