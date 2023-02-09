import styled from 'styled-components';

function Section() {

    const handleBoxClick = (link) => {
        if(link === null){
            alert("The site you're trying to access to is under construction, please choose a different one!")
            return;
        }
        window.open(link);
    };
    
    return (
      <Container>
        <Wrap>
          <Box id="server-admin" onClick={() => handleBoxClick("https://buzgalo.dev/#/")}>
            <p>Server Admin</p>
          </Box>
          <Box id="network-pihole" onClick={() => handleBoxClick("https://pihole.buzgalo.dev/admin/")}>
            <p>Network Pihole</p>
          </Box>
          <Box id="network-cloud" onClick={() => handleBoxClick(null)}>
            <p>Network Cloud</p>
          </Box>
          <Box id="github-website" onClick={() => handleBoxClick("https://github.com/YoelBuzgalo")}>
            <p>Github Website</p>
          </Box>
          <Box id="portfolio-website" onClick={() => handleBoxClick(null)}>
            <p>Portfolio Website</p>
          </Box>
        </Wrap>
      </Container>
    );
    
}

export default Section

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 5;
`

const Wrap = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: repeat(3, 10vh);
    grid-template-columns: repeat(2, 20vw);
    row-gap: 10%;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    z-index: 5;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0, 0.6);
    border-radius: 20px;
    padding: 50px;
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight: bold;
    font-family: "Cascadia Code", sans-serif;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
`