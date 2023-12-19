import React from "react";

import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
} from "react-share";

// currentUrl을 적절한 URL로 정의
const currentUrl = "https://example.com";

const Share = () => {
    return (
        <>
            <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
            </FacebookShareButton>
            <FacebookMessengerShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <FacebookMessengerIcon size={48} round={true} borderRadius={24}></FacebookMessengerIcon>
            </FacebookMessengerShareButton>
            <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
            </TwitterShareButton>
            <LineShareButton url={currentUrl}>
                <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
            </LineShareButton>
        </>
    );
}

export default Share;