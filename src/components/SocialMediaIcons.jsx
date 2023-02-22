import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github-original-wordmark.svg';

const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/jack-epner"
                target="_blank"
            >
                <img alt="linkedin-link" src={LinkedInImage} />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://github.com/enlguy"
                target="_blank"
            >
                <img alt="github-link" id="githubimage" src={GitHubImage} />
            </a>
        </div>
    )
}

export default SocialMediaIcons