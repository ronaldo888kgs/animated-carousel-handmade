import { useState, useEffect } from "react";
import styled from "styled-components";

const CarouselConainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageCard = styled.img`
  margin-right: 10px;
  padding: 10px;
  border: solid 1px;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  overflow: hide;
  transition: 1.5s;
`;

const BeforeButtonContainer = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BeforeButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ButtonLabel = styled.div`
`;

const AfterButtonContainer = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AfterButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Carousels = ({ count, images }) => {
  const size = useWindowSize();
  const [imageWidth, setImageWidth] = useState(0);
  const [firstItem, setFirstItem] = useState(0);

  useEffect(() => {
    console.log(size.width);
    setImageWidth((size.width * 0.8 - 10 * (count - 1)) / (count + 2));
  }, [count, size]);

  const nextImage = () => {
    window.scrollX = 100;
    console.log("next");
  };
  const beforeImage = () => {
    console.log("before");
  };

  return (
    <>
      <CarouselConainer>
        <BeforeButtonContainer>
          <BeforeButton onClick={beforeImage}>
            <ButtonLabel>{"<"}</ButtonLabel>
          </BeforeButton>
        </BeforeButtonContainer>
        <ImageContainer width={imageWidth * count + 10 * (count - 1)}>
          {imageWidth &&
            images.map(
              (image, index) =>
                firstItem <= index &&
                index < firstItem + count && (
                  <div key={image.id}>
                    <div>
                      <ImageCard
                        key={image.id}
                        width={imageWidth}
                        height={imageWidth}
                        src="/assets/images/character1.png"
                        alt="character"
                      />
                    </div>
                    <div>
                      <span>{image.id}</span>
                    </div>
                  </div>
                )
            )}
        </ImageContainer>
        <AfterButtonContainer onClick={nextImage}>
          <AfterButton>{">"}</AfterButton>
        </AfterButtonContainer>
      </CarouselConainer>
    </>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Carousels;
