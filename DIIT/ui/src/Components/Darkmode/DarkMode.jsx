const DarkMode = (isDarkMode, setIsDarkMode) => {
    // Toggle dark mode state
    setIsDarkMode(prevMode => !prevMode);

    // Define colors
    const colors = {
        white: 'var(--whiteBg)',
        midBlack: 'var(--MyDarkGrayBg)',
        black: 'var(--mainBgcolorDark)',
        darkgray: 'var(--lightGrayColor)',
        gray: 'var(--grayBgColor)',
        toggleNavBg: 'var(--topNavBgColor)',
        MobileNavBg: 'var(--orangeBG)',
        branchBg: 'var(--cardHeadColorDark)',
        lightblue2: 'var(--card-bg2)'
    };

    // Get elements by ID
    const getElement = id => document.getElementById(id);

    const elements = {
        root: getElement('root'),
        toggleNav: getElement('toggleNav'),
        MobileNav: getElement('MobileNav'),
        CourseListNav: getElement('CourseListNav'),
        studentZoneNav: getElement('studentZoneNav'),
        homeA: getElement('homeBg'),
        team: getElement('team'),
        noticeBg: getElement('noticeBg'),
        timeTable: getElement('timeTable'),
        TestimonialChild: getElement('TestimonialChild'),
        liveCards: getElement('liveCards'),
        HomeOffer: getElement('HomeOffer'),
        Myform: getElement('Myform'),
        aboutBg: getElement('aboutBg'),
        MissionLeft1: getElement('MissionLeft1'),
        MissionLeft2: getElement('MissionLeft2'),
        MissionRight: getElement('MissionRight'),
        Accordion1: getElement('Accordion1'),
        MyCardBg: getElement('MyCardBg'),
        counter1: getElement('counter1'),
        counter2: getElement('counter2'),
        counter3: getElement('counter3'),
        counter4: getElement('counter4'),
        branchBgCard: getElement('branchBgCard'),
        branchChild: getElement('branchChild'),
        shortContact: getElement('shortContact'),
        queryformBg: getElement('queryformBg'),
        MyFooterColor: getElement('MyFooterColor'),
        thumblain: getElement('thumblain')
    };

    const classElements = {
        tcElements: ['tcA', 'tcB', 'tcC', 'tcD', 'tcE', 'tcF', 'tcG', 'tcH'],
        fElements: ['liveA', 'liveB', 'liveC', 'liveD'],
        AElements: ['affitioansA', 'affitioansB', 'affitioansC', 'affitioansD']
    };

    // Helper function to set styles
    const setStyles = (el, bgColor, color) => {
        if (el) {
            el.style.backgroundColor = bgColor;
            if (color !== undefined) el.style.color = color;
        }
    };

    // Apply styles to elements
    setStyles(elements.root, isDarkMode ? colors.white : colors.black);
    setStyles(elements.toggleNav, isDarkMode ? colors.toggleNavBg : colors.black);
    setStyles(elements.MobileNav, isDarkMode ? colors.MobileNavBg : colors.midBlack);
    setStyles(elements.CourseListNav, isDarkMode ? colors.MobileNavBg : colors.midBlack);
    setStyles(elements.studentZoneNav, isDarkMode ? colors.MobileNavBg : colors.midBlack);

    setStyles(elements.homeA, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.team, isDarkMode ? colors.white : colors.midBlack);
    setStyles(elements.noticeBg, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.timeTable, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.TestimonialChild, isDarkMode ? colors.white : colors.midBlack);
    setStyles(elements.liveCards, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.HomeOffer, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.Myform, isDarkMode ? colors.white : colors.midBlack);
    setStyles(elements.aboutBg, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.MissionLeft1, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.MissionLeft2, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.MissionRight, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.Accordion1, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.MyCardBg, isDarkMode ? colors.white : colors.midBlack);
    setStyles(elements.counter1, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.counter2, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.counter3, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.counter4, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.branchBgCard, isDarkMode ? colors.branchBg : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.branchChild, isDarkMode ? colors.lightblue2 : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.shortContact, isDarkMode ? colors.branchBg : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.queryformBg, isDarkMode ? colors.white : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.MyFooterColor, isDarkMode ? colors.branchBg : colors.midBlack, isDarkMode ? colors.black : colors.white);
    setStyles(elements.thumblain, isDarkMode ? colors.branchBg : colors.midBlack, isDarkMode ? colors.black : colors.white);

    // Apply styles to class elements
    const applyClassStyles = (classList, bgColor, color) => {
        classList.forEach(cls => {
            Array.from(document.getElementsByClassName(cls)).forEach(el => {
                el.style.backgroundColor = bgColor;
                if (color !== undefined) el.style.color = color;
            });
        });
    };

    applyClassStyles(classElements.tcElements, isDarkMode ? colors.gray : colors.darkgray);
    applyClassStyles(classElements.fElements, isDarkMode ? colors.gray : colors.darkgray, isDarkMode ? colors.black : colors.white);
    applyClassStyles(classElements.AElements, isDarkMode ? colors.gray : colors.darkgray);
};

export default DarkMode;


// avde 
// fjijei