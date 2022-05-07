import * as React from "react"
import { Container } from "react-bootstrap"
import Layout from "../../../components/layout"
import styled from "styled-components"
import { Link } from "../../../svg/Link"
import { ReactChild } from "react"

// “That’s better!”
export default () => {
    return (
        <Layout>
            <Container>
                <h1 style={{ marginBottom: "2.5rem" }}>Personal Brain Dump</h1>

                <CenterContainer>
                    <LimitWidth>
                        <p>
                            Hello Traveler! Welcome to my kinda-secret page. I doubt you randomly stumble upon this page by
                            yourself, so either you get the link directly from me or from your other friend. Or maybe you
                            found it in on GitHub. In which case, Hi! I didn’t think anyone would look at my spaghetti.
                            Come talk to me! I’d love to hear what you think.
                        </p>
                        <p>
                            On this page, I’ll write down a few things that happened to me or thoughts that came up to me a
                            few times. They may not be universally correct or the best way to do things, but they are my
                            personal views. Hopefully, this will help you learn more about me as a “person” (or as a dog, we
                            all pretend to be an animal online, right?). Admittedly, a blog format would have been better
                            for a page like this. Hopefully, this page won’t be very long.
                        </p>
                    </LimitWidth>
                </CenterContainer>
                <LimitWidth>
                    <DivWithMargin>
                        <strong>Notice</strong>: Each section of this document is only written in the language I am
                        comfortable with. It will not be translated to all languages supported by this site.
                        <br />
                        <strong>ข้อสังเกต</strong>: เราเขียนเอกสารชิ้นนี้ในภาษาที่เราสะดวกที่สุด
                        ซึ่งอาจจะแตกต่างกันในแต่ละหัวข้อ โดยจะไม่มีการแปลให้ครบทุกภาษาที่เว็บนี้รองรับ
                    </DivWithMargin>
                    <DivWithMargin>
                        This document is last updated on, <a
                        href="https://github.com/tangmo-anthro-ltd/tangmo.anthro.asia/commits/source/src/pages/js/vendor/personal-brain-dump.tsx"
                        rel="noreferrer noopener">whenever the latest commit on this file is</a>.
                    </DivWithMargin>
                </LimitWidth>
                <AnchoredH3 as="h2" id="you-should-know">You should know</AnchoredH3>
                <p>
                    This section is “written in blood” (not literally, but someone had their feeling hurt from this), so I think they deserved to be highlighted.
                </p>
                <CenterContainer className="bg-light">
                    <LimitWidth as="ul">
                        <li>Don’t <a href="https://nohello.net/" rel="noreferrer noopener">just send me a “Hello” message</a>. If you don’t add the topic in the initial message, I will often deliberately reply later to exacerbate the issue.</li>
                        <li>I talk very directly. When there’s something I don’t like, I often give feedback if I am familiar with them enough. I have learnt to soften the blow, but prepare for me to be direct.</li>
                        <li>At the same time, if I did something you don’t like, please tell me. Sometimes, I really don’t know if I did something wrong. Don’t expect me to read your mind and know what you want me to do.</li>
                        <li>
                            Surprise gifts haven’t really yield good results with me. I hate wasting money/resources.
                            If the surprise ended up not being exactly what I wanted (high chance), either it would feel that it’s a waste or I will feel forced to accept it.
                            <q>If only you asked me first, I’d rather you spend that $10 on something else.</q>
                            As per above, I often give feedback. So in the end, both of ours feelings will be hurt.
                            If you aren’t 100% sure, I’d think the good middle ground is to surprise me with something in-progress where it wouldn’t hurt much to revert course.
                            <blockquote>
                                “ไปคอมมิชชั่นรูปมาให้ render full-CG สุดอลังเสร็จสรรพ เจ้าตัวดันไม่ชอบ สุดท้ายเป็นได้แค่ wallpaper มือถือของคนที่เคยเป็นเพื่อน ที่ตอนนี้ไม่ใช่เพื่อนแล้ว เพราะอีเรื่องนี่แหละ”
                            </blockquote>
                        </li>
                        <li><q>เพื่อนกัน ไม่จำเป็นต้องเป็น friend กันทุก platform ก็ได้</q> Being friend doesn’t mean we have to “friend” each other on every social network platform.</li>
                    </LimitWidth>
                </CenterContainer>
                <AnchoredH3 as="h2" id="other-random-thoughts">Other random thoughts</AnchoredH3>

                <AnchoredH3 id="vrc-stream">I don’t like non-consensual Streamers in VRChat</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>Imagine you and your friends having dinner together, and one of them quietly have their phone stream everything to Facebook Live without telling anyone. Except the camera is also invisible. That’s how I feel about VRChat streamers, including everything from Twitch to a small Discord screenshare.</p>
                        <p>I generally don’t have problem with streaming. I don’t like not being told that more people are watching me than I am aware of. In a Friends+ worlds, it can be difficult to make sure everyone is notified, especially with people constantly coming and going. I think NeosVR has done a better in this regards. The streamer will have an indicator icon on the nameplate.</p>
                    </LimitWidth>
                </CenterContainer>

                <AnchoredH3 id="how-to-name">How I got the name “แตงโม”</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>This is a fun one. For a long time, I have always been a watcher, not interacting with the furry community at all. When I first started, I live in a tiny circle where I’d use my real-life nickname (it is common for Thai people to have a nickname). Then, I started jumping into VRChat where I’d use my gamer name I had long before I like furry. Turns out that name isn’t easy to read out loud.</p>
                        <p>It was the end of 2020, I was in Bangkok for 2.5 months. After dinner with my friends near MBK, I was walking back to Central World to take my friends’ ride to get home. On the way, I asked about how they decided to pick their name: being unique, searchable or unsearchable, etc. I then realized:</p>
                        <blockquote >“Why would we try to come up with English or Japanese name? There’s a high chance it won’t be unique as everyone use those languages, and in case of Japanese, we’d have to look up the dictionary. Why don’t I use something convenient for us and not many other people will use? Thai!”</blockquote>
                        <p>And the first word that just came up in my head was “แตงโม”, for whatever reason. Maybe we just walked past a fruit shop. At that moment, I know I have to just use it. I immediately had a second and a third doubt, but I know that if I put my thoughts into finding a good name, I can spend 3 more months and wouldn’t be satisfied. If I just use it now, I probably will get used to it, eventually. Besides, if I really really hate the name, I can change it later on.</p>
                        <p>Admittedly, it was not the perfect name. It is too common that so many people have used it (outside of furry context). It was difficult to get a Twitter handle, and it actually is a furry friend’s real-life nickname (he is okay with me using this name).</p>
                    </LimitWidth>
                </CenterContainer>

                <AnchoredH3 id="familiarity">Familiarity ความเคยชิน</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>If I have a chance to make a decision, I have a habit of overthinking things. I set the cost of reversing course too high. Maybe, taking ability to make a decision away from me is a good thing.</p>
                        <p>I had been using various public avatars in VRChat. It wasn’t until I need to use <a rel="noreferrer noopener" href="https://hirabiki.booth.pm/items/2283183">VRCLens</a> that I had to upload my own avatar. For those who joined VRChat later, VRChat’s built-in camera used to suck. There was no zoom nor focus blur option which severely limit creativity. People who likes to take photos often buy an avatar add-on called VRCLens to get these functionality. However, since this is a paid add-on, it is not allowed to be added to a public-avatar.</p>
                        <p>Since I just needed an avatar for VRCLens, any one, to use with VRCLens, I just picked one of the avatars that I had the files for. I only had 2-3 avatars that comes with VRCSDK 3 configuration and Anemo was the one I liked the most, so I picked it, and uploaded it without making any texture change.</p>
                        <p>Days after days, from an avatar I only use when taking a photo, I started using it more and more, and grew to like it. Before I knew it, that default Anemo has become my identity. Some people thought this is my original model commission. I didn’t even have a fursona!</p>
                        <p>To this day (check git history of this line if you want to see the date), despite already making an Anemo skin from my first fursona, I still a lot more of my Anemo time in the default Anemo skin. I even made a few other model into Anemo family, all based on the default Anemo skin. I wonder if I will ever grow past this default Anemo.</p>
                        <p>The same goes for the name “แตงโม” as mentioned in the previous section. I don’t feel like there is anything wrong with the name anymore (beside being more difficult to get a username on websites)</p>
                        <p>Next up would be a fursona. I put off making one for almost the entire 2021, despite <a rel="noreferrer noopener" href="https://twitter.com/TangMoEat/status/1418349731999322113">Rogan helping me to kickstart the effort</a>. It finally got to v1 due to a deadline where I “needed” to have one. I didn’t feel very attached to the character, so I wasn’t sure if I had the wrong mindset, approached it wrong, or some other factor but that’s a story for another day. For a while, I even wanted to chuck them away, out of sight, never to be seen again. After getting a few artworks, I start to feel “used to” it now. Hopefully this familiarity will once-again reattach me to the character. Or I’d make a new one, “wasting” the existing artworks, and starting this whole loop again. Or maybe the next loop, I’d have a different mindset and all will be fine?</p>
                    </LimitWidth>
                </CenterContainer>

                <AnchoredH3 id="javascript-everywhere">Javascript everywhere!</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>I view “HTML” as a structured “document”, having <code>h1, h2, h3, p, a, button, article</code>, etc. Web accessibility in mind drilled into my head from my work, I was told of how invisible semantic elements helps people using screenreaders navigate the site, etc. For this website, I know that I am not good at designing, so I won’t compete with that. Rather, I took inspirations from <a rel="noreferrer noopener" href="https://motherfuckingwebsite.com/">motherfucking website</a> and the likes and <a rel="noreferrer noopener" href="https://imapsync.lamiral.info/">imapsync</a> and set the <a rel="noreferrer noopener" href="https://github.com/tangmo-anthro-ltd/tangmo.anthro.asia/#goal">goal of this site</a> in that direction.</p>
                        <p>Despite using React due to my familiarity, <a rel="noreferrer noopener" href="https://www.gatsbyjs.com/">Gatsby</a> was chosen because it can compile the page to static HTML/CSS for GitHub Pages with optional JS. An HTML version is already pre-rendered and once JS kicks in, it can hydrate the page and add interactivity. As I develop the site, I check that everything essentials would be functional without Javascript. This actually impose a few limitations. The biggest one being the nav bar can’t be interactive (or I will have to make a lot of CSS / URI fragment trickery, which is pretty cool and we did that at work, but it is too much of a headache for this project). Luckily there aren’t many links here.</p>
                        <p>Finally, as stated I also tried to make sure the basic HTML semantic elements are correctly used (not claiming I am an expert and write the best semantic layout in the world). Even if something look like a button, if it is link, it has to be an <code>&lt;a&gt;</code>, etc. I also sometimes add a few hidden accessibility elements here and there such as a link to skip the navigation bar. I stretch goal would be to learn and add ARIA elements.</p>
                    </LimitWidth>
                </CenterContainer>

                <AnchoredH3 id="knowing-future">“รู้อะไรไม่สู้รู้งี้”</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>ได้ยินพ่อเราพูดอยู่หลายที บ่อยครั้งที่เราไม่สามารถคาดเดาอนาคตได้ เมื่อผลออกมาแล้ว เราก็มักจะนั่งเสียใจ <q>รู้งี้น่าจะ… ไม่งั้นป่านนี้…ไปแล้ว</q></p>
                        <p>ในตอนนั้น ไม่ว่าเราจะเก่งแค่ไหน หาข้อมูลแค่ไหน เราก็ไม่สามารถ“รู้งี้”ได้ เราเลือกตัวเลือกที่ดีที่สุดแล้วในตอนนั้น ไม่มีประโยชน์จะมานั่งเสียใจทีหลัง</p>
                    </LimitWidth>
                </CenterContainer>

                <AnchoredH3 id="todo">TODO</AnchoredH3>
                <CenterContainer>
                    <LimitWidth>
                        <p>There are a few more things I wanted to mention about, spoiler: they are in the comment on this file!</p>
                    </LimitWidth>
                </CenterContainer>

                {/*
                <h3>รู้จักกันทางเดียว</h3>

                <h3>Abstractions upon abstractions</h3>

                <h3>รู้อะไรไม่สู้รู้งี้</h3>
                */}
            </Container>
        </Layout>
    )
};

const DivWithMargin = styled.div`
    margin-bottom: 1rem;
`;
const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
`;
const LimitWidth = styled.div`
    max-width: 960px;
    margin-bottom: 2rem;
`;

const AnchoredH3 = ({id, children, as}: {id: string; children: ReactChild; as?: string}) => {
    return <StyledH3 id={id} as={as}>
        {children}
        <a href={`#${id}`}><Link/></a>
    </StyledH3>;
};
const StyledH3 = styled.h3`
    > a {
        display: none;
    }

    :hover > a {
        display: inline;
    }

    svg {
        margin: 0 0 0.2rem 6px;
        width: 16px;
        height: 16px;
    }
`;
