import {
    ProfileImage,
    FormTitle,
    DContainer,
    CustomSVG
} from './styled'

import HeartIcon from '../../assets/svg/heart.svg'
import ChatIcon from '../../assets/svg/chat-bubble-oval-left.svg'


const Avatar = (props) => {
    return (
        <DContainer
        >
            <DContainer
                display="flex"
                alignitems="center"
                gap="20px"
                margin="0 0 10px 0"
            >
                <ProfileImage src={props.imageSrc} width="70px" height="70px"></ProfileImage>
                {props.comment ? (
                    <>
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
                    </>
                ):(<></>)}
            </DContainer>
            <DContainer
                margin="20px 0 0 0"
            >
                <FormTitle
                    fontSize="15px"
                    color={props.titleState ? "white" : "#3D568C"}
                >{props.avatarTitle}</FormTitle>
            </DContainer>
        </DContainer>
    );
}

export default Avatar;