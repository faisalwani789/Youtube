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
export const AutoSuggest=`https://netmaxgptbkd-1.onrender.com/api/suggest?q=`
export const Youtube_Search=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=`
export const Dummy_Comments= [
  {
    name: "John Smith",
    comment: "This is an amazing discussion!",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Sarah Wilson",
        comment: "I completely agree with you John!",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Mike Chen",
            comment: "Sarah, could you elaborate more?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Emma Davis",
                comment: "Mike, I think she means...",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    name: "Alex Brown",
                    comment: "Thanks for clarifying Emma!",
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
        name:"kyle",
        comment:"yeah i like it,john",
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies:[
          
        ]
      }
    ]
  },
  {
    name: "Lisa Johnson",
    comment: "Has anyone tried this approach?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "David Lee",
        comment: "Yes, I implemented it last week",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Lisa Johnson",
            comment: "How was your experience David?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "David Lee",
                comment: "It was challenging but worth it!",
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
    name: "Robert Garcia",
    comment: "This reminds me of an older technique",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Maria Rodriguez",
        comment: "Can you share the reference Robert?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Robert Garcia",
            comment: "Sure, it was published in 2018",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Tom Wilson",
                comment: "Thanks for the info!",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    name: "Sophie Martin",
                    comment: "I'll check that out too",
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
    name: "Jennifer Kim",
    comment: "I have a different perspective",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Kevin Zhang",
        comment: "I'd love to hear your thoughts",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Jennifer Kim",
            comment: "Well, I think we should consider...",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Amanda Scott",
                comment: "That's an interesting angle",
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
                replies: [
                  {
                    name: "Chris Evans",
                    comment: "I agree with Amanda",
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
    name: "Daniel White",
    comment: "What about performance issues?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Rachel Green",
        comment: "Performance is definitely a concern",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Daniel White",
            comment: "Any solutions you can suggest?",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Paul Walker",
                comment: "Caching might help here",
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
    name: "Michelle Taylor",
    comment: "Great points everyone!",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "George Miller",
        comment: "Indeed, very productive discussion",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Olivia Parker",
            comment: "Let's continue this tomorrow",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "Henry Chen",
    comment: "The documentation could be better",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Grace Lee",
        comment: "I agree, it's quite confusing",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Henry Chen",
            comment: "Maybe we can contribute to it",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Isaac Newton",
                comment: "That would be helpful",
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
    name: "Albert Wang",
    comment: "Has this been tested thoroughly?",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Marie Curie",
        comment: "The test coverage seems adequate",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Albert Wang",
            comment: "Good to know, thanks Marie",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Steve Jobs",
                comment: "Quality is important",
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
    name: "Mark Thompson",
    comment: "The learning curve is steep",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Lisa Anderson",
        comment: "It gets easier with practice",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Mark Thompson",
            comment: "Thanks for the encouragement",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "Brian Scott",
    comment: "Cross-platform support is excellent",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Amanda Johnson",
        comment: "Works great on all devices",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Brian Scott",
            comment: "That's what impressed me most",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Ryan Cooper",
                comment: "Mobile performance is outstanding",
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
    name: "Jessica Brown",
    comment: "Security aspects need improvement",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Kevin Martinez",
        comment: "What specific concerns do you have?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Jessica Brown",
            comment: "Mainly authentication issues",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Kevin Martinez",
                comment: "I see, that makes sense",
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
    name: "Eric Wilson",
    comment: "The community support is fantastic",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Sarah Davis",
        comment: "Very active and helpful community",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Eric Wilson",
            comment: "Makes learning much easier",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Mike Johnson",
                comment: "Discord channel is especially good",
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
    name: "Nancy Lee",
    comment: "Documentation needs more examples",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Robert Kim",
        comment: "Examples would definitely help",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Nancy Lee",
            comment: "Especially for beginners",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: []
          }
        ]
      }
    ]
  },
  {
    name: "Thomas Green",
    comment: "The API design is very intuitive",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Patricia Hall",
        comment: "Easy to understand and use",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Thomas Green",
            comment: "Makes development faster",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "James Miller",
                comment: "Reduces learning time significantly",
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
    name: "Susan Clark",
    comment: "Looking forward to future updates",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
    replies: [
      {
        name: "Daniel Young",
        comment: "The roadmap looks promising",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
        replies: [
          {
            name: "Susan Clark",
            comment: "Exciting features coming up",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s',
            replies: [
              {
                name: "Matthew Harris",
                comment: "Can't wait for the next release",
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


