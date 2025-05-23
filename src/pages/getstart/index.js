/* eslint-disable react/jsx-pascal-case */

import { 
  ColorBgContainer,
  TitleTag,
  Features,
  F,
  PitchForm,
  Player,
  PlayerProgress,
  PlayerTime,
  TextBox,
  PitchTextFormBottomBar,
  FormTitle,
  Rotate,
  GridRows,
  CustomSVG,
  Grade,
  DContainer,
  PitchTextFormTopBar,
  GridColumns,
  SvgBgContainer,
  BigTitle,
  MidTitle,
  FitMeNow,
  Title
} from "./styled";
// import About from "./../../components/about"

import SpeakerWaveIcon from "../../assets/svg/speaker-wave.svg"
import PlayIcon from "../../assets/svg/play-circle.svg"
import MoreIcon from "../../assets/svg/ellipsis-horizontal.svg"
import DownloadIcon from "../../assets/svg/arrow-down-tray.svg"
import ShareIcon from "../../assets/svg/share.svg"
import CopyIcon from "../../assets/svg/document-duplicate.svg"
import InformationIcon from "../../assets/svg/information-circle.svg"
import ChevronIcon from "../../assets/svg/chevron-down.svg"
import HeartIcon from "../../assets/svg/heart.svg"
import ChatIcon from "../../assets/svg/chat-bubble-oval-left.svg"

import Avatar1 from '../../assets/avatar/1.jpg'
import Avatar2 from '../../assets/avatar/2.jpg'
import Avatar3 from '../../assets/avatar/3.jpg'
import Avatar4 from '../../assets/avatar/4.jpg'

import { i18n } from "../../translate/i18n";
import { Form } from "react-router-dom";

import Avatar from "./avatar";

