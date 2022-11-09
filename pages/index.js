import config from "../anitube-config.json"
import styled from "styled-components"

function HomePage(){
    const mensagem = "Welcome to Next.js"
    const homeDefault = {backgroundColor: "red"}
    return (
    
    <div style={homeDefault}>
        <Menu />
        <Header />
        <Timeline />
    </div>
    
    )
}

export default HomePage

function Menu(){
    return(
        <div>Menu</div>
    )
}

const StyledHeader=styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
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

function Timeline(){
    return(
        <div>Timeline</div>
    )
}