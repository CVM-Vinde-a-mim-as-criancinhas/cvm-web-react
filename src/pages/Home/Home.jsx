import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { IoDocumentOutline } from 'react-icons/io5';

import messageData from '../../utils/animation/message.json';
import socialMediaData from '../../utils/animation/socialMedia.json';
import financialData from '../../utils/animation/financial.json';
import volunteerImageCall from '../../assets/volunteercall.svg';

import { 
    HomeContainer, 
    HeroSection, 
    NoticeSection, 
    SocialMediaSection, 
    LawInformationSection, 
    ImageContainer,
    NoticeContainer,
    NoticeDatesContainer,
    SocialMediaContainer,
    SocialMediaLinks,
    MediaLink,
    LawInformationContent,
    LawLinks,
    LawDownloads
} from './style';
import Separator from '../../components/Separator';
import Flex from '../../components/Flex/Flex';

const Home = () => {
    const [animationState] = useState({
        isStopped: false, isPaused: false
    });

    const defaultOptions = (data) => {
        return {
            loop: true,
            autoplay: true,
            animationData: data,
            renderSettings: {
                preserveAspectRadio: 'xMidYMid slice'
            }
        }
    }
    
    return (
        <HomeContainer>
            <HeroSection>
                <Link to="/">
                    <ImageContainer src={volunteerImageCall} />
                </Link>
            </HeroSection>

            <NoticeSection>
                <h2>
                    Resumo de Notícias
                </h2>

                <NoticeContainer>
                    <Lottie 
                        options={defaultOptions(messageData)}
                        height={100}
                        width={100}
                        isStopped={animationState.isStopped}
                        isPaused={animationState.isPaused}
                    />
                    
                    <NoticeDatesContainer>
                        <div>
                            <p>05/03</p>
                            <button type="button">Matrículas 2021</button>
                        </div>

                        <div>
                            <p>05/03</p>
                            <button type="button">Imaginarium, empresa que pode ser considerada soci...</button>
                        </div>

                        <div>
                            <p>01/03</p>
                            <button type="button">
                                Amor e carinho aos 98 anos Com muito amor e carinho o Senhor...
                            </button>
                        </div>

                        <div>
                            <p>28/02</p>
                            <button type="button">
                            MEGA BAZAR CVM - 10,11 e 12 de maio. Você não pode perder....
                            </button>
                        </div>

                        <a href="/">Ver mais</a>
                    </NoticeDatesContainer>
                </NoticeContainer>
            </NoticeSection>

            <SocialMediaSection>
                <h2>
                    Redes sociais
                </h2>

                <SocialMediaContainer>
                    <div>
                        <Lottie 
                            options={defaultOptions(socialMediaData)}
                            height={430}
                            width={430}
                            isPaused={animationState.isPaused}
                            isStopped={animationState.isStopped}
                        />
                    </div>

                    <SocialMediaLinks>
                        <MediaLink>
                            <a href="/">
                                <FiFacebook size={36} color="#fff" />
                            </a>

                            <div>
                                <p>Acesse nossa página no Facebook e fique por dentro das novidades</p>
                            </div>
                        </MediaLink>
                            
                        <MediaLink>
                            <a href="/">
                                <FiInstagram size={36} color="#fff" />
                            </a>

                            <div>
                                <p>Em nosso instragam você acompanha o dia a dia da CVM</p>
                            </div>
                        </MediaLink>
                            
                        <MediaLink>
                            <a href="/">
                                <FiTwitter size={36} color="#fff"/>
                            </a>

                            <div>
                                <p>As notícias mais fresquinhas saem do forno em nosso Twitter!</p>
                            </div>
                        </MediaLink>
                    </SocialMediaLinks>
                </SocialMediaContainer>
            </SocialMediaSection>

            <Flex padding="6rem">
                <Separator backgroundColor="#F3C888" height="2px" borderRadius="12px"/>
            </Flex>

            <LawInformationSection>
                <h2>Informações legais e transparência</h2>

                <LawInformationContent>
                    <LawLinks>
                        <h3>Prestação de contas</h3>

                        <h5>Relatório anual e balanço patrimonial</h5>
                        
                        <Separator backgroundColor="#12AFCB" height="2px" borderRadius="12px"/>

                        <LawDownloads>
                            <a href="/">
                                <strong>2019</strong>
                                <IoDocumentOutline />
                            </a>

                            <a href="/">
                                <strong>2018</strong>
                                <IoDocumentOutline />
                            </a>

                            <a href="/">
                                <strong>2017</strong>
                                <IoDocumentOutline />
                            </a>

                            <a href="/">
                                <strong>2016</strong>
                                <IoDocumentOutline />
                            </a>

                            <a href="/">
                                <strong>2015</strong>
                                <IoDocumentOutline />
                            </a>
                        </LawDownloads>

                        <a href="/">
                            <p>Ver mais</p>
                        </a>
                    </LawLinks>

                    <div>
                        <Lottie 
                            options={defaultOptions(financialData)}
                            height={400}
                            width={400}
                            isPaused={animationState.isPaused}
                            isStopped={animationState.isStopped}
                        />
                    </div>
                </LawInformationContent>
            </LawInformationSection>
        </HomeContainer>
    )
}

export default Home;