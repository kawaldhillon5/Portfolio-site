import blogImg1 from '../assets/imgs/blogSc1.png';
import blogImg2 from '../assets/imgs/blogSc2.png';
import blogImg3 from '../assets/imgs/blogSc3.png';
import SlideShow from './slideShow';

export default function BlogShowcase({viewMode}) {
    const cls = viewMode ? "showCaseImg" : "showCaseImg_mobile";
    const imgSrcArr = [{src: blogImg1,
        alt: "Image showing Log In screen",
        classname: cls,
        id: "blogImg1",
        },
        {src: blogImg3,
         alt: "Image showing blog creation ",
         classname: cls,
         id: "blogImg2",
        },
        {src: blogImg2,
            alt: "Image showing requests for blogs",
            classname: cls,
            id: "blogImg3",
        }]
    return(
        <>
            <div className={viewMode? "showCaseImgDiv": "showCaseImgDiv_mobile"}>
                <SlideShow imgSrcArr={imgSrcArr} />
                <div className="showCaseTitle">Blog Post Site</div>
            </div>
            <div className={viewMode? "showCaseText" :"showCaseText_mobile"}>
                <div >
                    Blog Post Site was the first big Full-Stack project, that had Authentication, Database support and a
                    content management tool(tinyMCE).   
                </div>
                <div>
                  The Site can be used to read and write blogs at the moment, some of the features like comments and likes are in developement
                </div>
                <div>
                    A lot of new real-world experiences were gained during the developent, especially with Authentication
                    and database queries.
                </div>
            </div>
        </>
    )
}