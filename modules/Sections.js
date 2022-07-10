// Show sections method for the nav bar links
const showSection = (showSection, hideSectionI, hideSectionII) => {
  showSection.classList.remove('hide');
  hideSectionI.classList.add('hide');
  hideSectionII.classList.add('hide');
};

export default showSection;