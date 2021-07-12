// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import screenChangeHandler from './modules/screen-change-handler';
import FullPageScroll from './modules/full-page-scroll';
import resultsScreenSetSVGAttr from './modules/results-svg';

// init modules
mobileHeight();
menu();
footer();
chat();
result();
form();
social();
screenChangeHandler();
resultsScreenSetSVGAttr();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
