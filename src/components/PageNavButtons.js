// import styled from 'styled-components'


// PAGE NAVIGATION AT THE BOTTOM OF THE PAGE:

const PageNavButtons = ({ currentSlide, setCurrentSlide, slideRef }) => {

  const fillColors = [
    '#CE838F',
    '#946E4A',
    '#FBE5B6',
    '#FFFFFF',
    '#383765',
    '#CE848F',
    '#393766',
    '#CF848E',
    '#B4CCFB',
    '#383765',
    '#FFFFFF'
  ];

  const fillColor = fillColors[currentSlide - 1];

  const prevPage = () => {
    if (currentSlide > 1) {
      const slideWidth = slideRef.current.offsetWidth;
      const scrollToPosition = (currentSlide - 2) * slideWidth; 
      slideRef.current.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });
      // window.location.href = `/#slide${currentSlide - 1}`;
      setCurrentSlide(currentSlide - 1);
      // window.location.hash = `#slide${currentSlide - 1}`;
      console.log("prev page");
    }
  };

  const homePage = () => {
    // go to the landing page
    // window.location.href = '/';
    const slideWidth = slideRef.current.offsetWidth;
    const scrollToPosition = 0 * slideWidth; 
    slideRef.current.scrollTo({
      left: scrollToPosition,
      behavior: "smooth",
    });
    console.log("home page");
  };

  const nextPage = () => {
    if (currentSlide < 11) {
      const slideWidth = slideRef.current.offsetWidth;
      const scrollToPosition = currentSlide * slideWidth; 
      slideRef.current.scrollTo({
        left: scrollToPosition,
        behavior: "smooth",
      });

      // window.location.href = `/#slide${currentSlide + 1}`;
      setCurrentSlide(currentSlide + 1);
      // window.location.hash = `#slide${currentSlide + 1}`;
      console.log("next page");
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '0', width: '100%', right: '0', zIndex: '2000', display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <svg width="126" height="32" viewBox="0 0 126 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <svg onClick={homePage}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M82.8682 13.1906L63.0904 0L43.3125 13.1906H48.4313V31.8938H58.275V21.6563H67.3312V31.8938H77.5688V13.1906H82.8682Z" fill={fillColor}/>
        </svg>
        <svg onClick={prevPage}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1906 31.8937C20.4756 31.8937 26.3813 25.9881 26.3813 18.7031C26.3813 11.4181 20.4756 5.51245 13.1906 5.51245C5.90564 5.51245 0 11.4181 0 18.7031C0 25.9881 5.90564 31.8937 13.1906 31.8937ZM4.01789 19.607L10.3819 25.971C10.7724 26.3615 11.4055 26.3615 11.7961 25.971C12.1866 25.5805 12.1866 24.9473 11.7961 24.5568L7.13921 19.8999L21.6562 19.8999V17.8999L7.13921 17.8999L11.7961 13.2431C12.1866 12.8525 12.1866 12.2194 11.7961 11.8289C11.4055 11.4383 10.7724 11.4383 10.3819 11.8289L4.01789 18.1928C3.62737 18.5833 3.62737 19.2165 4.01789 19.607Z" fill={fillColor}/>
        </svg>
        <svg onClick={nextPage}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M112.809 31.8937C120.094 31.8937 126 25.9881 126 18.7031C126 11.4181 120.094 5.51245 112.809 5.51245C105.524 5.51245 99.6187 11.4181 99.6187 18.7031C99.6187 25.9881 105.524 31.8937 112.809 31.8937ZM121.982 18.1928L115.618 11.8289C115.228 11.4383 114.594 11.4383 114.204 11.8289C113.813 12.2194 113.813 12.8525 114.204 13.2431L118.861 17.8999H104.344V19.8999H118.861L114.204 24.5568C113.813 24.9473 113.813 25.5805 114.204 25.971C114.594 26.3615 115.228 26.3615 115.618 25.971L121.982 19.607C122.373 19.2165 122.373 18.5833 121.982 18.1928Z" fill={fillColor}/>
        </svg>
      </svg>
    </div>
  )
}

export default PageNavButtons;