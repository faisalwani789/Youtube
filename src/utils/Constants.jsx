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
export const Youtube_comments=`https://youtube.googleapis.com/youtube/v3/textThreads?part=snippet%2Creplies&maxResults=100&videoId=`
export const Channel_Details= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=`
export const AutoSuggest=`https://netmaxgptbkd-1.onrender.com/api/suggest?q=`
export const Youtube_Search=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=`
export const Dummy_Comments= [
  {
    author: "John Smith",
    text: "This is an amazing discussion!",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Sarah Wilson",
        text: "I completely agree with you John!",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Mike Chen",
            text: "Sarah, could you elaborate more?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Emma Davis",
                text: "Mike, I think she means...",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    author: "Alex Brown",
                    text: "Thanks for clarifying Emma!",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        author:"kyle",
        text:"yeah i like it,john",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies:[
          
        ]
      }
    ]
  },
  {
    author: "Lisa Johnson",
    text: "Has anyone tried this approach?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "David Lee",
        text: "Yes, I implemented it last week",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Lisa Johnson",
            text: "How was your experience David?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "David Lee",
                text: "It was challenging but worth it!",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Robert Garcia",
    text: "This reminds me of an older technique",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Maria Rodriguez",
        text: "Can you share the reference Robert?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Robert Garcia",
            text: "Sure, it was published in 2018",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Tom Wilson",
                text: "Thanks for the info!",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    author: "Sophie Martin",
                    text: "I'll check that out too",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Jennifer Kim",
    text: "I have a different perspective",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Kevin Zhang",
        text: "I'd love to hear your thoughts",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Jennifer Kim",
            text: "Well, I think we should consider...",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Amanda Scott",
                text: "That's an interesting angle",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    author: "Chris Evans",
                    text: "I agree with Amanda",
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Daniel White",
    text: "What about performance issues?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Rachel Green",
        text: "Performance is definitely a concern",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Daniel White",
            text: "Any solutions you can suggest?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Paul Walker",
                text: "Caching might help here",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Michelle Taylor",
    text: "Great points everyone!",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "George Miller",
        text: "Indeed, very productive discussion",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Olivia Parker",
            text: "Let's continue this tomorrow",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    author: "Henry Chen",
    text: "The documentation could be better",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Grace Lee",
        text: "I agree, it's quite confusing",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Henry Chen",
            text: "Maybe we can contribute to it",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Isaac Newton",
                text: "That would be helpful",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Albert Wang",
    text: "Has this been tested thoroughly?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Marie Curie",
        text: "The test coverage seems adequate",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Albert Wang",
            text: "Good to know, thanks Marie",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Steve Jobs",
                text: "Quality is important",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Mark Thompson",
    text: "The learning curve is steep",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Lisa Anderson",
        text: "It gets easier with practice",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Mark Thompson",
            text: "Thanks for the encouragement",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    author: "Brian Scott",
    text: "Cross-platform support is excellent",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Amanda Johnson",
        text: "Works great on all devices",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Brian Scott",
            text: "That's what impressed me most",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Ryan Cooper",
                text: "Mobile performance is outstanding",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Jessica Brown",
    text: "Security aspects need improvement",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Kevin Martinez",
        text: "What specific concerns do you have?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Jessica Brown",
            text: "Mainly authentication issues",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Kevin Martinez",
                text: "I see, that makes sense",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Eric Wilson",
    text: "The community support is fantastic",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Sarah Davis",
        text: "Very active and helpful community",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Eric Wilson",
            text: "Makes learning much easier",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Mike Johnson",
                text: "Discord channel is especially good",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Nancy Lee",
    text: "Documentation needs more examples",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Robert Kim",
        text: "Examples would definitely help",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Nancy Lee",
            text: "Especially for beginners",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    author: "Thomas Green",
    text: "The API design is very intuitive",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Patricia Hall",
        text: "Easy to understand and use",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Thomas Green",
            text: "Makes development faster",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "James Miller",
                text: "Reduces learning time significantly",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    author: "Susan Clark",
    text: "Looking forward to future updates",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        author: "Daniel Young",
        text: "The roadmap looks promising",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            author: "Susan Clark",
            text: "Exciting features coming up",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                author: "Matthew Harris",
                text: "Can't wait for the next release",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];


