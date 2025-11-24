import { faUser, faBolt, faClockRotateLeft, faHouse,faShoppingBag,faMusic,faGamepad,faHeadset,faClapperboard,faNewspaper,faFaceSmileBeam, faGraduationCap, } from "@fortawesome/free-solid-svg-icons"
import { faSquareYoutube } from "@fortawesome/free-brands-svg-icons"
export const SidebarData = [
    {
        icon: faHouse,
        tabName: 'Home',
    },
    {
        icon: faBolt,
        tabName: 'Shorts',
    },
    {
        icon: faSquareYoutube,
        tabName: 'Subscriptions',
    },
    {
        icon: faClockRotateLeft,
        tabName: 'History',
    },
    {
        icon: faUser,
        tabName: 'You',
    },
]
export const ExploreData=[
     {
        icon: faShoppingBag,
        tabName: 'Shopping',
    },
    {
        icon: faMusic,
        tabName: 'Music',
    },
    {
        icon: faGamepad,
        tabName: 'Gaming',
    },
    {
        icon: faNewspaper,
        tabName: 'News',
    },
    {
        icon: faHeadset,
        tabName: 'Support',
    },
     {
        icon: faGraduationCap,
        tabName: 'Courses',
    },
     {
        icon: faFaceSmileBeam,
        tabName: 'Fashion',
    },
]

export const ButtonData=[
    {
     text:"All",
    },
     {
     text:"Live",
    },
     {
     text:"Gaming",
    },
     {
     text:"Podcast",
    },
     {
     text:"Cricket",
    },
     {
     text:"Coding",
    },
     {
     text:"Physics",
    },
     {
     text:"Jukebox",
    },
     {
     text:"Recently Uploaded",
    },
     {
     text:"Comedy",
    }, {
     text:"Pop Music",
    },
     {
     text:"Lo-fi",
    },
     {
     text:"Religious",
    },
     {
     text:"Indie Music",
    },
    
]
export const Youtube_Popular_Videos=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=`
export const VideoDetails=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
export const Youtube_comments=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=`
export const Channel_Details= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`
export const AutoSuggest=`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`