import * as React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-react-intl';
import styled, { createGlobalStyle } from 'styled-components';
import { ColorSchemeProvider } from '../contexts/ColorSchemeContext';
import { Helmet } from 'react-helmet';
import { useEffect, useRef } from 'react';
import { useMounted } from '../hooks/useMounted';
import { useJsEnabled } from '../hooks/useJsEnabled';

export default () => {
    const { locale, formatMessage } = useIntl();
    const jsEnabled = useJsEnabled();
    const toAnimateRef = useRef();
    const mounted = useMounted();
    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(e => {
                    if (e.isIntersecting) {
                        document.querySelectorAll('.to-animate').forEach(elem => elem.classList.add('animate-in'));
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );
        setTimeout(() => {
            if (mounted.current && toAnimateRef.current) {
                observer.observe(toAnimateRef.current);
            }
        }, 10000);
        return () => {
            observer.disconnect();
        };
    }, [toAnimateRef.current]);
    return (
        <ColorSchemeProvider>
            <Helmet
                title={formatMessage({ id: 'no-hello.meta_title' })}
                meta={[
                    { name: 'description', content: formatMessage({ id: 'no-hello.meta_description' }) },
                    { name: 'og:type', content: 'website' },
                    { name: 'og:image', content: 'https://nohello.club/social.png' },
                    { name: 'twitter:title', content: formatMessage({ id: 'no-hello.meta_title' }) },
                    { name: 'twitter:description', content: formatMessage({ id: 'no-hello.meta_description' }) },
                ]}
            >
                <html lang={locale} />
            </Helmet>
            <GlobalStyle />
            <Hero>
                <h1>
                    <FormattedMessage id="no-hello.hero.no" />
                    <span>
                        <FormattedMessage id="no-hello.hero.hello" />
                    </span>
                </h1>
                <HeroSubtitle>
                    <FormattedMessage id="no-hello.meta_description" />
                </HeroSubtitle>
            </Hero>
            <section id="intro">
                <p>
                    <FormattedMessage
                        id="no-hello.p1"
                        values={{
                            s: (
                                <strong>
                                    <FormattedMessage id="no-hello.p1_strong" />
                                </strong>
                            ),
                        }}
                    />
                </p>
                <div className="chatbox">
                    <p className="chat left animate-in" style={{ animationDelay: '1s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_1" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:30
                        </span>
                    </p>
                    <p className="chat right animate-in" style={{ animationDelay: '2s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_2" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:35
                        </span>
                    </p>
                    <p className="chat left animate-in" style={{ animationDelay: '3s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_3" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:40
                        </span>
                    </p>
                    <p className="chat right animate-in" style={{ animationDelay: '4s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_4" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:51
                        </span>
                    </p>
                    <p className="chat left animate-in" style={{ animationDelay: '5s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_5" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.tuesday" /> 09:30
                        </span>
                    </p>
                    <p className="chat right animate-in" style={{ animationDelay: '6s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_6" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.tuesday" /> 17:08
                        </span>
                    </p>
                    <p className="chat left animate-in" style={{ animationDelay: '7s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_7" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.tuesday" /> 17:18
                        </span>
                    </p>
                    <p className="chat right animate-in" style={{ animationDelay: '8s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_8" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.wednesday" /> 16:41
                        </span>
                    </p>
                    <p className="chat left animate-in" style={{ animationDelay: '9s' }}>
                        <FormattedMessage id="no-hello.chat.chat1_9" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.wednesday" /> 16:54
                        </span>
                    </p>
                </div>
                <p>
                    <FormattedMessage id="no-hello.p2" />
                </p>
                <p className="highlight">
                    <FormattedMessage id="no-hello.p3" />
                </p>
                <div className="chatbox" ref={toAnimateRef}>
                    <p
                        className={'chat left ' + (jsEnabled ? 'to-animate' : 'animate-in')}
                        style={{ animationDelay: jsEnabled ? '1s' : '11s', whiteSpace: 'pre-line' }}
                    >
                        <FormattedMessage id="no-hello.chat.chat2_1" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:30
                        </span>
                    </p>
                    <p
                        className={'chat right ' + (jsEnabled ? 'to-animate' : 'animate-in')}
                        style={{ animationDelay: jsEnabled ? '2s' : '12s', whiteSpace: 'pre-line' }}
                    >
                        <FormattedMessage id="no-hello.chat.chat2_2" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:35
                        </span>
                    </p>
                    <p
                        className={'chat left ' + (jsEnabled ? 'to-animate' : 'animate-in')}
                        style={{ animationDelay: jsEnabled ? '3s' : '13s' }}
                    >
                        <FormattedMessage id="no-hello.chat.chat2_3" />
                        <span className="timestamp">
                            <FormattedMessage id="no-hello.chat.monday" /> 17:40
                        </span>
                    </p>
                </div>
                <p className="emphasis" style={{ whiteSpace: 'pre-line' }}>
                    <FormattedMessage id="no-hello.p4" />
                </p>
            </section>
            <footer>
                <p>
                    <FormattedMessage
                        id="no-hello.footer"
                        values={{
                            a: (
                                <a href="https://nohello.club/" rel="noreferrer noopener">
                                    nohello.club
                                </a>
                            ),
                            b: (
                                <a href="https://nohello.net/" rel="noreferrer noopener">
                                    nohello.net
                                </a>
                            ),
                        }}
                    />
                </p>
            </footer>
        </ColorSchemeProvider>
    );
};

/*
Based on https://github.com/simonhearne/nohello.club and https://github.com/nohello-net/site
MIT License

Copyright (c) 2020 Simon Hearne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

const Hero = styled.header`
    font-family:
        lato,
        ubuntu,
        -apple-system,
        BlinkMacSystemFont,
        Segoe UI,
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        Open Sans,
        Helvetica Neue,
        sans-serif;
    margin: 150px auto 75px auto;
    @media (max-width: 1024px) {
        margin: 60px auto;
    }
    h1 {
        margin: 0;
        font-size: 94px;
        font-weight: 700;
        span {
            text-decoration: line-through;
            text-decoration-color: red;
            display: inline;
        }
    }

    @media (max-width: 425px) {
        h1 {
            font-size: 40px;
        }
    }
`;
const HeroSubtitle = styled.span`
    display: block;
    font-size: 24px;
    font-weight: 300;
    margin-top: 10px;
`;

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
    * {box-sizing: border-box}

    /* basic styles */
    body {
        font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif;
        font-size: 110%;
        max-width: 860px;
        padding: 1em;
        width: 100%;
        margin: auto;
    }
    p.highlight {
        font-weight: 600;
    }
    p.emphasis {
        font-size: 120%;
        font-style: oblique;
        text-align: center;
    }

    /* chat stuff */
    .chatbox {
        padding: 1em;
        background-color: antiquewhite;
        border-radius: 1em;
        position: relative;
        box-shadow: 0 0 10px inset #8883;
        max-width: 600px;
        margin: auto;
    }
    .chat {
        padding: 0.5em 1em;
        border-radius: 0.5em;
        width: fit-content;
        max-width: 90%;
        box-shadow: 0.5em 0.5em 1em #8888;
        position: relative;
        margin: 1em;
        color: #111;
    }
    .chat::before {
        content: "";
        width: 0;
        height: 0;
        border: 0.5em solid transparent;
        position: absolute;
    }
    .chat.right {
        background-color: #baffd5;
        margin: 1em 1em 1em auto;
        text-align: right;
        transform-origin: 100% 100%;
    }
    .chat.right::before {
        right: -1em;
        bottom: 0.3em;
        border-left: 0.75em solid #baffd5;
    }
    .chat.left {
        background-color: #c9c9ff;
        margin: 1em auto 1em 1em;
        transform-origin: 0 0;
    }
    .chat.left::before {
        left: -1em;
        top: 0.3em;
        border-right: 0.75em solid #c9c9ff;
    }
    .chat .timestamp {
        display: block;
        font-size: 80%;
        font-family: monospace;
        color: darkslategrey;
        margin-top: 6px;
    }

    /* animations */
    @keyframes pop-in {
        0% {transform: scale(0);}
        100% {transform: scale(1)}
    }

    @media ( prefers-reduced-motion: no-preference) {
        .animate-in {
            transform: scale(0);
            animation: 250ms cubic-bezier(0, 0, 0.25, 1.25) 0s 1 normal forwards running pop-in;
        }
        .to-animate {
            transform: scale(0);
        }
    }

    /* sticky footer */
    footer {
        position: relative;
        width: 100%;
        left: 0;
        bottom: 0;
    }
    footer p {
        width: 100%;
        text-align: center;
    }

    /* dark theme */
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #272a2d;
            color: #eee;
        }
        a, a:visited, a:active {
            color: #fee;
        }
    }
`;
