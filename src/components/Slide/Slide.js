import React from 'react';
import ReactTooltip from 'react-tooltip';

import './Slide.css';

/*
* Props:
* linkType: 0 or 1, image or Youtube video
* link: url to the image or Youtube video
* linkBrief: text explaining the relevance of the item
* text: text to render in the slide
*/

export default function Slide(props) {

    const renderLinks = () => {
        switch (props.linkType) {
            case 0:
                return <img width='100%' src={props.link} alt='Linked' data-tip={props.linkBrief}/>;
            case 1:
                return <iframe
                    width='100%'
                    height='100%'
                    src={props.link}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />;
            case 2:
                return <video
                    width='100%'
                    controls
                >
                    <source src={props.link} type='video/mp4'></source>
                </video>;
            case 3:
                return <div className='MultiImage'>
                    {props.links.map((link) => (
                        <img src={link} alt='Linked' data-tip={props.linkBrief}/>
                    ))}
                </div>
            default:
                return <div>Error with choosing link type</div>
        }
    }

    return (
        <div className='Slide'>
            <ReactTooltip />
            <div className='SlideText'>
                <div className='SlideTextContainer'>
                    {props.text}
                </div>
            </div>
            <div className='SlideLink'>
                <div className='SlideLinkContainer'>
                    {renderLinks()}
                </div>
            </div>
        </div>
    );
};