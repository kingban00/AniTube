import config from "../anitube-config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import  Menu  from "../src/components/Menu.js"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage(){
    const mensagem = "Welcome to Next.js"
    const homeDefault = {
        // backgroundColor: "red"
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }

    // console.log(config.categorias)

    return (
    <>
        <CSSReset />
        <div style={homeDefault}>
            <Menu />
            <Header />
            <Timeline categorias={config.categorias}/>
        </div>
    </>
    
    )
}

export default HomePage

// function Menu(){
//     return(
//         <div>Menu</div>
//     )
// }

const StyledHeader=styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        margin-top: 50px;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header(){
    return(
        <StyledHeader>
            <section>
                {/* <img src="banner" /> */}
            </section>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} /> 
                <div>
                    <h2>
                        {config.name}                
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props){
    const categoriaNames = Object.keys(props.categorias)
    console.log("props", categoriaNames)
    return(
        <StyledTimeline>
            {
            categoriaNames.map((categoriaName)=>{
                const videos = props.categorias[categoriaName]
                console.log('categoriaName: ', categoriaName)
                console.log('video', videos)
                    return (
                        <section>
                            <h2>{categoriaName}</h2>
                            <div>
                                {
                                    videos.map((video) => {
                                        return (
                                         <a href={video.url}>
                                             
                                             <img src={video.thumb}/>
                                             <span>
                                                 {video.title}
                                             </span>
                                         </a>
                                        ) 
                                     })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}