export default function GetStart() {
  return (
    <ColorBgContainer
      backgroundcolor="#111827"
    >
      <SvgBgContainer>
        <TitleTag>
          <Title>
            {i18n.t('getstart.Title.Get_Started')}
          </Title><br/>
          <BigTitle
            color="white"
          >
            {i18n.t('getstart.Title.Make_Your_Pitch_Perfect')}
          </BigTitle>
        </TitleTag>
        <Features>
          <F>
            <PitchForm>
              <Title>
                {i18n.t('getstart.Features.PitchForm.Pitch')}
              </Title>
              <Player>
                <img src={PlayIcon} alt={PlayIcon}/>
                <PlayerTime>
                  0:05 / 0:56
                </PlayerTime>
                <PlayerProgress
                  id="playerprogress"
                  value='30'
                  max='100'
                />
                <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
                <img src={MoreIcon} alt={MoreIcon}/>
              </Player>
              <TextBox
                height="300px"
                borderradius="15px"
              >
              We believe in the power of exceptional user experiences. Our UX/UI agency is dedicated to creating visually stunning and intuitive digital products that captivate users and drive business growth. Through our meticulous design process, we blend creativity, user-centricity, and technical expertise to craft interfaces that not only look beautiful but also deliver seamless interactions. Join us on a journey to transform your digital presence and leave a lasting impression on your audience.
              In today's digital landscape, user experience has become a critical factor in the success of any business. However, many companies struggle to provide seamless and intuitive user interfaces that effectively meet the needs and expectations of their target audience. Outdated designs, confusing navigation, and lack of user-centered approaches often result in frustrated users, decreased conversion rates, and missed opportunities for growth.
              We believe in the power of exceptional user experiences. Our UX/UI agency is dedicated to creating visually stunning and intuitive digital products that captivate users and drive business growth. Through our meticulous design process, we blend creativity, user-centricity, and technical expertise to craft interfaces that not only look beautiful but also deliver seamless interactions. Join us on a journey to transform your digital presence and leave a lasting impression on your audience.
              In today's digital landscape, user experience has become a critical factor in the success of any business. However, many companies struggle to provide seamless and intuitive user interfaces that effectively meet the needs and expectations of their target audience. Outdated designs, confusing navigation, and lack of user-centered approaches often result in frustrated users, decreased conversion rates, and missed opportunities for growth.
              <br/>
              <br/>
              <br/>
              </TextBox>
              <PitchTextFormBottomBar
                top="-43px"
              >
                <DContainer
                  display="flex"
                  justifycontent="flex-end"
                  alignitems="center"
                  gap="20px"
                >
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <img src={DownloadIcon} alt={DownloadIcon}/>
                    <FormTitle
                      color="white"
                      fontsize="18px"
                    >Download</FormTitle>
                  </DContainer>
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <img src={CopyIcon} alt={CopyIcon}/>
                    <FormTitle
                      color="white"
                      fontsize="18px"
                    >Copy</FormTitle>
                  </DContainer>
                </DContainer>
              </PitchTextFormBottomBar>
            </PitchForm>
            <GridRows
              rows={2}
            >
              <MidTitle
                color="white"
              >
                Grow your startup with
                <MidTitle 
                  color="#E71561"
                >
                  &nbsp;iterative pitching and A/B testing
                </MidTitle>
              </MidTitle>
              <DContainer
                position="relative"
                padding="0 10% 0 10%"
              >
                <Rotate
                  rotate="-12"
                  left="0px"
                  top="10%"
                  >
                  <CustomSVG src={DownloadIcon} width="100px" height="100px" fill="red">
                  </CustomSVG>
                </Rotate>
                <Rotate
                  rotate="15" 
                  left="40%"
                  top="50%"
                  >
                  <CustomSVG src={ShareIcon} width="100px" height="100px" fill="red">
                  </CustomSVG>
                </Rotate>
              </DContainer>
            </GridRows>
          </F>
          <F>
            <GridRows
              rows={2}
            >
              <MidTitle
                color="white"
              >
                {i18n.t('getstart.Features.AnalysisForm.GetComprehensive')}
                <MidTitle
                  color="#E71561"
                >
                  {i18n.t('getstart.Features.AnalysisForm.Evaluations')}
                </MidTitle>
                {i18n.t('getstart.Features.AnalysisForm.AndExpert')}
                <MidTitle
                  color="#E71561"
                >
                  {i18n.t('getstart.Features.AnalysisForm.Recommendations')}
                </MidTitle>
                {i18n.t('getstart.Features.AnalysisForm.ForPitchImprovement')}
              </MidTitle>
              <DContainer
                position="relative"
                padding="10% 20% 0 20%"              
              >
                <Rotate
                  position="absolute"
                  rotate="-9"
                  left="20%"
                  top="15%"
                >
                  <Grade>A+</Grade>
                </Rotate>
                <Rotate
                  position="absolute"
                  rotate="12"
                  right="20%"
                  top="25%"
                >
                  <Grade
                    size={45}
                    color="yellow"
                    backgroundcolor="rgba(255,255,0,0.1)"
                  >B-</Grade>
                </Rotate>
                <Rotate
                  position="absolute"
                  rotate="-10"
                  left="30%"
                  top="50%"
                >
                  <Grade
                    size={40}
                    color="#FF9D04"
                    backgroundcolor="rgba(255, 157, 4, 0.1)"
                  >C-</Grade>
                </Rotate>
              </DContainer>
            </GridRows>
            <PitchForm>
              <Title>
                {i18n.t('getstart.Features.AnalysisForm.Analysis')}
              </Title>
              <PitchTextFormTopBar
              >
                <DContainer
                  margin="0 0 0 20px"
                  display="flex"
                  justifycontent="space-between"
                  alignitems="center"
                >
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <FormTitle
                      color="white"
                      fontsize="18px"
                    >
                      Features and Benefits
                    </FormTitle>
                    <CustomSVG src={InformationIcon}></CustomSVG>
                  </DContainer>
                  <CustomSVG src={ChevronIcon}></CustomSVG>
                </DContainer>
                <Grade
                  position="absolute"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  size={30}
                  color="yellow"
                  backgroundcolor="rgba(255,255,0,0.1)"
                >B+</Grade>
              </PitchTextFormTopBar>
              <TextBox
                height="500px"
                bordertop="none"
                borderbottom="none"
                borderradius="0px"
              >
              <FormTitle
                color="#75A8FF"
                fontsize="20px"
              >
                Evaluation<br/><br/>
              </FormTitle>
              <FormTitle
                color="white"
                fontsize="18px"
              >
                While you touched on the features of your agency, you did not sufficiently emphasize the specific benefits that clients can expect from working with you. To make this section more impactful, it is important to clearly articulate the advantages and value proposition your agency offers, highlighting how your features directly address the pain points and needs of potential clients.
              </FormTitle><br/><br/><br/>
              <FormTitle
                color="#75A8FF"
                fontsize="20px"
              >
                Recommendation<br/><br/>
              </FormTitle>
              <FormTitle
                color="white"
                fontsize="18px"
              >
                Try to focus more on the unique benefits that clients will gain from your agency's features. Clearly communicate how your features translate into tangible advantages, such as enhanced user experiences, increased user engagement, improved conversion rates, streamlined workflows, and the achievement of clients' business goals. By doing so, you can effectively differentiate your agency from competitors and persuade potential clients to choose your services.
              </FormTitle>
              </TextBox>
              <PitchTextFormBottomBar
                top="-8px"
              >
                <DContainer
                  margin="0 0 0 20px"
                  display="flex"
                  justifycontent="space-between"
                  alignitems="center"
                >
                  <DContainer
                    display="flex"
                    gap="10px"
                  >
                    <FormTitle
                      color="white"
                      fontsize="18px"
                    >
                      Readliness
                    </FormTitle>
                    <CustomSVG src={InformationIcon}></CustomSVG>
                  </DContainer>
                  <Rotate rotate="180" right="5%"><CustomSVG src={ChevronIcon}></CustomSVG></Rotate>
                </DContainer>
                  <Grade
                    position="absolute"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    size={30}
                    color="yellow"
                    backgroundcolor="rgba(255,255,0,0.1)"
                  >B-</Grade>
              </PitchTextFormBottomBar>
            </PitchForm>
          </F>
          <F>
            <PitchForm>
              <Title>
                Public
              </Title>
              <TextBox
                borderradius="15px"
                width="calc(100% - 60px)"
              >
                <DContainer
                  display="flex"
                  justifycontent="space-between"
                  width="100%"
                >
                  <PitchForm>
                    <FormTitle
                      color="#E71561"
                      fontsize="15px"
                    >Oliva Martinez</FormTitle>
                    <FitMeNow
                      color="White"
                    >
                      FitMeNow
                    </FitMeNow>
                    <DContainer
                      display="flex"
                      gap="20px"
                      >
                      <DContainer
                          display="flex"
                        >
                        <CustomSVG src={HeartIcon} width="20px" height="20px"></CustomSVG>
                        <FormTitle color='white' fontsize="18px">456</FormTitle>
                      </DContainer>
                      <DContainer
                        display="flex"
                      >
                        <CustomSVG src={ChatIcon} width="20px" height="20px"></CustomSVG>
                        <FormTitle color='white' fontsize="18px">1k</FormTitle>
                      </DContainer>
                    </DContainer>
                  </PitchForm>
                  <DContainer>
                    <DContainer
                      display="flex"
                      justifycontent="flex-end"
                    >
                      <FitMeNow
                        color="green"
                      >
                        89<FitMeNow color="#415C96">/100</FitMeNow>
                    </FitMeNow></DContainer>
                    <DContainer
                      display="flex"
                      justifycontent="flex-end"
                    >
                      <Grade
                        color="#13B718"
                        backgroundcolor="#1F6E52"
                      >A</Grade>
                    </DContainer>
                  </DContainer>
                </DContainer>
              </TextBox>
              <Player>
                <img src={PlayIcon} alt={PlayIcon}/>
                <PlayerTime>
                  0:05 / 0:56
                </PlayerTime>
                <PlayerProgress
                  id="playerprogress"
                  value='30'
                  max='100'
                />
                <img src={SpeakerWaveIcon} alt={SpeakerWaveIcon}/>
                <img src={MoreIcon} alt={MoreIcon}/>
              </Player>
              <TextBox
                height="200px"
                borderradius="15px"
              >
                Hi everyone! My name is Olivia, and I'm here to introduce you to FitMeNow, the revolutionary fitness app designed to transform your workout routine. Are you tired of feeling unmotivated and struggling to reach your fitness goals? FitMeNow is here to change that!<br/><br/>
                We've identified a common problem among individuals who want to lead a healthier lifestyle: lack of personalized guidance and motivation. Many people find it challenging to stay consistent with their exercise routines or don't know where to begin. FitMeNow is the solution to these obstacles.
              </TextBox>
            </PitchForm>
            <GridRows
              rows="2"
            >
              <MidTitle
                color="white"
              >
                Gain insights and learn from a diverse range of pitches by
                <MidTitle
                  color="#E71561"
                >
                  &nbsp;exploring
                </MidTitle>
                &nbsp;those shared by our
                <MidTitle
                  color="#E71561"
                >
                  &nbsp;community
                </MidTitle>
              </MidTitle>
              <DContainer
                padding="10% 10% 0px 10%"
                position="relative"
              >
                
                <Rotate
                  top="10%"
                  left="5%"
                >
                  <Avatar 
                    imageSrc={Avatar1}
                    avatarTitle="Following"
                    comment={false}
                    titleState={false}
                  />
                </Rotate>
                <Rotate
                  top="8%"
                  right="10%"
                >
                  <Avatar 
                    imageSrc={Avatar2}
                    avatarTitle=""
                    comment={true}
                    titleState={false}
                  />
                </Rotate>
                <Rotate
                  top="60%"
                  left="25%"
                >
                  <Avatar 
                    imageSrc={Avatar3}
                    avatarTitle="+ Follow"
                    comment={false}
                    titleState={true}
                  />
                </Rotate>
                <Rotate
                  top="60%"
                  right="5%"
                >
                  <Avatar 
                    imageSrc={Avatar4}
                    avatarTitle=""
                    comment={false}
                    titleState={false}
                />
                </Rotate>
              </DContainer>
            </GridRows>
          </F>
        </Features>
      </SvgBgContainer>
    </ColorBgContainer>
  );
}



